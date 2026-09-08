import { createFileRoute } from "@tanstack/react-router";
import ceilingLeak from "@/assets/ceiling-leak.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StrataOS AI — AI Operating System for Strata Management" },
      {
        name: "description",
        content:
          "Run hundreds of properties with one AI-powered operations team. Levies, maintenance, contractors, AGMs and compliance in one platform.",
      },
      { property: "og:title", content: "StrataOS AI — AI Operating System for Strata Management" },
      {
        property: "og:description",
        content:
          "One platform for owners, tenants, committees, levies, maintenance, contractors, meetings and compliance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const workflow: Array<[string, string, string, string]> = [
  ["01", "Property & Lot Management", "Buildings, lots, owners, tenants, committees", "text-mint"],
  ["02", "Financials", "Budgets, levies, AP, AR, reconciliations", "text-aurora2"],
  ["03", "Maintenance", "Requests, work orders, quotes, approvals", "text-aurora3"],
  ["04", "Contractors", "Vendors, licences, insurance, compliance", "text-mint"],
  ["05", "Governance", "AGMs, committee meetings, motions, voting", "text-aurora2"],
  ["06", "Compliance", "Fire, WHS, insurance, inspections, certificates", "text-aurora3"],
  ["07", "Communications", "Notices, updates, owner portal, resident requests", "text-mint"],
  ["08", "Reporting", "Portfolio, property and financial performance", "text-aurora2"],
];

const coreCards = [
  {
    title: "Property & Lot 360",
    lead: "See every record in one profile.",
    accent: "text-mint",
    items: [
      "Building",
      "Lot",
      "Owner",
      "Tenant",
      "Committee member",
      "Document",
      "Communication",
      "Issue",
    ],
  },
  {
    title: "Financial Management",
    lead: "Manage the full money cycle.",
    accent: "text-aurora2",
    items: [
      "Budgets",
      "Levies",
      "Arrears",
      "AP / AR",
      "Bank reconciliation",
      "Trust workflows",
      "Financial statements",
    ],
  },
  {
    title: "Maintenance & Work Orders",
    lead: "From issue to resolution.",
    accent: "text-aurora3",
    items: [
      "Request intake",
      "Photos",
      "Priority",
      "Quotes",
      "Approval",
      "Contractor assignment",
      "Completion",
      "Cost tracking",
    ],
  },
  {
    title: "Contractor Management",
    lead: "Track every supplier.",
    accent: "text-mint",
    items: [
      "Preferred suppliers",
      "Insurance",
      "Licences",
      "WHS documents",
      "Performance",
      "Pricing",
      "Expiry dates",
    ],
  },
  {
    title: "Meetings & Governance",
    lead: "Manage the decision record.",
    accent: "text-aurora2",
    items: [
      "AGM",
      "Committee meetings",
      "Motions",
      "Voting",
      "Agendas",
      "Minutes",
      "Resolutions",
      "Action items",
    ],
  },
  {
    title: "Compliance",
    lead: "Track every obligation.",
    accent: "text-aurora3",
    items: [
      "Fire inspections",
      "Insurance",
      "WHS",
      "Lift servicing",
      "Safety certificates",
      "Statutory deadlines",
      "Audit evidence",
    ],
  },
];

const aiSteps = [
  "Classifies urgency",
  "Identifies the property and lot",
  "Checks previous maintenance history",
  "Determines likely responsibility",
  "Finds approved contractors",
  "Requests quotes or dispatches urgent work",
  "Notifies relevant parties",
  "Tracks the issue to completion",
];

const questions = [
  "Which buildings need attention today?",
  "Which properties have rising maintenance costs?",
  "Which levy accounts are most overdue?",
  "Which contractors are underperforming?",
  "Which AGMs are not ready?",
  "What compliance items are due this month?",
  "Which buildings are running over budget?",
  "Which unresolved issues have been open more than 30 days?",
];

const montage = [
  { name: "Portfolio dashboard", detail: "284 buildings · 6,420 lots", accent: "from-mint/25" },
  { name: "Maintenance AI", detail: "87 open jobs · 7 urgent", accent: "from-aurora2/25" },
  { name: "AGM assistant", detail: "14 meetings this month", accent: "from-aurora3/25" },
  { name: "Compliance dashboard", detail: "23 items due · 5 critical", accent: "from-mint/25" },
  { name: "Owner portal", decor: "portal", detail: "Levies, notices, documents", accent: "from-aurora2/25" },
  { name: "Mobile resident request", detail: "Report an issue in 30 seconds", accent: "from-aurora3/25" },
];

