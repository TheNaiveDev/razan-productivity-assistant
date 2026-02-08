interface featureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: featureProps) {
  return (
    <div className="flex flex-col gap-4 bg-white/5 bakdrop-blur-[3px] border border-white/15 p-8 rounded-xl font-[Lexend] h-full">
      <div className="p-2 self-start rounded-md bg-[rgba(168,85,247,0.1)]">
        {icon}
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-white/40 font-light leading-relaxed">{description}</p>
    </div>
  );
}
