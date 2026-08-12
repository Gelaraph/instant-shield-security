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
import { PageHeader } from "@/app/components/primitives";

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
      <PrinciplesSection />
      <MissionVisionSection />
      <IndustriesSection />
      <HSESection />
      <ExecutionModelSection />
      <LeadershipSection />
      <CTASection />
    </>
  );
};

export default AboutPage;
