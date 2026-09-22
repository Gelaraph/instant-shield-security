"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselGalleryItem, GALLERY_ITEMS } from "@/lib/gallery";
import { Section, SectionHeader } from "../primitives";
import { Reveal } from "../reveal";

// Base height per tier, responsive via clamp so it scales smoothly across breakpoints
const SIZE_HEIGHT: Record<NonNullable<CarouselGalleryItem["size"]>, string> = {
  sm: "clamp(220px, 32vw, 320px)",
  md: "clamp(260px, 38vw, 400px)",
  lg: "clamp(300px, 44vw, 460px)",
};

export function ImageCarousel({ items }: { items: CarouselGalleryItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const amount = direction === "left" ? -420 : 420;
    containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // Click-and-drag scrolling for a more "kinetic" feel on desktop
  const onPointerDown = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    dragState.current = {
      isDown: true,
      startX: e.pageX,
      scrollLeft: containerRef.current.scrollLeft,
    };
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.isDown || !containerRef.current) return;
    const dx = e.pageX - dragState.current.startX;
    containerRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const endDrag = () => {
    dragState.current.isDown = false;
    setIsDragging(false);
  };

  return (
    <Section tone="soft">
      <div className="container-x">
        <section className="relative w-full bg-soft text-white overflow-hidden">
          {/* Header & Controls */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Field & Operations"
              title="Our Work in Pictures"
              intro="A snapshot of deployments, training, logistics and engineering across our operations."
            />
            <Reveal delay={120}>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scroll("left")}
                  aria-label="Previous image"
                  className="p-3 rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  aria-label="Next image"
                  className="p-3 rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 transition-all active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Edge fade masks so the cut-off cards read as intentional, not clipped */}
          <div className="relative">
            <div
              ref={containerRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
              className={`flex gap-6 overflow-x-auto snap-x snap-mandatory items-end pb-8 pt-4 no-scrollbar select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ scrollbarWidth: "none" }}
            >
              {items.map((item) => {
                const size = item.size ?? "md";
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative flex-shrink-0 snap-center group rounded-3xl overflow-hidden border bg-neutral-900 "
                    style={{
                      height: SIZE_HEIGHT[size],
                      aspectRatio: item.aspectRatio,
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      draggable={false}
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="backdrop-blur-md bg-neutral-900/70 border border-white/10 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                        {item.tag}
                      </span>
                      {item.date && (
                        <span className="text-[11px] font-mono text-neutral-300 backdrop-blur-md bg-black/40 px-2 py-1 rounded-full border border-white/5">
                          {item.date}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
                      <p className="text-sm sm:text-base font-normal text-neutral-200 line-clamp-2 group-hover:line-clamp-none transition-all">
                        {item.caption}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Section>
  );
}
