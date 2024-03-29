import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center relative'>
      <h2 className='text-center text-6xl text-primary font-bold'>Page not found</h2>
      <Link to={'/'} className='absolute right-5 bottom-5 text-secondary text-xl font-medium'>Go Home</Link>
    </div>
  )
}

export default PageNotFound
