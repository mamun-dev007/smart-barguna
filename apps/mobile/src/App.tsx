import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <p className="text-center text-base text-slate-600">
        Page not found. <a className="text-emerald-600 underline" href="/">Go home</a>
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
