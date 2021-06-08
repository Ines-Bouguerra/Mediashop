import React from "react";
import APIHandler from "../../utils/APIHandler";
import { Link } from "react-router-dom";

export default class AddBrand  extends React.Component {
 
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }
  state = {
    errorRes: false,
    errorMessage: "",
    btnMessage: 0,
    sendData: false,
    contactDataList: [],
    dataLoaded: false,
  };

  async formSubmit(event) {
    event.preventDefault();
    this.setState({ btnMessage: 1 });

    var apiHandler = new APIHandler();
    var response = await apiHandler.saveBrandData(
      event.target.name.value,
      event.target.slug.value,
      event.target.image.files[0],

    );
    console.log(response);
    this.setState({ btnMessage: 0 });
    this.setState({ errorRes: response.data.error });
    this.setState({ errorMessage: response.data.message });
    this.setState({ sendData: true });
  }

  render() {

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
                <form onSubmit={this.formSubmit}>
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
                        disabled={this.state.btnMessage === 0 ? false : true}
                      >
                        <i className="material-icons font-bold ">add</i>
                        <span className="m-3">
                          {this.state.btnMessage === 0
                            ? "Add New Brand"
                            : "Addong New Brand Please Wait.."}
                        </span>
                      </button>
                    </div>
                  </div>
                  <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {this.state.errorRes === false &&
                    this.state.sendData === true ? (
                      <div className="alert alert-success">
                        <strong>Success!</strong> {this.state.errorMessage}.
                      </div>
                    ) : (
                      ""
                    )}
                    {this.state.errorRes === true &&
                    this.state.sendData === true ? (
                      <div className="alert alert-danger">
                        <strong>Failed!</strong>
                        {this.state.errorMessage}.
                      </div>
                    ) : (
                      ""
                    )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
}