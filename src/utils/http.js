import axios from "axios";
import qs from "qs";
import {
  cleanQueryParamsJobs,
  cleanQueryParamsCompanies,
  cleanedParamsApplications,
} from "./hepler";
export const getJobs = async (queryParams) => {
  const cleanedParams = cleanQueryParamsJobs(queryParams);
  const response = await axios.get(import.meta.env.VITE_API + "jobs", {
    params: cleanedParams,
    paramsSerializer: (params) => qs.stringify(params),
  });
  return response.data;
};

export const getCompanies = async (queryParams) => {
  const cleanedParams = cleanQueryParamsCompanies(queryParams);
  const response = await axios.get(import.meta.env.VITE_API + "companies", {
    params: cleanedParams,
    paramsSerializer: (params) => qs.stringify(params),
  });
  return response.data;
};

export const getJobDetail = async (queryParams) => {
  const id = queryParams.id;
  const response = await axios.get(import.meta.env.VITE_API + "jobs/" + id);
  return response.data;
};

export const getComapnyDetail = async (queryParams) => {
  const id = queryParams.id;
  const response = await axios.get(
    import.meta.env.VITE_API + "companies/" + id
  );
  return response.data;
};

export const getJobsByCompany = async (queryParams) => {
  const id = queryParams.id;
  const response = await axios.get(
    import.meta.env.VITE_API + "jobs/company/" + id,
    {
      params: queryParams,
    }
  );
  return response.data;
};

export const postAuthCode = async (queryParams) => {
  const response = await axios.post(
    import.meta.env.VITE_API + "auth/outbound/authentication",
    null,
    {
      params: queryParams,
    }
  );
  return response.data;
};

export const login = async (formData) => {
  const reponse = await axios.post(
    import.meta.env.VITE_API + "auth/login",
    formData
  );
  return reponse.data;
};

export const signup = async (formData) => {
  const response = await axios.post(
    import.meta.env.VITE_API + "auth/register",
    formData
  );
  return response.data;
};

export const verifyEmail = async (token) => {
  const response = await axios.put(
    import.meta.env.VITE_API + "auth/verifyEmail?token=" + token
  );
  return response.data;
};

export const forgotPassword = async (email) => {
  const resposne = await axios.get(
    import.meta.env.VITE_API + "auth/forgotPassword?email=" + email
  );
  return resposne.data;
};

export const resetPassword = async (token, data) => {
  const reponse = await axios.put(
    import.meta.env.VITE_API + "auth/resetPassword?token=" + token,
    data
  );
  return reponse.data;
};

export const resendVerifyEmail = async (email) => {
  const response = await axios.get(
    import.meta.env.VITE_API + "auth/resendRegisterToken?email=" + email
  );
  return response.data;
};

export const getMyInfo = async (token) => {
  const response = await axios.get(import.meta.env.VITE_API + "getMyInfo", {
    headers: { Authorization: "Bearer " + token },
  });
  return response.data;
};

export const countApplications = async (token, userId) => {
  const response = await axios.get(
    import.meta.env.VITE_API + "applications/count/" + userId,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  return response.data;
};

export const getLatestInterviewingApplications = async (token) => {
  const response = await axios.get(
    import.meta.env.VITE_API +
      "applications/latest/interviewing?sort=interviewTime,desc&size=2&page=0",
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  return response.data;
};

export const getApplications = async (queryParams, token) => {
  const cleanedParams = cleanedParamsApplications(queryParams);
  const response = await axios.get(import.meta.env.VITE_API + "applications", {
    params: cleanedParams,
    headers: { Authorization: "Bearer " + token },
  });
  return response.data;
};

export const getConfiguration = async () => {
  const response = await axios.get(import.meta.env.VITE_API + "config");
  return response.data;
};

export const getChatRooms = async (queryParams, token) => {
  const response = await axios.get(import.meta.env.VITE_API + "chatRooms", {
    params: queryParams,
    headers: { Authorization: "Bearer " + token },
  });
  return response.data;
};

export const getMessagesList = async (queryParams) => {
  const response = await axios.get(
    import.meta.env.VITE_API +
      "messages/" +
      queryParams.id +
      "?sort=createdAt,desc",
    {
      params: queryParams,
      headers: { Authorization: "Bearer " + queryParams.token },
    }
  );
  return response.data;
};

export const getChatRoomById = async (queryParams) => {
  const response = await axios.get(
    import.meta.env.VITE_API + "chatRooms/" + queryParams.id,
    {
      headers: { Authorization: "Bearer " + queryParams.token },
    }
  );
  return response.data;
};

export const getApplicants = async (queryParams) => {
  const response = await axios.get(
    import.meta.env.VITE_API + "applications/companies",
    {
      headers: { Authorization: "Bearer " + queryParams.token },
      params: queryParams,
    }
  );
  return response.data;
};

export const getRecruiterDashboardInfo = async (queryParams) => {
  const response = await axios.get(
    import.meta.env.VITE_API + "config/recruiter",
    {
      headers: { Authorization: "Bearer " + queryParams.token },
    }
  );
  return response.data;
};

export const createUpdateCompany = async (formData) => {
  const response = await axios.post(
    import.meta.env.VITE_API + "companies",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + formData.get("token"),
      },
    }
  );
  return response.data;
};

export const addUserToCompany = async (queryParams) => {
  const response = await axios.put(
    import.meta.env.VITE_API + "companies",
    { email: queryParams.email },
    {
      headers: {
        Authorization: "Bearer " + queryParams.token,
      },
    }
  );
  return response;
};

export const getUsersInCompany = async (token) => {
  const response = await axios.get(
    import.meta.env.VITE_API + "companies/users",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response;
};

export const getApplicableJobs = async (queryParams) => {
  const response = await axios.get(
    import.meta.env.VITE_API + "companies/applicableJobs",
    {
      params: queryParams,
      headers: { Authorization: "Bearer " + queryParams.token },
    }
  );
  return response.data;
};

export const createJob = async (formData) => {
  const response = await axios.post(
    import.meta.env.VITE_API + "jobs",
    formData,
    {
      headers: { Authorization: "Bearer " + formData.token },
    }
  );
  return response.data;
};

export const applyJob = async (queryParams) => {
  const response = await axios.post(
    import.meta.env.VITE_API +
      "jobs/" +
      queryParams.jobId +
      "/users/" +
      queryParams.userId,
    null,
    {
      headers: { Authorization: "Bearer " + queryParams.token },
    }
  );
  return response.data;
};

export const getApplicationById = async (queryParams) => {
  const response = await axios.get(
    import.meta.env.VITE_API + "applications/" + queryParams.id,
    {
      params: queryParams,
      headers: { Authorization: "Bearer " + queryParams.token },
    }
  );
  return response.data;
};
