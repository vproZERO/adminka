import Cookies from "js-cookie";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ExitIcon from "../../assets/icon/exit-icon";
import Button from "../../components/button";

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const exit = () => {
    Cookies.remove("user_token");
    navigate("/login", { replace: true });
    toast.error("Вы вышли из аккаунта");
  };

  return (
    <div className="px-10 py-4 bg-white w-full shadow-lg flex items-center justify-between">
      <div>
        <h2 className="text-title font-extrabold mb-1 text-lg">Товары</h2>
        <div className="flex items-center ">
          <Link to={"/"} className="text-text font-bold text-xs">
            Главная
          </Link>
          <Link to={location.pathname} className="text-text font-bold text-xs">
            {location.pathname === "/" ? "" : location.pathname}
          </Link>
        </div>
      </div>
      <Button
        onClick={exit}
        className={
          "text-title font-bold text-sm bg-[#F7F7FF] transition hover:-translate-y-2"
        }
        icon={<ExitIcon />}
        variant={"outline"}
      >
        Выйти
      </Button>
    </div>
  );
};

export default Header;
