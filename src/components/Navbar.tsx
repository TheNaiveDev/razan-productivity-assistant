import { Sparkles } from "lucide-react";
import RoundedBtn from "./RoundedBtn";

export default function Navbar() {
  const links = [
    {
      linkName: "FEATURES",
      path: "",
    },
    {
      linkName: "COMMUNITY",
      path: "",
    },
    {
      linkName: "VIBE",
      path: "",
    },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex items-center justify-between backdrop-blur-sm font-[Lexend]">
      <div className="flex items-center gap-2">
        {/* <Sparkles size={36} strokeWidth={0.5} absoluteStrokeWidth /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="#c3bef0"
          stroke="currentColor"
          stroke-width="0.3333333333333333"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-sparkles-icon lucide-sparkles"
        >
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
          <path d="M20 2v4" />
          <path d="M22 4h-4" />
          <circle cx="4" cy="20" r="2" />
        </svg>
        <span className="text-xl tracking-widest font-light">RAZAN</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm font-light tracking-widest text-white/60">
        {links.map((link) => (
          <span className="hover:text-white transition-colors">
            {link.linkName}
          </span>
        ))}
      </div>
      <RoundedBtn text="SIGN IN" />
    </nav>
  );
}
