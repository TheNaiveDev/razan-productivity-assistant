interface btnProps {
  text: string;
}

export default function RoundedBtn({ text }: btnProps) {
  return (
    <div className="px-6 py-2.5 rounded-full border border-white/10 text-sm tracking-widest hover:bg-white/5 transition-all">
      {text}
    </div>
  );
}
