"use client";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (
    Icons as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[name];
  if (!Cmp) return null;
  return <Cmp className={className ?? ""} />;
}

export function ServiceCard({
  title,
  body,
  icon,
  index,
  tone = "light",
  slug,
}: {
  title: string;
  body: string;
  icon: string;
  index: number;
  tone?: "light" | "dark";
  slug: string;
}) {
  const featured = index % 5 === 0;
  return (
    <Reveal
      delay={(index % 3) * 90}
      className={cn(featured && "sm:col-span-2")}
    >
      <Link
        href={`/services/${slug}`}
        className={cn(
          "group flex h-full flex-col rounded-2xl border p-7 transition-all duration-400",
          tone === "dark"
            ? "border-white/10 bg-white/[0.03] hover:border-gold/50 hover:bg-white/[0.06]"
            : "border-border bg-card hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-lift)]",
          featured && tone !== "dark" && "bg-soft",
        )}
      >
        <span
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors",
            tone === "dark"
              ? "border-gold/30 bg-gold/10 text-gold"
              : "border-gold/30 bg-gold/10 text-navy group-hover:bg-gold/20",
          )}
        >
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3
          className={cn(
            "mt-6 text-lg font-bold leading-snug",
            tone === "dark" ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed",
            tone === "dark" ? "text-white/60" : "text-slate",
          )}
        >
          {body}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-gold">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

export function CapabilityCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  return (
    <Reveal delay={(index % 3) * 80}>
      <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-400 hover:border-gold/50 hover:shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3">
          <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-border transition-colors group-hover:bg-gold/40" />
        </div>
        <h3 className="mt-5 text-base font-bold text-navy">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate">{body}</p>
      </div>
    </Reveal>
  );
}

export function IndustryCard({ name, index }: { name: string; index: number }) {
  return (
    <Reveal delay={(index % 5) * 60}>
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-6 py-8 transition-all duration-400 hover:border-gold/50 hover:bg-white/[0.06]">
        <span
          className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden="true"
        />
        <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-4 text-base font-semibold text-white">{name}</h3>
      </div>
    </Reveal>
  );
}

export function StatCard({
  value,
  label,
  index = 0,
}: {
  value: React.ReactNode;
  label: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 90} className="border-l border-white/10 pl-6">
      <p className="font-display text-4xl font-extrabold text-gold sm:text-5xl">
        {value}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{label}</p>
    </Reveal>
  );
}

export function LeadershipCard({
  name,
  role,
  bio,
  index,
}: {
  name: string;
  role: string;
  bio: string;
  index: number;
}) {
  const initials = "IS";
  return (
    <Reveal delay={(index % 3) * 90}>
      <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-400 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-lift)]">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-navy font-display text-lg font-extrabold text-gold">
          {initials}
        </div>
        <h3 className="mt-6 text-lg font-bold text-navy">{name}</h3>
        <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-gold">
          {role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate">{bio}</p>
      </article>
    </Reveal>
  );
}
