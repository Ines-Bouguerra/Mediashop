import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/category";
import Loader from "../Loader";
const CategoryComponent = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

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
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-2">
                <div className="form-group">
                  <div className="form-line">
                    <input
                      type="text"
                      id="Keyword"
                      name="Keyword"
                      className="form-control font-bold col-pink "
                      placeholder="Search for Catecory ..."
                      required
                      data-error="Keyword is required."
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <i class="material-icons">search</i>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="row d-flex">
              {loading ? (
                <Loader />
              ) : (
                <div className="row">
                  {categories
                    .filter((val) => {
                      if (keyword === "") {
                        return val;
                      } else if (
                        val.name.toLowerCase().includes(keyword.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((category) => (
                      <div
                        className="col-xs-12 col-sm-4 col-md-3 col-lg-2 cat_product_home"
                        key={category.id}
                      >
                        <div className="product_border " />
                        <Link
                          to=""
                          className="elem_product_home"
                          style={{ width: 200, height: 130 }}
                        >
                          <div className="product_border"></div>
                          <div
                            className="img_cat"
                            style={{ width: 200, height: 100 }}
                          >
                            <img
                              src={category.image}
                              alt=""
                              style={{ width: 150, height: 150 }}
                              className="m-3"
                            />
                          </div>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <h3 className="title_cat font-underline align-center">
                            {category.name}
                          </h3>
                        </Link>
                        <div className="align-center">
                          <Link
                            to=""
                            className=" m-3  btn-circle  bg-pink waves-effect waves-circle waves-float"
                          >
                            <i className="material-icons">info</i>
                          </Link>
                          <Link
                            to=""
                            className=" m-3 btn-circle  bg-pink waves-effect waves-circle waves-float"
                          >
                            <i className="material-icons">edit</i>
                          </Link>
                          <Link
                            to=""
                            className=" m-3  btn-circle bg-pink waves-effect waves-circle waves-float"
                          >
                            <i className="material-icons ">delete</i>
                          </Link>
                        </div>
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
