import { Link, Route, Routes } from "react-router";
import BottomNavigation from "./components/BottomNavigation";
import Header from "./components/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import Services from "./pages/Services";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function NotFound() {
  return (
    <main className="sb-container flex min-h-screen items-center justify-center py-8">
      <p className="sb-card w-full max-w-md text-center text-sm leading-relaxed text-muted sm:text-base">
        Page not found.{" "}
        <Link
          className="inline-flex min-h-11 items-center font-semibold text-brand-green underline underline-offset-2"
          to="/"
        >
          Go home
        </Link>
      </p>
    </main>
  );
}

export default function App() {
  return (
    <div className="sb-app-root min-h-screen overflow-x-hidden">
      <Header />
      <div className="sb-app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <BottomNavigation />
    </div>
  );
}
