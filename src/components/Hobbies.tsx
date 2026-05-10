"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "./About";
import { WebPattern } from "./VaultBoyDecor";

const figures = [
  { src: "/photos/action-figures/20240305_213739.jpg", alt: "Action figure pose 1" },
  { src: "/photos/action-figures/20240622_192554.jpg", alt: "Action figure pose 2" },
  { src: "/photos/action-figures/20240921_001425.jpg", alt: "Action figure pose 3" },
  { src: "/photos/action-figures/20250510_222149.jpg", alt: "Action figure pose 4" },
  { src: "/photos/action-figures/20250827_191042.jpg", alt: "Action figure pose 5" },
  { src: "/photos/action-figures/20251005_221816.jpg", alt: "Action figure pose 6" },
  { src: "/photos/action-figures/20250320_094258.jpg", alt: "Action figure pose 7" },
  { src: "/photos/action-figures/DSCF1393.JPG", alt: "Action figure shot — Fujifilm XT-30 II" },
  { src: "/photos/action-figures/Picsart_25-09-19_19-44-17-536.jpg", alt: "Action figure edit" },
];

export default function Hobbies() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="hobbies" className="py-20 px-4 relative noise-bg overflow-hidden">
      {/* Spider-web pattern background — for the Spider-Man fan */}
      <WebPattern className="absolute top-0 right-0 w-72 h-72 text-vault-blue hidden md:block" />
      <WebPattern className="absolute bottom-0 left-0 w-56 h-56 text-vault-blue hidden lg:block" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader label="HOBBIES" index="05" />

        <div className="vault-card p-6 rounded-sm mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div>
              <h3 className="text-vault-blue-glow font-bold text-sm mb-1">
                Action Figure Photography
              </h3>
              <p className="text-vault-text-dim text-xs leading-relaxed">
                I pose and photograph action figures as a creative hobby — mostly
                anime characters from AOT, Naruto, Demon Slayer, Dandadan, and
                of course Spider-Man. Shot on my{" "}
                <span className="text-vault-blue">Fujifilm XT-30 II</span> and phone.
                Find me on TikTok as{" "}
                <a
                  href="https://www.tiktok.com/@supreme_hobbyist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vault-cyan hover:underline"
                >
                  @supreme_hobbyist
                </a>
                .
              </p>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="gallery-grid">
            {figures.map((fig, i) => (
              <button
                key={i}
                onClick={() => setLightbox(fig.src)}
                className="relative aspect-square overflow-hidden rounded-sm border border-vault-border hover:border-vault-blue transition-colors group cursor-pointer"
              >
                <Image
                  src={fig.src}
                  alt={fig.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-vault-bg/0 group-hover:bg-vault-bg/30 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-vault-text-dim hover:text-vault-blue-glow text-2xl z-10"
            aria-label="Close lightbox"
          >
            [X]
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={lightbox}
              alt="Enlarged view"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
