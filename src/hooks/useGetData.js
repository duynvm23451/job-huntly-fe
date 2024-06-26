import { useEffect, useState } from "react";

const useGetData = (getFunction, searchParams) => {
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
        console.log(searchObject);
        const response = await getFunction(searchObject);
        console.log(response.data);
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
