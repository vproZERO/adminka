import React from "react";
import { useForm } from "react-hook-form";
import Button from "./button";
import Input from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

const schema = zod.object({
  title: zod.string().min(1, "The title is required"),
  brand: zod.string().min(1, "The brand is required"),
  code: zod.string().min(1, "The code is required"),
  country: zod.string().min(1, "The country is required"),
  tax: zod.string().min(1, "The tax is required"),
  description: zod.string().min(1, "The description is required"),
  weight: zod.string().min(1, "The weight is required"),
  length: zod.string().min(1, "The length is required"),
  width: zod.string().min(1, "The width is required"),
  height: zod.string().min(1, "The height is required"),
  img: zod.string().min(1, "The image is required"),
  vendor: zod.string().min(1, "The vendor is required"),
  color: zod.string().min(1, "The color is required"),
  price: zod.string().min(1, "The price is required"),
  discount: zod.string().min(1, "The discount is required"),
  premiumcount: zod.string().min(1, "The premium country is required"),
});

const ProductsForm = ({ submit, invalidateValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-full h-full rounded-[12px] bg-white px-6 pb-10 pt-28 ">
      <form
        className="flex flex-col gap-10 w-full"
        onSubmit={handleSubmit(submit)}
      >
        <div className="border rounded-lg py-10 px-12 mb-10">
          <div className="w-[764px] mb-[30px]">
            <Input
              error={errors?.title}
              helperText={errors?.title?.message}
              {...register("title")}
              label={"Title *"}
              className={"bg-[#F6F6FB]"}
              defaultValue={invalidateValue?.title}
            />
          </div>
          <div className="flex items-center gap-10 mb-[30px]">
            <div className="w-[362px] ">
              <Input
                error={errors?.brand}
                helperText={errors?.brand?.message}
                {...register("brand")}
                label={"Brand *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.brand}
              />
            </div>
            <div className="w-[362px] ">
              <Input
                error={errors?.code}
                helperText={errors?.code?.message}
                {...register("code")}
                label={"Code *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.code}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-[30px]">
            <div className="w-[362px] ">
              <Input
                error={errors?.country}
                helperText={errors?.country?.message}
                {...register("country")}
                label={"Country *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.country}
              />
            </div>
          </div>
          <div className="w-[764px] mb-[50px] h-[110px]">
            <Input
              error={errors?.description}
              helperText={errors?.description?.message}
              {...register("description")}
              label={"Description *"}
              className={"bg-[#F6F6FB] h-[110px] "}
              defaultValue={invalidateValue?.description}
            />
          </div>
          <div className="flex items-center gap-10 mb-[30px]">
            <div className="w-[228px] ">
              <Input
                error={errors?.weight}
                helperText={errors?.weight?.message}
                {...register("weight")}
                label={"Weight *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.weight}
              />
            </div>
            <div className="w-[228px] ">
              <Input
                error={errors?.length}
                helperText={errors?.length?.message}
                {...register("length")}
                label={"Length *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.length}
              />
            </div>
            <div className="w-[228px] ">
              <Input
                error={errors?.width}
                helperText={errors?.width?.message}
                {...register("width")}
                label={"Width *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.width}
              />
            </div>
            <div className="w-[228px] ">
              <Input
                error={errors?.height}
                helperText={errors?.height?.message}
                {...register("height")}
                label={"Height *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.height}
              />
            </div>
          </div>
        </div>

        <div className="border rounded-lg py-10 px-12 ">
          <div className="w-[362px] mb-[30px]">
            <Input
              error={errors?.img}
              helperText={errors?.img?.message}
              {...register("img")}
              label={"Img *"}
              className={"bg-[#F6F6FB]"}
              defaultValue={invalidateValue?.img}
            />
          </div>
          <div className="flex items-center gap-10 mb-[30px]">
            <div className="w-[362px] ">
              <Input
                error={errors?.vendor}
                helperText={errors?.vendor?.message}
                {...register("vendor")}
                label={"Vendor *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.vendor}
              />
            </div>
            <div className="w-[362px] ">
              <Input
                error={errors?.color}
                helperText={errors?.code?.color}
                {...register("color")}
                label={"Color *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.color}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-[30px]">
            <div className="w-[228px] ">
              <Input
                error={errors?.price}
                helperText={errors?.price?.message}
                {...register("price")}
                label={"Price *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.price}
              />
            </div>
            <div className="w-[228px] ">
              <Input
                error={errors?.discount}
                helperText={errors?.discount?.message}
                {...register("discount")}
                label={"Discount *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.discount}
              />
            </div>
            <div className="w-[228px] ">
              <Input
                error={errors?.premiumcount}
                helperText={errors?.premiumcount?.message}
                {...register("premiumcount")}
                label={"Premium Count *"}
                className={"bg-[#F6F6FB]"}
                defaultValue={invalidateValue?.premiumcount}
              />
            </div>
          </div>
        </div>

        <Button
          variant={"secondary"}
          type={"submit"}
          className={"max-w-[120px]"}
        >
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default ProductsForm;
