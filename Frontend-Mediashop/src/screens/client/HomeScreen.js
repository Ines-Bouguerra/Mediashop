import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBrands } from "../../actions/brand";
import { getCategories, getSubCategories } from "../../actions/category";
import { compareProduct, getProduct } from "../../actions/product";
import brandss from "../../components/brand/constants";
import subcategories from "../../components/category/constant";
import Loader from "../../components/Loader";
import Filter from "../../components/products/Filter";
import Paginate from "../../components/products/Paginate";
import Product from "../../components/products/Product";
import ProductCarousel from "../../components/products/ProductCarousel";
import 'rc-slider/assets/index.css'
import Slider  from 'rc-slider';

const {createSliderWithTooltip}=Slider;
const Range=createSliderWithTooltip(Slider.Range)


const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const query = match.params.query;
  const page = match.params.page || 1;
  const limits = match.params.limits || 28;
  const name = match.params.name;
  const reference = match.params.reference;
  const priceString = match.params.priceString;
  const [category_slug, setcategory_slug] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [brand_slug, setbrand_slug] = useState("");
  const [price, setPrice] = useState([1,10000000]);
 
  const productList = useSelector((state) => state.productList);
  const { loading, products, pages } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  // const subcategoryList = useSelector((state) => state.subcategoryList);
  // const { subcategories } = subcategoryList;
  
  // const brandListe = useSelector((state) => state.brandListe);
  // const { brandss } = brandListe;
 

  useEffect(() => {
    dispatch(
      getProduct(query, page, limits, category_slug, brand_slug,subcategory,price),
      getCategories(),
      getSubCategories(),
      listBrands(),
      compareProduct(name, reference, priceString)
    );
  }, [
    dispatch,
    query,
    page,
    category_slug,
    subcategory,
    brand_slug,
    price,
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
                  <ul className="sidebar_categories">
                    {subcategories.map((subcategory) => (
                      <li
                        style={{ cursor: "pointer", liststyleType: "none" }}
                        key={subcategory}
                        onClick={() => setsubcategory(subcategory.slug)}
                      >
                        {subcategory.name}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="sidebar_section filter_by_section">
                  <div className="sidebar_title font-underline col-teal font-italic">
                    Filter By Price
                  </div>
                  <br></br><br></br>
                  <div className="filter_price">
                    <div id="slider-range" className="slider_range" />
                    <div >
                      <Range
                      marks={{
                        1:`1 TND`,
                        10000:`10000 TND`
                      }}
                      min={1}
                      max={10000}
                      defaultValue={[1,10000]}
                      tipFormatter={value=>`${value} TD`}
                      tipProps={{
                        placement:"top",
                        visible:true,
                      }}
                      value={price}
                      onChange={price=>setPrice(price)}
                      
                      />
                    </div>
                  </div>
                </div>
                <br></br><br/><br/><br/>
                <div className="sidebar_section">
                  <div className="sidebar_title font-underline col-teal font-italic">
                    Brands
                  </div>
                  <br />
                  <ul className="brands_list">
                    {brandss.map((brand) => (
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
                  {/* <Brand /> */}
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
