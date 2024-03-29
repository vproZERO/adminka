import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../assets/icon/logo";
import PaymentsIcon from "../assets/icon/payments-icon";
import ProductsIcon from "../assets/icon/products-icon";
import ProfileIcon from "../assets/icon/profile-icon";
import SettingsIcon from "../assets/icon/settings-icon";
import Footer from "./footer/footer";
import Header from "./header/header";

const MainLayout = () => {
    
    const location = useLocation()



  return (
    <div className="flex h-screen  items-center">
      <div className="h-[100%] bg-primary px-6 py-7">
        <Link to={'/'} className='text-white mb-[48px] flex items-center justify-center'>
            <Logo/>
        </Link>
        <Link to={'/'} className={location.pathname === '/' ? `flex items-center justify-center bg-primaryOpacity p-4 rounded-[6px]` : 'flex items-center justify-center p-4 rounded-[6px] '}>
            <SettingsIcon/>
        </Link>
        <Link to={'/profile'} className={location.pathname === '/profile' ? `flex items-center justify-center bg-primaryOpacity p-4 rounded-[6px]` : 'flex items-center justify-center p-4 rounded-[6px] '}>
            <ProfileIcon/>
        </Link>
        <Link to={'/products'} className={location.pathname === '/products' ? `flex items-center justify-center bg-primaryOpacity p-4 rounded-[6px]` : 'flex items-center justify-center p-4 rounded-[6px] '}>
            <ProductsIcon/>
        </Link>
        <Link to={'/payments'} className={location.pathname === '/payments' ? `flex items-center justify-center bg-primaryOpacity p-4 rounded-[6px]` : 'flex items-center justify-center p-4 rounded-[6px] '}>
            <PaymentsIcon/>
        </Link>
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
