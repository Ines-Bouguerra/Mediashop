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
                  <div className="font-bold col-cyan align-left font-underline">
                    <a href="#;">
                      <br></br>
                      <br></br>
                      Latest <span>reviews</span>
                    </a>
                  </div>
                  <div className="font-bold col-cyan align-right font-underline">
                    <a href="#;">
                      view all <span>reviews</span>
                    </a>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="reviews_slider_container">
                  {/* Reviews Slider */}
                  <div className="owl-carousel owl-theme reviews_slider owl-loaded owl-drag">
                    <form className="">
                      WRITE YOUR REVIEW
                      <div className="form-line">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <br></br>
                      <textarea
                        rows="4"
                        className="form-control no-resize"
                        placeholder="Please type what you want..."
                        defaultValue=""
                      />
                      <br></br>
                     
                      <div className="py-1">
                      <span className="m-3 py-3">YOUR RATING:</span>
                        <i className="material-icons  ">star_border</i>
                        <i className="material-icons">star_border</i>
                        <i className="material-icons">star_border</i>
                      </div>
                      <br></br>
                      <br></br>
                      <button type="button" class="btn bg-teal waves-effect">
                        <i class="material-icons">forum</i>
                        <span>Submit</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//   <>
//                       <ul className="">
//                         {this.state.postList.map((post) => (
//                           <li className="" key={post.id}>
//                             <a href="xx">{post.user.name}</a>
//                             <a href="xx">{post.create_at}</a>
//                             <a href="xx">{post.subject}</a>
//                             <a href="xx">{post.comment}</a>
//                             <a href="xx">{post.rate}</a>

//                           </li>
//                         ))}
//                       </ul>
//                     </>
