import React, { useEffect, useState } from "react";
import ProductList, { Product } from "../components/ProductList";
import axios, { AxiosError } from "axios";
import Pagination from "../components/Pagination";
import "../components/ProductList.css";
import { Link } from "react-router-dom";

interface Props {
  searchValue: string | null;
}

const ProductsPage = ({ searchValue }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [pageSize, setPageSize] = useState<number>(4); // Number of items per page
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Search Value:", searchValue);
      try {
        let url = `https://localhost:7101/api/product?pageSize=${pageSize}&pageNumber=${pageNumber}`;
        if (searchValue) {
          url += `&search=${searchValue}`;
        }
        const res = await axios.get(url);
        setProducts(res.data.result);
        console.log(res.data.result);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchProducts();
  }, [searchValue, pageSize, pageNumber]);

  return (
    <>
      <div className="productlist">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <p className="fs-3">Product</p>
          </div>
          <div className="col-auto">
            <Link to={"/create"} className="btn btn-primary">
              Add New Product
            </Link>
          </div>
        </div>
        <div className="col">
          <p className="fs-4">Manage and add new Products</p>
        </div>

        <ProductList products={products} />
        <Pagination
          handleNextPage={() =>
            setPageNumber((prevPageNumber) => prevPageNumber + 1)
          }
          handlePrevPage={() =>
            setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1))
          }
          pageNumber={pageNumber}
        />
      </div>
    </>
  );
};

export default ProductsPage;
