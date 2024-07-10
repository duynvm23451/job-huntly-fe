import GoogleIcon from "@/components/icons/GoogleIcon";
import RectangleButton from "@/components/shared/RectangleButton";
import { OAuth2ConfigGoogle } from "@/configurations/configuration";
import { setToken } from "@/services/localStorageService";
import { login } from "@/utils/http";
import { useEffect } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const token = useRouteLoaderData("root");
  useEffect(() => {
    if (token) {
      console.log("duy");
      navigate("/");
    }
  }, []);

  const handleClick = () => {
    const callbackUrl = OAuth2ConfigGoogle.redirectUri;
    const authUrl = OAuth2ConfigGoogle.authUri;
    const googleClientId = OAuth2ConfigGoogle.clientId;

    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    const data = await login(formData);
    setToken(data.data.token);
    window.location.href = "/";
  };
  return (
    <>
      <p className="text-lg font-semibold">
        <Link
          to={"/auth/signup"}
          className="text-blue-600 hover:text-custom-violet cursor-pointer"
        >
          Tạo tài khoản mới
        </Link>{" "}
        hoặc{" "}
        <Link
          to={"/auth/login"}
          className="text-blue-600 hover:text-custom-violet cursor-pointer"
        >
          đăng nhập
        </Link>
      </p>
      <p className="text-lg">để tiếp cận hàng ngàn việc làm</p>
      <button
        onClick={handleClick}
        className="text-lg font-bold text-custom-violet flex justify-center items-center w-1/4 pb-1.5 pt-2 mt-8 border-1 border-custom-neutral-2"
      >
        <GoogleIcon className="w-8 h-8 mr-4" />
        Đăng nhập với Google
      </button>
      <div className="flex items-end justify-between w-1/4 my-4">
        <div className="w-20 h-0.5 bg-custom-neutral-2 mb-2" />
        <span className="text-center">Hoặc đăng nhập bằng email</span>
        <div className="w-20 h-0.5 bg-custom-neutral-2 mb-2" />
      </div>
      <form className="w-1/4" onSubmit={handleSubmit}>
        <label className="text-lg font-medium">Email</label>
        <input
          className="w-full block mt-2 mb-4"
          placeholder="Nhập tài khoản email"
          type="email"
          name="email"
        />
        <label className="text-lg font-medium">Mật khẩu</label>
        <input
          className="w-full block mt-2 mb-8"
          placeholder="Nhập tài khoản email"
          type="password"
          name="password"
        />
        <RectangleButton className={"w-full"}>Đăng nhập</RectangleButton>
      </form>
      <div className="w-1/4 flex justify-end mt-4">
        <Link
          to={"/forgot-password"}
          className="text-lg font-semibold text-blue-600 hover:text-custom-violet"
        >
          Quên mật khẩu ?
        </Link>
      </div>
    </>
  );
};

export default Login;
