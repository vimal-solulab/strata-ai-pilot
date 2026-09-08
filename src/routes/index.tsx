import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Building2,
  Wallet,
  Wrench,
  HardHat,
  Gavel,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  ClipboardList,
  Mic,
  CheckCircle2,
  Circle,
  Sparkles,
  Smartphone,
  Users,
  FileText,
  Camera,
  ArrowRight,
  ArrowDown,
  Bell,
  Clock,
  Menu,
  X,
  LayoutDashboard,
  Zap,
  type LucideIcon,
} from "lucide-react";
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

// ---------------------------------------------------------------------------
// Contact / demo request — every CTA on this page opens the visitor's email
// client via a mailto: link. Change CONTACT_EMAIL to redirect them all.
// ---------------------------------------------------------------------------
const CONTACT_EMAIL = "sales@solulab.com";
const DEMO_SUBJECT = "Demo Request — StrataOS AI";
const DEMO_BODY = `Hi StrataOS AI team,

I'd like to request a demo of StrataOS AI for our property portfolio.

Company name:
Number of properties/lots managed:
Preferred date/time for a demo:

Thanks,`;
const DEMO_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}&body=${encodeURIComponent(DEMO_BODY)}`;

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "AI Agents", href: "#ai" },
  { label: "Governance", href: "#governance" },
  { label: "Compliance", href: "#compliance" },
  { label: "Command Centre", href: "#command" },
];

const workflow: Array<{
  num: string;
  title: string;
  desc: string;
  accent: "brand" | "teal" | "slate2";
  icon: LucideIcon;
}> = [
  {
    num: "01",
    title: "Property & Lot Management",
    desc: "Buildings, lots, owners, tenants, committees",
    accent: "brand",
    icon: Building2,
  },
  {
    num: "02",
    title: "Financials",
    desc: "Budgets, levies, AP, AR, reconciliations",
    accent: "teal",
    icon: Wallet,
  },
  {
    num: "03",
    title: "Maintenance",
    desc: "Requests, work orders, quotes, approvals",
    accent: "slate2",
    icon: Wrench,
  },
  {
    num: "04",
    title: "Contractors",
    desc: "Vendors, licences, insurance, compliance",
    accent: "brand",
    icon: HardHat,
  },
  {
    num: "05",
    title: "Governance",
    desc: "AGMs, committee meetings, motions, voting",
    accent: "teal",
    icon: Gavel,
  },
  {
    num: "06",
    title: "Compliance",
    desc: "Fire, WHS, insurance, inspections, certificates",
    accent: "slate2",
    icon: ShieldCheck,
  },
  {
    num: "07",
    title: "Communications",
    desc: "Notices, updates, owner portal, resident requests",
    accent: "brand",
    icon: MessageSquare,
  },
  {
    num: "08",
    title: "Reporting",
    desc: "Portfolio, property and financial performance",
    accent: "teal",
    icon: BarChart3,
  },
];

const accentClasses: Record<"brand" | "teal" | "slate2", { text: string; bg: string; iconBg: string }> = {
  brand: { text: "text-brand", bg: "bg-brand", iconBg: "bg-brand/10 text-brand" },
  teal: { text: "text-teal", bg: "bg-teal", iconBg: "bg-teal/10 text-teal" },
  slate2: { text: "text-slate2", bg: "bg-slate2", iconBg: "bg-slate2/10 text-slate2" },
};

const coreCards: Array<{
  title: string;
  lead: string;
  accent: "brand" | "teal" | "slate2";
  icon: LucideIcon;
  items: string[];
  kind: "profile" | "finance" | "worklist" | "contractor" | "agenda" | "risk";
}> = [
  {
    title: "Property & Lot 360",
    lead: "See every record in one profile.",
    accent: "brand",
    icon: Building2,
    kind: "profile",
    items: ["Owner", "Tenant", "Committee", "Document"],
  },
  {
    title: "Financial Management",
    lead: "Manage the full money cycle.",
    accent: "teal",
    icon: Wallet,
    kind: "finance",
    items: ["Budgets", "AP / AR", "Bank reconciliation", "Financial statements"],
  },
  {
    title: "Maintenance & Work Orders",
    lead: "From issue to resolution.",
    accent: "slate2",
    icon: Wrench,
    kind: "worklist",
    items: ["Request intake", "Quotes", "Contractor assignment", "Cost tracking"],
  },
  {
    title: "Contractor Management",
    lead: "Track every supplier.",
    accent: "brand",
    icon: HardHat,
    kind: "contractor",
    items: ["Preferred suppliers", "WHS documents", "Performance", "Pricing"],
  },
  {
    title: "Meetings & Governance",
    lead: "Manage the decision record.",
    accent: "teal",
    icon: Gavel,
    kind: "agenda",
    items: ["Committee meetings", "Voting", "Resolutions", "Action items"],
  },
  {
    title: "Compliance",
    lead: "Track every obligation.",
    accent: "slate2",
    icon: ShieldCheck,
    kind: "risk",
    items: ["Fire inspections", "WHS", "Statutory deadlines", "Audit evidence"],
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

const meetingStages = [
  {
    stage: "Before meeting",
    title: "AGM Pack",
    icon: ClipboardList,
    accent: "brand" as const,
    items: ["Agenda", "Financial summary", "Proposed motions", "Outstanding actions", "Supporting documents"],
    note: "Gathered automatically: open maintenance items, financial position, overdue levies, previous resolutions, contractor issues, compliance deadlines, outstanding motions.",
  },
  {
    stage: "Live meeting",
    title: "AI Meeting Assistant",
    icon: Mic,
    accent: "teal" as const,
    items: ["Records discussion", "Transcribes", "Identifies motions", "Captures votes", "Tracks decisions"],
  },
  {
    stage: "After meeting",
    title: "Minutes & Actions",
    icon: CheckCircle2,
    accent: "slate2" as const,
    items: ["Minutes", "Resolutions", "Action items", "Owners", "Deadlines", "Follow-up workflows"],
  },
];

const complianceMonitors = [
  "Insurance expiry",
  "Fire safety inspections",
  "Lift servicing",
  "Contractor licences",
  "WHS documents",
  "Certificates",
  "Statutory deadlines",
  "Open compliance actions",
];

const compliancePills = [
  { value: 5, label: "Red", pct: 2.2, color: "bg-rose", text: "text-rose" },
  { value: 9, label: "Amber", pct: 4, color: "bg-amber", text: "text-amber" },
  { value: 212, label: "Green", pct: 93.8, color: "bg-teal", text: "text-teal" },
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

const riskRows = [
  { dot: "bg-rose", title: "A$274K overdue levies", sub: "31 accounts are more than 60 days overdue." },
  { dot: "bg-rose", title: "7 urgent maintenance jobs", sub: "2 have no contractor assigned." },
  { dot: "bg-amber", title: "14 compliance items", sub: "5 expire within 10 days." },
  { dot: "bg-amber", title: "3 AGMs incomplete", sub: "Financial packs are missing." },
];

const valueColumns = [
  {
    title: "Core Platform",
    accent: "brand" as const,
    icon: LayoutDashboard,
    items: ["Property Management", "Financials", "Maintenance", "Contractors", "Governance", "Compliance", "Communications"],
  },
  {
    title: "AI Workforce",
    accent: "teal" as const,
    icon: Zap,
    items: ["Maintenance Manager", "Meeting Agent", "Compliance Copilot", "Portfolio AI", "Document AI", "Workflow Automation"],
  },
  {
    title: "Human Operations",
    accent: "slate2" as const,
    icon: Users,
    lead: "Optional APT support for:",
    items: ["AP / AR", "Reconciliations", "Levy administration", "Meeting preparation", "Contractor coordination", "Document processing", "Back-office operations"],
  },
];

const productScreens = [
  {
    name: "Portfolio dashboard",
    detail: "284 buildings · 6,420 lots",
    tab: "portfolio.strataos.ai",
    icon: BarChart3,
    accent: "brand" as const,
    kind: "stats" as const,
    stats: [
      ["284", "Buildings"],
      ["6,420", "Lots"],
      ["87", "Jobs"],
      ["23", "Compliance"],
    ],
  },
  {
    name: "Maintenance AI",
    detail: "87 open jobs · 7 urgent",
    tab: "maintenance.strataos.ai",
    icon: Wrench,
    accent: "brand" as const,
    kind: "list" as const,
    rows: [
      { dot: "bg-rose", label: "Ceiling leak", tag: "Urgent" },
      { dot: "bg-amber", label: "Lift fault", tag: "In progress" },
      { dot: "bg-teal", label: "Gate repair", tag: "Scheduled" },
    ],
  },
  {
    name: "AGM assistant",
    detail: "14 meetings this month",
    tab: "governance.strataos.ai",
    icon: Gavel,
    accent: "teal" as const,
    kind: "checklist" as const,
    rows: [
      { done: true, label: "Agenda" },
      { done: true, label: "Financial summary" },
      { done: false, label: "Motions pending" },
    ],
  },
  {
    name: "Compliance dashboard",
    detail: "23 items due · 5 critical",
    tab: "compliance.strataos.ai",
    icon: ShieldCheck,
    accent: "brand" as const,
    kind: "compliance" as const,
    pills: [
      ["5", "Red", "bg-rose/10 text-rose"],
      ["9", "Amber", "bg-amber/10 text-amber"],
      ["212", "Green", "bg-teal/10 text-teal"],
    ],
  },
  {
    name: "Owner portal",
    detail: "Levies, notices, documents",
    tab: "portal.strataos.ai",
    icon: Users,
    accent: "slate2" as const,
    kind: "documents" as const,
    rows: ["Levy notice — Q3", "Insurance certificate", "AGM minutes"],
  },
  {
    name: "Mobile resident request",
    detail: "Report an issue in 30 seconds",
    tab: "app.strataos.ai",
    icon: Smartphone,
    accent: "teal" as const,
    kind: "mobile" as const,
  },
];

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function useIsShown() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 180px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useIsShown();
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-shown" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

function Counter({ value, format }: { value: number; format?: ((n: number) => string) | undefined }) {
  const { ref, shown } = useIsShown();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shown) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(eased * value);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, value]);

  return <span ref={ref}>{format ? format(display) : Math.round(display).toLocaleString()}</span>;
}

function WindowFrame({
  label,
  className = "",
  children,
}: {
  label?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`window flex flex-col overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-canvas-alt px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-rose/60" />
        <span className="size-2.5 rounded-full bg-amber/60" />
        <span className="size-2.5 rounded-full bg-teal/60" />
        {label ? (
          <span className="ml-3 truncate rounded-md border border-line bg-canvas px-2.5 py-1 text-[11px] text-muted2">
            {label}
          </span>
        ) : null}
      </div>
      <div className="flex-1 p-4 sm:p-5">{children}</div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  accent = "text-brand",
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  accent?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow ? (
        <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-brand-glow" : accent}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-3 text-balance font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {sub ? (
        <p className={`mt-4 text-sm leading-relaxed sm:text-base ${dark ? "text-white/65" : "text-body"}`}>{sub}</p>
      ) : null}
    </div>
  );
}

