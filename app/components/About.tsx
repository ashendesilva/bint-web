const highlights = [
  {
    icon: "🎮",
    title: "Free Fire Pro",
    desc: "Competitive Free Fire player with high kill stats, ranked matches, and tournament experience.",
  },
  {
    icon: "📡",
    title: "Live Streamer",
    desc: "Regular live streams on YouTube and Facebook with gameplay, tips, and community interaction.",
  },
  {
    icon: "⚡",
    title: "PC Optimizer",
    desc: "Expert at squeezing maximum FPS and performance from gaming PCs — hardware and software tweaks.",
  },
  {
    icon: "🛠️",
    title: "Tech Support",
    desc: "Helps fellow gamers troubleshoot, upgrade, and fine-tune their setups for competitive play.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">Who is BINT 777</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider w-32 mx-auto" />
        </div>

        {/* Main about content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          {/* Bio */}
          <div className="flex-1 space-y-5">
            <h3 className="text-2xl font-bold text-white">
              Gamer. Streamer. <span className="text-orange-400">Optimizer.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              BINT 777 is a passionate Free Fire player and content creator from Sri Lanka.
              Known for aggressive gameplay, sharp strategies, and insane kill counts —
              BINT brings top-tier energy to every stream and match.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond gaming, BINT is a go-to resource for PC optimization — helping
              fellow gamers boost their FPS, reduce lag, and get the most out of their
              hardware without spending a fortune. Whether it's Windows tweaks, driver
              updates, in-game config settings, or hardware advice, BINT has you covered.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a growing community of gamers, BINT 777 streams regularly, shares
              tutorials, and engages with fans across YouTube, Facebook, and TikTok.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Free Fire", "PC Gaming", "Sri Lanka", "FPS Optimizer", "Live Streamer", "Competitive", "Content Creator"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="lg:w-80 w-full">
            <div className="rounded-2xl border border-[#1e1e2e] bg-[#111118] p-6 space-y-5">
              <h4 className="text-lg font-bold text-white mb-4">Quick Stats</h4>
              {[
                { label: "Game", value: "Free Fire MAX" },
                { label: "Server", value: "Sri Lanka / IND" },
                { label: "Role", value: "Rusher / IGL" },
                { label: "Rank", value: "Heroic" },
                { label: "Specialty", value: "PC Optimization" },
                { label: "Streams", value: "YouTube & Facebook" },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-center setting-row px-2 py-1.5 transition-all">
                  <span className="text-sm text-gray-500">{stat.label}</span>
                  <span className="text-sm font-semibold text-orange-400">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="card-hover rounded-2xl border border-[#1e1e2e] bg-[#111118] p-6 space-y-3"
            >
              <div className="text-3xl">{h.icon}</div>
              <h4 className="text-base font-bold text-white">{h.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
