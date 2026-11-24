import { Star } from "lucide-react";
import { PLAY_STORE_URL } from "../components/navigation";

export default function AppRating() {
  return (
    <div className="sb-container flex min-h-screen items-center justify-center py-8">
      <section className="sb-card w-full max-w-md">
        <Star className="mb-4 h-7 w-7 text-brand-green" aria-hidden="true" />
        <h1 className="text-xl font-bold text-brand-navy sm:text-2xl">App Rating</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {PLAY_STORE_URL
            ? "Rate Smart Barguna on the app store to share your feedback."
            : "App rating is not available yet. A Play Store link can be configured to enable it."}
        </p>
        {PLAY_STORE_URL ? (
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sb-button sb-button-primary mt-6"
          >
            Open Play Store
          </a>
        ) : null}
      </section>
    </div>
  );
}
