const graphicsSettings = [
  { setting: "Graphics Quality", value: "Custom", note: "Control individual settings" },
  { setting: "Rendering Quality", value: "Medium", note: "Balance FPS + visuals" },
  { setting: "Rendering Resolution", value: "HD (1280×720)", note: "Higher = more FPS drop" },
  { setting: "Shadow", value: "OFF", note: "Big FPS boost, no visual loss" },
  { setting: "MSAA", value: "OFF", note: "Disable anti-aliasing for FPS" },
  { setting: "Texture Quality", value: "Low / Medium", note: "Low uses less VRAM" },
  { setting: "Color Mode", value: "Normal", note: "Personal preference" },
  { setting: "Auto Frame Rate", value: "OFF", note: "Lock to target FPS" },
  { setting: "Perf Mode (Ultra)", value: "ON", note: "If device supports it" },
];

const controlSettings = [
  { setting: "Sensitivity (General)", value: "80–100", note: "Adjust for your mouse" },
  { setting: "Sensitivity (Red Dot)", value: "90–100", note: "" },
  { setting: "Sensitivity (2x Scope)", value: "80–90", note: "" },
  { setting: "Sensitivity (4x Scope)", value: "70–80", note: "" },
  { setting: "Sensitivity (AWM)", value: "60–70", note: "Lower for bolt-action" },
  { setting: "Fire Button", value: "Single Tap", note: "Consistent shots" },
  { setting: "Gyroscope", value: "OFF (PC)", note: "N/A on emulator/PC" },
];

const emulatorSettings = [
  { setting: "Emulator", value: "GameLoop / LDPlayer", note: "Best Free Fire support" },
  { setting: "Resolution", value: "1280×720 or 1920×1080", note: "Match monitor resolution" },
  { setting: "FPS Cap", value: "60 FPS", note: "Stable over uncapped" },
  { setting: "CPU Cores", value: "4+ cores dedicated", note: "Assign in emulator settings" },
  { setting: "RAM Allocation", value: "4–6 GB", note: "Leave headroom for OS" },
  { setting: "GPU Rendering", value: "DirectX 11 / OpenGL", note: "Test which gives better FPS" },
  { setting: "Disk I/O", value: "Assign to SSD", note: "Faster load times" },
];

type Row = { setting: string; value: string; note: string };

function SettingTable({ rows, valueColor = "text-orange-400" }: { rows: Row[]; valueColor?: string }) {
  return (
    <div className="rounded-xl border border-[#1e1e2e] overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#1e1e2e] bg-[#0a0a0f]">
            <th className="text-left px-5 py-3 text-gray-500 font-medium">Setting</th>
            <th className="text-left px-5 py-3 text-gray-500 font-medium">Value</th>
            <th className="text-left px-5 py-3 text-gray-500 font-medium hidden sm:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.setting}
              className={`setting-row transition-all ${i !== rows.length - 1 ? "border-b border-[#1e1e2e]" : ""}`}
            >
              <td className="px-5 py-3 font-medium text-white">{row.setting}</td>
              <td className={`px-5 py-3 font-bold ${valueColor}`}>{row.value}</td>
              <td className="px-5 py-3 text-gray-600 text-xs hidden sm:table-cell">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GameSettings() {
  return (
    <section id="settings" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">BINT 777's Setup</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Game <span className="gradient-text">Settings</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Exact in-game settings BINT 777 uses for competitive Free Fire.
            These settings are optimized for PC/emulator gameplay.
          </p>
          <div className="section-divider w-32 mx-auto mt-6" />
        </div>

        {/* Tabs content */}
        <div className="space-y-10">

          {/* Graphics */}
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#111118] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 text-base">
                🖥️
              </div>
              <div>
                <h3 className="font-bold text-white">Graphics Settings</h3>
                <p className="text-xs text-gray-500">In-Game → Settings → Graphics</p>
              </div>
            </div>
            <div className="p-5">
              <SettingTable rows={graphicsSettings} valueColor="text-green-400" />
            </div>
          </div>

          {/* Controls */}
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#111118] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 text-base">
                🎯
              </div>
              <div>
                <h3 className="font-bold text-white">Sensitivity & Controls</h3>
                <p className="text-xs text-gray-500">In-Game → Settings → Sensitivity</p>
              </div>
            </div>
            <div className="p-5">
              <SettingTable rows={controlSettings} valueColor="text-yellow-400" />
            </div>
          </div>

          {/* Emulator */}
          <div className="rounded-2xl border border-[#1e1e2e] bg-[#111118] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 text-base">
                ⚙️
              </div>
              <div>
                <h3 className="font-bold text-white">Emulator / PC Settings</h3>
                <p className="text-xs text-gray-500">GameLoop / LDPlayer configuration</p>
              </div>
            </div>
            <div className="p-5">
              <SettingTable rows={emulatorSettings} valueColor="text-blue-400" />
            </div>
          </div>
        </div>

        {/* Pro tip */}
        <div className="mt-8 flex gap-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="text-2xl flex-shrink-0">💡</div>
          <div>
            <p className="text-sm font-bold text-yellow-400 mb-1">Pro Tip from BINT 777</p>
            <p className="text-sm text-gray-400">
              Always test settings after changes and play a few training matches to feel the difference.
              Sensitivity is highly personal — start from BINT's values and fine-tune from there.
              The biggest gains come from PC-level optimization, not just in-game settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
