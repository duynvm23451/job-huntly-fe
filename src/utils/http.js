import axios from "axios";
import qs from "qs";
import { cleanQueryParams } from "./hepler";
export const getJobs = async (queryParams) => {
  try {
    const cleanedParams = cleanQueryParams(queryParams);
    const response = await axios.get(import.meta.env.VITE_API + "jobs", {
      params: cleanedParams,
      paramsSerializer: (params) => qs.stringify(params),
    });
    return response.data;
  } catch (error) {
    throw new Error(response.error);
  }
};

export const getCompanies = async (queryParams) => {
  try {
    const response = await axios.get(import.meta.env.VITE_API + "companies");
    return response.data;
  } catch (error) {
    throw new Error(response.error);
  }
};
