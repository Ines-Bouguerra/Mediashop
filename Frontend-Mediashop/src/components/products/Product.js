import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";

const colors = {
  red: "#F44336",
  grey: "#a9a9a9",
};
const Product = ({ product, category, loading }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(1).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
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
          {product.priceString}
        </div>
        <div>
          <small> {product.reference}</small>
        </div>

        <div className="product_name">
          <div>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </div>
        </div>
        {/* <Link to={`/compare/${product.name}/${product.reference}/${product.priceString}`} > */}
        <Link
          to={`/compare/${product.name}/${product.reference}/${product.priceString}`}
        >
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

      <ul style={styles.hearts}>
        {stars.map((_, index) => {
          return (
            <FaHeart
              key={index}
              size={20}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index ? colors.red : colors.grey
              }
              style={{
                marginRight: 500,
                cursor: "pointer",
              }}
            />
          );
        })}
      </ul>

      {(product.discount !== "0 %") & (product.discount === "null") ? (
        <ul className="product_marks">
          <li className="product_mark product_new product_discount">
            {product.discount}
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default Product;

const styles = {
  hearts: {
    position: "absolute",
    top: "33px",
    right: "12px",
    width: "36px",
    height: "36px",
  },
};
