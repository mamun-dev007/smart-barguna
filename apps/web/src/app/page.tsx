export default function Home() {
  return (
    <main className="sb-container flex min-h-screen items-center justify-center py-8 sm:py-12">
      <section className="sb-card w-full max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
          Smart Barguna
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
          Welcome to Next.js
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          This is a starter page. Edit{" "}
          <code className="rounded-sm bg-page px-1 py-0.5 text-xs text-ink">
            src/app/page.tsx
          </code>{" "}
          to get started.
        </p>
      </section>
    </main>
  );
}
