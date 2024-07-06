import { postAuthCode } from "@/utils/http";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log(window.location.href);

    const authCodeRegex = /code=([^&]+)/;
    const isMatch = window.location.href.match(authCodeRegex);

    if (isMatch) {
      const authCode = isMatch[1];
      const authGoogle = async () => {
        const data = await postAuthCode(authCode);
        console.log(data);
      };
      authGoogle();
    }
  });
  return <div>Authenticate</div>;
};

export default Authenticate;
