import { PROJECTS } from "@/lib/site-content";
import { Reveal } from "../reveal";
import { Building2, Calendar } from "lucide-react";

const TAG_COLORS: Record<string, string> = {
  Health: "border-gold/30 text-gold-light bg-gold/10",
  Education: "border-blue-400/30 text-blue-300 bg-blue-400/10",
  Supply: "border-gold/30 text-gold-light bg-gold/10",
  "Government Contract":
    "border-destructive/30 text-destructive bg-destructive/10",
};

export function ProjectTimeline() {
  return (
    <div className="relative">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 lg:left-0 lg:right-0 lg:top-[7px] lg:bottom-auto lg:h-px lg:w-auto"
        aria-hidden="true"
      />
      <ol className="grid gap-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
        {PROJECTS.map((p, i) => (
          <Reveal
            as="li"
            key={`${p.year}-${i}`}
            delay={(i % 3) * 100}
            className="relative pl-8 lg:pl-0 lg:pt-10"
          >
            <span
              className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-navy lg:top-0"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`px-3 py-1 border font-heading font-semibold text-[10px] uppercase tracking-wider ${
                  TAG_COLORS[p.tag] ||
                  "border-gold/30 text-gold-light bg-gold/10"
                }`}
              >
                {p.tag}
              </span>
              <span className="flex items-center gap-1.5 text-ivory/40 text-xs font-body">
                <Calendar className="w-3.5 h-3.5" />
                <p className="font-display font-extrabold text-gold">
                  {p.year}
                </p>
              </span>
            </div>
            <div className="mt-5 flex items-center gap-2 text-white/40 text-xs font-body">
              <Building2 className="w-4 h-4 text-gold/60" />
              <span>Completed Contract</span>
            </div>
            <h3 className="mt-4 text-base font-semibold leading-snug text-white">
              {p.title}
            </h3>
            <p className="mt-3 border-t border-white/10 pt-3 text-sm text-white/60">
              <span className="text-white/40">Client — </span>
              {p.client}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
