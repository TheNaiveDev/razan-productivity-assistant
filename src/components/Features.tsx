import FeatureCard from "./FeatureCard";
import { Hourglass } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Flame } from "lucide-react";
import { Layers } from "lucide-react";
import { WifiOff } from "lucide-react";
import { StickyNote } from "lucide-react";

export default function Features() {
  return (
    <section className="px-8 max-sm:flex max-sm:flex-col gap-8 items-center justify-center grid grid-cols-2 sm:flex-row lg:px-32 xl:px-48 2xl:px-64 2xl:grid-cols-3 mt-40">
      <FeatureCard
        icon={<Hourglass size={32} color="rgb(192 132 252)" />}
        title="Immersive Timer"
        description="A lo-fi aesthetic pomodoro experience that breathes with you.Minimalist visuals to keep you in the zone"
      />
      <FeatureCard
        icon={<CheckCircle size={32} color="rgb(34 197 94)" />}
        title="Consistency Tracker"
        description="A gentle companion that helps you log daily progress with ease. Visualize your effort in a calm, pressure-free space designed to celebrate small wins"
      />
      <FeatureCard
        icon={<Flame size={32} color="rgb(239 68 68)" />}
        title="Streak Builder"
        description="Encourages habit formation by tracking consecutive days of effort. Watch your streaks grow into momentum that fuels long-term consistency"
      />
      <FeatureCard
        icon={<Layers size={32} color="rgb(250 204 21)" />}
        title="Flashcards"
        description="An interactive study tool that helps you memorize concepts with ease. Flip through cards, test your recall, and strengthen your knowledge one step at a time"
      />
      <FeatureCard
        icon={<StickyNote size={32} color="rgb(244 114 182)" />}
        title="Notes"
        description="A simple yet powerful space to jot down ideas, reminders, and quick thoughts. Keep everything organized and accessible, so inspiration is never lost"
      />
      <FeatureCard
        icon={<WifiOff size={32} color="rgb(107 114 128)" />}
        title="Offline-first Design"
        description="Works seamlessly without requiring constant internet access. Stay productive anywhere, knowing your tools are always available and reliable"
      />
    </section>
  );
}
