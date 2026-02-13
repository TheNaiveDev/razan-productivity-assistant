type CircleInfoProps = {
  text?: string;
  Icon: React.ElementType;
  color?: string;
  clicked?: () => void;
};

export default function CircleInfo({
  text,
  Icon,
  color,
  clicked,
}: CircleInfoProps) {
  return (
    <div className="px-4 py-2 rounded-4xl flex items-center justify-center gap-1 glass font-semibold font-[Lexend]">
      <Icon color={color} onClick={clicked} /> {text}
    </div>
  );
}
