import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../components/GuestLayout";
import HomeGuest from "../pages/HomeGuest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <HomeGuest />,
      },
    ],
  },
]);

export default router;
