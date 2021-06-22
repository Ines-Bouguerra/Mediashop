import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listBrands, deleteBrand } from "../../actions/brand";
import Message from "../Message";
import Loader from "../Loader";
const BrandComponent = ({ history }) => {
  const dispatch = useDispatch();

  const brandList = useSelector((state) => state.brandList);
  const { loading, error, brands } = brandList;
  console.log(
    "TCL ~ file: BrandComponent.js ~ line 12 ~ BrandComponent ~ brands",
    brands
  );
  const brandDelete = useSelector((state) => state.brandDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = brandDelete;

  useEffect(() => {
    dispatch(listBrands());
  }, [dispatch, history, loadingDelete, errorDelete, successDelete]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure! You want to delete ?")) {
      dispatch(deleteBrand(id));
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
                    <div className="col-lg-10">
                      <h2>All Brand</h2>
                    </div>
                    <div className="col-lg-2">
                      <Link
                        to="/admin/add-brand"
                        type="submit"
                        className="btn bg-pink btn-block waves-effect"
                      >
                        <i className="material-icons font-bold">add</i>
                        <span className="">Add New Brand</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="body table-responsive">
                  {loadingDelete && <Loader />}
                  {errorDelete && (
                    <Message variant="danger">{errorDelete}</Message>
                  )}

                  {loading ? (
                    <Loader />
                  ) : error ? (
                    <Message variant="danger">{error}</Message>
                  ) : (
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Slug</th>
                          <th>Added At</th>
                          <th>created At</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {brands.map((brand) => (
                          <tr key={brand.id}>
                            <td>
                              <img
                                src={brand.image}
                                alt=""
                                style={{ width: 50, height: 25 }}
                              />
                            </td>
                            <td>{brand.name}</td>
                            <td>{brand.slug}</td>
                            <td>
                              {new Date(brand.created_at).toLocaleString()}
                            </td>
                            <td>
                              {new Date(brand.updated_at).toLocaleString()}
                            </td>
                            <td>
                              <Link
                                to={`/admin/brand/${brand.id}`}
                                className=" m-3 btn bg-light-blue  waves-effect waves-circle waves-float"
                              >
                                <i className="material-icons">info</i>
                              </Link>
                              <Link
                                to={`/admin/edit-brand/${brand.id}`}
                                className=" m-3 btn bg-cyan waves-effect waves-circle waves-float"
                              >
                                <i className="material-icons">edit</i>
                              </Link>
                              <button
                                type="submit"
                                className=" m-3 btn bg-danger  waves-effect waves-circle waves-float"
                                onClick={() => deleteHandler(brand.id)}
                              >
                                <i className="material-icons">delete</i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BrandComponent;
