import axios from "axios";

export const getJobs = async (searchObject) => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_API +
        `jobs?page=${searchObject.page}&size=${searchObject.size}`
    );
    return response.data;
  } catch (error) {
    throw new Error(response.error);
  }
};
