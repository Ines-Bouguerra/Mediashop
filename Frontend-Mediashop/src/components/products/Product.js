import React from "react"
import { Link } from "react-router-dom"
import { MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
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
        <div className="product_price">{product.priceString} {product.currency}</div>
        <div className="product_name">
          <div>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </div>
        </div>
        {/* <Link to={`/compare/${product.name}/${product.reference}/${product.priceString}`} > */}
        <Link to={`/compare`} >
          <MDBBtn outline rounded className='mx-2  mb-2' color='info'>Compare</MDBBtn></Link>
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
