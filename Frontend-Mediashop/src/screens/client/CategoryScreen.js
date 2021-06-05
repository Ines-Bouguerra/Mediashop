import React, { useEffect,  } from 'react';
import { getProductByCategory } from '../../actions/product';
import { useDispatch, useSelector } from "react-redux"

import { Link } from "react-router-dom";

const CategoryScreen = ({ match }) => {

  const dispatch = useDispatch();
  const productByCategory = useSelector((state) => state.productByCategory);
  const { loading, products} = productByCategory;
  useEffect(() => {
    dispatch(getProductByCategory(match.params.slug));
  }, [dispatch, match]);


    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col">
            {loading ? (
              <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                Loading...
              </h4>
            ) : (
              <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                {products.length} Products in {products.category} category
              </h4>
            )}
          </div>
        </div>
  
        <div className="row">
          {products.map((product) => (            
            <div className="col" key={product.id}>
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
      <div>
        <link to="/wishlist" />
        <div className="product_fav">
          <i className="fas fa-heart" />
        </div>
      </div>

      {product.discount !== "0 %" ? (
        <ul className="product_marks">
          <li className="product_mark product_new product_discount">
            {product.discount}
          </li>
        </ul>
      ) : null}
            </div>
          ))}
        </div>
      </div>
    )
          }
export default CategoryScreen