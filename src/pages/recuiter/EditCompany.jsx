import RectangleButton from "@/components/shared/RectangleButton";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RecuiterCompanyDetail from "./RecuiterCompanyDetail";
import NotInCompanyModal from "@/components/disposable/NotInCompanyModal";

const EditCompany = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <div>
      {loggedInUser && loggedInUser.company && <RecuiterCompanyDetail />}
      {loggedInUser && !loggedInUser.company && <NotInCompanyModal />}
    </div>
  );
};

export default EditCompany;
