import Link from "next/link";
import Image from "next/image";
import { ApiClient } from "../lib/api";

export default async function Footer() {
  let services: { title?: string; slug?: string }[] = [];
  let products: { name?: string; slug?: string }[] = [];

  try {
    const [serviceData, productData] = await Promise.all([
      ApiClient.get<{ title?: string; slug?: string }[]>("/api/services"),
      ApiClient.get<{ name?: string; slug?: string }[]>("/api/products"),
    ]);
    services = Array.isArray(serviceData) ? serviceData : [];
    products = Array.isArray(productData) ? productData : [];
  } catch (error) {
    console.error("Failed to fetch footer content:", error);
  }

  return (
    <footer className="relative z-10 overflow-hidden border-t border-technic-border bg-technic-bg py-16 text-technic-secondary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/Home/footerbanner.png')] bg-cover bg-center bg-no-repeat opacity-50"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6" aria-label="Technic Technologies home">
              <Image
                src="/Assest/logo-brand.png"
                alt="Technic Technologies"
                width={220}
                height={56}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm mb-6 leading-relaxed text-technic-secondary">
              We build technology products and engineer digital solutions that help businesses scale.
            </p>
            <span className="inline-block h-1 w-10 rounded-full bg-brand-gradient" aria-hidden="true" />
          </div>

          <div>
            <h2 className="text-technic-text font-semibold mb-6 text-lg font-heading">Services</h2>
            <ul className="space-y-3 text-sm">
              {services.length === 0 ? (
                <li>
                  <Link href="/services" className="hover:text-technic-cyan transition-colors">
                    View services
                  </Link>
                </li>
              ) : (
                services.map((service) => (
                  <li key={service.slug || service.title}>
                    <Link href={service.slug ? `/services/${service.slug}` : "/services"} className="hover:text-technic-cyan transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-technic-text font-semibold mb-6 text-lg font-heading">Our Products</h2>
            <ul className="space-y-3 text-sm">
              {products.length === 0 ? (
                <li>
                  <Link href="/products" className="hover:text-technic-cyan transition-colors">
                    View products
                  </Link>
                </li>
              ) : (
                products.map((product) => (
                  <li key={product.slug || product.name}>
                    <Link href={product.slug ? `/products/${product.slug}` : "/products"} className="hover:text-technic-cyan transition-colors">
                      {product.name}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-technic-text font-semibold mb-6 text-lg font-heading">Company</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-technic-cyan transition-colors">
                  About the Lab
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-technic-cyan transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-technic-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-technic-cyan transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-technic-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-technic-muted">
            &copy; {new Date().getFullYear()} TechNic Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-technic-muted">
            <span aria-hidden="true">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
