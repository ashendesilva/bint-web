import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Banner */}
      <div className="w-full h-40 rounded-b-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-br from-red-700/50 via-red-900/30 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(200,0,0,0.35),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,0,0,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(200,0,0,0.12) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/3 to-transparent" />
      </div>

      {/* Avatar */}
      <div className="relative -mt-16 z-10">
        <div className="absolute inset-0 rounded-full bg-red-700/30 blur-2xl scale-125 pointer-events-none" />
        <div className="w-36 h-36 rounded-full p-0.75 bg-linear-to-br from-red-600 via-red-800 to-black shadow-[0_0_40px_rgba(200,0,0,0.5)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#080808]">
            <Image
              src="/logo.jpeg"
              alt="BINT"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        {/* Live badge */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#080808] border border-red-600/50 rounded-full px-3 py-1 shadow-lg shadow-red-900/30">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-live" />
          <span className="font-gaming text-[9px] font-bold text-red-400 tracking-[0.2em] uppercase">Live</span>
        </div>
      </div>

      {/* Name block */}
      <div className="flex flex-col items-center gap-3 mt-6 pb-6 px-4 text-center">
        <h1 className="font-gaming text-5xl font-black gradient-text text-glow leading-none tracking-wider uppercase">
          BINT
        </h1>

        <p className="font-ui text-base font-semibold text-gray-400 tracking-widest uppercase">
          Free Fire Streamer &nbsp;·&nbsp; PC Optimizer
        </p>

        <div className="flex items-center gap-2 mt-1 flex-wrap justify-center">
          <span className="font-ui inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
            🇱🇰 Sri Lanka
          </span>
          <span className="font-ui inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 bg-red-600/10 border border-red-600/25 rounded-full px-3 py-1.5">
            🏆 Heroic Rank
          </span>
          <span className="font-ui inline-flex items-center gap-1.5 text-xs font-semibold text-red-300 bg-red-900/15 border border-red-800/25 rounded-full px-3 py-1.5">
            🎮 Free Fire MAX
          </span>
        </div>
      </div>
    </div>
  );
}
