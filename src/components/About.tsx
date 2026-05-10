import { PipBoyFrame, CircuitLines } from "./VaultBoyDecor";
import { FadeInOnScroll } from "./Animations";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative noise-bg overflow-hidden">
      <CircuitLines className="absolute top-10 left-0 w-80 text-vault-blue hidden md:block" />
      <CircuitLines className="absolute bottom-10 right-0 w-80 text-vault-blue rotate-180 hidden md:block" />
      {/* Scanning line */}
      <div className="scan-line" style={{ animationDelay: "2s" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader label="ABOUT" index="01" />

        <div className="grid md:grid-cols-3 gap-8">
          <FadeInOnScroll className="md:col-span-2 space-y-4">
            <PipBoyFrame title="BIO">
              <div className="vault-card p-6 rounded-sm">
                <div className="text-vault-text-dim text-xs mb-3 tracking-wider">
                  <span className="text-vault-blue">$</span> cat about.log
                </div>
                <p className="text-vault-text text-sm leading-relaxed mb-4">
                  I&apos;m Andy — an AI Automations Specialist and Platform Engineer from
                  Cebu City, Philippines. I build autonomous pipelines, harden production
                  infrastructure, and ship data engineering systems that run reliably at scale.
                </p>
                <p className="text-vault-text text-sm leading-relaxed mb-4">
                  Currently at <span className="text-vault-blue-glow">EarthChimp</span> (Dublin, Ireland),
                  where I own the full automation stack — from a 3-tier affiliate discovery
                  pipeline using Thompson Sampling to a customer sentiment analysis system
                  processing 4,300+ records with Claude AI.
                </p>
                <p className="text-vault-text text-sm leading-relaxed">
                  Previously at <span className="text-vault-blue-glow">GoTeam / Multiplai.tech</span> as
                  an AI Automation Engineer, and at <span className="text-vault-blue-glow">Trax Technologies</span> as
                  a Platform Engineer. BS Computer Science from the University of San Carlos.
                </p>
              </div>
            </PipBoyFrame>
          </FadeInOnScroll>

          <FadeInOnScroll className="space-y-3" delay={200}>
            <PipBoyFrame title="STATS">
              <div className="vault-card p-4 rounded-sm">
                <div className="text-vault-amber text-xs tracking-wider mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-vault-amber rounded-full animate-pulse" />
                  QUICK STATS
                </div>
                {[
                  { key: "Location", val: "Cebu City, PH" },
                  { key: "Working", val: "Dublin, IE (Remote)" },
                  { key: "Degree", val: "BS Computer Science" },
                  { key: "School", val: "Univ. of San Carlos" },
                  { key: "Interests", val: "AI, Automations, Robotics" },
                ].map((item) => (
                  <div key={item.key} className="flex justify-between text-xs mb-2 pb-1 border-b border-vault-border/30 last:border-0">
                    <span className="text-vault-text-dim">{item.key}:</span>
                    <span className="text-vault-text">{item.val}</span>
                  </div>
                ))}
              </div>
            </PipBoyFrame>

            <PipBoyFrame title="FAVORITES">
              <div className="vault-card p-4 rounded-sm">
                <div className="text-vault-amber text-xs tracking-wider mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-vault-amber rounded-full animate-pulse" />
                  FAVORITES
                </div>
                <div className="text-xs text-vault-text-dim space-y-2">
                  <div>
                    <span className="text-vault-blue">Anime:</span>
                    <span className="block mt-0.5 text-vault-text">Naruto, MHA, Demon Slayer, AOT, Dandadan, One Piece, JJK, SPY&#xd7;FAMILY</span>
                  </div>
                  <div>
                    <span className="text-vault-blue">Hero:</span>
                    <span className="ml-1 text-vault-text">Spider-Man</span>
                  </div>
                  <div>
                    <span className="text-vault-blue">Camera:</span>
                    <span className="ml-1 text-vault-text">Fujifilm XT-30 II</span>
                  </div>
                </div>
              </div>
            </PipBoyFrame>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ label, index }: { label: string; index: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-vault-blue text-xs font-mono">[{index}]</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-vault-text">
          {label}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-vault-border to-transparent" />
        <div className="hidden sm:flex items-center gap-1">
          <div className="w-1 h-1 bg-vault-blue/40 rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-vault-blue/30 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
          <div className="w-1 h-1 bg-vault-blue/20 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
        </div>
      </div>
    </div>
  );
}
