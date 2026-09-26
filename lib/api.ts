export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export class ApiClient {
  static async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    // Public site client. Never attach an admin Authorization token.
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    // Check if the response is JSON
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
      // Throw formatted error
      throw new Error(data?.error || data?.message || response.statusText || 'An error occurred during the request');
    }

    return data as T;
  }

  static async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.fetch<T>(endpoint, { ...options, method: 'GET' });
  }

  static async postForm<T>(endpoint: string, body: FormData, options?: RequestInit): Promise<T> {
    const base = API_BASE_URL.replace(/\/+$/, "");
    const response = await fetch(`${base}${endpoint}`, {
      ...options,
      method: "POST",
      body,
      cache: "no-store",
    });
    const isJson = response.headers.get("content-type")?.includes("application/json");
    const data = isJson ? await response.json() : null;
    if (!response.ok) {
      throw new Error(data?.error || data?.message || response.statusText || "An error occurred during the request");
    }
    return data as T;
  }

  static async post<T>(endpoint: string, body: any, options?: RequestInit): Promise<T> {
    return this.fetch<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  static async put<T>(endpoint: string, body: any, options?: RequestInit): Promise<T> {
    return this.fetch<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  static async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.fetch<T>(endpoint, { ...options, method: 'DELETE' });
  }
}
