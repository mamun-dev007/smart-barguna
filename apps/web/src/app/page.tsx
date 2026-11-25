import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="sb-container w-full py-8 sm:py-12">
      <section
        aria-labelledby="hero-title"
        className="w-full overflow-hidden rounded-card bg-brand-navy p-5 text-white shadow-elevated sm:p-8 md:p-10 lg:p-12"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-card p-1.5 shadow-card sm:h-14 sm:w-14">
            <img
              src="/logo.png"
              alt=""
              className="h-full w-full object-contain"
              aria-hidden="true"
            />
          </span>
          <span className="min-w-0 text-lg font-bold tracking-tight sm:text-xl">
            Smart Barguna
          </span>
        </div>

        <div className="mt-6 h-1 w-12 rounded-full bg-brand-green sm:mt-8" aria-hidden="true" />

        <p
          lang="bn"
          className="mt-4 font-bangla text-sm font-semibold text-white/80 sm:text-base"
        >
          তথ্য, সেবা ও সম্ভাবনার বরগুনা
        </p>
        <h1
          id="hero-title"
          lang="bn"
          className="mt-2 max-w-3xl font-bangla text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
        >
          বরগুনার তথ্য, সেবা ও সম্ভাবনার একক ঠিকানা
        </h1>
        <p
          lang="bn"
          className="mt-4 max-w-2xl font-bangla text-sm leading-relaxed text-white/75 sm:text-base"
        >
          জেলা প্রশাসন, স্থানীয় সেবা, জরুরি তথ্য ও পর্যটন সংক্রান্ত বিভিন্ন তথ্য সহজে খুঁজে পান।
        </p>

        <div role="search" className="mt-6 w-full max-w-xl sm:mt-8">
          <label htmlFor="hero-search" className="sr-only">
            Search Smart Barguna
          </label>
          <div className="flex min-h-11 w-full items-center gap-3 rounded-input bg-card px-3 shadow-card">
            <Search className="sb-nav-icon shrink-0 text-brand-green" aria-hidden="true" />
            <input
              id="hero-search"
              type="search"
              lang="bn"
              placeholder="বরগুনা জুড়ে খুঁজুন..."
              className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-ink placeholder:text-muted sm:text-base"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="upcoming-title" className="mt-6 sm:mt-8">
        <div className="sb-card border-dashed">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
            Coming soon
          </p>
          <h2
            id="upcoming-title"
            lang="bn"
            className="mt-2 font-bangla text-lg font-bold text-brand-navy sm:text-xl"
          >
            আসন্ন বিভাগসমূহ
          </h2>
          <p
            lang="bn"
            className="mt-2 max-w-2xl font-bangla text-sm leading-relaxed text-muted sm:text-base"
          >
            পরবর্তী ধাপে এখানে সংবাদ, সেবা এবং অন্যান্য হোমপেজ বিভাগ যোগ করা হবে।
          </p>
        </div>
      </section>
    </div>
  );
}
