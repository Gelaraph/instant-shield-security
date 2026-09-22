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
        eyebrow="Core Capabilities"
        title="Comprehensive Solutions for Government & Enterprise"
        intro="From security and protective services to specialized equipment, vehicles and project delivery — providing integrated solutions for complex operational requirements."
      />
      <CapabilitiesSection />
      <ProtectionSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
};

export default ServicesPage;
