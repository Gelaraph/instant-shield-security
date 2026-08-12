import Link from "next/link";
import {
  SERVICE_DETAILS,
  ServiceDetail,
  getServiceDetail,
} from "@/lib/services-details";
import { notFound } from "next/navigation";
import { PageHeader } from "@/app/components/primitives";
import { Reveal } from "@/app/components/reveal";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CTASection } from "@/app/components/home/sections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);

  if (!detail) {
    return {
      title: "Service Not Found | Instant Shield Security Ltd",
      robots: "noindex",
    };
  }

  const title = `${detail.title} | Instant Shield Security Ltd`;

  return {
    title,
    description: detail.intro,
    openGraph: {
      title,
      description: detail.intro,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-t border-border pt-8">
      <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 text-[0.95rem] leading-relaxed text-slate">
        {children}
      </div>
    </Reveal>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const detail = getServiceDetail(slug);

  if (!detail) {
    notFound();
  }

  const related = detail.related
    .map((slug: string) => SERVICE_DETAILS.find((s) => s.slug === slug))
    .filter((s): s is ServiceDetail => Boolean(s));

  return (
    <>
      <PageHeader
        eyebrow={detail.eyebrow}
        title={detail.title}
        intro={detail.intro}
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-navy"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-gold transition-transform group-hover:-translate-x-1" />
              All services
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-10">
              <Block title="Overview">
                <p>{detail.overview}</p>
              </Block>

              <Block title="Our Approach">
                <ul className="space-y-3">
                  {detail.approach.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Operational Capabilities">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {detail.operational.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-navy"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Personnel & Expertise">
                <p>{detail.personnel}</p>
              </Block>

              <Block title="Client Benefits">
                <ul className="space-y-3">
                  {detail.benefits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal className="rounded-2xl border border-border bg-soft p-7">
                <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">
                  Related Capabilities
                </h2>
                <ul className="mt-5 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-gold/50"
                      >
                        <span className="text-sm font-semibold text-navy">
                          {r.title}
                        </span>
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
