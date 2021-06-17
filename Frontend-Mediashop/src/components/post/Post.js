import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function Post() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  return (
    <div className="">
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
                  <form>
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
                      <div>
                        <br></br>
                        {stars.map((_, index) => {
                          return (
                            <FaStar
                              key={index}
                              size={24}
                              onClick={() => handleClick(index + 1)}
                              onMouseOver={() => handleMouseOver(index + 1)}
                              onMouseLeave={handleMouseLeave}
                              color={
                                (hoverValue || currentValue) > index
                                  ? colors.orange
                                  : colors.grey
                              }
                              style={{
                                marginRight: 10,
                                cursor: "pointer",
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="contact_form_button">
                      <button
                        type="submit"
                        rounded
                        className="btn bg-teal btn-block btn-lg waves-effect col-xs-6 col-sm-3 col-md-2 col-lg-3"
                      >
                        <i class="material-icons">forum</i>
                        <span className="m-3">Send Your Review</span>
                      </button>
                    </div>
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
      {/* <>
        <ul className="">
          {this.state.postList.map((post) => (
            <li className="" key={post.id}>
              <a href="xx">{post.create_at}</a>
              <br></br>
              <a href="xx">{post.subject}</a>
              <br></br>
              <a href="xx">{post.comment}</a>
              <br></br>
              <a href="xx">{post.rate}</a>
            </li>
          ))}
        </ul>
      </> */}
    </div>
  );
}
