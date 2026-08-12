"use client";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV, COMPANY } from "@/lib/site-content";
import { btnGold } from "./primitives";
import logo from "@/public/assets/images/shield-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-white/10 bg-navy/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-x">
        <div className="grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link href="/" className="flex min-w-0 items-center">
            <Image
              src={logo}
              alt="Instant Shield Security Ltd"
              width={220}
              height={70}
              priority
              className="h-auto w-[220px] object-contain"
            />
          </Link>

          <div className="flex items-center gap-2">
            <nav
              className="hidden items-center gap-1 xl:flex"
              aria-label="Primary"
            >
              {NAV.map((item) => {
                const isActive =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname === item.to ||
                      pathname.startsWith(`${item.to}/`);

                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    className={`rounded-md px-3 py-2 text-[0.82rem] font-medium transition-colors ${
                      isActive ? "text-gold" : "text-white/75 hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              className={cn(
                btnGold,
                "ml-2 hidden py-2.5 text-[0.8rem] lg:inline-flex",
              )}
            >
              Request a Consultation
            </Link>
            <button
              type="button"
              onClick={handleNavClick}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-gold hover:text-gold xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy transition-[max-height] duration-500 xl:hidden",
          open ? "max-h-[36rem]" : "max-h-0 border-t-0",
        )}
      >
        <nav className="container-x flex flex-col py-4" aria-label="Mobile">
          {NAV.map((item) => {
            const isActive =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);

            return (
              <Link
                key={item.to}
                href={item.to}
                onClick={handleNavClick}
                className={`border-b border-white/5 py-3.5 text-sm font-medium transition-colors ${
                  isActive ? "text-gold" : "text-white/80 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className={cn(btnGold, "mt-5 w-full")}>
            Request a Consultation
          </Link>
          <p className="mt-4 flex items-center gap-2 pb-4 text-xs text-white/50">
            <Phone className="h-3.5 w-3.5 text-gold" />
            {COMPANY.short} — Government, corporate & institutional clients
          </p>
        </nav>
      </div>
    </header>
  );
}
