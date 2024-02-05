import axios, { AxiosError } from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../components/ProductList";
import "../components/ProductDetail.css";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://localhost:7101/api/product/${productId}`
        );
        setProduct(res.data.result);
        console.log(res.data.result);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchProducts();
  }, [productId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://localhost:7101/api/product/${productId}`,
        product
      );
      console.log("Product updated successfully:", res.data);
      navigate("/");
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:7101/api/product/${productId}`);
      console.log(productId);
      navigate("/");
    } catch (err) {
      setError((err as AxiosError).message);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="productdetail">
      <h1 className="mt-5 mb-4">Product Detail Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            onChange={(e) =>
              setProduct({ ...product, productName: e.target.value })
            }
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter Product Name"
            value={product.productName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sku" className="form-label">
            SKU
          </label>
          <input
            className="form-control"
            id="sku"
            aria-describedby="emailHelp"
            placeholder="Enter product sku"
            value={product.sku}
            onChange={(e) => setProduct({ ...product, sku: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="retailPrice" className="form-label">
            Retail Price
          </label>
          <input
            className="form-control"
            id="retailPrice"
            type="number"
            placeholder="Enter Retail Price"
            value={product.retailPrice}
            onChange={(e) =>
              setProduct({ ...product, retailPrice: +e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salePrice" className="form-label">
            Sale Price
          </label>
          <input
            className="form-control"
            id="salePrice"
            type="number"
            placeholder="Enter Sale Price"
            value={product.salePrice}
            onChange={(e) =>
              setProduct({ ...product, salePrice: +e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lowestPrice" className="form-label">
            Lowest Price
          </label>
          <input
            className="form-control"
            id="lowestPrice"
            type="number"
            placeholder="Enter Lowest Price"
            value={product.lowestPrice}
            onChange={(e) =>
              setProduct({ ...product, lowestPrice: +e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="active" className="form-label">
            Active
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked={product.active}
            onChange={(e) =>
              setProduct({ ...product, active: !product.active })
            }
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
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default ProductDetailPage;
