import CircleInfo from "../components/CircleInfo";
import { RiFireFill, RiMedalFill, RiMenuUnfoldFill } from "@remixicon/react";

export default function Dashboard() {
  return (
    <div className="mt-5 px-4 w-screen">
      <div className="flex items-center justify-between w-full">
        <CircleInfo Icon={RiMenuUnfoldFill} color="grey" />
        <div className="flex flex-row items-center gap-3">
          <CircleInfo Icon={RiFireFill} color="#fb923c" text="01"></CircleInfo>
          <CircleInfo Icon={RiMedalFill} color="#f9cb15" text="12"></CircleInfo>
        </div>
      </div>
    </div>
  );
}
