import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");

  async function AddCategory() {
    console.warn(name, slug, image);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("image", image);
    let result = await fetch(
      "http://127.0.0.1:8080/api/categories/category_create",
      {
        method: "POST",
        body: formData,
        // headers: {'Content-Type': 'multipart/form-data'}
      }
    );
    alert("Category added successfully");
  }
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>Add New Category</h2>
              </div>
              <div className="body">
                <>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Name</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                            required
                            data-error="Name is required."
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Slug</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="slug"
                            name="slug"
                            className="form-control"
                            placeholder="Enter Slug"
                            required
                            data-error="Slug is required."
                            onChange={(e) => setSlug(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="email_address">Image</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="file"
                            id="image"
                            name="image"
                            className="form-control"
                            placeholder="Enter Image"
                            required
                            data-error="Image is required."
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col-lg-2">
                      <Link
                        to="/admin/category"
                        type="submit"
                        className="btn bg-pink btn-block waves-effect"
                      >
                        <i className="material-icons font-bold">cancel</i>
                        <span className="m-3">Cancel</span>
                      </Link>
                    </div>
                    <div className="col-lg-8"></div>
                    <div className="col-lg-2">
                      <button
                        type="submit"
                        className="btn bg-pink btn-block waves-effect"
                        onClick={AddCategory}
                      >
                        <i className="material-icons font-bold ">add</i>
                        <span className="m-3">Add New Category</span>
                      </button>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
