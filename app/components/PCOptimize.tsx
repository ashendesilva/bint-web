const tips = [
  {
    step: "01",
    title: "Windows Power Plan",
    desc: "Switch to High Performance or Ultimate Performance power plan. Press Win+R → powercfg.cpl → Change plan settings.",
    cmd: "powercfg /setactive SCHEME_MIN",
  },
  {
    step: "02",
    title: "Disable Xbox Game Bar & DVR",
    desc: "Xbox Game Bar eats CPU and RAM. Go to Settings → Gaming → Xbox Game Bar → Turn off. Also disable Game DVR.",
    cmd: "Settings → Gaming → Xbox Game Bar → OFF",
  },
  {
    step: "03",
    title: "Update GPU Drivers",
    desc: "Always use the latest GPU drivers. For NVIDIA use GeForce Experience, for AMD use Radeon Software. Clean install recommended.",
    cmd: "DDU → Clean install latest driver",
  },
  {
    step: "04",
    title: "Disable Visual Effects",
    desc: "Right-click Computer → Properties → Advanced System Settings → Performance Settings → Adjust for best performance.",
    cmd: "sysdm.cpl → Advanced → Performance",
  },
  {
    step: "05",
    title: "Cleanup Startup Apps",
    desc: "Disable unnecessary startup programs to free RAM and CPU on boot. Open Task Manager → Startup tab → disable unused apps.",
    cmd: "Ctrl+Shift+Esc → Startup",
  },
  {
    step: "06",
    title: "Set CPU Affinity & Priority",
    desc: "While Free Fire is running, open Task Manager → Details → right-click the game → Set Priority → High.",
    cmd: "Task Manager → Details → Set Priority: High",
  },
];

const requirements = [
  { label: "CPU", min: "Intel i3 / AMD Ryzen 3", rec: "Intel i5 / AMD Ryzen 5", best: "i7 / Ryzen 7+" },
  { label: "RAM", min: "4 GB", rec: "8 GB", best: "16 GB" },
  { label: "GPU", min: "Intel HD 4000", rec: "GTX 1050 / RX 570", best: "GTX 1660+ / RX 6600+" },
  { label: "Storage", min: "HDD", rec: "SSD 256 GB", best: "NVMe SSD 512 GB" },
  { label: "OS", min: "Windows 10 64-bit", rec: "Windows 10 / 11 64-bit", best: "Windows 11 (latest)" },
];

export default function PCOptimize() {
  return (
    <section id="pcopt" className="py-24 bg-[#050508]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">Boost Your FPS</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            PC <span className="gradient-text">Optimization</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get maximum performance out of your PC for Free Fire.
            These are the exact steps BINT 777 recommends to every gamer.
          </p>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {tips.map((tip) => (
            <div
              key={tip.step}
              className="card-hover rounded-2xl border border-[#1e1e2e] bg-[#111118] p-6 space-y-3 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-4xl font-black text-orange-500/10 select-none">
                {tip.step}
              </div>
              <div className="text-orange-400 text-sm font-bold tracking-widest">STEP {tip.step}</div>
              <h4 className="text-base font-bold text-white">{tip.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
              <div className="mt-3 bg-[#0a0a0f] rounded-lg px-3 py-2 font-mono text-xs text-green-400 border border-[#1e1e2e]">
                $ {tip.cmd}
              </div>
            </div>
          ))}
        </div>

        {/* System requirements table */}
        <div className="rounded-2xl border border-[#1e1e2e] bg-[#111118] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#1e1e2e]">
            <h3 className="text-lg font-bold text-white">Free Fire — System Requirements</h3>
            <p className="text-sm text-gray-500 mt-1">Recommended specs for smooth gameplay</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1e1e2e]">
                  <th className="text-left px-6 py-3 text-gray-500 font-medium">Component</th>
                  <th className="text-left px-6 py-3 text-gray-500 font-medium">Minimum</th>
                  <th className="text-left px-6 py-3 text-yellow-500 font-medium">Recommended</th>
                  <th className="text-left px-6 py-3 text-orange-400 font-medium">Best</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((req, i) => (
                  <tr
                    key={req.label}
                    className={`setting-row transition-all ${i !== requirements.length - 1 ? "border-b border-[#1e1e2e]" : ""}`}
                  >
                    <td className="px-6 py-3 font-semibold text-white">{req.label}</td>
                    <td className="px-6 py-3 text-gray-500">{req.min}</td>
                    <td className="px-6 py-3 text-yellow-400">{req.rec}</td>
                    <td className="px-6 py-3 text-orange-400 font-semibold">{req.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-red-600/5 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need a Personal PC Tune-Up?</h3>
          <p className="text-gray-400 text-sm mb-5 max-w-lg mx-auto">
            BINT 777 offers personalized PC optimization sessions. Get a full audit of your
            system settings and walk away with noticeably better performance.
          </p>
          <a href="#contact" className="fire-button inline-block px-7 py-3 rounded-xl font-bold text-white text-sm">
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}
