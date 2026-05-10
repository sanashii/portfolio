import { SectionHeader } from "./About";
import { CircuitLines } from "./VaultBoyDecor";
import { FadeInOnScroll } from "./Animations";

const experiences = [
  {
    title: "AI Automations Specialist",
    company: "EarthChimp",
    location: "Dublin, Ireland (Remote)",
    period: "04/2026 – Present",
    type: "PROPRIETARY",
    bullets: [
      "Architected a dual-server production/sandbox environment using Docker Compose and Nginx Reverse Proxy with automated SSL termination.",
      "Built an end-to-end sentiment analysis pipeline on Supabase, processing 4,300+ historical records using Claude Sonnet and n8n webhooks.",
      "Spearheaded the Amazon SP-API Restricted-Roles application, authoring Data Protection and Privacy Policies for GDPR compliance.",
      "Designed a 3-tier affiliate discovery system using Thompson Sampling and LLM-based screening — reduced API costs from $200+ to <$5/run.",
      "Root-caused a critical production outage (2GB database bloat from NaN cron deltas) and implemented a size-adaptive auto-prune script.",
      "Developed idempotent Python scripts for Meta/Instagram Graph API and Amazon Ads API across 15+ international marketplaces.",
    ],
    tech: ["n8n", "Python", "Docker", "Nginx", "Supabase", "Claude AI", "PostgreSQL", "Apify"],
  },
  {
    title: "AI Automation Engineer",
    company: "GoTeam / Multiplai.tech",
    location: "Cebu City, Philippines",
    period: "10/2025 – 03/2026",
    type: "PROPRIETARY",
    bullets: [
      "Facilitated weekly technical lab sessions for internal AI Coaches on custom n8n and Make.com workflows.",
      "Optimized HR workflows via Power Automate, streamlining leave requests and resolving critical API mailbox conflicts.",
      "Deployed a Slack bot using GPT-4 and Open-Meteo API for real-time weather alerts.",
      "Architected seamless API integrations for third-party tools into the company's proprietary automation platform.",
      "Managed and refactored legacy n8n workflows, reducing execution errors by 35%.",
      "Maintained production-level automations at 99.9% uptime with regular version upgrades.",
    ],
    tech: ["n8n", "Make.com", "Power Automate", "GPT-4", "JavaScript", "REST APIs"],
  },
  {
    title: "Junior Platform Engineer",
    company: "Trax Technologies Asia Co.",
    location: "Cebu City, Philippines",
    period: "02/2025 – 07/2025",
    type: "PROPRIETARY",
    bullets: [
      "Developed Python scripts for Elasticsearch index cleanup, inbox monitoring, and email attachment processing.",
      "Built a Flask-based ProFTPD UI for secure file uploads/downloads with role-based access.",
      "Configured Zabbix templates and tagging for reusable monitoring (disk space, ports, processes).",
      "Enhanced Kibana index templates with new fields for advanced log searches.",
    ],
    tech: ["Python", "Flask", "Elasticsearch", "Kibana", "Zabbix", "PostgreSQL", "MySQL"],
  },
  {
    title: "Platform Engineer Intern",
    company: "Trax Technologies Asia Co.",
    location: "Cebu City, Philippines",
    period: "10/2024 – 01/2025",
    type: "PROPRIETARY",
    bullets: [
      "Built a Flask-based ProFTPD management UI with drag-and-drop functionality adopted internally.",
      "Integrated database-driven user permissions for role-based access control.",
      "Assisted in developing a 24-hour color-coded file monitoring system for data freshness.",
    ],
    tech: ["Python", "Flask", "MySQL", "Bootstrap", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <CircuitLines className="absolute top-20 right-0 w-64 text-vault-blue hidden md:block" />
      <CircuitLines className="absolute bottom-20 left-0 w-64 text-vault-blue rotate-180 hidden md:block" />
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="EXPERIENCE" index="02" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-vault-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <FadeInOnScroll key={i} delay={i * 150} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-6 w-2 h-2 -translate-x-[3px] rounded-full bg-vault-blue shadow-[0_0_8px_rgba(59,130,246,0.5)]" />

                <div className="vault-card p-5 rounded-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-vault-blue-glow font-bold text-sm">
                        {exp.title}
                      </h3>
                      <div className="text-vault-text text-xs mt-0.5">
                        {exp.company}
                        <span className="text-vault-text-dim"> — {exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-vault-amber text-[0.65rem] border border-vault-amber/30 px-2 py-0.5 rounded-sm">
                        {exp.type}
                      </span>
                      <span className="text-vault-text-dim text-xs">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-vault-text-dim text-xs leading-relaxed flex gap-2">
                        <span className="text-vault-blue mt-0.5 shrink-0">{">"}</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
