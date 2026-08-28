import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1221] text-slate-400 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Image src="/Assest/logo.png" alt="Technic Technologies" width={40} height={40} className="h-20 w-auto mr-3" />
              <span className="font-bold text-2xl text-white font-heading">Technic Technologies</span>
            </div>
            <p className="text-sm mb-6 font-light leading-relaxed">
              We build technology products and engineer digital solutions that help businesses scale.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors">
                  Custom Websites & Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors">
                  DevOps & Cloud Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors">
                  Generative AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Our Products
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/products" className="hover:text-rose-400 transition-colors">
                  NicFlow AI (ERP)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rose-400 transition-colors">
                  TechGuard Sentinel
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rose-400 transition-colors">
                  DataStream Nexus
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rose-400 transition-colors">
                  NicOps Deployer
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rose-400 transition-colors">
                  SiteCrafter Headless
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Lab
                </Link>
              </li>
              <li>
                <span className="text-slate-500">
                  Careers (We&apos;re Hiring)
                </span>
              </li>
              <li>
                <span className="text-slate-500">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-slate-500">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-light">
          <p>
            &copy; {new Date().getFullYear()} TechNic Technologies. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span
              className="text-slate-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </span>
            <span
              className="text-slate-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </span>
            <span
              className="text-slate-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
