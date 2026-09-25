import Navbar from "../../../components/Navbar";

export default function SolutionLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-7xl animate-pulse px-4 pt-32">
        <div className="mb-8 h-4 w-64 rounded bg-technic-bg" />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-4 w-24 rounded bg-technic-bg" />
            <div className="h-14 rounded bg-technic-bg" />
            <div className="h-24 rounded bg-technic-bg" />
          </div>
          <div className="h-80 rounded-3xl bg-technic-bg" />
        </div>
      </main>
    </div>
  );
}
