import { Megaphone } from "lucide-react";
import type { NoticeItem } from "../../data/home";
import AutoScroll from "./AutoScroll";

type NoticeBarProps = {
  notices: NoticeItem[];
};

export default function NoticeBar({ notices }: NoticeBarProps) {
  if (notices.length === 0) return null;

  return (
    <section aria-label="Notices" className="mt-3 sm:mt-4">
      <div className="flex min-w-0 items-center gap-3 rounded-card bg-brand-navy px-3 py-2 text-white shadow-card sm:px-4">
        <span className="inline-flex shrink-0 items-center gap-2 rounded-button bg-brand-green px-2 py-1 text-xs font-bold uppercase tracking-wide">
          Notice
          <Megaphone className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <AutoScroll label="Notices">
            {notices.map((notice) => (
              <p
                key={notice.id}
                lang="bn"
                className="whitespace-nowrap font-bangla text-sm"
              >
                {notice.text}
              </p>
            ))}
          </AutoScroll>
        </div>
      </div>
    </section>
  );
}
