import React, { Component } from "react";
import APIHandler from "../../utils/APIHandler";
import { Link } from "react-router-dom";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }
  state = {
    errorRes: false,
    errorMessage: "",
    btnMessage: 0,
    sendData: false,
    wishList: [],
    dataLoaded: false,
  };
  async formSubmit(event) {
    event.preventDefault();
    this.setState({ btnMessage: 1 });

    var apiHandler = new APIHandler();
    var response = await apiHandler.savewishlistData(
      event.target.product.value,
      event.target.user.value,
      event.target.created_at.value
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
    this.fetchWishlistData();
  }

  async fetchWishlistData() {
    this.updateDataAgain();
  }

  async updateDataAgain() {
    var apihandler = new APIHandler();
    var wishList = await apihandler.fetchWishlist();
    this.setState({ wishList: wishList.data.data });
    this.setState({ dataLoaded: true });
  }

  ShowWishlistDetails = (eid) => {
    this.props.history.push("/wishlistdetails/" + eid);
  };
  render() {
    return (
      <>
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
        <>
          <div className="cart_section">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="cart_container">
                    <div className="cart_title font-underline">
                      Your Wishlist
                    </div>
                    <div className="cart_items" style={{ width: 1000 }}>
                      <ul className="cart_list">
                        {this.state.wishList.map((wishlist) => (
                          
                          <li
                            className="cart_item clearfix"
                            key={wishlist.id}
                            style={{ width: 1000 }}
                          >
                            <div className="cart_item_image">
                              <img
                                src={wishlist.product.image}
                                alt=""
                              />
                            </div>
                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                              <div
                                className="cart_item_name cart_info_col"
                                style={{ width: 150 }}
                              >
                                <div className="cart_item_title align-center">
                                  Name
                                </div>
                                <div className="cart_item_text">
                                  {wishlist.product.name}
                                </div>
                              </div>
                              <div
                                className="cart_item_color cart_info_col"
                                style={{ width: 150 }}
                              >
                                <div className="cart_item_title align-center">
                                  Reference
                                </div>
                                <div className="cart_item_text">
                                  {wishlist.product.reference}
                                </div>
                              </div>
                              <div className="cart_item_quantity cart_info_col">
                                <div className="cart_item_title align-center align-center">
                                  Marketplace
                                </div>
                                <div className="cart_item_text">
                                  {wishlist.product.retailer}
                                </div>
                              </div>
                              <div
                                className="cart_item_price cart_info_col"
                                style={{ width: 150 }}
                              >
                                <div className="cart_item_title align-center">
                                  Price
                                </div>
                                <div className="cart_item_text">
                                  {wishlist.product.priceString} TND
                                </div>
                              </div>

                              <div
                                className="cart_item_total cart_info_col m-1"
                                style={{ width: 115}}
                              >
                                <div className="cart_item_title"></div>
                                <div className="cart_item_text">
                                  <Link
                                    to={wishlist.product.url}
                                    type="button"
                                    className="btn bg-teal btn-block btn-xs waves-effect align-center"
                                  >
                                    see the offer
                                    <i className="fas fa-chevron-right p-3"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="">
                      <div className="order_total_content text-md-right">
                        <div className="order_total_title"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    );
  }
}
