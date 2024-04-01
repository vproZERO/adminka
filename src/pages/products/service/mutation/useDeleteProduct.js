import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (id) =>
      request.delete(`/product/${id}`).then((res) => res.data),
  });
};

export default useDeleteProduct;
