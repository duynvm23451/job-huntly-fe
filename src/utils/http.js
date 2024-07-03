import axios from "axios";
import qs from "qs";
import { cleanQueryParamsJobs, cleanQueryParamsCompanies } from "./hepler";
export const getJobs = async (queryParams) => {
  try {
    const cleanedParams = cleanQueryParamsJobs(queryParams);
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
    const cleanedParams = cleanQueryParamsCompanies(queryParams);
    const response = await axios.get(import.meta.env.VITE_API + "companies", {
      params: cleanedParams,
      paramsSerializer: (params) => qs.stringify(params),
    });
    return response.data;
  } catch (error) {
    throw new Error(response.error);
  }
};

export const getJobDetail = async (queryParams) => {
  try {
    const id = queryParams.id;
    const response = await axios.get(import.meta.env.VITE_API + "jobs/" + id);
    return response.data;
  } catch (error) {
    throw new Error(response.error);
  }
};

export const getComapnyDetail = async (queryParams) => {
  try {
    const id = queryParams.id;
    const response = await axios.get(
      import.meta.env.VITE_API + "companies/" + id
    );
    return response.data;
  } catch (error) {
    throw new Error(response.error);
  }
};

export const getJobsByCompany = async (queryParams) => {
  try {
    const id = queryParams.id;
    const response = await axios.get(
      import.meta.env.VITE_API + "jobs/company/" + id,
      {
        params: queryParams,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(response.error);
  }
};
