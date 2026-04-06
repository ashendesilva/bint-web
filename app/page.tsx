import AnimatedBackground from "./components/AnimatedBackground";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-2xl w-full min-h-screen flex flex-col">

        {/* Profile */}
        <div className="flex-1 px-4 pb-4">
          <ProfileHeader />
          <ProfileTabs />
        </div>

        {/* Footer */}
        <div className="text-center py-5 border-t border-white/5">
          <p className="text-xs text-gray-700 font-medium">
            BINT &copy; {new Date().getFullYear()} &middot; Free Fire Streamer &middot; Sri Lanka
          </p>
        </div>

      </div>
    </div>
  );
}
