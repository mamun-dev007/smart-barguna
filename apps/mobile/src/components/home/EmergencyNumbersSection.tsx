import {
  Ambulance,
  Flame,
  Hospital,
  LifeBuoy,
  ShieldCheck,
  Siren,
  type LucideIcon,
} from "lucide-react";
import type { EmergencyNumberItem } from "../../data/home";
import SectionHeader from "./SectionHeader";

const ICONS: Record<string, LucideIcon> = {
  national: Siren,
  police: ShieldCheck,
  fire: Flame,
  ambulance: Ambulance,
  hospital: Hospital,
  disaster: LifeBuoy,
};

type EmergencyNumbersSectionProps = {
  numbers: EmergencyNumberItem[];
};

export default function EmergencyNumbersSection({
  numbers,
}: EmergencyNumbersSectionProps) {
  const verifiedNumbers = numbers.filter((item) => item.verified).slice(0, 6);

  if (verifiedNumbers.length === 0) return null;

  return (
    <section aria-labelledby="home-emergency-numbers" className="mt-6 sm:mt-8">
      <SectionHeader
        id="home-emergency-numbers"
        title="জরুরি নম্বর"
        to="/emergency"
      />
      <ul className="grid grid-cols-3 gap-2 sm:gap-3">
        {verifiedNumbers.map((item) => {
          const Icon = ICONS[item.iconKey] ?? Siren;
          return (
            <li key={item.id}>
              <a
                href={`tel:${item.phone}`}
                className="flex min-h-24 flex-col items-center justify-center gap-1 rounded-card border border-brand-navy/10 bg-card p-2 text-center shadow-card sm:p-3"
              >
                <Icon
                  className="h-5 w-5 text-brand-green sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
                <span
                  lang="bn"
                  className="font-bangla text-xs font-semibold leading-tight text-ink"
                >
                  {item.name}
                </span>
                <span dir="ltr" className="text-xs font-semibold text-brand-navy">
                  {item.phone}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
