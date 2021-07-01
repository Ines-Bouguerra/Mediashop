import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import { logout } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import SearchBox from "../products/SearchBox";
import { useDispatch, useSelector } from "react-redux";
const Header = ({ logout, isAuthenticated }) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const logout_user = () => {
    logout();
    setRedirect(true);
  };
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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

  return (
    <Fragment>
      <header className="header">
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img src="images/phone.png" alt="" />
                  </div>
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

        <div className="header_main">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo">
                    <Link to="/">MediaShop</Link>
                  </div>
                </div>
              </div>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
              <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  {isAuthenticated && (
                    <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                      <div className="wishlist_icon">
                        <img src="images/heart.png" alt="" />
                      </div>
                      <div className="wishlist_content">
                        <div className="wishlist_text">
                          <Link to="/wishlist">Wishlist</Link>
                        </div>
                        {/* <div className="wishlist_count">115</div> */}
                      </div>
                    </div>
                  )}
                  {/* {isAuthenticated && (
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
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="main_nav_content d-flex flex-row">
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
                      {categories.map((category) => (
                        <li>
                          <Link to="/">
                            {category.name}
                            <i className="fas fa-chevron-right ml-auto" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
