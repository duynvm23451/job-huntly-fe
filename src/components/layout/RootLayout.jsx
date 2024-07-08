import { Outlet, useNavigate, useRouteLoaderData } from "react-router-dom";
import GuestHeader from "@/components/layout/header/GuestHeader";
import FooterGuest from "@/components/layout/section/FooterGuest";
import AuthedNav from "@/components/layout/header/AuthedNav";

const RootLayout = () => {
  const token = useRouteLoaderData("root");
  return (
    <div className="h-screen">
      {!token && <GuestHeader />}
      {token && <AuthedNav />}
      <main>
        <Outlet />
      </main>
      {!token && <FooterGuest />}
    </div>
  );
};

export default RootLayout;
