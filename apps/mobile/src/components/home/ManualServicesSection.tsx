import { Link } from "react-router";
import {
  BriefcaseBusiness,
  Bus,
  CalendarDays,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Map,
  MapPin,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { ServiceLinkItem } from "../../data/home";
import SectionHeader from "./SectionHeader";

const ICONS: Record<string, LucideIcon> = {
  healthcare: HeartPulse,
  education: GraduationCap,
  jobs: BriefcaseBusiness,
  transport: Bus,
  hotels: Hotel,
  restaurants: UtensilsCrossed,
  government: Landmark,
  events: CalendarDays,
  upazila: Map,
  union: MapPin,
};

type ManualServicesSectionProps = {
  services: ServiceLinkItem[];
};

export default function ManualServicesSection({
  services,
}: ManualServicesSectionProps) {
  return (
    <section aria-labelledby="home-manual-services" className="mt-6 sm:mt-8">
      <SectionHeader
        id="home-manual-services"
        title="ম্যানুয়াল সেবা"
        to="/services"
      />
      <ul className="grid grid-cols-2 gap-2 sm:gap-3">
        {services.map((service) => {
          const Icon = ICONS[service.iconKey] ?? Landmark;
          return (
            <li key={service.id}>
              <Link
                to={service.to}
                className="flex min-h-20 flex-col items-start justify-center gap-2 rounded-card border border-brand-navy/10 bg-card p-3 shadow-card"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-brand-green sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
                <span
                  lang="bn"
                  className="font-bangla text-xs font-semibold leading-tight text-ink sm:text-sm"
                >
                  {service.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
