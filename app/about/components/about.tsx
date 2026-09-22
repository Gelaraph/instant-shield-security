import {
  TrustStrip,
  AboutSection,
  CTASection,
  ExecutionModelSection,
  MissionVisionSection,
  PrinciplesSection,
  LeadershipSection,
  IndustriesSection,
  HSESection,
} from "@/app/components/home/sections";
import { PageHeader, Section } from "@/app/components/primitives";
import { Reveal } from "@/app/components/reveal";
import Image from "next/image";
import Image22 from "@/public/assets/images/image22.jpeg";
import Image15 from "@/public/assets/images/image15.jpeg";
import Image20 from "@/public/assets/images/image20.jpeg";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="About the Company"
        title="Built on Experience. Driven by Capability."
        intro="An established Nigerian company operating at the intersection of security, procurement, engineering, project management and technical services."
      />
      <TrustStrip />
      <AboutSection />
      <AboutImageBand />
      <PrinciplesSection />
      <MissionVisionSection />
      <IndustriesSection />
      <HSESection />
      <ExecutionModelSection />
      {/* <LeadershipSection /> */}
      <CTASection />
    </>
  );
};

export default AboutPage;

function AboutImageBand() {
  const images = [
    {
      src: Image22,
      alt: "Security officers inspecting an industrial facility perimeter",
      caption: "Field Operations",
    },
    {
      src: Image15,
      alt: "Security personnel in formation receiving a briefing",
      caption: "People & Training",
    },
    {
      src: Image20,
      alt: "Executive team reviewing a contract in the boardroom",
      caption: "Corporate Governance",
    },
  ];
  return (
    <Section tone="dark" className="overflow-hidden">
      <div className="grid-motif absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid gap-4 sm:grid-cols-3">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="group relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className=" object-cover w-full  transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 p-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
