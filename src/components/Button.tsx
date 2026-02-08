interface btnProps {
  text: string;
  bgClr: string;
  textClr: string;
  border?: string;
  position?: string;
}

export default function Button({
  text,
  bgClr,
  textClr,
  border,
  position,
}: btnProps) {
  return (
    <button
      className={`py-4 px-10 ${bgClr} ${textClr} ${border} ${position} text-[#1a1a2e] font-[Lexend] tracking-widest rounded-md shadow-[0 0 25px rgba(195, 190, 240, 0.4)] font-base`}
    >
      {text}
    </button>
  );
}
