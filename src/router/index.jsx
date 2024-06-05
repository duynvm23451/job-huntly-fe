import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../components/layout/GuestLayout";
import HomeGuest from "../pages/HomeGuest";
import FindJobsGuest from "../pages/FindJobsGuest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <HomeGuest />,
      },
      {
        path: "find-jobs",
        element: <FindJobsGuest />,
      },
    ],
  },
]);

export default router;
