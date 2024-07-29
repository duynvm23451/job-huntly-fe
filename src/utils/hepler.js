export const convertJobType = (input) => {
  const words = input.split("_");
  const capitalizedWords = words.map((word) => word.toLowerCase());
  const joinString = capitalizedWords.join(" ");
  const result = joinString.charAt(0).toUpperCase() + joinString.slice(1);
  return result;
};

export const cleanQueryParamsJobs = (params) => {
  const cleanedParams = {};
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (key == "salaryRange") {
      cleanedParams["minSalary"] = value[0];
      cleanedParams["maxSalary"] = value[1];
    }
    if (value !== "" && key !== "salaryRange") {
      cleanedParams[key] = value;
    }
  });
  return cleanedParams;
};

export const cleanQueryParamsCompanies = (params) => {
  const cleanedParams = {};
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (key == "employeesRange") {
      cleanedParams["minEmployees"] = value[0];
      cleanedParams["maxEmployees"] = value[1];
    }
    if (value !== "" && key !== "employeesRange") {
      cleanedParams[key] = value;
    }
  });
  return cleanedParams;
};

export const cleanedParamsApplications = (params) => {
  const cleanedParams = {};
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value !== "") {
      cleanedParams[key] = value;
    }
  });
  return cleanedParams;
};
export const formatTimestampToDate = (timestamp) => {
  return new Date(timestamp).toISOString().split("T")[0];
};

export const formatTimestampToTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export const convertToReadableApplicationStatus = (status) => {
  if (status === "IN_REVIEW") {
    return "Đang xem xét";
  }
  if (status === "INTERVIEWING") {
    return "Đang phỏng vấn";
  }
  if (status === "HIRED") {
    return "Được tuyển";
  }
  if (status === "CANCELLED") {
    return "Bị loại";
  }
  return status;
};

export const formatTimeDifference = (timestamp) => {
  const inputTime = new Date(timestamp);
  const currentTime = new Date();

  const timeDifference = currentTime - inputTime;

  const seconds = Math.floor(timeDifference / 1000);
  if (seconds < 60) {
    return `${seconds} giây trước`;
  } else if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} phút trước`;
  } else if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)} tiếng trước`;
  } else {
    return `${Math.floor(seconds / 86400)} ngày trước`;
  }
};
