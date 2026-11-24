import { Info } from "lucide-react";

export default function About() {
  return (
    <div className="sb-container flex min-h-screen items-center justify-center py-8">
      <section className="sb-card w-full max-w-md">
        <Info className="mb-4 h-7 w-7 text-brand-green" aria-hidden="true" />
        <h1 className="text-xl font-bold text-brand-navy sm:text-2xl">
          About Smart Barguna
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Smart Barguna is a district information and public services platform for
          Barguna, Bangladesh.
        </p>
      </section>
    </div>
  );
}
