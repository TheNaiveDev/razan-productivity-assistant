import {
  RiDashboardLine,
  RiBookletFill,
  RiStackFill,
  RiUserFill,
  RiSettings2Fill,
  RiMenuUnfoldFill,
} from "@remixicon/react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import CircleInfo from "../components/CircleInfo";

type SidebarLink = {
  icon: React.ElementType;
  path: string;
};

export default function DashboardLayout() {
  const [isHidden, setIsHidden] = useState<string>("max-sm:hidden");
  const [position, setPosition] = useState<string>("left-4");

  const handleSidebar = () => {
    setIsHidden((prev) =>
      prev === "max-sm:hidden" ? "max-sm:block" : "max-sm:hidden",
    );

    setPosition((prev) => (prev === "left-4" ? "left-24" : "left-4"));
  };

  const linkIcons: SidebarLink[] = [
    {
      icon: RiDashboardLine,
      path: "",
    },
    {
      icon: RiBookletFill,
      path: "taskmanagement",
    },
    {
      icon: RiStackFill,
      path: "flashcards",
    },
    {
      icon: RiUserFill,
      path: "profile",
    },
    {
      icon: RiSettings2Fill,
      path: "settings",
    },
  ];
  return (
    <div className="flex h-screen w-screen gap-4">
      <div
        className={`p-4 glass border-r border-r-white/10 backdrop-blur-30 overflow-hidden absolute h-full ${isHidden}`}
      >
        <div className="p-3 rounded-full bg-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
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
        </div>
        <div className="flex flex-col gap-10 items-center mt-12">
          {linkIcons.map((link) => (
            <NavLink
              className="transition-colors duration-100"
              key="index"
              to={link.path}
              end={link.path === ""}
            >
              {({ isActive }) => (
                <link.icon
                  color={isActive ? "#1447e6 " : "rgba(255,255,255,0.5"}
                />
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={`absolute top-5 ${position} sm:hidden`}>
        <CircleInfo
          Icon={RiMenuUnfoldFill}
          color="white"
          clicked={handleSidebar}
        />
      </div>
      {/* outlet below */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
