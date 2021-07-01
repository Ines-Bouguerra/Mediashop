import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";

const Category = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, categories } = categoryList;
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div class="shop">
      <h2 className="recommandation__title">
        Take advantage of great Shopping plans all year round!
      </h2>
      <a href="#all_categories" className="browse-category__link">
        Search by category
      </a>
      <div class="container">
        {loading ? (
          <Loader />
        ) : (
          <div class="row">
            {categories.map((category) => (
              <div className="col-md-3 mt-3 py-3 " key={category.id}>
                <div className="product_border" />
                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                  <img src={category.image} alt="" style={{width:150,height:150}}/>
                </div>
                <br></br>
                <Link to={`/product-list/category/${category.slug}`}>
                  <div className="product_name browse-category__link_category ">
                    {category.name}
                    <br></br>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
