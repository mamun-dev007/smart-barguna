import type { ReactNode } from "react";

type PlaceholderPageProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function PlaceholderPage({
  title,
  description,
  icon,
}: PlaceholderPageProps) {
  return (
    <div className="sb-container py-8 sm:py-12">
      <section className="sb-card w-full max-w-3xl">
        {icon ? <div className="mb-4 text-brand-green">{icon}</div> : null}
        <h1 className="text-2xl font-bold text-brand-navy sm:text-3xl">{title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
        <p className="mt-6 text-xs text-muted">
          This page is a placeholder for an upcoming module.
        </p>
      </section>
    </div>
  );
}
