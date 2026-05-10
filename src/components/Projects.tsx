import { SectionHeader } from "./About";

const proprietaryProjects = [
  {
    title: "Affiliate Discovery Pipeline",
    subtitle: "Autonomous 3-Workflow System",
    description:
      "Designed and shipped a 3-tier affiliate discovery system from scratch through 4 stakeholder-driven design iterations. Features Thompson Sampling with epsilon-greedy exploration, LLM-based screening, and self-perpetuating compounding loops that grew verified US Anchors from 0 to 40+ from a single seed batch.",
    impact: "Reduced third-party API costs from $200+/run to <$5/run (~$22/year all-in)",
    tech: ["n8n", "Python", "Claude AI", "Google Sheets API", "Apify", "Thompson Sampling"],
  },
  {
    title: "Customer Feedback DB + AI Sentiment",
    subtitle: "End-to-End Data Pipeline",
    description:
      "Built the Customer Feedback DB on Supabase with customer_reviews (867 rows), customer_conversations (4,333 rows), and a unified view. Shipped an AI sentiment-analysis pipeline using Claude Sonnet with structured-JSON prompts. Includes real-time scoring via n8n webhooks and a Python backfill for 4,364 historical rows.",
    impact: "Unified customer intelligence across all channels with real-time AI analysis",
    tech: ["Supabase", "PostgreSQL", "Python", "Claude AI", "n8n", "Richpanel"],
  },
  {
    title: "Infrastructure & SRE",
    subtitle: "Production Environment Hardening",
    description:
      "Root-caused a multi-day production outage where schedule triggers fired ~745 executions/sec, growing the DB from 14MB to 2.2GB. Built size-adaptive auto-prune scripts, hostname-guard patterns for 20+ cron entries, SSH key rollouts, auditd monitoring, and GitHub org migration with proper access controls.",
    impact: "Zero-downtime operations after hardening; eliminated cross-server duplicate fires",
    tech: ["Docker", "Nginx", "Let's Encrypt", "Bash", "auditd", "fail2ban", "GitHub"],
  },
  {
    title: "Security & Compliance Program",
    subtitle: "Amazon SP-API + GDPR",
    description:
      "Owned the Amazon SP-API Restricted-Roles application end-to-end — wrote use-case documents for 5 roles, authored Data Protection Policy, Privacy Policy updates (GDPR transfers, breach notification), and post-approval runbook. Resolved 6 Dependabot alerts in 2 days, configured branch protection, and established security SLAs.",
    impact: "Full regulatory compliance achieved; Critical 7d / High 30d remediation SLAs enforced",
    tech: ["Amazon SP-API", "GDPR", "Dependabot", "ClickUp", "GitHub Security"],
  },
  {
    title: "Email Discovery + Validation",
    subtitle: "Multi-Market Pipeline",
    description:
      "Built US + UK email discovery workflows with staggered Schedule Triggers, Apify contact-info-scraper, and ZeroBounce validation. Tuned crawler config (maxDepth: 3, maxRequestsPerStartUrl: 5) after diagnosing 3 actor-specific gotchas.",
    impact: "25% email yield (US) / 20% (UK), with depth-3 recovery of +14% US / +6% UK over default",
    tech: ["n8n", "Apify", "ZeroBounce", "Google Sheets"],
  },
];

const publicProjects = [
  {
    title: "Pointview",
    description:
      "A unified scoring index using NLP and ML to analyze hotel and restaurant customer reviews for sentiment and service insights. Built Python pipelines for data scraping, preprocessing, and topic modeling.",
    tech: ["Python", "BeautifulSoup", "Selenium", "NLTK", "spaCy", "Scikit-learn", "Gensim"],
    url: "https://github.com/sanashii/pointview",
  },
  {
    title: "Network Graph — Epstein Files",
    description:
      "Data analysis and network graph visualization project exploring public dataset relationships using Jupyter Notebook. (Work in progress — currently on hold)",
    tech: ["Jupyter Notebook", "Python", "NetworkX"],
    url: "https://github.com/sanashii/network-graph-epstein-files",
    wip: true,
  },
  {
    title: "ProFTPD Management System",
    description:
      "Web-based management system for ProFTPD with Admin and SFTP interfaces, LDAP authentication, role-based access controls, and storage statistics.",
    tech: ["Python", "Flask", "SQLAlchemy", "MySQL", "Bootstrap", "JavaScript"],
    url: "https://github.com/sanashii/proftpd_flask",
  },
  {
    title: "Approval Flow",
    description:
      "Approval workflow management application built with Vue.js.",
    tech: ["Vue.js", "JavaScript"],
    url: "https://github.com/sanashii/approvalflow",
  },
  {
    title: "Flashcard Mobile",
    description:
      "Mobile flashcard application built with C# for studying and revision.",
    tech: ["C#", "Mobile Development"],
    url: "https://github.com/sanashii/flashcard_mobile",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative noise-bg">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="PROJECTS" index="03" />

        {/* Proprietary Work */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-vault-amber text-xs tracking-wider border border-vault-amber/30 px-2 py-0.5 rounded-sm">
              CLASSIFIED
            </span>
            <span className="text-vault-text-dim text-xs">
              Professional work — proprietary codebases, presented as case studies
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {proprietaryProjects.map((p, i) => (
              <div key={i} className="vault-card p-5 rounded-sm flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-vault-blue-glow font-bold text-sm">{p.title}</h3>
                    <div className="text-vault-text-dim text-[0.65rem] tracking-wider">{p.subtitle}</div>
                  </div>
                  <span className="text-vault-amber text-[0.6rem] border border-vault-amber/30 px-1.5 py-0.5 rounded-sm shrink-0">
                    PROPRIETARY
                  </span>
                </div>
                <p className="text-vault-text-dim text-xs leading-relaxed mb-3 flex-1">
                  {p.description}
                </p>
                <div className="pip-boy-border px-3 py-1.5 rounded-sm mb-3">
                  <div className="text-vault-green text-[0.65rem]">
                    <span className="text-vault-text-dim">Impact:</span> {p.impact}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Public Projects */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-vault-green text-xs tracking-wider border border-vault-green/30 px-2 py-0.5 rounded-sm">
              OPEN SOURCE
            </span>
            <span className="text-vault-text-dim text-xs">
              Public repositories on GitHub
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {publicProjects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="vault-card p-5 rounded-sm flex flex-col group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-vault-blue-glow font-bold text-sm group-hover:text-vault-cyan transition-colors">
                      {p.title}
                    </h3>
                    {"wip" in p && p.wip && (
                      <span className="text-vault-amber text-[0.6rem] border border-vault-amber/30 px-1.5 py-0.5 rounded-sm">
                        WIP
                      </span>
                    )}
                  </div>
                  <svg className="w-4 h-4 text-vault-text-dim group-hover:text-vault-blue-glow transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-vault-text-dim text-xs leading-relaxed mb-3 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
