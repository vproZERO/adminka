import clsx from "clsx";
import React from "react";

const Input = React.forwardRef(
  (
    {
      className,
      variant,
      type,
      onChange,
      value,
      id,
      name,
      placeholder,
      label,
      error,
      helperText,
      radioLabel,
      defaultValue,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx('w-full' , type === 'radio' && 'flex items-center gap-3')}>
        {label && <label htmlFor={id}>{label}</label>}
        
        <input
          className={clsx(
            "border  placeholder:text-primary py-1 px-3 flex items-center gap-4 rounded outline-primary w-full",
            error && "border-red text-red placeholder:text-red outline-red",
            className,
            {
              "bg-inherit": variant === "outline",
            }
          )}
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          required={true}
          ref={ref}
          defaultValue={defaultValue}
          {...props}
        />
        {type === 'radio' && <label className='text-title font-semibold' htmlFor={id}>{radioLabel}</label>}
        {helperText && <p className="text-red text-sm">{helperText}</p>}
      </div>
    );
  }
);

export default Input;
