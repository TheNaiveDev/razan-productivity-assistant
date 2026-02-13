import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  function goToRegister() {
    navigate("/getstarted");
  }

  return (
    <>
      <div className="pt-40 px-8 flex flex-col gap-8 items-center font-['Playfair_Display']">
        <h1 className="flex flex-col items-center text-center leading-20 max-md:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light">
          Focus in Flow <span className="italic">with Razan</span>
        </h1>
        <p className="font-[Lexend] text-xl text-[rgba(255,255,255,0.5)] text-center font-light md:px-16 lg:px-32 xl:px-64 2xl:px-96">
          The open-source productivity sanctuary for students. Designed for
          clarity, built for aesthetic minds.
        </p>
        <div className="flex max-md:flex-col md:flex-row gap-6">
          <Button
            text="GET STARTED FOR FREE"
            textClr="text-[#1a1a2e]"
            bgClr="bg-[#c3bef0]"
            clicked={() => goToRegister()}
          />
          <Button
            text="EXPLORE FEATURES"
            textClr="text-white"
            bgClr="bg-white/5"
            border="border border-white/10"
          />
        </div>
        <div className="p-2 relative rounded-lg bg-black/10 shadow-2xl hover:scale-105 transition-transform duration-300 mt-20">
          <span className="absolute inset-0 rounded-lg  bg-[#1a1a2e]/20 blur-xl shadow-[0_0_60px_#c3bef0/5] z-[-1]"></span>

          <img
            src="/hero-img.png"
            alt="hero image"
            className="w-full max-w-3xl"
          />
        </div>
      </div>
    </>
  );
}
