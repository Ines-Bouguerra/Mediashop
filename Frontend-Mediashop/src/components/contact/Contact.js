import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import APIHandler from "../../utils/APIHandler";
import MapComponent from "./MapComponent";

export default class Contact extends React.Component {
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
    var response = await apiHandler.saveContactData(
      event.target.name.value,
      event.target.email.value,
      event.target.phone_number.value,
      event.target.message.value
    );
    console.log(response);
    this.setState({ btnMessage: 0 });
    this.setState({ errorRes: response.data.error });
    this.setState({ errorMessage: response.data.message });
    this.setState({ sendData: true });
  }

  render() {
    return (
      <div>
        {/* Contact Info */}
        <div className="contact_info">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                  {/* Contact Item */}
                  <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                    <div className="contact_info_image">
                      <img src="images/contact_1.png" alt="" />
                    </div>
                    <div className="contact_info_content">
                      <div className="contact_info_title">Phone</div>
                      <div className="contact_info_text">+216 71 827 484</div>
                    </div>
                  </div>
                  {/* Contact Item */}
                  <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                    <div className="contact_info_image">
                      <img src="images/contact_2.png" alt="" />
                    </div>
                    <div className="contact_info_content">
                      <div className="contact_info_title">Email</div>
                      <div className="contact_info_text">
                        mediashop@medianet.com.tn
                      </div>
                    </div>
                  </div>
                  {/* Contact Item */}
                  <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                    <div className="contact_info_image">
                      <img src="images/contact_3.png" alt="" />
                    </div>
                    <div className="contact_info_content">
                      <div className="contact_info_title">Address</div>
                      <div className="contact_info_text">
                        Av. Hédi Nouira, Immeuble MAYA D1 ENNASR II 2037, Tunis
                        - Tunisie
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container">
                  <div className="contact_form_title">Get in Touch</div>

                  <form
                    className="form"
                    id="contact_form"
                    onSubmit={this.formSubmit}
                  >
                    <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                      <input
                        className="contact_form_name input_field"
                        placeholder="Your name"
                        type="text"
                        name="name"
                        required
                        data-error="Name is required."
                      />
                      <input
                        className="contact_form_email input_field"
                        placeholder="Your email"
                        type="email"
                        name="email"
                        required
                        data-error="Email is required."
                      />
                      <input
                        id="contact_form_phone"
                        className="contact_form_phone input_field"
                        placeholder="Your phone number"
                        type="text"
                        name="phone_number"
                        required
                      />
                    </div>
                    <div className="contact_form_text">
                      <textarea
                        id="contact_form_message"
                        className="text_field contact_form_message"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        type="text"
                        required
                        data-error="Please, write us a message."
                        defaultValue={""}
                      />
                    </div>
                    <br></br>
                    <div className="contact_form_button">
                      <button
                        type="submit"
                        rounded
                        className="btn bg-teal btn-block btn-lg waves-effect col-xs-6 col-sm-3 col-md-2 col-lg-3"
                        disabled={this.state.btnMessage === 0 ? false : true}
                      >
                        <i class="material-icons">drafts</i>
                        <span>
                          {this.state.btnMessage === 0
                            ? "Send Message"
                            : "Sending Message Please Wait.."}
                        </span>
                      </button>
                    </div>
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
          <div className="panel" />
        </div>
        {/* Map */}
        <div className="contact_map">
          <div id="google_map" className="google_map">
            <div className="map_container">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
