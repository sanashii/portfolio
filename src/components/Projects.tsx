import { SectionHeader } from "./About";

const proprietaryProjects = [
  {
    title: "Influencer Outreach Copilot",
    subtitle: "Human-in-the-Loop LLM Drafting",
    description:
      "AI system that drafts replies to influencer emails across every stage — first reply, follow-ups, negotiation, product shipping and content-posted checks — with a person approving each draft. Follow-up cadence rules nudge quiet leads, auto-drop stale ones, cap sends, and stop the moment a human closes a task. A daily invariants monitor checks pipeline state and repairs or flags cards that drift out of sync.",
    impact: "Drafter retrained from team feedback using approve-rate tracking and an exemplar pack",
    tech: ["Claude API", "Python", "n8n", "ClickUp API", "Instantly", "Klaviyo"],
  },
  {
    title: "YouTube Creator Discovery Engine",
    subtitle: "Multi-Lane Discovery + LLM Fit-Screen",
    description:
      "Multi-lane discovery pipeline — keyword search, similar-channel mining, similar-videos, cluster queries and collab mining — feeding an LLM fit-screen with AI-content detection as a signal. A multi-armed-bandit allocator (Thompson Sampling) spends a limited API credit budget across lanes. Clean-room experiments measured lead quality and dedup rates, reported back to the ops manager.",
    impact: "Reduced third-party API costs from $200+/run to <$5/run",
    tech: ["Python", "YouTube Data API", "Claude AI", "Thompson Sampling", "n8n", "Apify"],
  },
  {
    title: "Customer Service Automation",
    subtitle: "AI Triage Agent + Review Drafting",
    description:
      "AI triage agent for the helpdesk with a canary and retry for silent failures and a detector that catches model refusals. Complaint and replacement pipelines validate data shape and alert staff when something is stuck. Review responses are AI-drafted and pushed to the review platform as drafts for a person to approve.",
    impact: "Silent failures and refusals caught automatically instead of by customers",
    tech: ["Claude AI", "Python", "n8n", "Richpanel", "Schema Validation"],
  },
  {
    title: "UK/EU Storefront Launch",
    subtitle: "Shopify Liquid + Accessibility",
    description:
      "Custom Liquid sections for a UK/EU brand launch: multi-market pricing, a currency switcher, geo-routing popups, German translations, review layouts and comparison tables. Followed with an accessibility and performance pass, Lighthouse improvements and validated Rich Results.",
    impact: "WAVE accessibility errors cut from 37 to 0",
    tech: ["Shopify Liquid", "Shopify Admin API", "Storefront API", "JavaScript", "CSS"],
  },
  {
    title: "Amazon Monitoring + Data Warehouse",
    subtitle: "Marketplace Watch & Unified Data",
    description:
      "Nightly monitor that catches other sellers hijacking listings, a listing image snapshot/diff tool, and product-family integrity checks across US/UK/EU marketplaces. A Postgres/Supabase warehouse unifies email, Shopify, Amazon and review data with Metabase dashboards, and mines reviews into a glossary of the words customers actually use.",
    impact: "Listing hijacks and image changes surfaced overnight across every market",
    tech: ["Amazon SP-API", "Supabase", "PostgreSQL", "Metabase", "Python"],
  },
  {
    title: "Self-Filling Scorecards",
    subtitle: "Reporting & Dashboards",
    description:
      "Weekly scorecards that populate themselves from Amazon Ads, Meta Graph, Shopify and Google Sheets APIs, a customer-sentiment \"Pulse\" dashboard, a daily ops report, and a game-styled pipeline map so the team can see where every lead sits.",
    impact: "Weekly reporting runs hands-off from four data sources",
    tech: ["Amazon Ads API", "Meta Graph API", "Shopify API", "Google Sheets API", "Python"],
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
      "Root-caused a multi-day production outage where schedule triggers fired ~745 executions/sec, growing the DB from 14MB to 2.2GB. Built size-adaptive auto-prune scripts, hostname-guard patterns for 20+ cron entries, SSH key rollouts, auditd monitoring, and GitHub org migration with proper access controls. Ongoing near-daily on-call: fixes for retry and 429 rate-limit storms, double-send guards, cron heartbeats and missed-run detection, OAuth token rotation, plus shared agent memory and context word-budget tooling for the team's Claude Code setup.",
    impact: "Zero-downtime operations after hardening; eliminated cross-server duplicate fires",
    tech: ["Docker", "Nginx", "Let's Encrypt", "Bash", "Linux/cron", "Claude Code", "GitHub"],
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
