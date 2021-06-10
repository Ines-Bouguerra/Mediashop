import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory, getCategories } from "../../actions/category";
import Loader from "../Loader";
const CategoryComponent = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, categories } = categoryList;
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure! You want to delete ?")) {
      dispatch(deleteCategory(id));
    }
  };
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <div className="row">
                    <div className="col-lg-2">
                      <h2>All categories</h2>
                    </div>
                    <div className="col-lg-6">
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
                    <div className="col-lg-2">
                      {" "}
                      <i class="material-icons">search</i>
                    </div>
                    <div className="col-lg-2">
                      <Link
                        to="/admin/add-category"
                        type="submit"
                        className="btn bg-pink btn-block waves-effect"
                      >
                        <i className="material-icons font-bold">add</i>
                        <span className="">Add New Catecory</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="container_cat_home">
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
                              val.name
                                .toLowerCase()
                                .includes(keyword.toLowerCase())
                            ) {
                              return val;
                            }
                          })
                          .map((category) => (
                            <div
                              className="col-xs-12 col-sm-4 col-md-3 col-lg-3 cat_product_home"
                              key={category.id}
                            >
                              <div className="product_border " />
                              <Link
                                to=""
                                className="elem_product_home m-3"
                                style={{ width: 200, height: 130 }}
                              >
                                <div className="product_border"></div>
                                <div
                                  className="img_cat m-3"
                                  style={{ width: 200, height: 100 }}
                                >
                                  <img
                                    src={category.image}
                                    alt=""
                                    style={{
                                      width: 150,
                                      height: 150,
                                      marginRight: "auto",
                                    }}
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
                                <button
                                  type="submit"
                                  className=" m-3  btn-circle  bg-pink waves-effect waves-circle waves-float"
                                >
                                  <i className="material-icons">info</i>
                                </button>
                                <button
                                  type="submit"
                                  className=" m-3 btn-circle  bg-pink waves-effect waves-circle waves-float"
                                >
                                  <i className="material-icons">edit</i>
                                </button>
                                <button
                                  type="submit"
                                  className=" m-3  btn-circle bg-pink waves-effect waves-circle waves-float"
                                  onClick={() => deleteHandler(category.id)}
                                >
                                  <i className="material-icons ">delete</i>
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryComponent;
