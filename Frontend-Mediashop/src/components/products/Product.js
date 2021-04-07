import React from "react"
import { Link } from "react-router-dom"

const Product = ({ product, category, loading,name,reference,price,}) => {
  return (
    <>
      <div className="product_border" />
      <div className="product_image d-flex flex-column align-items-center justify-content-center">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="" />
        </Link>
      </div>
      <div className="product_content">
        <div className="product_price">{product.price} TN</div>
        <div className="product_name">
          <div>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </div>
        </div>
        <Link to={`/compare/${name}/${reference}/${price}`} className="btn btn-info btn-circle btn-md">Compare</Link>
      </div>
      <div className="product_fav">
        <i className="fas fa-heart" />
      </div>
      <ul className="product_marks">
        <li className="product_mark product_new product_discount">
          {product.discount}
        </li>
      </ul>
    </>
  )
}

export default Product
