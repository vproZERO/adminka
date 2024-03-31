import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

const useGetSingleProduct = (id) => {
  return useQuery({
    queryKey: ['single-product' , id],
    queryFn: () => request.get(`/product/${id}`).then((res) => res.data)
  })
}

export default useGetSingleProduct
