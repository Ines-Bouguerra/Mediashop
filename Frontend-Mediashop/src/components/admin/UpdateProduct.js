import React, { Component } from "react";
import APIHandler from "../../utils/APIHandler";

export default class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }
  state = {
    errorRes: false,
    errorMessage: "",
    btnMessage: 0,
    sendData: false,
    productList: [],
    dataLoaded: false,
  };

  async formSubmit(event) {
    event.preventDefault();
    this.setState({ btnMessage: 1 });

    var apiHandler = new APIHandler();
    var response = await apiHandler.editProductForAdminData(
      event.target.category.value,
      event.target.description.value,
      event.target.domaine.value,
      event.target.name.value,
      event.target.reference.value,
      event.target.discount.value,
      event.target.url.value,
      event.target.timestamp.value,
      event.target.brand.value,
      event.target.priceString.value,
      event.target.retailer.value,
      event.target.marketplace.value,
      event.target.price.value,
      event.target.currency.value,
      event.target.sub_category.value,
      event.target.country.value,
      event.target.short_description.value,
      event.target.old_price.value,
      event.target.image.value,
      event.target.marketplaceId.value,
      this.props.match.params.id
    );
    console.log(response);
    this.setState({ btnMessage: 0 });
    this.setState({ errorRes: response.data.error });
    this.setState({ errorMessage: response.data.message });
    this.setState({ sendData: true });
    this.updateDataAgain();
  }

  //This Method Work When Our Page is Ready
  componentDidMount() {
    this.fetchProductDataById();
  }

  async fetchProductDataById() {
    this.updateDataAgain();
  }

  async updateDataAgain() {
    var apihandler = new APIHandler();
    var productDataList = await apihandler.fetchProductForAdminById(
      this.props.match.params.id
    );
    this.setState({ category: productDataList.data.data.category });
    this.setState({ description: productDataList.data.data.description });
    this.setState({ domaine: productDataList.data.data.domaine });
    this.setState({ name: productDataList.data.data.name });
    this.setState({ reference: productDataList.data.data.reference });
    this.setState({ discount: productDataList.data.data.discount });
    this.setState({ url: productDataList.data.data.url });
    this.setState({ timestamp: productDataList.data.data.timestamp });
    this.setState({ brand: productDataList.data.data.brand });
    this.setState({ priceString: productDataList.data.data.priceString });
    this.setState({ retailer: productDataList.data.data.retailer });
    this.setState({ marketplace: productDataList.data.data.marketplace });
    this.setState({ price: productDataList.data.data.price });
    this.setState({ currency: productDataList.data.data.currency });
    this.setState({ sub_category: productDataList.data.data.sub_category });
    this.setState({ country: productDataList.data.data.country });
    this.setState({
      short_description: productDataList.data.data.short_description,
    });
    this.setState({ old_price: productDataList.data.data.old_price });
    this.setState({ image: productDataList.data.data.image });
    this.setState({ marketplaceId: productDataList.data.data.marketplaceId });

    this.setState({ dataLoaded: true });
  }

  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Update Product</h2>
                </div>
                <div className="body">
                  <form onSubmit={this.formSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Category</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="category"
                              name="category"
                              className="form-control"
                              placeholder="Enter category"
                              defaultValue={this.state.category}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Brand</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="brand"
                              name="brand"
                              className="form-control"
                              placeholder="Enter Brand"
                              defaultValue={this.state.brand}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Domaine</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="domaine"
                              name="domaine"
                              className="form-control"
                              placeholder="Enter Domaine"
                              defaultValue={this.state.domaine}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Timestamp</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="date"
                              id="timestamp"
                              name="timestamp"
                              className="form-control"
                              placeholder="Enter Timestamp"
                              defaultValue={this.state.timestamp}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

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
                              defaultValue={this.state.name}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Reference</label>
                        <div className="form-group">
                          <div className="form-line">
                            <text
                              type="text"
                              id="Reference"
                              name="Reference"
                              className="form-control"
                              placeholder="Enter Reference"
                              defaultValue={this.state.reference}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Discount</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="url"
                              id="discount"
                              name="discount"
                              className="form-control"
                              placeholder="Enter Discount"
                              defaultValue={this.state.discount}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">PriceString</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="pricestring"
                              name="pricestring"
                              className="form-control"
                              placeholder="Enter PriceString"
                              defaultValue={this.state.priceString}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Retailer</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="retailer"
                              name="retailer"
                              className="form-control"
                              placeholder="Enter Retailer"
                              defaultValue={this.state.retailer}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Marketplace</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="marketplace"
                              name="marketpalce"
                              className="form-control"
                              placeholder="Enter Marketplace"
                              defaultValue={this.state.marketplace}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Price</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="number"
                              id="price"
                              name="price"
                              className="form-control"
                              placeholder="Enter Price"
                              defaultValue={this.state.price}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Old Price</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="number"
                              id="old_price"
                              name="old_price"
                              className="form-control"
                              placeholder="Enter Old Price"
                              defaultValue={this.state.old_price}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Currency</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="currency"
                              name="currency"
                              className="form-control"
                              placeholder="Enter Currency"
                              defaultValue={this.state.currency}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Country</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="country"
                              name="country"
                              className="form-control"
                              placeholder="Enter Country"
                              defaultValue={this.state.country}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Image</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="url"
                              id="image"
                              name="image"
                              className="form-control"
                              placeholder="Enter Image Url"
                              defaultValue={this.state.image}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">URL</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="url"
                              name="url"
                              className="form-control"
                              placeholder="Enter Url"
                              defaultValue={this.state.url}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <label htmlFor="email_address">Description</label>
                        <div className="form-group">
                          <div className="form-line">
                            <textarea
                              type="text"
                              id="description"
                              name="description"
                              className="form-control"
                              placeholder="Enter Description"
                              defaultValue={this.state.description}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    <button
                      type="submit"
                      className="btn btn-primary m-t-15 waves-effect btn-block"
                      disabled={this.state.btnMessage === 0 ? false : true}
                    >
                      {this.state.btnMessage === 0
                        ? "Edit Product"
                        : "Editing Product Please Wait.."}
                    </button>
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
