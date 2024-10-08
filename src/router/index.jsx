import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
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
import VerifyEmail from "@/pages/VerifyEmail";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import Error from "@/pages/Error";
import Messages from "@/pages/Messages";
import Applications from "@/pages/Applications";
import Profile from "@/pages/employee/Profile";
import Setting from "@/pages/Setting";
import Test from "@/pages/Test";
import ChatArea from "@/components/disposable/ChatArea";
import EditCompany from "@/pages/recuiter/EditCompany";
import JobsListRecruiter from "@/pages/recuiter/JobsListRecruiter";
import ApplicationDetail from "@/pages/recuiter/ApplicationDetail";
import CreateJob from "@/pages/recuiter/CreateJob";
import EditJob from "@/pages/recuiter/EditJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    errorElement: <Error />,
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
      {
        path: "register/verifyEmail",
        element: <VerifyEmail />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "messages",
        element: <Messages />,
        children: [
          {
            path: ":chatRoomId",
            element: <ChatArea />,
          },
        ],
      },
      {
        path: "applications",
        element: <Applications />,
      },
      {
        path: "applications/:applicationId",
        element: <ApplicationDetail />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "edit-company",
        element: <EditCompany />,
      },
      {
        path: "jobs-list",
        element: <JobsListRecruiter />,
      },
      {
        path: "create-job",
        element: <CreateJob />,
      },
      {
        path: "edit-job/:jobId",
        element: <EditJob />,
      },
    ],
  },
]);

export default router;
