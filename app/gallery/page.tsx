import { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "../components/reveal";
import { GALLERY } from "@/lib/gallery";
import { PageHeader, Section } from "../components/primitives";
import { CTASection } from "../components/home/sections";
import { MosaicGallery } from "../components/home/gallery-mosaic";

export const metadata: Metadata = {
  title: "Gallery | Instant Shield Security Ltd",
  description:
    "Field photography from Instant Shield Security Ltd — security operations, training, procurement logistics, engineering and project delivery across Nigeria.",
};

const page = () => {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our Work in Pictures"
        intro="Deployments, training, logistics and engineering — a visual record of how Instant Shield operates in the field."
      />
      <Section>
        <div className="container-x">
          <MosaicGallery items={GALLERY} />
        </div>
      </Section>
      <CTASection />
    </>
  );
};

export default page;
