import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getProductDetails } from '../actions/product'
import Loader from '../components/Loader'
import Message from '../components/Message'
const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  useEffect(() => {
    dispatch(getProductDetails(match.params.id))
  }, [dispatch, match])
  return (
    <div className='single_product'>
      <Link to='/product-list'>Go Back</Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className='container'>
          <div className='row'>
            {/* Selected Image */}
            <div className='col-lg-5 order-lg-2 order-1'>
              <div className='image_selected'>
                <img src='images/single_4.jpg' alt='' />
              </div>
            </div>
            {/* Description */}
            <div className='col-lg-5 order-3'>
              <div className='product_description'>
                <div className='product_category'>{product.category}</div>
                <div className='product_name'>{product.name}</div>
                <div className='product_price'>{product.price}</div>
                <div className='product_text'>
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductScreen
