import { Outlet } from "react-router-dom";
import HomeGuestHeader from "./section/HomeGuestHeader";

const GuestLayout = () => {
  return (
    <div className="h-screen">
      <HomeGuestHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;
