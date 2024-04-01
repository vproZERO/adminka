import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

const useEditProduct = (id) => {
  return useMutation({
    mutationFn: (data) =>
      request.patch(`/product/${id}`, data).then((res) => res.data),
  });
};

export default useEditProduct;
