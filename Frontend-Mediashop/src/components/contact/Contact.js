import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

const Contact = () => {
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
                                    <div className="contact_info_image"><img src="images/contact_1.png" alt="" /></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Phone</div>
                                        <div className="contact_info_text">+216 71 827 484</div>
                                    </div>
                                </div>
                                {/* Contact Item */}
                                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="contact_info_image"><img src="images/contact_2.png" alt="" /></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Email</div>
                                        <div className="contact_info_text">mediashop@medianet.com.tn</div>
                                    </div>
                                </div>
                                {/* Contact Item */}
                                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                    <div className="contact_info_image"><img src="images/contact_3.png" alt="" /></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Address</div>
                                        <div className="contact_info_text">Av. Hédi Nouira, Immeuble MAYA D1 ENNASR II 2037, Tunis - Tunisie</div>
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
                                <form action="#" id="contact_form">
                                    <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                                        <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your name" required="required" data-error="Name is required." />
                                        <input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="Your email" required="required" data-error="Email is required." />
                                        <input type="text" id="contact_form_phone" className="contact_form_phone input_field" placeholder="Your phone number" />
                                    </div>
                                    <div className="contact_form_text">
                                        <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows={4} placeholder="Message" required="required" data-error="Please, write us a message." defaultValue={""} />
                                    </div>
                                    <div className="contact_form_button">
                                        <MDBBtn type="submit" rounded className='mx-2  mb-2 m-5' color='primary'>Send Message</MDBBtn>
                                    </div>
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
                        <div id="map" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact