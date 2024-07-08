import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import FindJobsGuest from "../pages/guest/FindJobsGuest";
import CompaniesGuest from "../pages/guest/CompaniesGuest";
import JobDetail from "@/pages/guest/JobDetail";
import CompanyDetail from "@/pages/guest/CompanyDetail";
import AuthLayout from "@/components/layout/AuthLayout";
import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";
import Authenticate from "@/pages/Authenticate";
import { tokenLoader } from "@/services/authenitcationService";
import Home from "@/pages/Home";
import CompaniesList from "@/pages/CompaniesList";
import JobsList from "@/pages/JobsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "jobs",
        element: <JobsList />,
      },
      {
        path: "companies",
        element: <CompaniesList />,
      },
      {
        path: "jobs/:jobId",
        element: <JobDetail />,
      },
      {
        path: "companies/:companyId",
        element: <CompanyDetail />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "oauth2/login/google",
        element: <Authenticate />,
      },
    ],
  },
]);

export default router;
