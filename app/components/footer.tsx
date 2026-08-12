"use client";
import Link from "next/link";
import { Mail, MapPin, Phone, Shield } from "lucide-react";
import {
  COMPANY,
  CONTACT,
  INDUSTRIES,
  NAV,
  SERVICES,
} from "@/lib/site-content";
import logo from "@/public/assets/images/shield-logo.png";
import Image from "next/image";

// Simple inline LinkedIn SVG icon because lucide-react may not export a Linkedin icon
function LinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.554V8.999h3.565v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}
// Facebook SVG icon
function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.7 4.533-4.7 1.312 0 2.686.236 2.686.236v2.973h-1.514c-1.491 0-1.956.927-1.956 1.88v2.261h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

// Twitter / X SVG icon
function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-dark relative overflow-hidden">
      <div
        className="grid-motif absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex min-w-0 items-center">
              <Image
                src={logo}
                alt=""
                width={220}
                height={70}
                loading="lazy"
                className="h-auto w-[220px] object-contain"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {COMPANY.description}
            </p>

            <p className="text-sm text-white/60 mt-4">
              Registered in the Federal Republic of Nigeria:
            </p>

            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 border border-gold/30 bg-navy/50">
              <Shield className="w-4 h-4 text-gold-light" />
              <span className="font-heading font-semibold text-xs text-gold-light tracking-wider">
                RC: 1866410
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              {[LinkedIn, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-ivory/60 hover:border-gold hover:text-gold-light transition-colors duration-300"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Industries" className="lg:col-span-2">
            {/* {NAV.map((n) => (
              <FooterLink key={n.to} to={n.to}>
                {n.label}
              </FooterLink>
            ))} */}
            {INDUSTRIES.slice(0, 8).map((i) => (
              <li key={i} className="text-sm text-white/60">
                {i}
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services" className="lg:col-span-3">
            {SERVICES.slice(0, 8).map((s) => (
              <FooterLink key={s.slug} to={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Offices / Contact" className="lg:col-span-3">
            <div className="mt-6 space-y-2 text-sm text-white/60">
              {CONTACT.offices.map((office) => (
                <div key={office.city}>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p className="mb-1 text-sm font-semibold text-white">
                      {office.city}
                    </p>
                  </div>

                  <div className="space-y-1">
                    {office.addresses.map((address, index) => (
                      <p
                        key={`${office.city}-${index}`}
                        className="text-sm leading-6 text-white/60"
                      >
                        {address}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-2 my-4">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="space-y-1">
                  {CONTACT.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-sm text-white/60 transition-colors hover:text-gold"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CONTACT.email}</span>
              </p>
            </div>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.name} (RC: 1866410). All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-gold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
        {title}
      </h3>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={to}
        className="text-sm text-white/60 transition-colors hover:text-gold"
      >
        {children}
      </Link>
    </li>
  );
}
