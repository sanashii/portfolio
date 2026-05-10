import { SectionHeader } from "./About";
import { FadeInOnScroll, AnimatedBar } from "./Animations";
import { CircuitLines } from "./VaultBoyDecor";

const skillCategories = [
  {
    title: "Automation & LLM Orchestration",
    icon: "//",
    skills: ["n8n (Self-hosted)", "Make.com", "Prompt Engineering", "LLM Pipelines (Claude, GPT-4)", "Agentic Workflows"],
  },
  {
    title: "Programming & Scripting",
    icon: "{}",
    skills: ["Python (Advanced)", "JavaScript / Node.js", "C / C#", "Java", "PHP", "Regex", "Bash"],
  },
  {
    title: "Data Engineering & ML",
    icon: "DB",
    skills: ["Supabase (PostgREST)", "PostgreSQL", "MySQL", "SQLite", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow"],
  },
  {
    title: "Infrastructure & DevOps",
    icon: ">>",
    skills: ["Docker & Compose", "Nginx (Reverse Proxy, SSL)", "Linux Admin (Ubuntu/Debian)", "GitHub Org Management", "SSH Hardening", "Cron Orchestration"],
  },
  {
    title: "Security & Compliance",
    icon: "##",
    skills: ["Amazon SP-API", "DPP Authoring", "GDPR Compliance", "auditd", "Secret Management", "Credential Rotation"],
  },
  {
    title: "Monitoring & Observability",
    icon: "()",
    skills: ["Zabbix", "Kibana / Elasticsearch", "Fail2ban", "HSTS", "Rate Limiting", "Audit Log Review"],
  },
  {
    title: "Frontend & Design",
    icon: "UI",
    skills: ["React", "Vue.js", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "UI/UX Design", "Figma"],
  },
  {
    title: "Tools & Others",
    icon: "++",
    skills: ["Git", "GitHub Actions", "Dependabot", "Swagger", "Arduino", "Matplotlib", "Seaborn"],
  },
];

const proficiencyBars = [
  { label: "Python", level: 92 },
  { label: "n8n", level: 95 },
  { label: "JavaScript", level: 80 },
  { label: "Docker", level: 78 },
  { label: "PostgreSQL", level: 82 },
  { label: "Linux Admin", level: 85 },
  { label: "LLM Pipelines", level: 88 },
  { label: "Security", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <CircuitLines className="absolute top-16 left-0 w-72 text-vault-blue hidden md:block" />
      <CircuitLines className="absolute bottom-16 right-0 w-72 text-vault-blue rotate-180 hidden md:block" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader label="SKILLS" index="04" />

        {/* Proficiency bars */}
        <FadeInOnScroll className="mb-10">
          <div className="vault-card p-5 rounded-sm">
            <div className="text-vault-amber text-xs tracking-wider mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-vault-amber rounded-full animate-pulse" />
              S.P.E.C.I.A.L. PROFICIENCY
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {proficiencyBars.map((bar, i) => (
                <AnimatedBar key={bar.label} label={bar.label} level={bar.level} delay={i * 100} />
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <FadeInOnScroll key={i} delay={i * 80}>
              <div className="vault-card p-4 rounded-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-vault-blue text-xs font-mono">{cat.icon}</span>
                  <h3 className="text-vault-blue-glow text-xs font-bold tracking-wider">
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-1">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-vault-text-dim">
                      <span className="w-1 h-1 rounded-full bg-vault-blue shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
