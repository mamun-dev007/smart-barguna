import {
  CloudSun,
  Globe,
  Hospital,
  House,
  Info,
  Landmark,
  Megaphone,
  Newspaper,
  Settings,
  Siren,
  Star,
  type LucideIcon,
} from "lucide-react";

export type NavSubItem = {
  label: string;
  to: string;
};

export type NavItem = {
  label: string;
  icon: LucideIcon;
  to?: string;
  submenu?: NavSubItem[];
  rating?: boolean;
};

export const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL as
  | string
  | undefined;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", icon: House, to: "/" },
  { label: "News", icon: Newspaper, to: "/news" },
  {
    label: "Services",
    icon: Hospital,
    to: "/services",
    submenu: [
      { label: "Healthcare", to: "/services/healthcare" },
      { label: "Blood Bank", to: "/services/blood-bank" },
      { label: "Jobs & Career", to: "/services/jobs-career" },
      { label: "Education", to: "/services/education" },
      { label: "Transport", to: "/services/transport" },
      { label: "Events", to: "/services/events" },
    ],
  },
  {
    label: "Explore Barguna",
    icon: Globe,
    to: "/explore",
    submenu: [
      { label: "Tourist Places", to: "/explore/tourist-places" },
      { label: "Hotels & Accommodation", to: "/explore/hotels-accommodation" },
      { label: "Restaurants & Food", to: "/explore/restaurants-food" },
      { label: "History & Culture", to: "/explore/history-culture" },
      { label: "Upazila Information", to: "/explore/upazila-information" },
      { label: "Union Information", to: "/explore/union-information" },
      { label: "Maps & Locations", to: "/explore/maps-locations" },
      { label: "Local Discovery", to: "/explore/local-discovery" },
    ],
  },
  { label: "Emergency & Safety", icon: Siren, to: "/emergency" },
  { label: "Weather", icon: CloudSun, to: "/weather" },
  { label: "District Information", icon: Landmark, to: "/district" },
  { label: "App Rating", icon: Star, rating: true },
  { label: "Advertisement", icon: Megaphone, to: "/advertisement" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "About Smart Barguna", icon: Info, to: "/about" },
];

export function isItemActive(item: NavItem, pathname: string): boolean {
  if (!item.to) return false;
  return pathname === item.to || pathname.startsWith(`${item.to}/`);
}
