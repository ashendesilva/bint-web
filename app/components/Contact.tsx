"use client";

const platforms = [
  {
    name: "YouTube",
    handle: "@BINT777",
    desc: "Watch live streams, gameplay highlights, and PC optimization tutorials.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "text-red-500",
    border: "border-red-500/25",
    bg: "hover:bg-red-500/8",
    url: "#",
  },
  {
    name: "Facebook",
    handle: "BINT 777 Gaming",
    desc: "Follow for stream announcements, gaming tips, and community posts.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "text-blue-400",
    border: "border-blue-400/25",
    bg: "hover:bg-blue-400/8",
    url: "#",
  },
  {
    name: "TikTok",
    handle: "@bint777",
    desc: "Short clips, funny moments, and quick tips for the mobile community.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.88a8.19 8.19 0 004.78 1.52V7a4.85 4.85 0 01-1.01-.31z" />
      </svg>
    ),
    color: "text-pink-400",
    border: "border-pink-400/25",
    bg: "hover:bg-pink-400/8",
    url: "#",
  },
  {
    name: "Telegram",
    handle: "BINT 777 Community",
    desc: "Join the community group for direct chat, updates, and gaming discussions.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    color: "text-sky-400",
    border: "border-sky-400/25",
    bg: "hover:bg-sky-400/8",
    url: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050508]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contact <span className="gradient-text">BINT 777</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Want to collaborate, book a PC optimization session, or just chat?
            Find BINT 777 on these platforms.
          </p>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              className={`card-hover rounded-2xl border ${p.border} bg-[#111118] p-6 flex gap-4 group transition-all ${p.bg}`}
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center ${p.color} border ${p.border}`}>
                {p.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-white">{p.name}</h4>
                  <span className={`text-xs font-semibold ${p.color}`}>{p.handle}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
              <div className="shrink-0 self-center text-gray-600 group-hover:text-gray-400 transition-colors">
                →
              </div>
            </a>
          ))}
        </div>

        {/* Message form */}
        <div className="rounded-2xl border border-[#1e1e2e] bg-[#111118] overflow-hidden">
          <div className="px-6 py-5 border-b border-[#1e1e2e]">
            <h3 className="text-lg font-bold text-white">Send a Message</h3>
            <p className="text-sm text-gray-500 mt-1">For business inquiries or PC optimization requests</p>
          </div>
          <div className="p-6">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Subject</label>
                  <select className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors">
                    <option value="">Select a topic</option>
                    <option>PC Optimization</option>
                    <option>Collaboration</option>
                    <option>Game Settings</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Message</label>
                <textarea
                  rows={4}
                  placeholder="Describe what you need help with..."
                  className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="fire-button w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-white text-sm tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
