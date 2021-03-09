// Header.js
import React, { Component } from "react";
import { Link } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <header className="header">
          {/* Top Bar */}
          <div className="top_bar">
            <div className="container">
              <div className="row">
                <div className="col d-flex flex-row">
                  <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/phone.png" alt="" /></div> 71 827 484</div>
                  <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt="" /></div><a href="mailto:mediashop@medianet.com.tn">mediashop@medianet.com.tn</a></div>
                  <div className="top_bar_content ml-auto">
                    <div className="top_bar_menu">
                      <ul className="standard_dropdown top_bar_dropdown">
                        <li>
                          <Link to="/">English<i className="fas fa-chevron-down" /></Link>
                          <ul>
                            <li><Link to="/">Arabic</Link></li>
                            <li><Link to="/">French</Link></li>
                            <li><Link to="/">Deutch</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="top_bar_user">
                      <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                      <div><Link to="/Register">Register</Link></div>
                      <div><Link to="/Login">Sign in</Link></div>
                    </div>
                  </div>
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
                    <div className="logo"><Link to="/">MediaShop</Link></div>
                  </div>
                </div>
                {/* Search */}
                <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                        <form action="#" className="header_search_form clearfix">
                          <input type="search" required="required" className="header_search_input" placeholder="Search for products..." />
                          <div className="custom_dropdown">
                            <div className="custom_dropdown_list">
                              <span className="custom_dropdown_placeholder clc">All Categories</span>
                              <i className="fas fa-chevron-down" />
                              <ul className="custom_list clc">
                                <li><a className="clc" href="#">All Categories</a></li>
                                <li><a className="clc" href="#">Computers</a></li>
                                <li><a className="clc" href="#">Laptops</a></li>
                                <li><a className="clc" href="#">Cameras</a></li>
                                <li><a className="clc" href="#">Hardware</a></li>
                                <li><a className="clc" href="#">Smartphones</a></li>
                              </ul>
                            </div>
                          </div>
                          <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt="" /></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wishlist */}
                <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                  <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                      <div className="wishlist_icon"><img src="images/heart.png" alt="" /></div>
                      <div className="wishlist_content">
                        <div className="wishlist_text"><Link to="/">Wishlist</Link></div>
                        <div className="wishlist_count">115</div>
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
                        <div className="cat_burger"><span /><span /><span /></div>
                        <div className="cat_menu_text">categories</div>
                      </div>
                      <ul className="cat_menu">
                        <li><Link to="/">Computers &amp; Laptops <i className="fas fa-chevron-right ml-auto" /></Link></li>
                        <li><Link to="/">Cameras &amp; Photos<i className="fas fa-chevron-right" /></Link></li>
                        <li className="hassubs">
                          <Link to="/">Hardware<i className="fas fa-chevron-right" /></Link>
                          <ul>
                            <li className="hassubs">
                              <Link to="/">Menu Item<i className="fas fa-chevron-right" /></Link>
                              <ul>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-right" /></Link></li>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-right" /></Link></li>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-right" /></Link></li>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-right" /></Link></li>
                              </ul>
                            </li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-right" /></Link></li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-right" /></Link></li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-right" /></Link></li>
                          </ul>
                        </li>
                        <li><Link to="/">Smartphones &amp; Tablets<i className="fas fa-chevron-right" /></Link></li>
                        <li><Link to="/">TV &amp; Audio<i className="fas fa-chevron-right" /></Link></li>
                        <li><Link to="/">Gadgets<i className="fas fa-chevron-right" /></Link></li>
                        <li><Link to="/">Car Electronics<i className="fas fa-chevron-right" /></Link></li>
                        <li><Link to="/">Video Games &amp; Consoles<i className="fas fa-chevron-right" /></Link></li>
                        <li><Link to="/">Accessories<i className="fas fa-chevron-right" /></Link></li>
                      </ul>
                    </div>
                    {/* Main Nav Menu */}
                    <div className="main_nav_menu ml-auto">
                      <ul className="standard_dropdown main_nav_dropdown">
                        <li><Link to="/">Home<i className="fas fa-chevron-down" /></Link></li>
                        <li className="hassubs">
                          <Link to="/">Super Deals<i className="fas fa-chevron-down" /></Link>
                          <ul>
                            <li>
                              <Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link>
                              <ul>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                              </ul>
                            </li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                          </ul>
                        </li>
                        <li className="hassubs">
                          <Link to="/">Featured Brands<i className="fas fa-chevron-down" /></Link>
                          <ul>
                            <li>
                              <Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link>
                              <ul>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                              </ul>
                            </li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                            <li><Link to="/">Menu Item<i className="fas fa-chevron-down" /></Link></li>
                          </ul>
                        </li>
                        <li className="hassubs">
                          <Link to="/">Pages<i className="fas fa-chevron-down" /></Link>
                          <ul>
                            <li><a href="shop.html">Shop<i className="fas fa-chevron-down" /></a></li>
                            <li><a href="product.html">Product<i className="fas fa-chevron-down" /></a></li>
                            <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                            <li><a href="blog_single.html">Blog Post<i className="fas fa-chevron-down" /></a></li>
                            <li><a href="regular.html">Regular Post<i className="fas fa-chevron-down" /></a></li>
                            <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                          </ul>
                        </li>
                        <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                        <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                      </ul>
                    </div>
                    {/* Menu Trigger */}
                    <div className="menu_trigger_container ml-auto">
                      <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                        <div className="menu_burger">
                          <div className="menu_trigger_text">menu</div>
                          <div className="cat_burger menu_burger_inner"><span /><span /><span /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* Menu */}
          <div className="page_menu">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="page_menu_content">
                    <div className="page_menu_search">
                      <form action="#">
                        <input type="search" required="required" className="page_menu_search_input" placeholder="Search for products..." />
                      </form>
                    </div>
                    <ul className="page_menu_nav">
                      <li className="page_menu_item has-children">
                        <Link to="/">Language<i className="fa fa-angle-down" /></Link>
                        <ul className="page_menu_selection">
                          <li><Link to="/">English<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Italian<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Spanish<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Japanese<i className="fa fa-angle-down" /></Link></li>
                        </ul>
                      </li>
                      <li className="page_menu_item has-children">
                        <Link to="/">Currency<i className="fa fa-angle-down" /></Link>
                        <ul className="page_menu_selection">
                          <li><Link to="/">US Dollar<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">EUR Euro<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">GBP British Pound<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">JPY Japanese Yen<i className="fa fa-angle-down" /></Link></li>
                        </ul>
                      </li>
                      <li className="page_menu_item">
                        <Link to="/">Home<i className="fa fa-angle-down" /></Link>
                      </li>
                      <li className="page_menu_item has-children">
                        <Link to="/">Super Deals<i className="fa fa-angle-down" /></Link>
                        <ul className="page_menu_selection">
                          <li><Link to="/">Super Deals<i className="fa fa-angle-down" /></Link></li>
                          <li className="page_menu_item has-children">
                            <Link to="/">Menu Item<i className="fa fa-angle-down" /></Link>
                            <ul className="page_menu_selection">
                              <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                              <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                              <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                              <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                            </ul>
                          </li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                        </ul>
                      </li>
                      <li className="page_menu_item has-children">
                        <Link to="/">Featured Brands<i className="fa fa-angle-down" /></Link>
                        <ul className="page_menu_selection">
                          <li><Link to="/">Featured Brands<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                        </ul>
                      </li>
                      <li className="page_menu_item has-children">
                        <Link to="/">Trending Styles<i className="fa fa-angle-down" /></Link>
                        <ul className="page_menu_selection">
                          <li><Link to="/">Trending Styles<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                          <li><Link to="/">Menu Item<i className="fa fa-angle-down" /></Link></li>
                        </ul>
                      </li>
                      <li className="page_menu_item"><a href="blog.html">blog<i className="fa fa-angle-down" /></a></li>
                      <li className="page_menu_item"><a href="contact.html">contact<i className="fa fa-angle-down" /></a></li>
                    </ul>
                    <div className="menu_contact">
                      <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/phone_white.png" alt="" /></div>+38 068 005 3570</div>
                      <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/mail_white.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
export default Header;
