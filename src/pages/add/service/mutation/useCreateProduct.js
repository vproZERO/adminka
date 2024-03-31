import { useMutation } from "@tanstack/react-query"
import { request } from "../../../../config/request"

const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data) => request.post('/product', data).then((res) => res.data)
  })
}

export default useCreateProduct
