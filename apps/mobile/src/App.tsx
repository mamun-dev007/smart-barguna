import { Link, Route, Routes } from "react-router";
import BottomNavigation from "./components/BottomNavigation";
import PlaceholderPage from "./components/PlaceholderPage";
import { NAV_ITEMS } from "./components/navigation";
import Header from "./components/Header";
import About from "./pages/About";
import AppRating from "./pages/AppRating";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Services from "./pages/Services";

const DEDICATED_ROUTES = new Set([
  "/",
  "/news",
  "/services",
  "/explore",
  "/profile",
  "/Salad",
  "/app-rating",
  "/about",
]);

type PlaceholderRoute = { path: string; title: string };

const PLACEHOLDER_ROUTES: PlaceholderRoute[] = NAV_ITEMS.flatMap((item) => {
  const routes: PlaceholderRoute[] = [];
  if (item.to && !DEDICATED_ROUTES.has(item.to)) {
    routes.push({ path: item.to, title: item.label });
  }
  item.submenu?.forEach((sub) => {
    if (!DEDICATED_ROUTES.has(sub.to)) {
      routes.push({ path: sub.to, title: sub.label });
    }
  });
  return routes;
});

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
          <Route path="/Salad" element={<PlaceholderPage title="Salad" description="Salad details will appear here." />} />
          <Route path="/app-rating" element={<AppRating />} />
          <Route path="/about" element={<About />} />
          {PLACEHOLDER_ROUTES.map(({ path, title }) => (
            <Route
              key={path}
              path={path}
              element={
                <PlaceholderPage
                  title={title}
                  description={`${title} information will appear here when this module is implemented.`}
                />
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <BottomNavigation />
    </div>
  );
}
