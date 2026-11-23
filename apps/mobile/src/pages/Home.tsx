import { Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <main className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm sm:max-w-xl sm:p-8 lg:max-w-2xl">
        <div className="flex items-center gap-3">
          <Smartphone
            className="h-7 w-7 shrink-0 text-emerald-600 sm:h-8 sm:w-8"
            aria-hidden="true"
          />
          <h1 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
            Smart Barguna Mobile App
          </h1>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          Starter screen for the mobile application. Responsive from 320px phones
          through tablets.
        </p>
      </main>
    </div>
  );
}
