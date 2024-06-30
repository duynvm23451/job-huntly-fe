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
