import { useEffect, useState } from "react";

const useGetData = (getFunction, searchParams) => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getFunction(searchParams);
        console.log(data);
        setData(data.data);
      } catch (error) {
        setError({ message: error.message } || "Không thể lấy dữ liệu");
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
};

export default useGetData;
