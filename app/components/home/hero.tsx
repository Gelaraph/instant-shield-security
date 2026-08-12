"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { btnGold, btnOutline } from "../primitives";
import heroImg from "@/public/assets/images/hero-img.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy pt-28 pb-16">
      <Image
        src={heroImg}
        alt="Instant Shield security personnel on duty outside a government facility at dusk"
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.176_0.021_265/0.96)_0%,oklch(0.176_0.021_265/0.82)_45%,oklch(0.09_0_0/0.55)_100%)]"
        aria-hidden="true"
      />
      <div
        className="grid-motif absolute inset-0 opacity-70"
        aria-hidden="true"
      />

      <div className="container-x relative w-full">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">
            <span className="rule-gold line-draw" aria-hidden="true" />
            RC: 1866410 · Nigeria
          </p>

          <h1 className="mt-7 text-balance font-display text-[2.6rem] font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Built to Protect.
            <span className="block text-gradient-gold">
              Equipped to Deliver.
            </span>
          </h1>

          {/* <p className="mt-6 max-w-2xl text-lg font-medium leading-snug text-white/85 sm:text-xl">
            Integrated security, protection, technical and project services for
            organizations that cannot afford uncertainty.
          </p> */}

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Every operation needs more than protection. It needs people who show
            up, supplies that arrive, and projects that get finished.
            That&apos;s what we do: security, procurement, technical services,
            and project execution, delivered by professionals who don&apos;t cut
            corners. Trusted across government, corporate, and institutional
            clients.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/capabilities" className={btnGold}>
              Explore Our Capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className={btnOutline}>
              Contact Our Team
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-gold"
              aria-hidden="true"
            />
            <p
              className={cn(
                "text-[0.72rem] uppercase tracking-[0.22em] text-white/55",
              )}
            >
              We guard what matters, procure what&apos;s needed, and execute
              what&apos;s promised.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
