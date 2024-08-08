import { setToken } from "@/services/localStorageService";
import { postAuthCode } from "@/utils/http";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const Authenticate = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const role = useSelector((state) => state.role.role);
  useEffect(() => {
    const code = searchParams.get("code");
    const queryParams = {
      code,
      role,
    };
    if (code) {
      const authGoogle = async () => {
        const data = await postAuthCode(queryParams);
        setToken(data.data.token);
        navigate("/");
      };
      authGoogle();
    }
  }, []);

  return (
    <div className="h-screen bg-custom-neutral relative z-40">Authenticate</div>
  );
};

export default Authenticate;
