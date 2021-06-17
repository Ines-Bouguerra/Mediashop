import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Post = () => {
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [rate, setrate] = useState(null);
  const [hover, setHover] = useState(null);

  async function addComment() {
    console.warn(subject, comment, rate);
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("comment", comment);
    formData.append("rate", rate);
    let result = await fetch("http://localhost:8080/api/post/", {
      method: "POST",
      body: formData,
    });
    alert("Your review has ben sent. Thank you for your interest.");
  }

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
                        onChange={(e) => setSubject(e.target.value)}
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
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>
                    <br></br>
                    <div className="contact_form_text py-1">
                      <span className="m-3 py-3 font-bold col-teal">
                        Your rate :
                      </span>
                      <div>
                        <br></br>

                        {[...Array(5)].map((star, i) => {
                          const rateValue = i + 1;
                          return (
                            <label>
                              <input
                                type="radio"
                                name="rate"
                                value={rateValue}
                                onClick={() => setrate(rateValue)}
                              />

                              <FaStar
                                className="star"
                                onMouseEnter={() => setHover(rateValue)}
                                onMouseLeave={() => setHover(null)}
                                color={
                                  rateValue <= (hover || rate)
                                    ? "#ffc107"
                                    : "#e4e5e9"
                                }
                                size={20}
                              />
                            </label>
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
                        onClick={addComment}
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
    </div>
  );
};
export default Post;
