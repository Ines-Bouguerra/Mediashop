import React, { Component } from "react";
import APIHandler from "../../utils/APIHandler";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }
  state = {
    errorRes: false,
    errorMessage: "",
    btnMessage: 0,
    sendData: false,
    postList: [],
    dataLoaded: false,
  };

  async formSubmit(event) {
    event.preventDefault();
    this.setState({ btnMessage: 1 });

    var apiHandler = new APIHandler();
    var response = await apiHandler.savePostData(
      event.target.subject.value,
      event.target.comment.value,
       event.target.rate.value,
       event.target.product.value,
       event.target.user.value
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
    this.fetchPostData();
  }

  async fetchPostData() {
    this.updateDataAgain();
  }

  async updateDataAgain() {
    var apihandler = new APIHandler();
    var postList = await apihandler.fetchPost();
    this.setState({ postList: postList.data.data });
    this.setState({ dataLoaded: true });
  }

  ShowPostDetails = (eid) => {
    this.props.history.push("/postdetails/" + eid);
  };

  render() {
    return (
      <div className="">
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
        <div className="reviews">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="">
                  <div className="font-bold col-teal align-left font-underline">
                    <a href="#;">
                      <br></br>
                      <br></br>
                    </a>
                  </div>
                  <div className="font-bold col-teal align-right font-underline">
                    <a
                      href="#;"
                      className="font-bold col-teal align-right font-underline"
                    >
                      view all{" "}
                      <span className="font-bold col-teal align-right font-underline">
                        reviews
                      </span>
                    </a>
                  </div>
                </div>
                <br></br>
                <br></br>

                <div className="reviews_slider_container">
                  {/* Reviews Slider */}
                  <span className="font-bold font-underline col-teal">
                    Write Your Review
                  </span>

                  <div className="owl-carousel owl-theme reviews_slider owl-loaded owl-drag">
                    <form onSubmit={this.formSubmit}>
                      <br></br>
                      <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                        <input
                          className="contact_form_name input_field"
                          placeholder="Subject"
                          type="text"
                          name="subject"
                          required
                          data-error="Subject is required."
                        />
                      </div>
                      <div className="contact_form_text">
                        <textarea
                          id="contact_form_message"
                          className="text_field contact_form_message"
                          name="comment"
                          rows="3"
                          placeholder="Message"
                          type="text"
                          required
                          data-error="Please type what you want..."
                          defaultValue=""
                        />
                      </div>
                      <br></br>
                      <div className="contact_form_text py-1">
                        <span className="m-3 py-3 font-bold col-teal">
                          Your rating :
                        </span>
                        <i className="material-icons  ">star_border</i>
                        <i className="material-icons">star_border</i>
                        <i className="material-icons">star_border</i>
                      </div>
                      <br></br>
                      <br></br>
                      {/* <button type="button" class="btn bg-teal waves-effect">
                        <i class="material-icons">forum</i>
                        <span>Submit</span>
                      </button> */}

                      <div className="contact_form_button">
                        <button
                          type="submit"
                          rounded
                          className="btn bg-teal btn-block btn-lg waves-effect col-xs-6 col-sm-3 col-md-2 col-lg-3"
                          disabled={this.state.btnMessage === 0 ? false : true}
                        >
                          <i class="material-icons">forum</i>
                          <span className="m-3">
                            {this.state.btnMessage === 0
                              ? "Send Your Review"
                              : "Sending Your Review Please Wait.."}
                          </span>
                        </button>
                      </div>
                      <br /><br /><br /><br /><br /><br />
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
           <>
                       <ul className="">
                         {this.state.postList.map((post) => (
                           <li className="" key={post.id}>
                             {/* <a href="xx">{post.user.first_name}</a> */}
                             <a href="xx">{post.create_at}</a><br></br>
                             <a href="xx">{post.subject}</a><br></br>
                             <a href="xx">{post.comment}</a><br></br>
                             <a href="xx">{post.rate}</a>

                           </li>
                         ))}
                       </ul>
                     </>
      </div>
    );
  }
}

