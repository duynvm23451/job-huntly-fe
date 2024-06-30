import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../components/layout/GuestLayout";
import HomeGuest from "../pages/HomeGuest";
import FindJobsGuest from "../pages/FindJobsGuest";
import CompaniesGuest from "../pages/CompaniesGuest";
import JobDetail from "@/pages/JobDetail";
import CompanyDetail from "@/pages/CompanyDetail";

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
      {
        path: "companies",
        element: <CompaniesGuest />,
      },
      {
        path: "find-jobs/:jobId",
        element: <JobDetail />,
      },
      {
        path: "companies/:companyId",
        element: <CompanyDetail />,
      },
    ],
  },
]);

export default router;
