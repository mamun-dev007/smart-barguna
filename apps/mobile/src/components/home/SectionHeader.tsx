import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

type SectionHeaderProps = {
  id: string;
  title: string;
  to?: string;
};

export default function SectionHeader({ id, title, to }: SectionHeaderProps) {
  return (
    <div className="mb-3 flex min-w-0 items-center justify-between gap-3 sm:mb-4">
      <h2
        id={id}
        lang="bn"
        className="min-w-0 font-bangla text-base font-bold leading-tight text-brand-navy sm:text-lg"
      >
        {title}
      </h2>
      {to ? (
        <Link
          to={to}
          className="inline-flex min-h-11 shrink-0 items-center gap-1 text-sm font-semibold text-brand-green"
        >
          See More
          <ChevronRight className="sb-nav-icon" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
