import React from "react";
import Content from "../../components/content";

const Home = () => {
  return (
    <div>
      Home
      <Content link={'/products'} title={"Главная"} text={"Перейти"} />
    </div>
  );
};

export default Home;
