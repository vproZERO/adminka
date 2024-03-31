import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

const useGetProducts = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => request.get("/product").then((res) => res.data),
  });
};

export default useGetProducts;
