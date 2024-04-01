import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductsForm from "../../../components/products-form";
import useEditProduct from "../service/mutation/useEditProduct";
import useGetSingleProduct from "../service/query/useGetSingleProduct";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data ,isLoading} = useGetSingleProduct(id);
  const { mutate } = useEditProduct(id);
  
  const client = useQueryClient();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Product updated");
        client.invalidateQueries({ queryKey: ["single-product", id] });
        navigate("/products");
      },
    });
  };

  return (
    <div>
      {isLoading ? "Loading..." :  <ProductsForm invalidateValue={data} submit={submit} />}
     
    </div>
  );
};

export default EditProduct;
