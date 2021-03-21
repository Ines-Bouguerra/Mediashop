// Header.js
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { getCategories } from '../../actions/category';

const Header = ({ logout, isAuthenticated, getCategories, category }) => {
  const [redirect, setRedirect] = useState(false);
  const [setCategories] = useState([])

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <div className="top_bar_content ml-auto">
        <div className="top_bar_user">
          <div className="user_icon">
            <img src="images/user.svg" alt="" />
          </div>
          <div>
            <Link to="/Register">Register</Link>
          </div>
          <div>
            <Link to="/Login">Sign in</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );

  const authLinks = () => (
    <div className="top_bar_content ml-auto">
      <div className="top_bar_user">
        <div className="user_icon">
          <img src="images/logout.png" alt="" />
        </div>
        <div>
          <Link to="/" onClick={logout_user}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    loadCategories()
  }, [])
  const loadCategories = () => {
    getCategories()
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Fragment>
      {/* Header */}
      <header className="header">
        {/* Top Bar */}
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img src="images/phone.png" alt="" />
                  </div>{" "}
                  71 827 484
                </div>
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img src="images/mail.png" alt="" />
                  </div>
                  <a href="mailto:mediashop@medianet.com.tn">
                    mediashop@medianet.com.tn
                  </a>
                </div>
                {isAuthenticated ? authLinks() : guestLinks()}
              </div>
            </div>
          </div>
        </div>
        {/* Header Main */}
        <div className="header_main">
          <div className="container">
            <div className="row">
              {/* Logo */}
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo">
                    <Link to="/">MediaShop</Link>
                  </div>
                </div>
              </div>
              {/* Search */}
              <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                  <div className="header_search_content">
                    <div className="header_search_form_container">
                      <form action="#" className="header_search_form clearfix">
                        <input
                          type="search"
                          required="required"
                          className="header_search_input"
                          placeholder="Search for products..."
                        />
                        <div className="custom_dropdown">
                          <div className="custom_dropdown_list">
                            <span className="custom_dropdown_placeholder clc">
                              All Categories
                            </span>
                            <i className="fas fa-chevron-down" />
                            <ul className="custom_list clc">
                              <li>
                                <a className="clc" href="!">
                                  All Categories
                                </a>
                              </li>
                              {category.categories.map((category) => (
                                <li>
                                  <a className="clc" href="!">
                                    {category.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="header_search_button trans_300"
                          value="Submit"
                        >
                          <img src="images/search.png" alt="" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Wishlist */}
              <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist_icon">
                      <img src="images/heart.png" alt="" />
                    </div>
                    <div className="wishlist_content">
                      <div className="wishlist_text">
                        <Link to="/wishlist">Wishlist</Link>
                      </div>
                      <div className="wishlist_count">115</div>
                    </div>
                  </div>
                  {/* Notification */}
                  <div className="">
                    <div className="notif_container d-flex flex-row align-items-center justify-content-end">
                      <div className="notif_icon">
                        <img src="images/notif.png" height="35" alt="" />
                        <div className="cart_count">
                          <span>10</span>
                        </div>
                      </div>
                      <div className="cart_content">
                        <div className="cart_text">
                          <Link to="/notification">Notification</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navigation */}
        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="main_nav_content d-flex flex-row">
                  {/* Categories Menu */}
                  <div className="cat_menu_container">
                    <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                      <div className="cat_burger">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="cat_menu_text">categories</div>
                    </div>
                    <ul className="cat_menu">
                      {category.categories.map((category) => (

                        <li>
                          <Link to="/">
                            {category.name}
                            <i className="fas fa-chevron-right ml-auto" />
                          </Link>
                        </li>


                      ))}
                    </ul>
                  </div>
                  {/* Main Nav Menu */}
                  <div className="main_nav_menu ml-auto">
                    <ul className="standard_dropdown main_nav_dropdown">
                      <li>
                        <Link to="/">
                          Home
                          <i className="fas fa-chevron-down" />
                        </Link>
                      </li>

                      <li className="hassubs">
                        <Link to="/">
                          Pages
                          <i className="fas fa-chevron-down" />
                        </Link>
                        <ul>
                          <li>
                            <Link to="/product-list">
                              Product
                              <i className="fas fa-chevron-down" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog">
                              Blog
                              <i className="fas fa-chevron-down" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog-post">
                              Blog Post
                              <i className="fas fa-chevron-down" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact">
                              Contact
                              <i className="fas fa-chevron-down" />
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/blog">
                          Blog
                          <i className="fas fa-chevron-down" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          Contact
                          <i className="fas fa-chevron-down" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Menu Trigger */}
                  <div className="menu_trigger_container ml-auto">
                    <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                      <div className="menu_burger">
                        <div className="menu_trigger_text">menu</div>
                        <div className="cat_burger menu_burger_inner">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired

};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  category: state.category,

});

export default connect(mapStateToProps, { logout, getCategories })(Header);
