import Navbar from "../../../components/Navbar";

export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-7xl animate-pulse px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mb-8 h-4 w-64 rounded bg-technic-bg" />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-4 w-32 rounded bg-technic-bg" />
            <div className="h-14 w-full rounded bg-technic-bg" />
            <div className="h-8 w-2/3 rounded bg-technic-bg" />
            <div className="h-24 w-full rounded bg-technic-bg" />
            <div className="flex gap-3">
              <div className="h-12 w-36 rounded-full bg-technic-bg" />
              <div className="h-12 w-40 rounded-full bg-technic-bg" />
            </div>
          </div>
          <div className="h-80 rounded-[2rem] bg-technic-bg" />
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="h-40 rounded-3xl bg-technic-bg" />
          <div className="h-40 rounded-3xl bg-technic-bg" />
          <div className="h-40 rounded-3xl bg-technic-bg" />
        </div>
      </main>
    </div>
  );
}
