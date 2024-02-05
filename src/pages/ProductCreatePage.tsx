import React, { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { Schema, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  productName: z.string().min(3),
  sku: z.string(),
  retailPrice: z.number(),
  salePrice: z.number(),
  lowestPrice: z.number(),
  active: z.boolean(),
});

type FormData = z.infer<typeof schema>;

const ProductCreatePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await axios.post(`https://localhost:7101/api/product`, data);
      navigate("/");
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };

  return (
    <div className="productdetail">
      <h1 className="mt-5 mb-4">Product Create Page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            {...register("productName")}
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter Product Name"
          />
          {errors.productName && (
            <p className="text-danger">{errors.productName.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="sku" className="form-label">
            SKU
          </label>
          <input
            {...register("sku")}
            className="form-control"
            id="sku"
            aria-describedby="emailHelp"
            placeholder="Enter product sku"
          />
          {errors.sku && <p className="text-danger">{errors.sku.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="retailPrice" className="form-label">
            Retail Price
          </label>
          <input
            {...register("retailPrice", { valueAsNumber: true })}
            className="form-control"
            id="retailPrice"
            type="number"
            placeholder="Enter Retail Price"
          />
          {errors.retailPrice && (
            <p className="text-danger">{errors.retailPrice.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="salePrice" className="form-label">
            Sale Price
          </label>
          <input
            {...register("salePrice", { valueAsNumber: true })}
            className="form-control"
            id="salePrice"
            type="number"
            placeholder="Enter Sale Price"
          />
          {errors.salePrice && (
            <p className="text-danger">{errors.salePrice.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lowestPrice" className="form-label">
            Lowest Price
          </label>
          <input
            {...register("lowestPrice", { valueAsNumber: true })}
            className="form-control"
            id="lowestPrice"
            type="number"
            placeholder="Enter Lowest Price"
          />
          {errors.lowestPrice && (
            <p className="text-danger">{errors.lowestPrice.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="active" className="form-label">
            Active
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            {...register("active")}
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={(e) => {
            navigate("/");
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default ProductCreatePage;
