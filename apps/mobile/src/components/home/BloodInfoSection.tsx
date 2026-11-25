import { Droplet } from "lucide-react";
import type { BloodGroupItem } from "../../data/home";
import AutoScroll from "./AutoScroll";
import SectionHeader from "./SectionHeader";

type BloodInfoSectionProps = {
  groups: BloodGroupItem[];
};

export default function BloodInfoSection({ groups }: BloodInfoSectionProps) {
  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="home-blood" className="mt-6 sm:mt-8">
      <SectionHeader id="home-blood" title="রক্তের তথ্য" to="/services/blood-bank" />
      <AutoScroll label="Blood groups">
        {groups.map((item) => (
          <div
            key={item.id}
            className="flex w-24 shrink-0 flex-col items-center gap-2 rounded-card border border-brand-navy/10 bg-card px-3 py-4 shadow-card"
          >
            <Droplet className="h-6 w-6 text-brand-green" aria-hidden="true" />
            <span className="text-base font-bold leading-none text-brand-navy">
              {item.group}
            </span>
            {typeof item.donorCount === "number" ? (
              <span lang="bn" className="font-bangla text-xs text-muted">
                {item.donorCount} দাতা
              </span>
            ) : null}
          </div>
        ))}
      </AutoScroll>
    </section>
  );
}
