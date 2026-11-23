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
    <div className="sb-container flex min-h-screen items-center justify-center py-8">
      <section className="sb-card w-full max-w-md">
        {icon ? <div className="mb-4 text-brand-green">{icon}</div> : null}
        <h1 className="text-xl font-bold text-brand-navy sm:text-2xl">{title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
        <p className="mt-6 text-xs text-muted">
          This page is a placeholder for an upcoming module.
        </p>
      </section>
    </div>
  );
}
