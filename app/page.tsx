import { ArrowRight, Link, ShieldCheck } from "lucide-react";
import { Hero } from "./components/home/hero";
import {
  AboutSection,
  CapabilitiesSection,
  CTASection,
  IndustriesSection,
  QualityPolicySection,
  TrustStrip,
} from "./components/home/sections";
import { btnOutline, Section, SectionHeader } from "./components/primitives";
import { ProjectTimeline } from "./components/home/project-timeline";

const title =
  "Instant Shield Security Ltd | Security, Protection & Technical Services";
const description =
  "Nigerian security, protection, procurement, project management and engineering company serving government, corporate and institutional clients.";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <CapabilitiesSection limit={6} />
      <QualityPolicySection />
      <IndustriesSection />
      <Section tone="dark" className="overflow-hidden">
        <div
          className="diagonal-motif absolute inset-y-0 right-0 w-1/3"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <SectionHeader
            tone="dark"
            eyebrow="Track Record"
            title="Selected Previous Project Experience"
            intro="A record of completed procurement, supply and distribution assignments delivered for public institutions."
          />
          <div className="mt-14">
            <ProjectTimeline />
          </div>
          {/* <div className="mt-12">
            <Link href="/projects" className={btnOutline}>
              View Full Project Record
            </Link>
          </div> */}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
