import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ReplayEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail() {
    console.warn(name, email, message);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    let result = await fetch("http://localhost:8080/api/admin/replay", {
      method: "POST",
      body: formData,
    });
    alert("Email sent successfully");
  }

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="body">
                <>
                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="email_address">To</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            required
                            data-error="Email is required."
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="email_address">Subject</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter Subject"
                            required
                            data-error="Subject is required."
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="email_address">Message</label>
                      <div className="form-group">
                        <div className="form-line">
                          <textarea
                            type="text"
                            id="message"
                            name="message"
                            className="form-control"
                            placeholder="Enter Message"
                            rows={4}
                            required
                            data-error="Message is required."
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8"></div>
                    <div className="col-lg-2">
                      <button
                        type="submit"
                        className="btn bg-pink btn-block waves-effect"
                        onClick={sendEmail}
                      >
                        <i className="material-icons font-bold ">email</i>
                        <span className="m-3">Send Email</span>
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
