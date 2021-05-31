import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
const CategoryComponent = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, categories } = categoryList;
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="container_cat_home">
            <div className="title_cat_home font-underline font-bold col-pink align-center">
              Search by category
            </div>
            <div className="row d-flex">
              {loading ? (
                <Loader />
              ) : (
                <div class="row">
                  {categories.map((category) => (
                    <div
                      className="col-xs-12 col-sm-4 col-md-3 col-lg-2 cat_product_home"
                      key={category.id}
                    >
                      <a
                        href="ordinateur-portable"
                        className="elem_product_home"
                      >
                        <div className="img_cat">
                          <img src={category.image} alt="" />
                        </div>
                        <h3 className="title_cat">{category.name}</h3>
                        <span className="articles_cat">? products </span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryComponent;
