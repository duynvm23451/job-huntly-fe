import { Outlet } from "react-router-dom";
import HomeGuestHeader from "./section/HomeGuestHeader";
import FooterGuest from "./section/FooterGuest";

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
