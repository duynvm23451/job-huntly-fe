import EmployeeSetting from "./employee/EmployeeSetting";
import { useSelector } from "react-redux";
import RecruiterSetting from "./recuiter/RecruiterSetting";

const Setting = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
    <>
      {loggedInUser && loggedInUser.role == "EMPLOYEE" && <EmployeeSetting />}
      {loggedInUser && loggedInUser.role == "RECRUITER" && <RecruiterSetting />}
    </>
  );
};

export default Setting;