function SectionHeading({
  eyebrow,
  title,
  sub,
  accent = "text-mint",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  accent?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${accent}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{sub}</p> : null}
    </div>
  );
}

function BigLine({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-12 max-w-3xl text-balance text-center font-display text-xl font-medium leading-snug text-white/85 sm:text-2xl md:text-3xl">
      {children}
    </p>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-ink text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
        <div className="aurora" />
        <div className="grid-lines absolute inset-0" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-mint to-aurora2 font-display text-base font-bold text-ink">
              S
            </span>
            <span className="truncate font-display text-base font-semibold tracking-tight sm:text-lg">
              StrataOS AI
            </span>
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-7 text-sm text-white/60 lg:flex">
              <a className="transition hover:text-white" href="#platform">
                Platform
              </a>
              <a className="transition hover:text-white" href="#ai">
                AI Agents
              </a>
              <a className="transition hover:text-white" href="#compliance">
                Compliance
              </a>
              <a className="transition hover:text-white" href="#command">
                Command Centre
              </a>
            </nav>
            <a
              href="#demo"
              className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white/90"
            >
              Book a demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-20"
      >
        <div className="lg:col-span-5">
          <span className="chip inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-[11px] leading-snug text-mint sm:text-xs">
            <span className="size-1.5 shrink-0 rounded-full bg-mint" />
            The AI Operating System for Strata &amp; Property Management
          </span>
          <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Run hundreds of properties with one{" "}
            <span className="bg-gradient-to-r from-mint via-aurora2 to-aurora3 bg-clip-text text-transparent">
              AI-powered operations team
            </span>
            .
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Owners. Tenants. Committees. Levies. Maintenance. Contractors. Meetings. Compliance.
            Finance.
          </p>
          <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-white/85 sm:text-base">
            One platform. One source of truth. AI automating the admin behind every property.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="rounded-full bg-gradient-to-r from-mint to-aurora2 px-5 py-3 text-sm font-semibold text-ink shadow-[0_16px_40px_-16px_rgba(94,234,212,0.8)] transition hover:brightness-110"
            >
              See StrataOS AI in Action →
            </a>
            <a
              href="#platform"
              className="chip rounded-full px-5 py-3 text-sm font-medium text-white/80 transition hover:text-white"
            >
              Explore the platform
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ["284", "Buildings"],
              ["6,420", "Lots"],
              ["A$1.8M", "Levies outstanding"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-2xl font-bold sm:text-3xl">{v}</dd>
                <p className="mt-1 text-xs text-white/45">{l}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <div className="glass grid gap-5 rounded-3xl p-4 sm:p-5 lg:grid-cols-5">
            <div className="min-w-0 lg:col-span-3">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Portfolio overview
                </span>
                <span className="text-xs text-white/40">This week</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["87", "Open maintenance jobs", ""],
                  ["23", "Compliance items due", "text-aurora3"],
                  ["14", "AGMs this month", ""],
                  ["A$1.8M", "Levies outstanding", "text-mint"],
                ].map(([v, l, c]) => (
                  <div key={l} className="chip min-w-0 rounded-xl p-3">
                    <div className={`font-display text-xl font-bold sm:text-2xl ${c}`}>{v}</div>
                    <div className="mt-0.5 text-[11px] leading-snug text-white/50">{l}</div>
                  </div>
                ))}
              </div>
              <div className="chip mt-3 rounded-xl p-4">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="min-w-0 truncate text-white/70">Maintenance backlog</span>
                  <span className="shrink-0 text-mint">-18%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-mint to-aurora2" />
                </div>
              </div>
            </div>
            <div className="min-w-0 lg:col-span-2">
              <div className="flex items-center gap-2">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-aurora2 to-aurora3 font-display text-[10px] font-bold text-ink">
                  AI
                </span>
                <span className="truncate text-xs font-semibold">AI Strata Manager</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ["bg-red-400", "7 urgent maintenance issues need action."],
                  ["bg-amber-400", "4 contractor certificates expire this week."],
                  ["bg-aurora2", "12 levy accounts require escalation."],
                  ["bg-aurora3", "3 upcoming AGMs have incomplete agenda packs."],
                ].map(([dot, text]) => (
                  <li key={text} className="flex gap-2">
                    <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${dot}`} />
                    <span className="min-w-0 text-white/70">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href="#ai"
                  className="rounded-lg bg-white px-3 py-2 text-center text-xs font-semibold text-ink transition hover:bg-white/90"
                >
                  Resolve Issues →
                </a>
                <a
                  href="#governance"
                  className="chip rounded-lg px-3 py-2 text-center text-xs font-medium text-white/80 transition hover:text-white"
                >
                  Prepare AGMs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="platform" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeading
          eyebrow="One connected system"
          title="Stop managing buildings through inboxes and spreadsheets."
          sub="StrataOS connects the full operating cycle — eight workflows around a single building record."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.slice(0, 4).map(([num, title, desc, color]) => (
            <WorkflowCard key={num} num={num} title={title} desc={desc} color={color} />
          ))}
        </div>
        <div className="glass my-4 flex flex-col items-center gap-3 rounded-3xl px-6 py-8 text-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-mint to-aurora3 font-display text-lg font-bold text-ink">
            ⌂
          </span>
          <p className="font-display text-base font-semibold sm:text-lg">
            One central property record
          </p>
          <p className="max-w-md text-xs text-white/50 sm:text-sm">
            Every workflow reads and writes to the same building, lot and owner history.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.slice(4).map(([num, title, desc, color]) => (
            <WorkflowCard key={num} num={num} title={title} desc={desc} color={color} />
          ))}
        </div>
        <BigLine>
          One building record. One owner history.{" "}
          <span className="text-mint">One operational truth.</span>
        </BigLine>
      </section>

      {/* Core operating system */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Core strata operating system"
          title="Everything your team needs to run the portfolio."
          accent="text-aurora2"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreCards.map((card) => (
            <div
              key={card.title}
              className="glass flex flex-col rounded-2xl p-6 transition hover:border-white/20"
            >
              <div className="font-display text-lg font-semibold leading-snug">{card.title}</div>
              <p className={`mt-1 text-xs ${card.accent}`}>{card.lead}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <li key={item} className="chip rounded-full px-3 py-1 text-xs text-white/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* AI Maintenance */}
      <section id="ai" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeading
          eyebrow="AI Maintenance Manager"
          title="Turn every maintenance request into an automated workflow."
        />
        <div className="glass mt-12 grid gap-8 rounded-3xl p-5 sm:p-7 lg:grid-cols-2 lg:p-9">
          <div className="min-w-0">
            <div className="chip rounded-2xl p-4">
              <div className="text-[11px] uppercase tracking-wider text-white/40">
                Resident submitted
              </div>
              <p className="mt-2 text-sm text-white/85">“Water is leaking through my ceiling.”</p>
              <img
                src={ceilingLeak}
                alt="Water stain leaking through a residential ceiling"
                width={1024}
                height={576}
                loading="lazy"
                className="mt-3 aspect-[16/9] w-full rounded-lg object-cover"
              />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              StrataOS AI immediately
            </p>
            <ol className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {aiSteps.map((step, i) => (
                <li key={step} className="flex gap-2.5 text-xs leading-snug text-white/65">
                  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-mint/15 font-display text-[10px] font-bold text-mint">
                    {i + 1}
                  </span>
                  <span className="min-w-0">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-white/40">
              Structured work order
            </div>
            <div className="chip mt-2 rounded-2xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display text-sm font-semibold sm:text-base">
                  Maintenance Request #4821
                </span>
                <span className="shrink-0 rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-medium text-red-300">
                  🔴 Urgent
                </span>
              </div>
              <dl className="mt-5 space-y-2.5 text-sm">
                {[
                  ["Issue", "Ceiling water leak", ""],
                  ["Likely source", "Lot above / common plumbing", ""],
                  ["Recommended contractor", "AquaFix Plumbing", ""],
                  ["Estimated response", "45 mins", "text-mint"],
                ].map(([k, v, c]) => (
                  <div key={k} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <dt className="text-white/45">{k}</dt>
                    <dd className={`min-w-0 text-right ${c}`}>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 rounded-xl bg-mint/10 p-3 text-sm leading-relaxed text-mint">
                Dispatch emergency plumber now and notify Building Manager + affected owner.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink transition hover:bg-white/90">
                  Dispatch Contractor
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80 transition hover:text-white">
                  Request Approval
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80 transition hover:text-white">
                  Escalate
                </button>
              </div>
            </div>
          </div>
        </div>
        <BigLine>
          From email chaos to <span className="text-mint">structured resolution in minutes.</span>
        </BigLine>
      </section>

      {/* Meetings */}
      <section id="governance" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeading
          eyebrow="AI Meeting & Governance Agent"
          title="Let AI prepare the AGM before your manager opens the file."
          accent="text-aurora2"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">
              Before meeting
            </div>
            <div className="mt-2 font-display text-lg font-semibold">AGM Pack</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Agenda",
                "Financial summary",
                "Proposed motions",
                "Outstanding actions",
                "Supporting documents",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-mint">✓</span>
                  <span className="min-w-0">{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-white/40">
              Gathered automatically: open maintenance items, financial position, overdue levies,
              previous resolutions, contractor issues, compliance deadlines, outstanding motions.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">Live meeting</div>
            <div className="mt-2 font-display text-lg font-semibold">AI Meeting Assistant</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Records discussion",
                "Transcribes",
                "Identifies motions",
                "Captures votes",
                "Tracks decisions",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-aurora2">•</span>
                  <span className="min-w-0">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">After meeting</div>
            <div className="mt-2 font-display text-lg font-semibold">Minutes &amp; Actions</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Minutes",
                "Resolutions",
                "Action items",
                "Owners",
                "Deadlines",
                "Follow-up workflows",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-aurora3">•</span>
                  <span className="min-w-0">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <BigLine>
          Turn 4 hours of meeting admin into{" "}
          <span className="text-mint">20 minutes of review.</span>
        </BigLine>
      </section>

      {/* Compliance */}
      <section id="compliance" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeading
          eyebrow="AI Compliance & Contractor Copilot"
          title="Know what will become a problem before it becomes one."
          accent="text-aurora3"
        />
        <div className="glass mt-12 grid gap-8 rounded-3xl p-5 sm:p-7 lg:grid-cols-2 lg:p-9">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              AI continuously monitors
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Insurance expiry",
                "Fire safety inspections",
                "Lift servicing",
                "Contractor licences",
                "WHS documents",
                "Certificates",
                "Statutory deadlines",
                "Open compliance actions",
              ].map((i) => (
                <li key={i} className="chip rounded-full px-3 py-1 text-xs text-white/70">
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["5", "Red", "bg-red-500/15 text-red-300"],
                ["9", "Amber", "bg-amber-500/15 text-amber-300"],
                ["212", "Green", "bg-mint/15 text-mint"],
              ].map(([v, l, c]) => (
                <div key={l} className={`rounded-xl p-3 text-center ${c}`}>
                  <div className="font-display text-xl font-bold">{v}</div>
                  <div className="mt-0.5 text-[11px] opacity-80">{l}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-display text-lg font-medium leading-snug text-white/85 sm:text-xl">
              Compliance becomes <span className="text-mint">continuous</span>, not
              calendar-driven.
            </p>
          </div>
          <div className="min-w-0 space-y-3">
            <div className="chip rounded-2xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display font-semibold">Compliance Alert</span>
                <span className="text-xs text-white/45">Building: Harbour View</span>
              </div>
              <div className="mt-3 flex gap-2 text-sm text-red-300">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-400" />
                <span className="min-w-0">Contractor public liability expires in 5 days.</span>
              </div>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm">
                <span className="text-white/45">Affected work order</span>
                <span className="min-w-0 text-right">Roof repair — A$42,000</span>
              </div>
              <p className="mt-4 rounded-xl bg-mint/10 p-3 text-sm leading-relaxed text-mint">
                Do not approve commencement until an updated insurance certificate is received.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink transition hover:bg-white/90">
                  Request Certificate
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80 transition hover:text-white">
                  Hold Work Order
                </button>
              </div>
            </div>
            <div className="chip rounded-2xl p-5 text-sm text-white/70">
              <div className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400" />
                <span className="min-w-0">
                  Annual fire inspection due in 14 days. Last provider: SafeFire Services. Would you
                  like me to request a booking?
                </span>
              </div>
            </div>
            <div className="chip rounded-2xl p-5 text-sm text-white/70">
              <div className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint" />
                <span className="min-w-0">212 insurance policies current across the portfolio.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Command centre */}
      <section id="command" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeading
          eyebrow="AI Portfolio Command Centre"
          title="Ask your entire portfolio anything."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ul className="flex flex-wrap content-start gap-2">
            {questions.map((q) => (
              <li
                key={q}
                className="chip rounded-full px-3.5 py-2 text-xs leading-snug text-white/65"
              >
                “{q}”
              </li>
            ))}
          </ul>
          <div className="glass min-w-0 rounded-3xl p-4 sm:p-6">
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl bg-white px-4 py-2 text-sm font-medium text-ink">
              What are my biggest portfolio risks this week?
            </div>
            <div className="chip mt-4 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-aurora2 to-aurora3 font-display text-[10px] font-bold text-ink">
                  AI
                </span>
                <span className="min-w-0 truncate text-xs font-semibold">
                  StrataOS AI — 5 issues require action
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ["bg-red-400", "A$274K overdue levies", "31 accounts are more than 60 days overdue."],
                  ["bg-red-400", "7 urgent maintenance jobs", "2 have no contractor assigned."],
                  ["bg-amber-400", "14 compliance items", "5 expire within 10 days."],
                  ["bg-aurora3", "3 AGMs incomplete", "Financial packs are missing."],
                ].map(([dot, title, sub]) => (
                  <li key={title} className="flex gap-2">
                    <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${dot}`} />
                    <span className="min-w-0">
                      <span className="font-medium">{title}</span>
                      <span className="block text-white/50">{sub}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink transition hover:bg-white/90">
                  Chase Levies
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80 transition hover:text-white">
                  Assign Contractors
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80 transition hover:text-white">
                  Prepare AGM Packs
                </button>
              </div>
            </div>
          </div>
        </div>
        <BigLine>
          Don&apos;t give your strata managers more dashboards.{" "}
          <span className="text-mint">Give them an AI operations manager.</span>
        </BigLine>
      </section>

      {/* Final value */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeading
          eyebrow="A new operating model"
          title="Manage more properties without multiplying administration."
          accent="text-aurora2"
        />
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.16em] text-mint">Core platform</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Property Management",
                "Financials",
                "Maintenance",
                "Contractors",
                "Governance",
                "Compliance",
                "Communications",
              ].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.16em] text-aurora2">AI workforce</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Maintenance Manager",
                "Meeting Agent",
                "Compliance Copilot",
                "Portfolio AI",
                "Document AI",
                "Workflow Automation",
              ].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.16em] text-aurora3">
              Human operations
            </div>
            <p className="mt-3 text-xs text-white/45">Optional APT support for:</p>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              {[
                "AP / AR",
                "Reconciliations",
                "Levy administration",
                "Meeting preparation",
                "Contractor coordination",
                "Document processing",
                "Back-office operations",
              ].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <BigLine>
          <span className="text-mint">=</span> A new operating model for strata businesses.
        </BigLine>
      </section>

      {/* Montage */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {montage.map((m) => (
            <div key={m.name} className="glass overflow-hidden rounded-2xl p-4">
              <div
                className={`relative flex aspect-[16/10] items-end overflow-hidden rounded-xl bg-gradient-to-br ${m.accent} to-transparent p-3`}
              >
                <div className="absolute inset-3 grid grid-rows-4 gap-1.5 opacity-70">
                  <div className="rounded bg-white/15" />
                  <div className="rounded bg-white/10" />
                  <div className="rounded bg-white/10" />
                  <div className="rounded bg-white/5" />
                </div>
              </div>
              <div className="mt-3 font-display text-sm font-semibold">{m.name}</div>
              <div className="mt-0.5 text-xs text-white/45">{m.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="relative z-10 mx-auto max-w-4xl px-5 py-20 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          Your strata managers should manage relationships and make decisions.
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-mint to-aurora2 bg-clip-text text-transparent">
            AI should run the administration around them.
          </span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#demo"
            className="rounded-full bg-gradient-to-r from-mint to-aurora2 px-6 py-3 text-sm font-semibold text-ink shadow-[0_16px_40px_-16px_rgba(94,234,212,0.8)] transition hover:brightness-110"
          >
            See StrataOS AI in Action →
          </a>
          <a
            href="#demo"
            className="chip rounded-full px-6 py-3 text-sm font-medium text-white/80 transition hover:text-white"
          >
            Request a Tailored Demo
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-12 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-mint to-aurora2 font-display text-sm font-bold text-ink">
              S
            </span>
            <span className="font-display text-base font-semibold">StrataOS AI</span>
          </div>
          <p className="text-sm text-white/55">
            The AI Operating System for Modern Strata &amp; Property Management.
          </p>
          <p className="text-xs text-white/35">Powered by APT Business Services + SoluLab</p>
        </div>
      </footer>
    </div>
  );
}

function WorkflowCard({
  num,
  title,
  desc,
  color,
}: {
  num: string;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="chip rounded-2xl p-5 transition hover:border-white/25">
      <div className={`font-display text-sm font-bold ${color}`}>{num}</div>
      <div className="mt-2 font-display text-sm font-semibold leading-snug">{title}</div>
      <div className="mt-1.5 text-xs leading-snug text-white/45">{desc}</div>
    </div>
  );
}
