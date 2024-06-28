import { useEffect, useState } from "react";

const useGetData = (getFunction, queryParams) => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await getFunction(queryParams);
        setData(response.data);
      } catch (error) {
        setError({ message: error.message } || "Không thể lấy dữ liệu");
      }
      setIsLoading(false);
    };

    getData();
  }, [queryParams]);

  return {
    isLoading,
    error,
    data,
  };
};

export default useGetData;
