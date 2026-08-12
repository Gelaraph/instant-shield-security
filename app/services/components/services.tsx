import {
  CTASection,
  CapabilitiesSection,
  IndustriesSection,
  ProtectionSection,
} from "@/app/components/home/sections";
import { PageHeader } from "@/app/components/primitives";

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="A Single Accountable Partner Across Twelve Service Lines"
        intro="From protective services to procurement, engineering and project evaluation — delivered under one supervisory structure."
      />
      <CapabilitiesSection />
      <ProtectionSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}

export default ServicesPage;