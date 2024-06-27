import { useEffect, useState } from "react";

const useGetData = (getFunction, searchParams, searchObject = {}) => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const page = searchParams.get("page") ?? 1;
        const size = searchParams.get("size") ?? 1;
        const searchObject = {
          page,
          size,
        };

        const response = await getFunction(searchObject);
        setData(response.data);
      } catch (error) {
        setError({ message: error.message } || "Không thể lấy dữ liệu");
      }
      setIsLoading(false);
    };

    getData();
  }, [searchParams]);

  return {
    isLoading,
    error,
    data,
  };
};

export default useGetData;
