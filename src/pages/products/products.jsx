import React from "react";
import ProductCard from "../../components/product-card";
import Content from "../../components/content";
import useGetProducts from "./service/query/useGetProducts";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import useDeleteProduct from "./service/mutation/useDeleteProduct";

const Products = () => {
  const { data } = useGetProducts();
  const { mutate } = useDeleteProduct();
  return (
    <div>
      {data ? (
        <ProductCard mutate={mutate} />
      ) : (
        <Content
          link={"/add"}
          title={"Товары"}
          text={"Создать"}
          subtitle={"У вас нет ни одного товара ("}
        />
      )}

      {data ? (
        <div className="w-full flex items-center my-7">
          <Button variant={"secondary"} className={'hover:bg-[#1BC58D5F] hover:text-secondary font-bold'}>
            <Link to={"/add"}>Новый товар</Link>
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Products;
