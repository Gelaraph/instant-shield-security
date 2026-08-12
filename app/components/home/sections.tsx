"use client";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardList,
  Cpu,
  Landmark,
  Layers,
  ShieldCheck,
  Target,
  Truck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  EXECUTION_MODEL,
  EXPERTISE_FIELDS,
  HSE_SCOPE,
  INDUSTRIES,
  LEADERSHIP,
  PRINCIPLES,
  RESOURCES,
  SERVICES,
  TRUST_STRIP,
} from "@/lib/site-content";
import { Reveal } from "../reveal";
import {
  Eyebrow,
  LinkButton,
  Section,
  SectionHeader,
  btnGold,
  btnOutline,
} from "../primitives";
import {
  CapabilityCard,
  IndustryCard,
  LeadershipCard,
  ServiceCard,
} from "../cards";
// import protectionImg from "@/assets/protection.jpg";
// import engineeringImg from "@/assets/engineering.jpg";
// import controlRoomImg from "@/assets/control-room.jpg";
import Image from "next/image";

const STRIP_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Users,
  Cpu,
  ClipboardList,
  Truck,
  ShieldCheck,
  BadgeCheck,
};

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-soft">
      <div className="container-x grid grid-cols-2 gap-px overflow-hidden md:grid-cols-3 xl:grid-cols-6">
        {TRUST_STRIP.map((item, i) => {
          const Ico = STRIP_ICONS[item.icon] ?? ShieldCheck;
          return (
            <Reveal
              key={item.label}
              delay={i * 60}
              className="flex items-center gap-3 py-7 pr-4"
            >
              <Ico className="h-5 w-5 shrink-0 text-gold" />
              <span className="min-w-0 text-[0.82rem] font-semibold leading-tight text-navy">
                {item.label}
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <Section>
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>About Instant Shield</Eyebrow>
          <Reveal>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl lg:text-[2.75rem]">
              Built on Experience.
              <br />
              Driven by Capability.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
              Instant Shield Security Ltd holds substantial human and material
              resources — infrastructure, finance, a controlled working
              environment, certified skilled personnel, technical know-how and
              an established quality policy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Our consultants are seasoned professionals with many years of
              practice, and our administrative, technical and field personnel
              have worked as a team long enough to guarantee fluidity of
              operation and successful execution of projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/about" variant="outlineDark">
                Company Overview
              </LinkButton>
              <LinkButton href="/capabilities">Our Projects</LinkButton>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {RESOURCES.map((r, i) => (
            <CapabilityCard
              key={r.title}
              title={r.title}
              body={r.body}
              index={i}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export function CapabilitiesSection({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <Section tone="soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="Integrated Capabilities for Complex Operations"
          intro="One accountable partner across protection, procurement, engineering and project delivery — structured for the demands of government and enterprise contracting."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <ServiceCard key={s.slug} {...s} index={i} />
          ))}
        </div>
        {limit ? (
          <Reveal className="mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy"
            >
              View all services
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}

export function ProtectionSection() {
  const pillars = [
    "General Military",
    "Para-Military",
    "Kitting",
    "Personnel Protection",
  ];
  return (
    <Section tone="dark" className="overflow-hidden">
      <div className="grid-motif absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            tone="dark"
            eyebrow="Security & Protection"
            title="Protection Built Around People, Preparation and Precision."
            intro="Instant Shield deploys experienced personnel and structured operating procedures suited to demanding security environments. Every assignment begins with assessment, planning and clearly defined lines of responsibility."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal
                key={p}
                delay={i * 80}
                className="glass-panel flex items-center gap-3 rounded-xl px-5 py-4"
              >
                <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm font-semibold text-white">{p}</span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className={btnGold}>
              Request a Consultation
            </Link>
            <Link href="/projects" className={btnOutline}>
              Explore Projects
            </Link>
          </Reveal>
        </div>
        <Reveal delay={120} className="lg:col-span-6">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10">
            {/* <Image
              src={protectionImg}
              alt="Protective detail escorting an executive through a corporate lobby"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
                Operational Discipline
              </p>
              <p className="mt-2 max-w-sm text-sm text-white/75">
                Assessment, planning, briefing and supervision on every
                deployment.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function ManpowerSection() {
  return (
    <Section>
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl">
            {/* <Image
              src={controlRoomImg}
              alt="Security operators monitoring a control room video wall"
              width={1408}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            /> */}
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Manpower & Expertise"
            title="People Are Our Operational Advantage"
            intro="A large pool of experienced, highly trained experts spread across business, management, science, engineering and technology — most with several years of accumulated skill and know-how."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {EXPERTISE_FIELDS.map((f, i) => (
              <Reveal key={f} delay={i * 50}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {f}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function LeadershipSection() {
  return (
    <Section>
      <div className="container-x">
        <SectionHeader
          eyebrow="Management Team"
          title="Manpower & Expertise"
          intro="A large pool of experienced, highly trained experts spread across business, management, science, engineering and technology — most with several years of accumulated skill and know-how."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((m, i) => (
            <LeadershipCard key={m.role} {...m} index={i} />
          ))}
        </div>
        {/* <Reveal className="mt-10">
          <p className="rounded-2xl border-l-2 border-gold bg-soft p-6 text-sm leading-relaxed text-slate">
            Content note: this section is structured for direct editing. Replace
            each placeholder with the confirmed name, position and biography
            supplied by Instant Shield Security Ltd.
          </p>
        </Reveal> */}
      </div>
    </Section>
  );
}

export function PrinciplesSection() {
  return (
    <Section tone="soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Approach"
          title="Our Operating Principles"
          intro="Six commitments that govern how we accept, plan and deliver work."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 90}
              className="group bg-background p-8"
            >
              <span className="font-display text-3xl font-extrabold text-gold/40 transition-colors duration-500 group-hover:text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function MissionVisionSection() {
  const blocks = [
    {
      icon: Target,
      title: "Vision",
      body: "[Editable placeholder] To be the reference partner for integrated security, technical and project services across Nigeria's public and private institutions.",
    },
    {
      icon: Layers,
      title: "Mission",
      body: "[Editable placeholder] To deliver dependable, well-supervised services through competent personnel, disciplined execution and honest client relationships.",
    },
    {
      icon: BadgeCheck,
      title: "Core Values",
      body: "Competency · Integrity · Accountability · Quality · Respect for people and the environment.",
    },
    {
      icon: ClipboardList,
      title: "Objectives",
      body: "[Editable placeholder] Sustain quality performance on every contract, strengthen technical capacity, and continuously improve operating standards.",
    },
  ];
  return (
    <Section tone="dark" className="overflow-hidden">
      <div className="diagonal-motif absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeader
          tone="dark"
          eyebrow="Corporate Direction"
          title="Vision, Mission, Values & Objectives"
          intro="The framework that shapes how the company positions itself and measures its own performance."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 90}>
              <div className="glass-panel h-full rounded-2xl p-8 transition-colors duration-400 hover:border-gold/40">
                <b.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-6 text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function ExecutionModelSection() {
  return (
    <Section>
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Execution Model"
            title="Flexible Contract Execution"
            intro="Company policy allows work to be undertaken and executed directly or indirectly, through the deputation of personnel under agreements or subcontracts."
          />
        </div>
        <div className="grid gap-5 lg:col-span-7">
          {EXECUTION_MODEL.map((m, i) => (
            <Reveal key={m.title} delay={i * 90}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-2xl border border-border bg-card p-7 transition-all duration-400 hover:border-gold/50 hover:shadow-[var(--shadow-soft)]">
                <span className="font-display text-2xl font-extrabold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-navy">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {m.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FinancialSection() {
  const funds = [
    { icon: Building2, label: "Company Funds" },
    { icon: Landmark, label: "Bank Funds" },
    { icon: Banknote, label: "Client Funds" },
  ];
  return (
    <Section tone="soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="Capacity"
          title="Financial & Operational Capacity"
          intro="Contracts are executed using a combination of funding routes, matched to scope and schedule."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {funds.map((f, i) => (
            <Reveal key={f.label} delay={i * 90}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-7">
                <f.icon className="h-6 w-6 shrink-0 text-gold" />
                <p className="text-base font-semibold text-navy">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150} className="mt-6">
          <p className="rounded-2xl border-l-2 border-gold bg-card p-7 text-sm leading-relaxed text-slate">
            Established banking relationships support project execution and
            operational financing.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function HSESection() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div className="grid-motif absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeader
          tone="dark"
          eyebrow="HSE & Quality"
          title="Quality, Health, Safety & Environmental Responsibility"
          intro="A framework applied across the value chain — from procurement of raw materials to contractor management and project close-out."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {HSE_SCOPE.map((h, i) => (
            <Reveal key={h} delay={(i % 4) * 70} className="bg-navy p-7">
              <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-sm font-semibold leading-snug text-white">
                {h}
              </h3>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <div className="glass-panel rounded-2xl p-8 lg:p-10">
            <h3 className="text-lg font-bold text-white">Quality Policy</h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
              Instant Shield Security Ltd is committed to delivering quality
              services through competent personnel, continuous review of
              performance, operational discipline, accountability to clients and
              continual improvement of our systems and methods.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function IndustriesSection() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div
        className="diagonal-motif absolute inset-y-0 left-0 w-1/3"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <SectionHeader
          tone="dark"
          eyebrow="Industries"
          title="Industries We Serve"
          intro="Delivery experience shaped by the standards of regulated, high-accountability sectors."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {INDUSTRIES.map((n, i) => (
            <IndustryCard key={n} name={n} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export function CTASection({
  title = "Discuss your next requirement with our team.",
  body = "Tell us about the scope, the timeline and the standard you need to meet. We will respond with a clear view of how Instant Shield can deliver it.",
  btnText = "Project Experience",
  btnHref = "/projects",
}: {
  title?: string;
  body?: string;
  btnText?: string;
  btnHref?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* <Image
        src={engineeringImg}
        alt=""
        aria-hidden="true"
        width={1408}
        height={1008}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      /> */}
      <div className="absolute inset-0 bg-navy/92" />
      <div className="container-x relative py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              {body}
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end"
          >
            <Link href="/contact" className={btnGold}>
              Request a Consultation
            </Link>
            <Link href={btnHref} className={btnOutline}>
              {btnText}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function InlineNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn("text-xs uppercase tracking-[0.2em] text-slate", className)}
    >
      {children}
    </p>
  );
}

export function QualityPolicySection() {
  return (
    <Section>
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Quality Policy"
            title="Our Commitment"
            intro="We are committed to top-quality services, competency, continuous quality review, optimum value on human assets and the environment, trust & accountability, and the highest ethics & integrity in every engagement."
          />
        </div>
        <Reveal delay={100} className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="text-lg font-bold text-navy">Policy in Practice</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Our quality framework governs procurement, operational integrity,
              handling, waste disposal, reuse, recycling, project development,
              commercial agreements and contractor management.
            </p>
            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy"
            >
              Full Policy
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
