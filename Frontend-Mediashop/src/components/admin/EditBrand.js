import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function EditBrand(props) {
  const [data, setDate] = useState([]);
  console.warn("props", props.match.params.id);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");

  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8080/api/brand/" + props.match.params.id
    );
    result = await result;
    setDate(result);
    setName(data.name);
    setSlug(data.slug);
    setImage(data.image);
  }, []);

  async function editBrand(id) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("image", image);
    let result =  fetch("http://localhost:8080/api/brand/"+id, {
      method: "PUT",
      body: formData,
      // headers: {'Content-Type': 'multipart/form-data'}
    });
    alert("Brand has been updated !");
  }

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>Add New Brand</h2>
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
                            defaultValue={data.name}
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
                            defaultValue={data.slug}
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
                            defaultValue={data.file_path}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col-lg-2">
                      <Link
                        to="/admin/brand"
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
                        onClick={() => editBrand(data.id)}
                      >
                        <i className="material-icons font-bold ">add</i>
                        <span className="m-3">Update Brand</span>
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
