import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProductsForm from '../../components/products-form'
import useCreateProduct from './service/mutation/useCreateProduct'

const Add = () => {

  const {mutate} = useCreateProduct()
  const navigate = useNavigate()

  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        toast.success('Product created')
        navigate('/products')
      },
      onError: (e) => {
        toast.error(e.message)
      }
    })
  }

  return (
    <div>
      Add

      <ProductsForm submit={submit}/>
    </div>
  )
}

export default Add
