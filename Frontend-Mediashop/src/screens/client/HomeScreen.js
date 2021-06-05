import React, { useEffect } from "react";
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
const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const query = match.params.query;
  const pageNumber = match.params.pageNumber || 1;
  const name = match.params.name;
  const reference = match.params.reference;
  const priceString = match.params.priceString;
  const productList = useSelector((state) => state.productList);
  const { loading, products, page, pages } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const subcategoryList = useSelector((state) => state.subcategoryList);
  const { subcategories } = subcategoryList;

  useEffect(() => {
    dispatch(
      getProduct(query, pageNumber),
      getCategories(),
      getSubCategories(),
      compareProduct(name, reference, priceString)
    );
  }, [dispatch, query, pageNumber, name, reference, priceString]);


  return (
    <div class="super_container">
      {/* Home */}
      {!query ? <ProductCarousel /> : <></>}
      {/* Shop */}
      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* Shop Sidebar */}
              <div className="shop_sidebar">
                <div className="sidebar_section">
                  <div className="sidebar_title font-underline col-teal font-italic">
                    Categories
                  </div>
                  <ul className="sidebar_categories">
                    {categories.map((category) => (
                      <li>
                        <a href="#!">{category.name}</a>
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
                  <div class="sidebar_title font-underline col-teal font-italic">
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
                <Filter />
                <div className="product_grid ">
                  <div className="product_grid_border" />
                  {/* Product Item */}
                  {loading ? (
                    <Loader />
                  ) : (
                    <>
                      <div class="row">
                        {products.map((product) => (
                          <div
                            className="product_item is_new col-md-3 mt-3 product"
                            key={product.id}
                          >
                            <Product product={product} />
                          </div>
                        ))}
                      </div>
                      {/* Product Page Navigation */}
                      <br></br>
                      <br></br>
                      <br></br>

                      <Paginate
                        pages={pages}
                        page={page}
                        query={query ? query : ""}
                      />
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

export default HomeScreen;
