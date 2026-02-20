import CircleInfo from "../components/CircleInfo";
import {
  RiFireFill,
  RiMedalFill,
  RiRestartLine,
  RiSkipRightLine,
  RiPauseLine,
  RiCupLine,
} from "@remixicon/react";

export default function Dashboard() {
  return (
    <>
      <div className="mt-5 px-4 w-screen">
        <video
          src="/study.mp4"
          autoPlay
          loop
          className="fixed w-screen top-0 left-0 -z-10"
        />
        <div className="bg-black/50 w-screen h-screen absolute top-0 left-0 z-[-1]"></div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-row items-center justify-end w-full gap-3">
            <CircleInfo
              Icon={RiFireFill}
              color="#fb923c"
              text="01"
            ></CircleInfo>
            <CircleInfo
              Icon={RiMedalFill}
              color="#f9cb15"
              text="12"
            ></CircleInfo>
          </div>
        </div>
        {/* timer comes here */}
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-3">
          <div>
            <span className="text-8xl sm:text-9xl font-extralight font-[Lexend]">
              45
            </span>
            <span className="text-4xl font-extralight font-[Lexend] text-white/60">
              :
            </span>
            <span className="text-8xl sm:text-9xl font-extralight font-[Lexend]">
              00
            </span>
          </div>
          <p className="text-center sm:text-xl text-white/60 font-light tracking-wide font-[Lexend]">
            LEARN FRENCH
          </p>
          <div className="flex items-center gap-6 justify-center">
            <RiRestartLine size={28} color="rgba(255,255,255,0.6)" />
            <div className="glass rounded-full p-4">
              <RiPauseLine className="sm:size-16" size={32} />
            </div>
            <RiSkipRightLine size={28} color="rgba(255,255,255,0.6)" />
          </div>
          <span className="flex items-center gap-2 text-white/30 self-center">
            <RiCupLine />
            Take a break
          </span>
        </div>
      </div>
    </>
  );
}
