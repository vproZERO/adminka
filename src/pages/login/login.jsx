import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { saveState } from "../../config/storage";
import Button from "../../components/button";
import Input from "../../components/input";
import useLogin from "./service/useLogin";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm();
  const { mutate } = useLogin();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        Cookies.set("user_token", res.accessToken);
        saveState("user", res.user);

        toast.success("Login successful");
        navigate("/", { replace: true });
      },
      onError: (e) => {
        toast.error(e.message);

        console.log(e);
      },
    });
    reset();
  };

  return (
    <div className="w-full h-screen bg-primary flex items-center justify-center">
      <div className="backdrop-blur-sm bg-white/30 rounded py-7 px-9">
        <div>
          <h1 className="text-3xl font-bold text-white text-start">Login</h1>
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <input
                className="bg-inherit w-full border border-gray-500 text-gray-500 placeholder:text-gray-500 rounded-lg py-1 px-2 outline-blue-600 focus:placeholder:text-blue-600 focus:text-blue-600"
                type="email"
                {...register("email", { required: true })}
                defaultValue={"admin@gmail.com"}
              />
            </div>
            <div className="mb-3">
              <input
                className="bg-inherit w-full border border-gray-500 text-gray-500 placeholder:text-gray-500 rounded-lg py-1 px-2 outline-blue-600 focus:placeholder:text-blue-600 focus:text-blue-600"
                type="password"
                {...register("password", { required: true })}
                defaultValue={"1234"}
              />
            </div>
            <Button type={"submit"} variant={"primary"}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
