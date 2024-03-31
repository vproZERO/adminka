import Cookies from "js-cookie";
import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../assets/icon/logo";
import PaymentsIcon from "../assets/icon/payments-icon";
import ProductsIcon from "../assets/icon/products-icon";
import ProfileIcon from "../assets/icon/profile-icon";
import SettingsIcon from "../assets/icon/settings-icon";
import Footer from "./footer/footer";
import Header from "./header/header";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (!Cookies.get("user_token")) return <Navigate to={'/login'} replace={true}/>

  return (
    <div className="flex h-screen  items-center">
      <div className="h-screen bg-primary px-6 py-7">
        <div>
        <Link
          to={"/"}
          className="text-white mb-[48px] flex items-center justify-center"
        >
          <Logo />
        </Link>
        <Link
          to={'/'}
          className={
            location.pathname === "/"
              ? `flex items-center justify-center bg-primaryOpacity p-4 rounded-[6px]`
              : "flex items-center justify-center p-4 rounded-[6px] "
          }
        > 
          <SettingsIcon />
        </Link>
        <Link
          to={"/profile"}
          className={
            location.pathname === "/profile"
              ? `flex items-center justify-center bg-primaryOpacity p-4 rounded-[6px]`
              : "flex items-center justify-center p-4 rounded-[6px] "
          }
        >
          <ProfileIcon />
        </Link>
        <Link
          to={"/products"}
          className={
            location.pathname === "/products"
              ? `flex items-center justify-center bg-primaryOpacity p-4 rounded-[6px]`
              : "flex items-center justify-center p-4 rounded-[6px] "
          }
        >
          <ProductsIcon />
        </Link>
        <Link
          to={"/payments"}
          className={
            location.pathname === "/payments"
              ? `flex items-center justify-center bg-primaryOpacity p-4 rounded-[6px]`
              : "flex items-center justify-center p-4 rounded-[6px] "
          }
        >
          <PaymentsIcon />
        </Link>
        </div>
      </div>
      <div className="wrapper grow">
        <header>
          <Header />
        </header>
        <main className="p-10 ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
