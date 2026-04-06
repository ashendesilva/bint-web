"use client";
import { useState } from "react";

/* ── Links data ──────────────────────────────────────────── */
const links = [
  {
    name: "YouTube",
    handle: "@BINT777",
    desc: "Live streams, gameplay highlights & PC optimization tutorials",
    href: "#",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    accent: "#ef4444",
    iconBg: "bg-red-500/15",
    iconColor: "text-red-500",
    borderAccent: "border-l-red-500",
    hoverGlow: "hover:shadow-[0_4px_24px_rgba(239,68,68,0.15)]",
    hoverBorder: "hover:border-red-500/30",
  },
  {
    name: "Facebook",
    handle: "BINT 777 Gaming",
    desc: "Stream announcements, gaming tips & community posts",
    href: "#",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    accent: "#60a5fa",
    iconBg: "bg-blue-400/15",
    iconColor: "text-blue-400",
    borderAccent: "border-l-blue-400",
    hoverGlow: "hover:shadow-[0_4px_24px_rgba(96,165,250,0.15)]",
    hoverBorder: "hover:border-blue-400/30",
  },
  {
    name: "TikTok",
    handle: "@bint777",
    desc: "Short clips, funny moments & quick tips for the community",
    href: "#",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.88a8.19 8.19 0 004.78 1.52V7a4.85 4.85 0 01-1.01-.31z" />
      </svg>
    ),
    accent: "#f472b6",
    iconBg: "bg-pink-400/15",
    iconColor: "text-pink-400",
    borderAccent: "border-l-pink-400",
    hoverGlow: "hover:shadow-[0_4px_24px_rgba(244,114,182,0.15)]",
    hoverBorder: "hover:border-pink-400/30",
  },
  {
    name: "Telegram",
    handle: "BINT 777 Community",
    desc: "Direct chat, gaming discussions & community updates",
    href: "#",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    accent: "#38bdf8",
    iconBg: "bg-sky-400/15",
    iconColor: "text-sky-400",
    borderAccent: "border-l-sky-400",
    hoverGlow: "hover:shadow-[0_4px_24px_rgba(56,189,248,0.15)]",
    hoverBorder: "hover:border-sky-400/30",
  },
];

/* ── Settings data ───────────────────────────────────────── */
const settingsGroups = [
  {
    title: "Graphics",
    icon: "🖥️",
    valueColor: "bg-red-600/15 text-red-400",
    rows: [
      { setting: "Graphics Quality", value: "Custom" },
      { setting: "Rendering Quality", value: "Medium" },
      { setting: "Resolution", value: "HD 1280×720" },
      { setting: "Shadow", value: "OFF" },
      { setting: "MSAA", value: "OFF" },
      { setting: "Texture Quality", value: "Low / Medium" },
      { setting: "Auto Frame Rate", value: "OFF" },
      { setting: "Perf Mode", value: "ON" },
    ],
  },
  {
    title: "Sensitivity",
    icon: "🎯",
    valueColor: "bg-red-900/20 text-red-300",
    rows: [
      { setting: "General", value: "80–100" },
      { setting: "Red Dot", value: "90–100" },
      { setting: "2x Scope", value: "80–90" },
      { setting: "4x Scope", value: "70–80" },
      { setting: "AWM Scope", value: "60–70" },
      { setting: "Fire Button", value: "Single Tap" },
      { setting: "Gyroscope", value: "OFF (PC)" },
    ],
  },
  {
    title: "Emulator / PC",
    icon: "⚙️",
    valueColor: "bg-white/8 text-gray-300",
    rows: [
      { setting: "Emulator", value: "GameLoop / LDPlayer" },
      { setting: "Resolution", value: "1280×720" },
      { setting: "FPS Cap", value: "60 FPS" },
      { setting: "CPU Cores", value: "4+ dedicated" },
      { setting: "RAM", value: "4–6 GB" },
      { setting: "GPU", value: "DirectX 11 / OpenGL" },
      { setting: "Disk", value: "SSD preferred" },
    ],
  },
];

/* ── About data ──────────────────────────────────────────── */
const stats = [
  { label: "Game", value: "Free Fire MAX" },
  { label: "Server", value: "SL / IND" },
  { label: "Role", value: "Rusher / IGL" },
  { label: "Rank", value: "Heroic" },
  { label: "Specialty", value: "PC Optimization" },
  { label: "Platforms", value: "YT & Facebook" },
];

