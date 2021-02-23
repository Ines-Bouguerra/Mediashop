import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div >
                {/* Footer */}
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 footer_col">
                                <div className="footer_column footer_contact">
                                    <div className="logo_container">
                                        <div className="logo"><a href="url">MediaShop</a></div>
                                    </div>
                                    <div className="footer_title">Got Question? Call Us 24/7</div>
                                    <div className="footer_phone">71 827 484</div>
                                    <div className="footer_contact_text">
                                        <p>Av. Hédi Nouira, Immeuble MAYA D1 ENNASR</p>
                                        <p>II 2037, Tunis - Tunisie</p>
                                    </div>
                                    <div className="footer_social">
                                        <ul>
                                            <li><a href="url"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="url"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="url"><i className="fab fa-youtube" /></a></li>
                                            <li><a href="url"><i className="fab fa-google" /></a></li>
                                            <li><a href="url"><i className="fab fa-vimeo-v" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-2">
                                <div className="footer_column">
                                    <div className="footer_title">Find it Fast</div>
                                    <ul className="footer_list">
                                        <li><a href="url">Computers &amp; Laptops</a></li>
                                        <li><a href="url">Cameras &amp; Photos</a></li>
                                        <li><a href="url">Hardware</a></li>
                                        <li><a href="url">Smartphones &amp; Tablets</a></li>
                                        <li><a href="url">TV &amp; Audio</a></li>
                                    </ul>
                                    <div className="footer_subtitle">Gadgets</div>
                                    <ul className="footer_list">
                                        <li><a href="url">Car Electronics</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer_column">
                                    <ul className="footer_list footer_list_2">
                                        <li><a href="url">Video Games &amp; Consoles</a></li>
                                        <li><a href="url">Accessories</a></li>
                                        <li><a href="url">Cameras &amp; Photos</a></li>
                                        <li><a href="url">Hardware</a></li>
                                        <li><a href="url">Computers &amp; Laptops</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer_column">
                                    <div className="footer_title">Customer Care</div>
                                    <ul className="footer_list">
                                        <li><a href="url">My Account</a></li>
                                        <li><a href="url">Order Tracking</a></li>
                                        <li><a href="url">Wish List</a></li>
                                        <li><a href="url">Customer Services</a></li>
                                        <li><a href="url">Returns / Exchange</a></li>
                                        <li><a href="url">FAQs</a></li>
                                        <li><a href="url">Product Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                    <div className="copyright_content">
                                        Copyright © All rights reserved | Medianet <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://www.medianet.tn/fr" >Medianet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
