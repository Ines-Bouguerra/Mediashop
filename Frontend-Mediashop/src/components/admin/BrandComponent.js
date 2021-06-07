import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteBrand } from "../../actions/brand";
const BrandComponent = () => {
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  {this.state.dataLoaded === false ? (
                    <div className="text-center">
                      <div className="preloader pl-size-xl">
                        <div className="spinner-layer">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="row">
                    <div className="col-lg-10">
                      <h2>All Brand</h2>
                    </div>
                    <div className="col-lg-2">
                      <Link
                        to="/admin/add-brand"
                        type="button"
                        className="btn bg-pink btn-block waves-effect"
                      >
                        <i className="material-icons font-bold">add</i>
                        <span className="">Add New Brand</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="body table-responsive">
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
                      {this.state.brandList.map((brand) => (
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
                          <td>{new Date(brand.created_at).toLocaleString()}</td>
                          <td>{new Date(brand.updated_at).toLocaleString()}</td>
                          <td>
                            <button
                              type="submit"
                              className=" m-3 btn bg-light-blue  waves-effect waves-circle waves-float"
                              onClick={() => this.viewBrandDetails(brand.id)}
                            >
                              <i className="material-icons">info</i>
                            </button>
                            <button
                              className=" m-3 btn bg-cyan waves-effect waves-circle waves-float"
                              onClick={() => this.viewBrandDetails(brand.id)}
                            >
                              <i className="material-icons">edit</i>
                            </button>
                            <button
                              type="submit"
                              className=" m-3 btn bg-danger  waves-effect waves-circle waves-float"
                              onClick={() => this.deleteBrandDetails}
                            >
                              <i className="material-icons">delete</i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
