import axios from "axios";

export const getJobs = async (searchParams) => {
  try {
    const response = await axios.get(import.meta.env.VITE_API);
    return response.data;
  } catch (error) {
    throw new Error(response.error);
  }
};
