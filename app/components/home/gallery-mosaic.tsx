"use client";
import { ArrowRight } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/gallery";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../reveal";
import { Section, SectionHeader, btnOutlineDark } from "../primitives";
import Masonry from "react-masonry-css";

/** Mosaic preview of the gallery for the home page. */
export function GalleryMosaic() {
  const items = GALLERY_ITEMS.slice(0, 7);
  return (
    <Section tone="soft">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Field & Operations"
            title="Our Work in Pictures"
            intro="A snapshot of deployments, training, logistics and engineering across our operations."
          />
          <Reveal delay={120}>
            <Link href="/gallery" className={btnOutlineDark}>
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <MosaicGallery items={items} />
      </div>
    </Section>
  );
}

const breakpointCols = {
  default: 4,
  1024: 4,
  768: 3,
  0: 2,
};

export function MosaicGallery({ items }: { items: GalleryItem[] }) {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="mt-12 flex gap-3"
      columnClassName="flex flex-col gap-3"
    >
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 70}>
          <figure className="group relative w-full overflow-hidden rounded-xl">
            <Image
              src={item.src}
              alt={item.caption}
              width={item.width}
              height={item.height}
              loading="lazy"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-[1200ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
                {item.tag}
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </Masonry>
  );
}
