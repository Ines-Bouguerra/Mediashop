import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

const Product = ({ product, category, loading }) => {
  return (
    <>
      <div className="product_border" />
      <div className="product_image d-flex flex-column align-items-center justify-content-center">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt="" />
        </Link>
      </div>
      <div className="product_content">
        <div className="product_price">
          {product.priceString} {product.currency}
        </div>
        <div className="product_name">
          <div>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </div>
        </div>
        {/* <Link to={`/compare/${product.name}/${product.reference}/${product.priceString}`} > */}
        <Link to={`/compare`}>
          <button
            type="button"
            rounded
            outline
            className="btn bg-teal btn-block waves-effect"
          >
            Compare
          </button>
        </Link>
      </div>
      <Link to="/product-list" className="product_fav">
        <i className="fas fa-heart" />
      </Link>
      <ul className="product_marks">
        <li className="product_mark product_new product_discount">
          {product.discount}
        </li>
      </ul>
    </>
  );
};

export default Product;
