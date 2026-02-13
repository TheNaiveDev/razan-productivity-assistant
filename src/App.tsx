import Homepage from "./pages/Homepage";
import GetStarted from "./pages/GetStarted";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/profile";
import Flashcards from "./pages/Flashcards";
import TaskManagement from "./pages/TaskManagement";
import Focus from "./pages/Focus";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/getstarted",
    element: <GetStarted />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "flashcards",
        element: <Flashcards />,
      },
      {
        path: "taskmanagement",
        element: <TaskManagement />,
      },
      {
        path: "focus",
        element: <Focus />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
