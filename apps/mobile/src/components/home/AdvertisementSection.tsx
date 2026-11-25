import type { AdvertisementItem } from "../../data/home";
import AutoScroll from "./AutoScroll";
import SectionHeader from "./SectionHeader";

type AdvertisementSectionProps = {
  ads: AdvertisementItem[];
};

export default function AdvertisementSection({ ads }: AdvertisementSectionProps) {
  if (ads.length === 0) return null;

  return (
    <section aria-labelledby="home-ads" className="mt-6 sm:mt-8">
      <SectionHeader id="home-ads" title="বিজ্ঞাপন" to="/advertisement" />
      <AutoScroll label="Advertisements">
        {ads.map((ad) => (
          <div key={ad.id} className="w-44 shrink-0 sm:w-56">
            {ad.destinationUrl ? (
              <a
                href={ad.destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-card border border-brand-navy/10 bg-card shadow-card"
              >
                <img
                  src={ad.imageUrl}
                  alt={ad.imageAlt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </a>
            ) : (
              <div className="overflow-hidden rounded-card border border-brand-navy/10 bg-card shadow-card">
                <img
                  src={ad.imageUrl}
                  alt={ad.imageAlt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </AutoScroll>
    </section>
  );
}
