export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg grid-bg overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-4 py-1.5 text-sm font-medium text-orange-400">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-ring" />
              Live Streamer & PC Optimizer
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              <span className="text-white">BINT</span>
              <span className="gradient-text text-glow"> 777</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-gray-300">
              Free Fire Streamer
              <span className="text-orange-400"> | </span>
              PC Optimization Expert
            </p>

            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              Passionate Free Fire player, live streamer, and PC optimization specialist.
              Helping gamers squeeze every FPS from their machines — from tweaks to full tune-ups.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#about"
                className="fire-button px-7 py-3 rounded-xl font-bold text-white text-sm tracking-wide"
              >
                Explore Profile
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl font-bold text-sm tracking-wide border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              {[
                { value: "777+", label: "Kills/Season" },
                { value: "1K+", label: "Community Members" },
                { value: "3+", label: "Years Streaming" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Avatar card */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            <div className="relative float-anim">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-red-600 blur-xl opacity-30 scale-110" />

              {/* Avatar */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-orange-500 via-red-600 to-yellow-500 p-1 glow-orange">
                <div className="w-full h-full rounded-full bg-[#111118] flex items-center justify-center overflow-hidden">
                  {/* Placeholder avatar - replace with real image */}
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center">
                    <span className="text-7xl md:text-8xl font-black gradient-text select-none">B7</span>
                  </div>
                </div>
              </div>

              {/* Live badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-white pulse-ring" />
                LIVE
              </div>
            </div>

            {/* Platform links */}
            <div className="flex gap-3">
              {[
                { name: "YouTube", icon: "▶", color: "text-red-500 border-red-500/30 hover:bg-red-500/10" },
                { name: "Facebook", icon: "f", color: "text-blue-400 border-blue-400/30 hover:bg-blue-400/10" },
                { name: "TikTok", icon: "♪", color: "text-pink-400 border-pink-400/30 hover:bg-pink-400/10" },
              ].map((p) => (
                <a
                  key={p.name}
                  href="#contact"
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center font-bold text-sm transition-all ${p.color}`}
                  title={p.name}
                >
                  {p.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
