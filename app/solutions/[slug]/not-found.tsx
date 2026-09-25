import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function SolutionNotFound() {
  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary">
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-32 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-technic-text">Solution Not Found</h1>
        <p className="mt-4 text-lg text-technic-secondary">This solution is not published or the address is incorrect.</p>
        <Link href="/solutions" className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">Explore Solutions</Link>
      </main>
      <Footer />
    </div>
  );
}
