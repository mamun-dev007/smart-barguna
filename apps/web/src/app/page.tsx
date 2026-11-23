export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-xl space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Welcome to Next.js
        </h1>
        <p className="text-base text-gray-600">
          This is a starter page. Edit{" "}
          <code className="rounded bg-gray-200 px-1 py-0.5">src/app/page.tsx</code>{" "}
          to get started.
        </p>
      </div>
    </main>
  );
}