function BigLine({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mx-auto mt-10 max-w-3xl text-balance text-center font-display text-xl font-medium leading-snug sm:text-2xl md:text-3xl ${dark ? "text-white" : "text-ink"}`}
    >
      {children}
    </p>
  );
}

function WorkflowCard({
  num,
  title,
  desc,
  accent,
  icon: Icon,
}: {
  num: string;
  title: string;
  desc: string;
  accent: "brand" | "teal" | "slate2";
  icon: LucideIcon;
}) {
  const a = accentClasses[accent];
  return (
    <div className="surface card-hover flex flex-col rounded-2xl p-5">
      <div className="flex items-center justify-between gap-2">
        <span className={`font-display text-sm font-bold ${a.text}`}>{num}</span>
        <span className={`grid size-8 place-items-center rounded-lg ${a.iconBg}`}>
          <Icon className="size-4" strokeWidth={2} />
        </span>
      </div>
      <div className="mt-3 font-display text-sm font-semibold leading-snug text-ink">{title}</div>
      <div className="mt-1.5 text-xs leading-snug text-muted2">{desc}</div>
    </div>
  );
}

function ProductScreen({ p }: { p: (typeof productScreens)[number] }) {
  const a = accentClasses[p.accent];
  return (
    <WindowFrame label={p.tab} className="h-full card-hover">
      <div className="mb-3 flex items-center gap-2">
        <span className={`grid size-7 shrink-0 place-items-center rounded-lg ${a.iconBg}`}>
          <p.icon className="size-3.5" strokeWidth={2} />
        </span>
        <span className="truncate text-xs font-semibold text-ink">{p.name}</span>
      </div>
      <ProductScreenBody p={p} />
      <div className="mt-3 text-[11px] text-muted2">{p.detail}</div>
    </WindowFrame>
  );
}

function ProductScreenBody({ p }: { p: (typeof productScreens)[number] }) {
  switch (p.kind) {
    case "stats":
      return (
        <div className="grid grid-cols-2 gap-2">
          {p.stats.map(([v, l]) => (
            <div key={l} className="rounded-lg bg-canvas-alt px-2.5 py-2">
              <div className="font-display text-base font-bold text-ink">{v}</div>
              <div className="truncate text-[10px] uppercase tracking-wide text-muted2">{l}</div>
            </div>
          ))}
        </div>
      );
    case "list":
      return (
        <div className="flex flex-col gap-1.5">
          {p.rows.map((r) => (
            <div key={r.label} className="flex items-center gap-2 rounded-lg bg-canvas-alt px-2.5 py-2">
              <span className={`size-1.5 shrink-0 rounded-full ${r.dot}`} />
              <span className="min-w-0 flex-1 truncate text-[11px] text-ink">{r.label}</span>
              <span className="shrink-0 text-[10px] uppercase tracking-wide text-muted2">{r.tag}</span>
            </div>
          ))}
        </div>
      );
    case "checklist":
      return (
        <div className="flex flex-col gap-1.5">
          {p.rows.map((r) => (
            <div key={r.label} className="flex items-center gap-2 rounded-lg bg-canvas-alt px-2.5 py-2">
              {r.done ? (
                <CheckCircle2 className="size-3.5 shrink-0 text-teal" strokeWidth={2.5} />
              ) : (
                <Circle className="size-3.5 shrink-0 text-muted2/60" strokeWidth={2.5} />
              )}
              <span className={`min-w-0 flex-1 truncate text-[11px] ${r.done ? "text-ink" : "text-muted2"}`}>
                {r.label}
              </span>
            </div>
          ))}
        </div>
      );
    case "compliance":
      return (
        <div className="grid grid-cols-3 gap-2">
          {p.pills.map(([v, l, c]) => (
            <div key={l} className={`rounded-lg px-1.5 py-2 text-center ${c}`}>
              <div className="font-display text-base font-bold">{v}</div>
              <div className="text-[10px] uppercase tracking-wide opacity-80">{l}</div>
            </div>
          ))}
        </div>
      );
    case "documents":
      return (
        <div className="flex flex-col gap-1.5">
          {p.rows.map((label) => (
            <div key={label} className="flex items-center gap-2 rounded-lg bg-canvas-alt px-2.5 py-2">
              <FileText className="size-3.5 shrink-0 text-muted2" strokeWidth={2} />
              <span className="min-w-0 flex-1 truncate text-[11px] text-ink">{label}</span>
            </div>
          ))}
        </div>
      );
    case "mobile":
      return (
        <div className="flex items-center justify-center py-2">
          <div className="flex w-28 flex-col items-center gap-2 rounded-xl border border-line bg-canvas-alt px-3 py-4">
            <span className="grid size-8 place-items-center rounded-full bg-brand2/10 text-brand2">
              <Camera className="size-4" strokeWidth={2} />
            </span>
            <span className="text-center text-[10px] font-medium leading-snug text-ink">Report an issue</span>
            <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-semibold text-white">Submit</span>
          </div>
        </div>
      );
  }
}

function CoreCardPreview({ card }: { card: (typeof coreCards)[number] }) {
  switch (card.kind) {
    case "profile":
      return (
        <div className="rounded-xl border border-line bg-canvas-alt p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink">Harbour View</span>
            <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium text-brand">Active</span>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-canvas px-2.5 py-2">
              <div className="font-display text-sm font-bold text-ink">142</div>
              <div className="text-[10px] text-muted2">Owners</div>
            </div>
            <div className="rounded-lg bg-canvas px-2.5 py-2">
              <div className="font-display text-sm font-bold text-ink">86</div>
              <div className="text-[10px] text-muted2">Lots</div>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-muted2">
            <span className="size-1.5 shrink-0 rounded-full bg-teal" />
            Owner contact updated · 2h ago
          </div>
        </div>
      );
    case "finance":
      return (
        <div className="rounded-xl border border-line bg-canvas-alt p-3">
          <div className="flex items-center justify-between text-[11px] text-muted2">
            <span>Levies outstanding</span>
            <span className="font-semibold text-teal">A$1.8M</span>
          </div>
          <div className="mt-2 flex h-9 items-end gap-1">
            {[35, 55, 40, 65, 50, 72, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-teal/60" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px]">
            <span className="text-muted2">Arrears</span>
            <span className="font-semibold text-rose">4.2%</span>
          </div>
        </div>
      );
    case "worklist":
      return (
        <div className="flex flex-col gap-1.5 rounded-xl border border-line bg-canvas-alt p-3">
          {[
            { dot: "bg-rose", label: "Ceiling leak · #4821", tag: "Open" },
            { dot: "bg-amber", label: "Lift servicing · #4809", tag: "Quoted" },
            { dot: "bg-teal", label: "Gate motor · #4790", tag: "Done" },
          ].map((r) => (
            <div key={r.label} className="flex items-center gap-2 rounded-lg bg-canvas px-2.5 py-2">
              <span className={`size-1.5 shrink-0 rounded-full ${r.dot}`} />
              <span className="min-w-0 flex-1 truncate text-[11px] text-ink">{r.label}</span>
              <span className="shrink-0 text-[10px] font-medium text-muted2">{r.tag}</span>
            </div>
          ))}
        </div>
      );
    case "contractor":
      return (
        <div className="rounded-xl border border-line bg-canvas-alt p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink">AquaFix Plumbing</span>
            <span className="flex items-center gap-1 text-[10px] font-medium text-teal">
              <CheckCircle2 className="size-3" strokeWidth={2.5} />
              Preferred
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-lg bg-canvas px-2.5 py-2 text-[11px]">
            <span className="text-muted2">Public liability</span>
            <span className="font-medium text-amber">Expires in 12 days</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between rounded-lg bg-canvas px-2.5 py-2 text-[11px]">
            <span className="text-muted2">Trade licence</span>
            <span className="font-medium text-teal">Valid</span>
          </div>
        </div>
      );
    case "agenda":
      return (
        <div className="flex flex-col gap-1.5 rounded-xl border border-line bg-canvas-alt p-3">
          {[
            { done: true, label: "Agenda published" },
            { done: true, label: "3 motions proposed" },
            { done: false, label: "5 action items open" },
          ].map((r) => (
            <div key={r.label} className="flex items-center gap-2 rounded-lg bg-canvas px-2.5 py-2">
              {r.done ? (
                <CheckCircle2 className="size-3.5 shrink-0 text-teal" strokeWidth={2.5} />
              ) : (
                <Circle className="size-3.5 shrink-0 text-muted2/50" strokeWidth={2.5} />
              )}
              <span className={`min-w-0 flex-1 truncate text-[11px] ${r.done ? "text-ink" : "text-muted2"}`}>
                {r.label}
              </span>
            </div>
          ))}
        </div>
      );
    case "risk":
      return (
        <div className="rounded-xl border border-line bg-canvas-alt p-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              ["5", "Red", "bg-rose/10 text-rose"],
              ["9", "Amber", "bg-amber/10 text-amber"],
              ["212", "Green", "bg-teal/10 text-teal"],
            ].map(([v, l, c]) => (
              <div key={l} className={`rounded-lg px-1.5 py-2 text-center ${c}`}>
                <div className="font-display text-sm font-bold">{v}</div>
                <div className="text-[10px] uppercase tracking-wide opacity-80">{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex h-1.5 w-full overflow-hidden rounded-full bg-canvas">
            <div className="bg-rose" style={{ width: "2.2%" }} />
            <div className="bg-amber" style={{ width: "4%" }} />
            <div className="bg-teal" style={{ width: "93.8%" }} />
          </div>
        </div>
      );
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-canvas text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
        <div className="field-glow" />
        <div className="grid-lines absolute inset-0" />
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-40 border-b bg-canvas/85 backdrop-blur-xl transition-shadow ${
          scrolled ? "border-line shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_8px_24px_-16px_rgba(15,23,42,0.15)]" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand2 font-display text-base font-bold text-white">
              S
            </span>
            <span className="truncate font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
              StrataOS AI
            </span>
          </a>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-7 text-sm text-body lg:flex">
              {navLinks.map((n) => (
                <a key={n.href} className="transition hover:text-ink" href={n.href}>
                  {n.label}
                </a>
              ))}
            </nav>
            <a
              href={DEMO_MAILTO}
              className="btn-shine hidden shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white sm:inline-block"
            >
              Book a demo
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-9 shrink-0 place-items-center rounded-lg border border-line text-ink lg:hidden"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-line bg-canvas px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-1 text-sm text-body">
              {navLinks.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-2.5 transition hover:bg-canvas-alt hover:text-ink"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={DEMO_MAILTO}
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-ink px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Book a demo
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-16"
      >
        <Reveal className="lg:col-span-5">
          <span className="chip inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-[11px] leading-snug text-brand sm:text-xs">
            <Sparkles className="size-3.5 shrink-0" strokeWidth={2.25} />
            The AI Operating System for Strata &amp; Property Management
          </span>
          <h1 className="mt-6 text-balance font-display text-[2.35rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            Run hundreds of properties with one{" "}
            <span className="bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent">
              AI-powered operations team
            </span>
            .
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-body sm:text-base">
            Owners. Tenants. Committees. Levies. Maintenance. Contractors. Meetings. Compliance. Finance.
          </p>
          <p className="mt-3 max-w-md text-[15px] font-medium leading-relaxed text-ink sm:text-base">
            One platform. One source of truth. AI automating the admin behind every property.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={DEMO_MAILTO}
              className="btn-shine inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand2 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_-12px_rgba(76,29,149,0.6)]"
            >
              See StrataOS AI in Action
              <ArrowRight className="size-4" />
            </a>
            <a href={DEMO_MAILTO} className="chip btn-shine rounded-full px-6 py-3.5 text-sm font-semibold text-ink">
              Request a Tailored Demo
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-7">
            {(
              [
                [284, "Buildings", undefined],
                [6420, "Lots", undefined],
                [1.8, "Levies outstanding", (n: number) => `A$${n.toFixed(1)}M`],
              ] as const
            ).map(([v, l, fmt]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-2xl font-bold text-ink sm:text-[1.75rem]">
                  <Counter value={v} format={fmt} />
                </dd>
                <p className="mt-1 text-xs text-muted2">{l}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="min-w-0 lg:col-span-7" delay={120}>
          <WindowFrame label="app.strataos.ai/portfolio">
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="min-w-0 lg:col-span-3">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted2">
                    Portfolio overview
                  </span>
                  <span className="dot-live flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-medium text-teal">
                    <span className="size-1.5 shrink-0 rounded-full bg-teal" />
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      [87, "Open maintenance jobs", "text-ink", undefined],
                      [23, "Compliance items due", "text-amber", undefined],
                      [14, "AGMs this month", "text-ink", undefined],
                      [1.8, "Levies outstanding", "text-brand", (n: number) => `A$${n.toFixed(1)}M`],
                    ] as const
                  ).map(([v, l, c, fmt]) => (
                    <div key={l} className="min-w-0 rounded-xl border border-line bg-canvas-alt p-3.5">
                      <div className={`font-display text-2xl font-bold ${c}`}>
                        <Counter value={v} format={fmt} />
                      </div>
                      <div className="mt-0.5 text-xs leading-snug text-muted2">{l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 rounded-xl border border-line p-4">
                  <div className="flex items-center justify-between gap-3 text-xs text-muted2">
                    <span>Maintenance jobs — last 7 weeks</span>
                    <span className="font-medium text-teal">-18% backlog</span>
                  </div>
                  <div className="mt-3 flex h-16 items-end gap-1.5">
                    {[40, 55, 48, 70, 58, 66, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-brand/70 to-brand2/70"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="min-w-0 border-t border-line pt-5 lg:col-span-2 lg:border-t-0 lg:pl-0">
                <div className="ai-glow float-slow h-full rounded-2xl border border-brand/15 bg-gradient-to-b from-brand/[0.05] to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand2 text-white">
                      <Sparkles className="size-4" strokeWidth={2.5} />
                    </span>
                    <span className="truncate text-sm font-semibold text-ink">AI Strata Manager</span>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm">
                    {[
                      ["bg-rose", "7 urgent maintenance issues need action."],
                      ["bg-amber", "4 contractor certificates expire this week."],
                      ["bg-amber", "12 levy accounts require escalation."],
                      ["bg-amber", "3 upcoming AGMs have incomplete agenda packs."],
                    ].map(([dot, text]) => (
                      <li key={text} className="flex gap-2">
                        <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${dot}`} />
                        <span className="min-w-0 text-body">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href="#ai"
                      className="btn-shine rounded-lg bg-ink px-3 py-2.5 text-center text-xs font-semibold text-white"
                    >
                      Resolve Issues →
                    </a>
                    <a
                      href="#governance"
                      className="chip btn-shine rounded-lg px-3 py-2.5 text-center text-xs font-medium text-ink"
                    >
                      Prepare AGMs →
                    </a>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 border-t border-brand/10 pt-3 text-[11px] text-muted2">
                    <span className="dot-live size-1.5 shrink-0 rounded-full bg-brand text-brand" />
                    Portfolio synced 12 seconds ago
                  </div>
                </div>
              </div>
            </div>
          </WindowFrame>
        </Reveal>
      </section>

      {/* Workflow */}
      <section id="platform" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="One connected system"
            title="Stop managing buildings through inboxes and spreadsheets."
            sub="StrataOS connects the full operating cycle — eight workflows around a single building record."
          />
        </Reveal>
        <div className="relative">
          <div className="connector-line pointer-events-none absolute left-1/2 top-0 z-0 hidden h-full w-px -translate-x-1/2 lg:block" />

          <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.slice(0, 4).map((w, i) => (
              <Reveal key={w.num} delay={i * 60}>
                <WorkflowCard {...w} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="surface relative z-10 my-4 flex flex-col items-center gap-3 rounded-3xl px-6 py-8 text-center">
              <span className="relative grid place-items-center">
                <span className="dot-live absolute inset-0 rounded-2xl text-brand" />
                <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand2 text-white">
                  <Building2 className="size-5" strokeWidth={2.25} />
                </span>
              </span>
              <p className="font-display text-base font-semibold text-ink sm:text-lg">One central property record</p>
              <p className="max-w-md text-xs text-muted2 sm:text-sm">
                Every workflow reads and writes to the same building, lot and owner history.
              </p>
            </div>
          </Reveal>
          <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.slice(4).map((w, i) => (
              <Reveal key={w.num} delay={i * 60}>
                <WorkflowCard {...w} />
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <BigLine>
            One building record. One owner history. <span className="text-brand">One operational truth.</span>
          </BigLine>
        </Reveal>
      </section>

      {/* Core operating system */}
      <section className="relative z-10 border-y border-line bg-canvas-alt px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Core strata operating system"
              title="Everything your team needs to run the portfolio."
              accent="text-ink/60"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreCards.map((card, i) => {
              const a = accentClasses[card.accent];
              return (
                <Reveal key={card.title} delay={(i % 3) * 70}>
                  <div className="surface card-hover flex h-full flex-col rounded-2xl p-6">
                    <div className="flex items-center gap-3">
                      <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${a.iconBg}`}>
                        <card.icon className="size-5" strokeWidth={2} />
                      </span>
                      <div className="min-w-0">
                        <div className="font-display text-base font-semibold leading-snug text-ink">
                          {card.title}
                        </div>
                        <p className={`text-xs font-medium ${a.text}`}>{card.lead}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <CoreCardPreview card={card} />
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {card.items.map((item) => (
                        <li key={item} className="chip rounded-full px-2.5 py-1 text-[11px] text-body">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Maintenance */}
      <section id="ai" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="AI Maintenance Manager"
            title="Turn every maintenance request into an automated workflow."
            accent="text-brand"
          />
        </Reveal>
        <div className="mt-9 grid gap-6 lg:grid-cols-[1fr_0.85fr_1.15fr] lg:items-stretch lg:gap-5">
          <Reveal>
            <div className="surface h-full rounded-2xl p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted2">Resident submitted</div>
              <p className="mt-2 text-sm text-ink">"Water is leaking through my ceiling."</p>
              <img
                src={ceilingLeak}
                alt="Water stain leaking through a residential ceiling"
                width={1024}
                height={576}
                loading="lazy"
                className="mt-3 aspect-[16/9] w-full rounded-lg object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={90} className="flex">
            <div className="ai-glow relative flex w-full flex-col rounded-2xl bg-gradient-to-b from-ink to-ink2 p-4 text-white">
              <div className="flex items-center gap-2">
                <span className="dot-live grid size-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand2 to-brand text-white">
                  <Sparkles className="size-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  StrataOS AI is analysing
                </span>
              </div>
              <ol className="mt-4 flex flex-1 flex-col gap-2.5">
                {aiSteps.map((step, i) => (
                  <Reveal key={step} delay={140 + i * 90}>
                    <li className="flex items-center gap-2.5 rounded-lg bg-white/[0.06] px-2.5 py-2 text-[13px] leading-snug text-white/85">
                      <span className="grid size-5 shrink-0 place-items-center rounded-md bg-brand2/30 font-display text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="min-w-0">{step}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
              <ArrowRight className="mx-auto mt-3 hidden size-4 text-brand2 lg:block" />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <WindowFrame label="Maintenance Request #4821" className="h-full">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display text-sm font-semibold text-ink sm:text-base">Structured work order</span>
                <span className="shrink-0 rounded-full bg-rose/10 px-2.5 py-1 text-xs font-semibold text-rose">
                  Urgent
                </span>
              </div>
              <dl className="mt-5 space-y-2.5 text-sm">
                {[
                  ["Issue", "Ceiling water leak", "text-ink"],
                  ["Likely source", "Lot above / common plumbing", "text-ink"],
                  ["Recommended contractor", "AquaFix Plumbing", "text-ink"],
                  ["Estimated response", "45 mins", "text-teal"],
                ].map(([k, v, c]) => (
                  <div key={k} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-2.5 last:border-0 last:pb-0">
                    <dt className="text-muted2">{k}</dt>
                    <dd className={`min-w-0 text-right font-medium ${c}`}>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 rounded-xl bg-brand/8 p-3 text-sm leading-relaxed text-brand">
                Dispatch emergency plumber now and notify Building Manager + affected owner.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button className="btn-shine rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white">
                  Dispatch Contractor
                </button>
                <button className="chip btn-shine rounded-lg px-3 py-2 text-xs font-medium text-ink">
                  Request Approval
                </button>
                <button className="chip btn-shine rounded-lg px-3 py-2 text-xs font-medium text-ink">
                  Escalate
                </button>
              </div>
            </WindowFrame>
          </Reveal>
        </div>
        <Reveal>
          <BigLine>
            From email chaos to <span className="text-brand">structured resolution in minutes.</span>
          </BigLine>
        </Reveal>
      </section>

      {/* Meetings */}
      <section
        id="governance"
        className="relative z-10 border-y border-line bg-canvas-alt/60 px-5 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-7xl scroll-mt-24">
          <Reveal>
            <SectionHeading
              eyebrow="AI Meeting & Governance Agent"
              title="Let AI prepare the AGM before your manager opens the file."
              accent="text-teal"
            />
          </Reveal>
          <div className="mt-9 flex flex-col items-stretch gap-3 md:flex-row md:items-stretch">
            {meetingStages.map((s, i) => {
              const a = accentClasses[s.accent];
              return (
                <div key={s.title} className="contents">
                  <Reveal delay={i * 100} className="flex min-w-0 flex-1">
                    <div className="surface card-hover h-full w-full min-w-0 rounded-2xl p-6">
                      <span className={`grid size-10 place-items-center rounded-xl ${a.iconBg}`}>
                        <s.icon className="size-5" strokeWidth={2} />
                      </span>
                      <div className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted2">{s.stage}</div>
                      <div className="mt-1 font-display text-lg font-semibold text-ink">{s.title}</div>
                      <ul className="mt-4 space-y-2 text-sm text-body">
                        {s.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <CheckCircle2 className={`mt-0.5 size-4 shrink-0 ${a.text}`} strokeWidth={2} />
                            <span className="min-w-0">{it}</span>
                          </li>
                        ))}
                      </ul>
                      {s.note ? <p className="mt-5 text-xs leading-relaxed text-muted2">{s.note}</p> : null}
                    </div>
                  </Reveal>
                  {i < meetingStages.length - 1 ? (
                    <>
                      <ArrowRight
                        className="hidden size-5 shrink-0 self-center text-muted2/70 md:block"
                        strokeWidth={2}
                      />
                      <ArrowDown className="size-5 shrink-0 self-center text-muted2/70 md:hidden" strokeWidth={2} />
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
          <Reveal>
            <BigLine>
              Turn 4 hours of meeting admin into <span className="text-brand">20 minutes of review.</span>
            </BigLine>
          </Reveal>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="AI Compliance & Contractor Copilot"
            title="Know what will become a problem before it becomes one."
            accent="text-brand"
          />
        </Reveal>
        <div className="mt-9 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted2">AI continuously monitors</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {complianceMonitors.map((i) => (
                <li key={i} className="chip rounded-full px-3 py-1 text-xs text-body">
                  {i}
                </li>
              ))}
            </ul>

            <div className="surface mt-8 rounded-2xl p-5">
              <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-canvas-alt">
                {compliancePills.map((p) => (
                  <div key={p.label} className={p.color} style={{ width: `${p.pct}%` }} />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {compliancePills.map((p) => (
                  <div key={p.label} className="flex items-center gap-2">
                    <span className={`size-2 shrink-0 rounded-full ${p.color}`} />
                    <span className={`font-display text-base font-bold ${p.text}`}>{p.value}</span>
                    <span className="text-xs text-muted2">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 font-display text-lg font-medium leading-snug text-ink sm:text-xl">
              Compliance becomes <span className="text-brand">continuous</span>, not calendar-driven.
            </p>
          </Reveal>

          <Reveal delay={120} className="space-y-3">
            <WindowFrame label="Building: Harbour View">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display font-semibold text-ink">Compliance Alert</span>
                <Bell className="size-4 text-rose" strokeWidth={2} />
              </div>
              <div className="mt-3 flex gap-2 text-sm text-rose">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose" />
                <span className="min-w-0">Contractor public liability expires in 5 days.</span>
              </div>
              <div className="mt-3 rounded-lg bg-rose/8 px-3 py-2.5">
                <div className="flex items-center justify-between text-[11px] font-medium text-rose">
                  <span>Today</span>
                  <span>5 days left</span>
                  <span>Expiry</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-rose/15">
                  <div className="h-full w-[83%] rounded-full bg-rose" />
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm">
                <span className="text-muted2">Affected work order</span>
                <span className="min-w-0 text-right font-medium text-ink">Roof repair — A$42,000</span>
              </div>
              <p className="mt-4 rounded-xl bg-teal/10 p-3 text-sm leading-relaxed text-teal">
                Do not approve commencement until an updated insurance certificate is received.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="btn-shine rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white">
                  Request Certificate
                </button>
                <button className="chip btn-shine rounded-lg px-3 py-2 text-xs font-medium text-ink">
                  Hold Work Order
                </button>
              </div>
            </WindowFrame>
            <div className="surface rounded-2xl p-5 text-sm text-body">
              <div className="flex gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-amber" strokeWidth={2} />
                <span className="min-w-0">
                  Annual fire inspection due in 14 days. Last provider: SafeFire Services. Would you like me to
                  request a booking?
                </span>
              </div>
            </div>
            <div className="surface rounded-2xl p-5 text-sm text-body">
              <div className="flex gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={2} />
                <span className="min-w-0">212 insurance policies current across the portfolio.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Command centre — dark AI hub */}
      <section id="command" className="relative z-10 scroll-mt-24 overflow-hidden bg-ink px-5 py-16 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 size-[560px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 size-[480px] translate-x-1/2 rounded-full bg-brand2/15 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="AI Portfolio Command Centre"
              title="Ask your entire portfolio anything."
              dark
            />
          </Reveal>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            <Reveal className="flex lg:h-full lg:items-center">
              <ul className="flex flex-wrap gap-2">
                {questions.map((q) => (
                  <li
                    key={q}
                    className="card-hover rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-2 text-xs leading-snug text-white/70"
                  >
                    "{q}"
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="ai-glow min-w-0 rounded-[20px] border border-white/12 bg-white/[0.04] p-4 backdrop-blur sm:p-5">
                <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
                  <span className="size-2.5 rounded-full bg-rose/70" />
                  <span className="size-2.5 rounded-full bg-amber/70" />
                  <span className="size-2.5 rounded-full bg-teal/70" />
                  <span className="ml-3 truncate rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/50">
                    command.strataos.ai
                  </span>
                </div>
                <div className="ml-auto mt-4 w-fit max-w-[85%] rounded-2xl bg-white px-4 py-2 text-sm font-medium text-ink">
                  What are my biggest portfolio risks this week?
                </div>
                <div className="mt-4 rounded-2xl border border-brand2/25 bg-brand/10 p-4 sm:p-5">
                  <div className="flex items-center gap-2">
                    <span className="dot-live grid size-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand2 to-brand text-white">
                      <Sparkles className="size-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="min-w-0 truncate text-xs font-semibold text-white">
                      StrataOS AI — 5 issues require action
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm">
                    {riskRows.map((r) => (
                      <li key={r.title} className="flex gap-2">
                        <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${r.dot}`} />
                        <span className="min-w-0">
                          <span className="font-medium text-white">{r.title}</span>
                          <span className="block text-white/55">{r.sub}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button className="btn-shine rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink">
                      Chase Levies
                    </button>
                    <button className="btn-shine rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white">
                      Assign Contractors
                    </button>
                    <button className="btn-shine rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white">
                      Prepare AGM Packs
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <BigLine dark>
              Don&apos;t give your strata managers more dashboards.{" "}
              <span className="bg-gradient-to-r from-brand2 to-teal-light bg-clip-text text-transparent">
                Give them an AI operations manager.
              </span>
            </BigLine>
          </Reveal>
        </div>
      </section>

      {/* Final value */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="A new operating model"
            title="Manage more properties without multiplying administration."
            accent="text-teal"
          />
        </Reveal>
        <div className="mt-9 grid items-stretch gap-4 md:grid-cols-3">
          {valueColumns.map((col, i) => {
            const a = accentClasses[col.accent];
            return (
              <Reveal key={col.title} delay={i * 80}>
                <div className="surface h-full rounded-2xl p-6">
                  <span className={`grid size-9 place-items-center rounded-lg ${a.iconBg}`}>
                    <col.icon className="size-4" strokeWidth={2} />
                  </span>
                  <div className={`mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] ${a.text}`}>
                    {col.title}
                  </div>
                  {col.lead ? <p className="mt-2 text-xs text-muted2">{col.lead}</p> : null}
                  <ul className="mt-3 space-y-2 text-sm text-body">
                    {col.items.map((i2) => (
                      <li key={i2}>{i2}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <BigLine>
            <span className="text-brand">=</span> A new operating model for strata businesses.
          </BigLine>
        </Reveal>
      </section>

      {/* Product screens montage */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productScreens.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <ProductScreen p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 overflow-hidden bg-ink px-5 py-20 text-center sm:px-6 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]" />
        </div>
        <Reveal className="relative mx-auto max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow">
            Manage more properties without multiplying administration
          </span>
          <h2 className="mt-4 text-balance font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Your strata managers should manage relationships and make decisions.
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-brand2 to-teal-light bg-clip-text text-transparent">
              AI should run the administration around them.
            </span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={DEMO_MAILTO}
              className="btn-shine inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand2 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-14px_rgba(76,29,149,0.5)]"
            >
              See StrataOS AI in Action
              <ArrowRight className="size-4" />
            </a>
            <a
              href={DEMO_MAILTO}
              className="btn-shine rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white"
            >
              Request a Tailored Demo
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-ink px-5 py-14 text-white sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-teal font-display text-sm font-bold text-white">
                S
              </span>
              <span className="font-display text-base font-semibold">StrataOS AI</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/60">
              The AI Operating System for Modern Strata &amp; Property Management.
            </p>
            <p className="mt-4 text-xs text-white/70">Powered by APT Business Services + SoluLab</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60 md:justify-end">
            {navLinks.map((n) => (
              <a key={n.href} href={n.href} className="shrink-0 transition hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/70">
          © {new Date().getFullYear()} StrataOS AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
