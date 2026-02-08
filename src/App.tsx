import Homepage from "./pages/Homepage";
import GetStarted from "./pages/GetStarted";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/getstarted",
    element: <GetStarted />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
