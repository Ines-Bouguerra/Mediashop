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
import { listBrands } from "../../actions/brand";
const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const query = match.params.query;
  const page = match.params.page || 1;
  const limits = match.params.limits || 20;
  const name = match.params.name;
  const reference = match.params.reference;
  const priceString = match.params.priceString;
  const [category_slug, setcategory_slug] = useState("");
  const [brand_slug, setbrand_slug] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, products, pages } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const brandList = useSelector((state) => state.brandList);
  const { brands } = brandList;
  console.log(
    "TCL ~ file: HomeScreen.js ~ line 33 ~ HomeScreen ~ brands",
    brands
  );

  useEffect(() => {
    dispatch(
      getProduct(query, page, limits, category_slug, brand_slug),
      getCategories(),
      listBrands(),
      getSubCategories(),
      compareProduct(name, reference, priceString)
    );
  }, [
    dispatch,
    query,
    page,
    category_slug,
    brand_slug,
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
                      <li
                        style={{ cursor: "pointer", liststyleType: "none" }}
                        key={category}
                        onClick={() => setcategory_slug(category.slug)}
                      >
                        {category.name}
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
                  <ul className="brands_list">
                    {brands.map((brand) => (
                      <li
                        className="brand"
                        style={{ cursor: "pointer", liststyleType: "none" }}
                        key={brand}
                        onClick={() => setbrand_slug(brand.slug)}
                      >
                        {brand.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="shop_content">
                <Filter />
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

                      <Paginate
                        pages={pages}
                        page={page}
                        limits={limits}
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
