import React, { useEffect } from "react"
import { getProduct } from "../../actions/product"
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { products } = productList

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  return (
    <div className="shop_bar clearfix">
      <div className="shop_product_count">
        <span>{products.length}</span> products found
        </div>
      <div className="shop_sorting">
        <span>Sort by:</span>
        <ul>
          <li>
            <span className="sorting_text">
              highest rated
                <i className="fas fa-chevron-down" />
              <ul>
                <li
                  className="shop_sorting_button"
                  data-isotope-option='{ "sortBy": "original-order" }'
                >
                  highest rated
                  </li>
                <li
                  className="shop_sorting_button"
                  data-isotope-option='{ "sortBy": "name" }'
                >
                  name
                  </li>
                <li
                  className="shop_sorting_button"
                  data-isotope-option='{ "sortBy": "price" }'
                >
                  price
                  </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Filter