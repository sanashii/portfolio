import { RadiationSymbol, CircuitLines, WebPattern } from "./VaultBoyDecor";
import { ParticleField, GlitchText, TypingText, RadarScanner, DataStream } from "./Animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg pt-14">
      {/* Particle field background */}
      <ParticleField />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scanning line */}
      <div className="scan-line" />

      {/* Decorative elements */}
      <RadiationSymbol className="absolute top-20 left-10 w-32 h-32 text-vault-blue opacity-20 hidden lg:block" />
      <CircuitLines className="absolute top-1/4 left-0 w-64 text-vault-blue hidden md:block" />
      <CircuitLines className="absolute bottom-1/4 right-0 w-64 text-vault-blue rotate-180 hidden md:block" />

      {/* Radar scanner — symmetrically placed */}
      <RadarScanner className="absolute bottom-10 left-10 w-36 h-36 hidden xl:block opacity-30" />
      <DataStream className="absolute top-20 right-4 w-48 hidden xl:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Terminal-style intro */}
        <div className="mb-6 text-vault-text-dim text-xs tracking-widest">
          <span className="text-vault-blue">$</span> cat /vault/dweller/profile.txt
        </div>

        {/* Vault-Tec style designation */}
        <div className="inline-block mb-6 px-4 py-1 border border-vault-border rounded-sm relative glow-border-anim">
          <div className="absolute -top-px -left-2 w-2 h-px bg-vault-blue" />
          <div className="absolute -top-px -right-2 w-2 h-px bg-vault-blue" />
          <div className="absolute -bottom-px -left-2 w-2 h-px bg-vault-blue" />
          <div className="absolute -bottom-px -right-2 w-2 h-px bg-vault-blue" />
          <span className="text-vault-amber text-xs tracking-[0.3em]">
            VAULT-TEC PERSONNEL FILE
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-vault-text">ANDREA </span>
          <GlitchText text="BAULITA" className="text-vault-blue-glow glow-text" />
        </h1>

        <div className="text-lg sm:text-xl text-vault-text-dim mb-8 font-mono">
          <span className="text-vault-blue">{">"}</span>{" "}
          <TypingText
            texts={[
              "AI Automations Specialist",
              "Platform Engineer",
              "Infrastructure Builder",
              "Data Pipeline Architect",
              "Vault Dweller",
            ]}
          />
        </div>

        <p className="max-w-2xl mx-auto text-vault-text-dim text-sm leading-relaxed mb-10">
          Building autonomous pipelines, hardening infrastructure, and engineering
          data systems. Based in Cebu City, Philippines — working remotely for
          Dublin, Ireland.
        </p>

        {/* Stats bar — Fallout S.P.E.C.I.A.L. style */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {[
            { label: "Workflows Built", value: "50+" },
            { label: "Pipelines Shipped", value: "10+" },
            { label: "Records Processed", value: "4.3K+" },
            { label: "Cost Reduced", value: "97%" },
          ].map((stat) => (
            <div key={stat.label} className="pip-boy-border px-3 sm:px-4 py-2 rounded-sm relative glow-border-anim" style={{ animationDelay: `${Math.random() * 2}s` }}>
              <div className="absolute top-1 left-1 w-1 h-1 bg-vault-blue/30 rounded-full" />
              <div className="absolute top-1 right-1 w-1 h-1 bg-vault-blue/30 rounded-full" />
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-vault-blue/30 rounded-full" />
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-vault-blue/30 rounded-full" />
              <div className="text-vault-blue-glow text-lg sm:text-xl font-bold">{stat.value}</div>
              <div className="text-vault-text-dim text-[0.6rem] sm:text-[0.65rem] tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-vault-blue text-white text-sm font-mono tracking-wider rounded-sm hover:bg-vault-blue-glow hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
          >
            [VIEW PROJECTS]
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-vault-border text-vault-text-dim text-sm font-mono tracking-wider rounded-sm hover:border-vault-blue hover:text-vault-blue-glow hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all"
          >
            [CONTACT]
          </a>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vault-blue/50 to-transparent" />

      {/* Side rails */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-vault-blue/30" />
        <div className="w-2 h-2 border border-vault-blue/30 rotate-45 animate-pulse" />
        <div className="w-px h-32 bg-vault-blue/20" />
        <div className="w-2 h-2 border border-vault-blue/30 rotate-45 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-vault-blue/30" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-vault-blue/30" />
        <div className="w-2 h-2 border border-vault-blue/30 rotate-45 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="w-px h-32 bg-vault-blue/20" />
        <div className="w-2 h-2 border border-vault-blue/30 rotate-45 animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-vault-blue/30" />
      </div>
    </section>
  );
}
