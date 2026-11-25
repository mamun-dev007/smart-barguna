import { Link } from "react-router";
import { BriefcaseBusiness, CalendarDays, Clock3, type LucideIcon } from "lucide-react";
import type { JobNewsItem } from "../../data/home";
import AutoScroll from "./AutoScroll";
import SectionHeader from "./SectionHeader";

const ICONS: Record<string, LucideIcon> = {
  job: BriefcaseBusiness,
};

type JobNewsSectionProps = {
  jobs: JobNewsItem[];
};

export default function JobNewsSection({ jobs }: JobNewsSectionProps) {
  if (jobs.length === 0) return null;

  return (
    <section aria-labelledby="home-job-news" className="mt-6 sm:mt-8">
      <SectionHeader
        id="home-job-news"
        title="চাকরির খবর"
        to="/services/jobs-career"
      />
      <AutoScroll label="Job news">
        {jobs.map((job) => {
          const Icon = ICONS[job.iconKey] ?? BriefcaseBusiness;
          const card = (
            <>
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                <h3
                  lang="bn"
                  className="line-clamp-2 font-bangla text-sm font-bold leading-tight text-brand-navy"
                >
                  {job.title}
                </h3>
              </div>
              {job.organization ? (
                <p
                  lang="bn"
                  className="mt-2 font-bangla text-xs leading-tight text-muted"
                >
                  {job.organization}
                </p>
              ) : null}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={job.publishedAt}>{job.publishedAt}</time>
                </span>
                {job.deadline ? (
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                    <time dateTime={job.deadline}>{job.deadline}</time>
                  </span>
                ) : null}
              </div>
            </>
          );

          return (
            <div
              key={job.id}
              className="w-56 shrink-0 rounded-card border border-brand-navy/10 bg-card p-3 shadow-card sm:w-64"
            >
              {job.to ? <Link to={job.to} className="block">{card}</Link> : card}
            </div>
          );
        })}
      </AutoScroll>
    </section>
  );
}
