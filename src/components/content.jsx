import React from "react";
import { Link } from "react-router-dom";
import ContentImg from "../assets/img/content-img.png";
import Button from "./button";

const Content = ({title , subtitle , text , link}) => {
  return (
    <div className="w-full h-full rounded-[12px] bg-white flex items-center justify-center px-6 pt-[30px] pb-[89px]">
      <div>
        <h2 className="text-center text-title font-extrabold text-xl">
          {title}
        </h2>
        <h2 className="text-center text-text font-extrabold text-lg">
          {subtitle}
        </h2>
        <div className="w-[313px] h-[235px] mx-auto mb-[66px]">
          <img src={ContentImg} alt="content image" />
        </div>
        <Button variant={"secondary"} className={'text-white font-extrabold text-base mx-auto'}><Link to={link}>{text}</Link></Button>
      </div>
    </div>
  );
};

export default Content;
