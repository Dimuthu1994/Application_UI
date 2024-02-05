import { Link } from "react-router-dom";
import "./ProductList.css";

export interface Product {
  productId: number;
  active: boolean;
  productName: string;
  sku: string;
  created: string;
  retailPrice: number;
  salePrice: number;
  lowestPrice: number;
}

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <table className="table table-bordered border-black">
      <thead>
        <tr>
          <th>Active</th>
          <th>Product Name</th>
          <th>SKU</th>
          <th>Created</th>
          <th>Retail Price</th>
          <th>Sale Price</th>
          <th>Lowest Price</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {products.map((p, index) => (
          <tr key={index}>
            <td>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked={p.active}
                  disabled
                />
              </div>
            </td>
            <td>
              <Link to={`/${p.productId}`}>{p.productName}</Link>
            </td>
            <td>{p.sku}</td>
            <td>{p.created}</td>
            <td>{p.retailPrice}</td>
            <td>{p.salePrice}</td>
            <td>{p.lowestPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
