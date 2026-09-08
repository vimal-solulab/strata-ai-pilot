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

const workflow = [
  ["01", "Property & Lots", "Buildings, owners, tenants, committees", "text-mint"],
  ["02", "Financials", "Budgets, levies, AP/AR, reconciliations", "text-aurora2"],
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

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="aurora pointer-events-none" />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-mint to-aurora2 font-display text-lg font-bold text-ink">
            S
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">StrataOS AI</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
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
        <a className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-white/30">
          Sign in
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-mint">
            <span className="size-1.5 rounded-full bg-mint" /> The AI Operating System for Strata &
            Property Management
          </span>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.03] tracking-tight">
            Run hundreds of properties with one{" "}
            <span className="bg-gradient-to-r from-mint via-aurora2 to-aurora3 bg-clip-text text-transparent">
              AI operations team
            </span>
            .
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
            Owners. Tenants. Committees. Levies. Maintenance. Contractors. Meetings. Compliance.
            Finance. One platform. One source of truth. AI automating the admin behind every
            property.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white/90">
              See StrataOS AI in Action →
            </a>
            <a className="chip rounded-full px-5 py-3 text-sm font-medium text-white/80 transition hover:text-white">
              Request a demo
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div>
              <div className="font-display text-3xl font-semibold">284</div>
              <div className="mt-1 text-xs text-white/45">Buildings</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold">6,420</div>
              <div className="mt-1 text-xs text-white/45">Lots</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-mint">A$1.8M</div>
              <div className="mt-1 text-xs text-white/45">Levies outstanding</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="glass grid gap-4 rounded-3xl p-5 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                  Portfolio overview
                </span>
                <span className="text-xs text-white/40">This week</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="chip rounded-xl p-3">
                  <div className="font-display text-2xl font-semibold">87</div>
                  <div className="text-xs text-white/45">Open maintenance jobs</div>
                </div>
                <div className="chip rounded-xl p-3">
                  <div className="font-display text-2xl font-semibold text-aurora3">23</div>
                  <div className="text-xs text-white/45">Compliance items due</div>
                </div>
                <div className="chip rounded-xl p-3">
                  <div className="font-display text-2xl font-semibold">14</div>
                  <div className="text-xs text-white/45">AGMs this month</div>
                </div>
                <div className="chip rounded-xl p-3">
                  <div className="font-display text-2xl font-semibold text-aurora2">12</div>
                  <div className="text-xs text-white/45">Levies to escalate</div>
                </div>
              </div>
              <div className="chip mt-3 rounded-xl p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Maintenance backlog</span>
                  <span className="text-mint">-18%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-mint to-aurora2" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-aurora2 to-aurora3 font-display text-xs font-bold text-ink">
                  AI
                </div>
                <span className="text-xs font-semibold">AI Strata Manager</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-400" />
                  <span className="text-white/70">7 urgent maintenance issues need action.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span className="text-white/70">
                    4 contractor certificates expire this week.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-aurora2" />
                  <span className="text-white/70">12 levy accounts require escalation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-aurora3" />
                  <span className="text-white/70">
                    3 upcoming AGMs have incomplete agenda packs.
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <button className="rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold text-ink transition hover:bg-white">
                  Resolve Issues →
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80 transition hover:text-white">
                  Prepare AGMs →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="platform" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            One system for the entire strata workflow
          </h2>
          <p className="mt-3 text-white/55">
            Stop managing buildings through inboxes, spreadsheets and disconnected systems. StrataOS
            connects the full operating cycle.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {workflow.map(([num, title, desc, color]) => (
            <div key={num} className="chip rounded-2xl p-5">
              <div className={`font-display text-sm ${color}`}>{num}</div>
              <div className="mt-2 font-display font-semibold">{title}</div>
              <div className="mt-1 text-xs text-white/45">{desc}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-display text-2xl font-medium text-white/80">
          One building record. One owner history.{" "}
          <span className="text-mint">One operational truth.</span>
        </p>
      </section>

      {/* Core operating system */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Core strata operating system
          </h2>
          <p className="mt-3 text-white/55">
            Everything your team needs to run the portfolio.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreCards.map((card) => (
            <div key={card.title} className="glass rounded-2xl p-6">
              <div className="font-display text-lg font-semibold">{card.title}</div>
              <p className="mt-1 text-xs text-white/45">{card.lead}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
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
      <section id="ai" className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="glass grid gap-6 rounded-3xl p-6 lg:grid-cols-2 lg:p-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-mint">
              AI Maintenance Manager
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              From email chaos to structured resolution in minutes.
            </h3>
            <div className="chip mt-6 rounded-2xl p-4">
              <div className="text-xs text-white/40">Resident submitted</div>
              <p className="mt-2 text-sm text-white/80">
                "Water is leaking through my ceiling."
              </p>
              <img
                src={ceilingLeak}
                alt="Water stain leaking through a residential ceiling"
                width={1024}
                height={576}
                loading="lazy"
                className="mt-3 aspect-[16/9] w-full rounded-lg object-cover"
              />
            </div>
            <ol className="mt-6 grid gap-2 sm:grid-cols-2">
              {aiSteps.map((step, i) => (
                <li key={step} className="flex gap-2 text-xs text-white/60">
                  <span className="font-display text-mint">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className="text-xs text-white/40">Structured work order</div>
            <div className="chip mt-2 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold">Maintenance Request #4821</span>
                <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-medium text-red-300">
                  Urgent
                </span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/45">Issue</span>
                  <span>Ceiling water leak</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/45">Likely source</span>
                  <span>Lot above / common plumbing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/45">Contractor</span>
                  <span>AquaFix Plumbing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/45">Response</span>
                  <span className="text-mint">45 mins</span>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-mint/10 p-3 text-sm text-mint">
                Dispatch emergency plumber now and notify Building Manager + affected owner.
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink">
                  Dispatch Contractor
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80">
                  Request Approval
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80">
                  Escalate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meetings */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-aurora2">
            AI Meeting & Governance Agent
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            Let AI prepare the AGM before your manager opens the file.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-white/40">Before meeting</div>
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
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/40">
              Gathered automatically: open maintenance, financial position, overdue levies, previous
              resolutions, contractor issues, compliance deadlines, outstanding motions.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-white/40">Live meeting</div>
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
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-white/40">After meeting</div>
            <div className="mt-2 font-display text-lg font-semibold">Minutes & Actions</div>
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
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center font-display text-2xl font-medium text-white/80">
          Turn 4 hours of meeting admin into{" "}
          <span className="text-mint">20 minutes of review.</span>
        </p>
      </section>

      {/* Compliance */}
      <section id="compliance" className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="glass grid gap-6 rounded-3xl p-6 lg:grid-cols-2 lg:p-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-aurora3">
              AI Compliance & Contractor Copilot
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              Know what will become a problem before it becomes one.
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
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
            <p className="mt-6 font-display text-xl font-medium text-white/80">
              Compliance becomes <span className="text-mint">continuous</span>, not
              calendar-driven.
            </p>
          </div>
          <div className="space-y-3">
            <div className="chip rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold">Compliance Alert</span>
                <span className="text-xs text-white/45">Harbour View</span>
              </div>
              <div className="mt-3 flex gap-2 text-sm text-red-300">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-400" />
                Contractor public liability expires in 5 days.
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-white/45">Affected work order</span>
                <span>Roof repair — A$42,000</span>
              </div>
              <div className="mt-4 rounded-xl bg-mint/10 p-3 text-sm text-mint">
                Do not approve commencement until an updated insurance certificate is received.
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink">
                  Request Certificate
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80">
                  Hold Work Order
                </button>
              </div>
            </div>
            <div className="chip rounded-2xl p-5 text-sm text-white/70">
              <div className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400" />
                <span>
                  Annual fire inspection due in 14 days. Last provider: SafeFire Services. Would you
                  like me to request a booking?
                </span>
              </div>
            </div>
            <div className="chip rounded-2xl p-5 text-sm text-white/70">
              <div className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint" />
                <span>212 insurance policies current across the portfolio.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Command centre */}
      <section id="command" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-mint">
            AI Portfolio Command Centre
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            Ask your entire portfolio anything.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ul className="flex flex-wrap gap-2 self-start">
            {questions.map((q) => (
              <li key={q} className="chip rounded-full px-3 py-2 text-xs text-white/60">
                “{q}”
              </li>
            ))}
          </ul>
          <div className="glass rounded-3xl p-6">
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl bg-white px-4 py-2 text-sm font-medium text-ink">
              What are my biggest portfolio risks this week?
            </div>
            <div className="mt-4 chip rounded-2xl p-5">
              <div className="flex items-center gap-2">
                <div className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-aurora2 to-aurora3 font-display text-xs font-bold text-ink">
                  AI
                </div>
                <span className="text-xs font-semibold">StrataOS AI — 5 issues require action</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>
                    <span className="font-medium">A$274K overdue levies</span>
                    <span className="block text-white/50">
                      31 accounts are more than 60 days overdue.
                    </span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>
                    <span className="font-medium">7 urgent maintenance jobs</span>
                    <span className="block text-white/50">2 have no contractor assigned.</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span>
                    <span className="font-medium">14 compliance items</span>
                    <span className="block text-white/50">5 expire within 10 days.</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-aurora3" />
                  <span>
                    <span className="font-medium">3 AGMs incomplete</span>
                    <span className="block text-white/50">Financial packs are missing.</span>
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink">
                  Chase Levies
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80">
                  Assign Contractors
                </button>
                <button className="chip rounded-lg px-3 py-2 text-xs font-medium text-white/80">
                  Prepare AGM Packs
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center font-display text-2xl font-medium text-white/80">
          Don't give your strata managers more dashboards.{" "}
          <span className="text-mint">Give them an AI operations manager.</span>
        </p>
      </section>

      {/* Final value */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Manage more properties without multiplying administration.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-mint">Core platform</div>
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
            <div className="text-xs uppercase tracking-wider text-aurora2">AI workforce</div>
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
            <div className="text-xs uppercase tracking-wider text-aurora3">Human operations</div>
            <p className="mt-4 text-xs text-white/45">Optional APT support for:</p>
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
        <p className="mt-10 text-center font-display text-2xl font-medium text-white/80">
          A new operating model for strata businesses.
        </p>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          Your managers make decisions.
          <br />
          <span className="bg-gradient-to-r from-mint to-aurora2 bg-clip-text text-transparent">
            AI runs the administration around them.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/55">
          Your strata managers should manage relationships and make decisions. AI should run the
          administration around them.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90">
            See StrataOS AI in Action →
          </a>
          <a className="chip rounded-full px-6 py-3 text-sm font-medium text-white/80 transition hover:text-white">
            Request a Tailored Demo
          </a>
        </div>
        <p className="mt-10 text-xs text-white/30">
          StrataOS AI — The AI Operating System for Modern Strata &amp; Property Management. Powered
          by APT Business Services + SoluLab
        </p>
      </section>
    </div>
  );
}
