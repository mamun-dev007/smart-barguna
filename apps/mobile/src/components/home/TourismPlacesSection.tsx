import { Link } from "react-router";
import type { TourismPlaceItem } from "../../data/home";
import AutoScroll from "./AutoScroll";
import SectionHeader from "./SectionHeader";

type TourismPlacesSectionProps = {
  places: TourismPlaceItem[];
};

export default function TourismPlacesSection({
  places,
}: TourismPlacesSectionProps) {
  if (places.length === 0) return null;

  return (
    <section aria-labelledby="home-tourism" className="mt-6 sm:mt-8">
      <SectionHeader
        id="home-tourism"
        title="পর্যটন স্থান"
        to="/explore/tourist-places"
      />
      <AutoScroll label="Tourism places">
        {places.map((place) => {
          const card = (
            <>
              <img
                src={place.imageUrl}
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-3">
                <h3
                  lang="bn"
                  className="font-bangla text-sm font-bold leading-tight text-brand-navy"
                >
                  {place.name}
                </h3>
                {place.location ? (
                  <p
                    lang="bn"
                    className="mt-1 font-bangla text-xs leading-tight text-muted"
                  >
                    {place.location}
                  </p>
                ) : null}
              </div>
            </>
          );

          return (
            <div
              key={place.id}
              className="w-40 shrink-0 overflow-hidden rounded-card border border-brand-navy/10 bg-card shadow-card sm:w-48"
            >
              {place.to ? (
                <Link to={place.to} className="block">
                  {card}
                </Link>
              ) : (
                card
              )}
            </div>
          );
        })}
      </AutoScroll>
    </section>
  );
}
