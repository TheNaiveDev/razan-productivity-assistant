import Button from "./Button";

export default function Summary() {
  return (
    <div className="px-8 lg:px-32 xl:px-48 2xl:px-64 mt-20">
      <div className="flex flex-col  gap-4 bg-white/5 bakdrop-blur-[3px] border border-white/15 p-8 rounded-xl shadow-lg">
        <span className="text-xs tracking-widest text-center self-start text-white/50 font-[Lexend] mx-auto">
          PRIVACY AT THE CORE
        </span>
        <h3 className="text-center font-[Playfair_Display] text-2xl lg:text-3xl xl:text-5xl xxl:text-6xl">
          Future of Focus.
        </h3>
        <p className="text-center text-white/40 font-light leading-relaxed font-[Lexend]">
          Razan isn’t just another productivity app - it’s a mindful environment
          designed to help you reclaim your attention in a world full of
          distractions.
        </p>
        <Button
          text="GET STARTED"
          textClr="text-[#1a1a2e]"
          bgClr="bg-[#c3bef0]"
          position="self-center"
        />
      </div>
    </div>
  );
}
