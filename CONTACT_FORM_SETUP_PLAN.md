# Contact Form Architecture & Configuration Plan

This document outlines exactly how the contact form works in the codebase, and the step-by-step plan for you to activate real email delivery.

## 1. How the Contact Form Works (Architecture)

The contact form is built using a secure Server-Side API approach to protect your credentials. Here is the exact data flow:

1. **User Input:** A visitor fills out the form in `components/ContactSection.tsx`.
2. **Client Validation & Submission:** The React component prevents default submission, checks that fields aren't empty, sets the UI to a "Transmitting..." state, and sends a JSON payload to the backend.
3. **Backend Route (`POST /api/contact`):** 
   - Receives the JSON data.
   - Performs strict server-side validation (ensures all fields exist and the email is formatted correctly).
   - Sanitizes the input to prevent malicious HTML/Script injection.
4. **Email Provider (Resend):**
   - The backend checks for the `RESEND_API_KEY` and `CONTACT_EMAIL` environment variables.
   - If they are missing, it safely falls back to a **"Stub Mode"** (simulating a delay and returning success so you can test the UI without sending emails).
   - If they are present, it securely authenticates with the Resend API and dispatches the email.
5. **UI Response:** The API returns a 200 (Success) or 400/500 (Error), and the frontend safely displays a success message or an error alert without exposing server details.

---

## 2. Plan to Activate Real Email Delivery

To switch from the current "Stub Mode" to actually receiving emails, follow these steps:

### Step 1: Create a Resend Account
1. Go to [resend.com](https://resend.com) and sign up for a free account.
2. In the Resend dashboard, navigate to **API Keys**.
3. Create a new API Key with full access and copy the key (it usually starts with `re_...`).

### Step 2: Verify Your Domain (Optional but Recommended)
1. In Resend, go to **Domains** and add your actual website domain (e.g., `technic.dev`).
2. Update your DNS records as instructed by Resend to verify you own the domain. 
> [!NOTE]
> If you skip this step, Resend restricts you to only sending emails *to yourself* for testing purposes.

### Step 3: Configure Environment Variables
1. In the root of your project, create a file named `.env.local`.
2. Add the following variables to `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your_actual_email@company.com
```
*(Make sure to replace the values with your real keys and email address).*

### Step 4: Test Locally
1. Restart your development server: `npm run dev`
2. Go to your local website's contact section.
3. Submit a test message.
4. Check your email inbox (the one you set as `CONTACT_EMAIL`) to ensure you received the message!

### Step 5: Deploy to Production
1. When you deploy the site (e.g., to Vercel, Netlify, or your own server), you must add these exact same environment variables into the hosting provider's dashboard.
2. Ensure `NEXT_PUBLIC_SITE_URL` is updated to your real production domain.

---

> [!IMPORTANT]
> **Security Reminder:** Never commit your `.env.local` file or your `RESEND_API_KEY` to GitHub. It is a secret server credential. The current codebase is already securely structured to keep it hidden from the browser.
