import React from "react";
import { toast } from "react-toastify";
import ProductDeleteIcon from "../assets/icon/product-delete-icon";
import ProductEditIcon from "../assets/icon/product-edit-icon";
import useGetProducts from "../pages/products/service/query/useGetProducts";
import { useQueryClient } from "@tanstack/react-query";
import Button from "./button";
import { Link } from "react-router-dom";

const ProductCard = ({ mutate }) => {
  const { data } = useGetProducts();
  const client = useQueryClient();

  const deleteItem = (id) => {
    mutate(id, {
      onSuccess: () => {
        toast.error("Product deleted");
        client.invalidateQueries({ queryKey: ["product"] });
      },
      onError: (e) => {
        toast.error(e.message);
      },
    });
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-text bg-white rounded-[12px]">
        <thead className="text-xs text-text uppercase ">
          <tr className="border-b pb-5">
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="bg-white border-b">
              <th scope="row" className="px-6 py-4 font-extrabold text-title">
                {item.title}
              </th>
              <td className="px-6 py-4 text-title font-semibold">
                {item.color}
              </td>
              <td className="px-6 py-4 text-title font-semibold">
                {item.country}
              </td>
              <td className="px-6 py-4 text-title font-semibold">
                ${item.price}
              </td>
              <td className="flex items-center gap-2 py-4 pr-6 justify-end">
                <Button className={"p-2 bg-[#F7F7FF]"}>
                  <Link to={`/add/edit/${item.id}`}>
                    <ProductEditIcon />
                  </Link>
                </Button>
                <Button
                  onClick={() => deleteItem(item.id)}
                  className={"p-2 bg-[#F7F7FF]"}
                >
                  <ProductDeleteIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;
