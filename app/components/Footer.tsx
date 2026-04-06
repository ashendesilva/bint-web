export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg fire-button flex items-center justify-center text-white font-black text-xs">
              B7
            </div>
            <span className="font-black text-lg gradient-text">BINT 777</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm">
            {["#home", "#about", "#pcopt", "#settings", "#contact"].map((href, i) => {
              const labels = ["Home", "About", "PC Optimization", "Game Settings", "Contact"];
              return (
                <a
                  key={href}
                  href={href}
                  className="text-gray-500 hover:text-orange-400 transition-colors"
                >
                  {labels[i]}
                </a>
              );
            })}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-600 text-center md:text-right">
            © {new Date().getFullYear()} BINT 777. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
