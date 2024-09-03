import React from "react";

const ApplicantProfileSection = ({ application }) => {
  return <div>{application.user.fullName}</div>;
};

export default ApplicantProfileSection;
