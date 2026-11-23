import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function NotFound() {
  return (
    <main className="sb-container flex min-h-screen items-center justify-center py-8">
      <p className="sb-card w-full max-w-md text-center text-sm leading-relaxed text-muted sm:text-base">
        Page not found.{" "}
        <a
          className="inline-flex min-h-11 items-center font-semibold text-brand-green underline underline-offset-2"
          href="/"
        >
          Go home
        </a>
      </p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
