export const convertJobType = (input) => {
  const words = input.split("_");
  const capitalizedWords = words.map((word) => word.toLowerCase());
  const joinString = capitalizedWords.join(" ");
  const result = joinString.charAt(0).toUpperCase() + joinString.slice(1);
  return result;
};

export const cleanQueryParams = (params) => {
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
