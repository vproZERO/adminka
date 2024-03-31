import clsx from 'clsx'
import React from 'react'

const Button = ({ children, variant , className , type , onClick , icon}) => {
  return (
    <button onClick={onClick} type={type} className={clsx("flex items-center gap-2 px-4 py-[10px] rounded-[6px]" , className , {
        "bg-primary text-white" : variant === "primary",
        "bg-secondary text-white" : variant === "secondary",
        "bg-red-500 text-white" : variant === "danger",
        "bg-inherit" : variant === "inherit",
    })}>
        {icon}
        {children}
    </button>
  )
}

export default Button
