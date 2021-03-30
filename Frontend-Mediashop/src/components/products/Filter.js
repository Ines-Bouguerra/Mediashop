import React, { useEffect } from "react"
import { getProduct } from "../../actions/product"
import { connect } from "react-redux"

const Filter = ({ getProduct, product: { products }, loading }) => {


  useEffect(() => {
    getProduct()
  }, [getProduct])

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

const mapStateToProps = (state) => ({
  product: state.product,
})

export default connect(mapStateToProps, { getProduct, })(Filter)