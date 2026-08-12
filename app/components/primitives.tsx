"use client";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Tone = "light" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const btnGold = cn(
  base,
  "bg-gold-gradient text-navy shadow-[0_10px_30px_-16px_oklch(0.735_0.128_74/0.9)] hover:bg-none hover:bg-navy hover:text-gold hover:ring-1 hover:ring-gold",
);

export const btnOutline = cn(
  base,
  "border border-white/35 bg-transparent text-white hover:border-gold hover:text-gold",
);

export const btnOutlineDark = cn(
  base,
  "border border-navy/25 bg-transparent text-navy hover:border-gold hover:text-gold",
);

export function LinkButton({
  href,
  variant = "gold",
  className,
  children,
  ...rest
}: { href: string; variant?: "gold" | "outline" | "outlineDark" } & Omit<
  ComponentProps<typeof Link>,
  "href"
>) {
  const styles =
    variant === "gold"
      ? btnGold
      : variant === "outline"
        ? btnOutline
        : btnOutlineDark;
  return (
    <Link href={href} className={cn(styles, className)} {...rest}>
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={cn("eyebrow", tone === "dark" ? "text-gold" : "text-gold")}
    >
      <span className="h-px w-8 bg-gold-gradient" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-5 text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/70" : "text-slate",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone | "soft";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-24 lg:py-28",
        tone === "dark" && "surface-dark",
        tone === "soft" && "bg-soft",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="surface-dark relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="grid-motif absolute inset-0" aria-hidden="true" />
      <div
        className="diagonal-motif absolute inset-y-0 right-0 w-1/2"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {intro}
          </p>
        ) : null}
        <div className="rule-gold line-draw mt-10" aria-hidden="true" />
      </div>
    </header>
  );
}