const tags = ["Free Fire", "PC Gaming", "Sri Lanka", "FPS Optimizer", "Live Streamer", "Heroic Rank", "Content Creator"];

/* ── Panels ──────────────────────────────────────────────── */
function LinksPanel() {
  return (
    <div className="flex flex-col gap-3">
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          className={`group relative flex items-center gap-4 rounded-2xl border border-white/8 bg-white/3 px-4 py-3.5 border-l-2 ${l.borderAccent} ${l.hoverBorder} ${l.hoverGlow} transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5`}
        >
          {/* Icon */}
          <div className={`shrink-0 w-11 h-11 rounded-xl ${l.iconBg} ${l.iconColor} flex items-center justify-center`}>
            {l.icon}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-gaming text-sm font-bold text-white tracking-wide">{l.name}</span>
              <span className={`font-ui text-[11px] font-semibold ${l.iconColor} opacity-80 truncate tracking-wider`}>{l.handle}</span>
            </div>
            <p className="font-ui text-xs text-gray-500 leading-relaxed truncate">{l.desc}</p>
          </div>

          {/* Arrow */}
          <svg
            className="shrink-0 w-4 h-4 text-gray-600 group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all duration-200"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      ))}
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="flex flex-col gap-3">
      {settingsGroups.map((g) => (
        <div key={g.title} className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden">
          {/* Group header */}
          <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-white/6 bg-white/2">
            <span className="text-base leading-none">{g.icon}</span>
            <span className="font-gaming text-sm font-bold text-white tracking-widest uppercase">{g.title}</span>
          </div>
          {/* Rows */}
          <div className="divide-y divide-white/4">
            {g.rows.map((r) => (
              <div key={r.setting} className="flex items-center justify-between px-4 py-3 hover:bg-white/3 transition-colors">
                <span className="font-ui text-sm text-gray-400 font-medium">{r.setting}</span>
                <span className={`font-gaming text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider ${g.valueColor}`}>
                  {r.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Pro tip */}
      <div className="flex gap-3 rounded-2xl border border-red-700/20 bg-red-950/20 p-4">
        <span className="text-lg shrink-0 mt-0.5">💡</span>
        <div>
          <p className="font-gaming text-[11px] font-bold text-red-400 mb-1.5 tracking-widest uppercase">Pro Tip from BINT</p>
          <p className="font-ui text-sm text-gray-500 leading-relaxed">
            Sensitivity is personal — start from these values and fine-tune in training mode. Biggest FPS gains come from PC-level optimization, not just in-game settings.
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="flex flex-col gap-3">
      {/* Bio card */}
      <div className="rounded-2xl border border-white/8 bg-white/3 p-4 space-y-3">
        <p className="font-ui text-base text-gray-400 leading-relaxed">
          BINT is a passionate Free Fire player and content creator from Sri Lanka. Known for aggressive gameplay, sharp strategies, and insane kill counts — bringing top-tier energy to every stream and match.
        </p>
        <p className="font-ui text-base text-gray-400 leading-relaxed">
          Beyond gaming, a go-to resource for PC optimization — boosting FPS, reducing lag, and getting the most out of hardware without spending a fortune.
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((t) => (
            <span key={t} className="font-ui text-xs font-semibold px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Stats card */}
      <div className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden">
        <div className="px-4 py-3.5 border-b border-white/6 bg-white/2">
          <span className="font-gaming text-sm font-bold text-white tracking-widest uppercase">Quick Stats</span>
        </div>
        <div className="divide-y divide-white/4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center justify-between px-4 py-3 hover:bg-white/3 transition-colors">
              <span className="font-ui text-sm text-gray-500 font-medium">{s.label}</span>
              <span className="font-gaming text-xs font-bold text-red-400 tracking-wider">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main ────────────────────────────────────────────────── */
const TABS = [
  { id: "links", label: "Links" },
  { id: "settings", label: "Settings" },
  { id: "about", label: "About" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ProfileTabs() {
  const [active, setActive] = useState<TabId>("links");

  return (
    <div className="w-full">
      {/* Tab nav */}
      <div className="flex items-center gap-1 bg-white/4 border border-white/8 rounded-2xl p-1 mb-4">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`font-gaming flex-1 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
              active === t.id
                ? "bg-red-600 text-white shadow-[0_2px_16px_rgba(200,0,0,0.5)]"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="pb-8">
        {active === "links" && <LinksPanel />}
        {active === "settings" && <SettingsPanel />}
        {active === "about" && <AboutPanel />}
      </div>
    </div>
  );
}
