"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

interface CardItem {
  id: number;
  src: string | StaticImageData;
  alt: string;
  rotation: number;
  yOffset: number;
}

const defaultCards: CardItem[] = [
  {
    id: 1,
    src: "https://i.pinimg.com/1200x/d9/e6/9b/d9e69b3533a5dac3ad4622e325a364a8.jpg",
    alt: "Abstract Street Collage Art",
    rotation: -8,
    yOffset: 12,
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/fe/46/09/fe46096a67809fcc331513d4120dd270.jpg",
    alt: "Blue Graphic Typography Art",
    rotation: -4,
    yOffset: 4,
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/9d/46/b2/9d46b29739e84f7a1be53efe954dde68.jpg",
    alt: "Yellow Retro Pop Art",
    rotation: 0,
    yOffset: 0,
  },
  {
    id: 4,
    src: "https://instagram.fmaa1-3.fna.fbcdn.net/v/t51.82787-15/655243493_18104400631721312_5941408988758415166_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ig_cache_key=MzExOTI4MTQ2NTMwMTEwMjgwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=IVxm4LHOHUgQ7kNvwENV7my&_nc_oc=AdqdDGjlma9PKzvIeWPPX2PBzg9fdubXu2NNi8H3MQL10Lm3Q3Fd5fm5x5CN4MdjZV1wGBDzlneruGmeNiUdbdI9&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fmaa1-3.fna&_nc_gid=0zGqp_PT1QWtUDaJaGRqHA&_nc_ss=7a22e&oh=00_AQIxP7jpAhaeWcUE79i7518ebC2Vd-YlzemxUd8IJJsb_Q&oe=6ABE9A18",
    alt: "Coral Modern Character Art",
    rotation: 4,
    yOffset: 4,
  },
  {
    id: 5,
    src: "/Hero image.png",
    alt: "Green Streetwear Graffiti Artwork",
    rotation: 8,
    yOffset: 12,
  },
];

interface ImageStackProps {
  cards?: CardItem[];
}

export default function ImageStack({ cards = defaultCards }: ImageStackProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full flex items-center justify-center py-2 sm:py-4 overflow-x-clip sm:overflow-visible">
      <div className="flex items-center justify-center -space-x-8 sm:-space-x-10 md:-space-x-12 lg:-space-x-14">
        {cards.map((card, index) => {
          const isHovered = hoveredIndex === index;
          const middle = Math.floor(cards.length / 2);
          const symmetricZIndex = middle - Math.abs(index - middle) + 1;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: isHovered
                  ? `translateY(-16px) scale(1.06) rotate(0deg)`
                  : `translateY(${card.yOffset}px) rotate(${card.rotation}deg)`,
                zIndex: isHovered ? 40 : symmetricZIndex,
              }}
              className="relative transition-all duration-300 ease-out cursor-pointer group shrink-0"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-100 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.14),0_6px_14px_-4px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)] border border-black/[0.06] group-hover:shadow-[0_28px_48px_-12px_rgba(0,0,0,0.2),0_12px_20px_-6px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <Image
                  src={typeof card.src === "string" ? card.src.replace(/^(?:rack\/)?public\//, "/") : card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 130px, (max-width: 768px) 160px, 200px"
                  className="object-cover transition-transform duration-500 rounded-2xl group-hover:scale-105"
                  priority={index < 3}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
