import React from "react";
import { Link, useLocation } from "react-router-dom";
import ExitIcon from "../../assets/icon/exit-icon";
import Button from "../../components/button";

const Header = () => {
  const location = useLocation();

  return (
    <div className="px-10 py-4 bg-white w-full shadow-lg flex items-center justify-between">
      <div>
        <h2 className="text-title font-extrabold mb-1 text-lg">Товары</h2>
        <Link to={"/"} className="text-text font-bold text-xs">
          Главная {location.pathname === "/" ? "" : location.pathname}
        </Link>
      </div>
      <Button className={'text-title font-bold text-sm bg-[#F7F7FF]'} icon={<ExitIcon/>} variant={"outline"}>Выйти</Button>
    </div>
  );
};

export default Header;
