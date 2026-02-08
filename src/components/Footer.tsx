export default function Footer() {
  return (
    <footer className="w-full text-white/50 text-sm font-[Lexend] tracking-widest flex flex-col lg:flex-row gap-12 items-start justify-evenly mt-20  border-t border-white/15 py-12 px-8">
      <div>
        <div className="flex items-center gap-2">
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
        <p>MADE WITH CALM FOR THE CURIOUS MIND.</p>
      </div>
      <div className="flex items-start flex-col gap-8 xl:flex-row">
        <span>FEATURES</span>
        <span>COMMUNITY</span>
        <span>VIBE</span>
      </div>
      <div className="text-xs text-white/40">@2025 RAZAN OFFICIAL</div>
    </footer>
  );
}
