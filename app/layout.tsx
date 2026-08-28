import type { Metadata } from "next";
import { Inter, Raleway, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Technic Technologies",
    default: "Technic Technologies | Software Products & Technology Solutions",
  },
  description: "Technic Technologies builds software products and delivers scalable technology solutions across SaaS, cloud, AI, web, mobile and enterprise engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable} ${roboto.variable} font-sans h-full antialiased bg-[#0B1221] text-slate-300`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
