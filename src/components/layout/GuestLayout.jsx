import { Outlet } from "react-router-dom";
import HomeGuestHeader from "@/components/layout/section/HomeGuestHeader";
import FooterGuest from "@/components/layout/section/FooterGuest";

const GuestLayout = () => {
  return (
    <div className="h-screen">
      <HomeGuestHeader />
      <main>
        <Outlet />
      </main>
      <FooterGuest />
    </div>
  );
};

export default GuestLayout;
