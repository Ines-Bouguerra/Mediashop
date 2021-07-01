import React, { useEffect, useState } from "react";
import Product from "../../components/products/Product";
import { useDispatch, useSelector } from "react-redux";

import { compareProduct, getProduct } from "../../actions/product";
import Loader from "../../components/Loader";
import Filter from "../../components/products/Filter";
import { getCategories, getSubCategories } from "../../actions/category";
import Paginate from "../../components/products/Paginate";
import ProductCarousel from "../../components/products/ProductCarousel";

import Brand from "../../components/brand/Brand";
import SubCategory from "../../components/category/SubCategory";

const ProductList = ({ match }) => {
  const dispatch = useDispatch();
  const query = match.params.query;
  const pageNumber = match.params.pageNumber || 1;
  const name = match.params.name;
  const reference = match.params.reference;
  const priceString = match.params.priceString;
  const [page, setPage] = useState(match.params.page);
  const [category_slug, setCategorySlug] = useState(match.params.category_slug);
  const [limits, setLimits] = useState(match.params.limits);
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

 
  useEffect(() => {
    dispatch(
      getProduct(query, page, category_slug, limits),
      getCategories(),
      getSubCategories(),
      compareProduct(name, reference, priceString)
    );
  }, [
    dispatch,
    query,
    page,
    category_slug,
    limits,
    name,
    reference,
    priceString,
  ]);
 
  return (
     
    <div className="super_container">
      {!query ? <ProductCarousel /> : <></>}

      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
             
              <div className="shop_sidebar">
                <div className="sidebar_section">
                  <div className="sidebar_title font-underline col-teal font-italic">
                    Categories
                  </div>
                  <ul className="sidebar_categories">
                    {categories.map((category) => (
                      <li className="category-link">
                        <span
                          onClick={() => {
                            setCategorySlug(category.slug);
                          }}
                        >
                          {category.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <br></br>
                <div className="sidebar_section">
                  <div className="sidebar_title font-underline col-teal font-italic">
                    Sub Categories
                  </div>
                  <SubCategory />
                </div>
                <br></br>
                <div className="sidebar_section filter_by_section">
                  <div className="sidebar_title font-underline col-teal font-italic">
                    Filter By
                  </div>
                  <div className="sidebar_subtitle">Price</div>
                  <div className="filter_price">
                    <div id="slider-range" className="slider_range" />
                    <p>Range: </p>
                    <p>
                      <input
                        type="text"
                        id="amount"
                        className="amount"
                        readOnly
                        style={{ border: 0, fontWeight: "bold" }}
                      />
                    </p>
                  </div>
                </div>
                <br></br>
                <div className="sidebar_section">
                  <div className="sidebar_title font-underline col-teal font-italic">
                    Brands
                  </div>
                  <br />
                  <Brand />
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              {/* Product Content */}
              <div className="shop_content">
                <Filter 
               
                 />
                <div className="product_grid ">
                  <div className="product_grid_border" />

                  {loading ? (
                    <Loader />
                  ) : (
                    <>
                      <div className="row">
                        {products.map((product) => (
                          <div
                            className="product_item is_new col-md-3 mt-3 product"
                            key={product.id}
                          >
                            <Product product={product} />
                          </div>
                        ))}
                      </div>

                      <br></br>
                      <br></br>
                      <br></br>

                      <Paginate page={page} query={query ? query : ""} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
