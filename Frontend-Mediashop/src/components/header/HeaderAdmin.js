
import React from 'react'




const HeaderAdmin = () => {


  return (

    <div className='dashboard-main-wrapper'>
      <div className='dashboard-header'>
        <nav className='navbar navbar-expand-lg bg-white fixed-top'>
          <a className='navbar-brand' href='../index.html'>Concept</a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='##navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto navbar-right-top'>
              <li className='nav-item'>
                <div id='custom-search' className='top-search-bar'>
                  <input className='form-control' type='text' placeholder='Search..' />
                </div>
              </li>
              <li className='nav-item dropdown notification'>
                <a className='nav-link nav-icons' href='###' id='navbarDropdownMenuLink1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i className='fas fa-fw fa-bell' /> <span className='indicator' /></a>
                <ul className='dropdown-menu dropdown-menu-right notification-dropdown'>
                  <li>
                    <div className='notification-title'> Notification</div>
                    <div className='notification-list'>
                      <div className='list-group'>
                        <a href='####' className='list-group-item list-group-item-action active'>
                          <div className='notification-info'>
                            <div className='notification-list-user-img'><img src='../assets/images/avatar-2.jpg' alt='' className='user-avatar-md rounded-circle' /></div>
                            <div className='notification-list-user-block'><span className='notification-list-user-name'>Jeremy Rakestraw</span>accepted your invitation to join the team.
                              <div className='notification-date'>2 min ago</div>
                            </div>
                          </div>
                        </a>
                        <a href='####' className='list-group-item list-group-item-action'>
                          <div className='notification-info'>
                            <div className='notification-list-user-img'><img src='../assets/images/avatar-3.jpg' alt='' className='user-avatar-md rounded-circle' /></div>
                            <div className='notification-list-user-block'><span className='notification-list-user-name'>
                              John Abraham</span>is now following you
                              <div className='notification-date'>2 days ago</div>
                            </div>
                          </div>
                        </a>
                        <a href='####' className='list-group-item list-group-item-action'>
                          <div className='notification-info'>
                            <div className='notification-list-user-img'><img src='admin/assets/images/avatar-4.jpg' alt='' className='user-avatar-md rounded-circle' /></div>
                            <div className='notification-list-user-block'><span className='notification-list-user-name'>Monaan Pechi</span> is watching your main repository
                              <div className='notification-date'>2 min ago</div>
                            </div>
                          </div>
                        </a>
                        <a href='####' className='list-group-item list-group-item-action'>
                          <div className='notification-info'>
                            <div className='notification-list-user-img'><img src='admin/assets/images/avatar-5.jpg' alt='' className='user-avatar-md rounded-circle' /></div>
                            <div className='notification-list-user-block'><span className='notification-list-user-name'>Jessica Caruso</span>accepted your invitation to join the team.
                              <div className='notification-date'>2 min ago</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='list-footer'> <a href='####'>View all notifications</a></div>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown connection'>
                <a className='nav-link' href='####' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> <i className='fas fa-fw fa-th' /> </a>
                <ul className='dropdown-menu dropdown-menu-right connection-dropdown'>
                  <li className='connection-list'>
                    <div className='row'>
                      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                        <a href='####' className='connection-item'><img src='admin/assets/images/github.png' alt='' /> <span>Github</span></a>
                      </div>
                      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                        <a href='####' className='connection-item'><img src='admin/assets/images/dribbble.png' alt='' /> <span>Dribbble</span></a>
                      </div>
                      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                        <a href='####' className='connection-item'><img src='admin/assets/images/dropbox.png' alt='' /> <span>Dropbox</span></a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                        <a href='####' className='connection-item'><img src='../assets/images/bitbucket.png' alt='' /> <span>Bitbucket</span></a>
                      </div>
                      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                        <a href='##' className='connection-item'><img src='../assets/images/mail_chimp.png' alt='' /><span>Mail chimp</span></a>
                      </div>
                      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                        <a href='##' className='connection-item'><img src='../assets/images/slack.png' alt='' /> <span>Slack</span></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='conntection-footer'><a href='##'>More</a></div>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown nav-user'>
                <a className='nav-link nav-user-img' href='##' id='navbarDropdownMenuLink2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><img src='../assets/images/avatar-1.jpg' alt='' className='user-avatar-md rounded-circle' /></a>
                <div className='dropdown-menu dropdown-menu-right nav-user-dropdown' aria-labelledby='navbarDropdownMenuLink2'>
                  <div className='nav-user-info'>
                    <h5 className='mb-0 text-white nav-user-name'>
                      John Abraham</h5>
                    <span className='status' /><span className='ml-2'>Available</span>
                  </div>
                  <a className='dropdown-item' href='##'><i className='fas fa-user mr-2' />Account</a>
                  <a className='dropdown-item' href='##'><i className='fas fa-cog mr-2' />Setting</a>
                  <a className='dropdown-item' href='##'><i className='fas fa-power-off mr-2' />Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* ============================================================== */}
      {/* end navbar */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* left sidebar */}
      {/* ============================================================== */}
      <div className='nav-left-sidebar sidebar-dark'>
        <div className='menu-list'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <a className='d-xl-none d-lg-none' href='##'>Dashboard</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='##navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav flex-column'>
                <li className='nav-divider'>
                  Menu
                </li>
                <li className='nav-item '>
                  <a className='nav-link active' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-1' aria-controls='submenu-1'><i className='fa fa-fw fa-user-circle' />Dashboard <span className='badge badge-success'>6</span></a>
                  <div id='submenu-1' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='index.html' data-toggle='collapse' aria-expanded='false' data-target='##submenu-1-2' aria-controls='submenu-1-2'>E-Commerce</a>
                        <div id='submenu-1-2' className='collapse submenu' style={{}}>
                          <ul className='nav flex-column'>
                            <li className='nav-item'>
                              <a className='nav-link' href='../index.html'>E Commerce Dashboard</a>
                            </li>
                            <li className='nav-item'>
                              <a className='nav-link' href='../ecommerce-product.html'>Product List</a>
                            </li>
                            <li className='nav-item'>
                              <a className='nav-link' href='../ecommerce-product-single.html'>Product Single</a>
                            </li>
                            <li className='nav-item'>
                              <a className='nav-link' href='../ecommerce-product-checkout.html'>Product Checkout</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='../dashboard-finance.html'>Finance</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='../dashboard-sales.html'>Sales</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-1-1' aria-controls='submenu-1-1'>Infulencer</a>
                        <div id='submenu-1-1' className='collapse submenu' style={{}}>
                          <ul className='nav flex-column'>
                            <li className='nav-item'>
                              <a className='nav-link' href='../dashboard-influencer.html'>Influencer</a>
                            </li>
                            <li className='nav-item'>
                              <a className='nav-link' href='../influencer-finder.html'>Influencer Finder</a>
                            </li>
                            <li className='nav-item'>
                              <a className='nav-link' href='../influencer-profile.html'>Influencer Profile</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-2' aria-controls='submenu-2'><i className='fa fa-fw fa-rocket' />UI Elements</a>
                  <div id='submenu-2' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='cards.html'>Cards <span className='badge badge-secondary'>New</span></a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='general.html'>General</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='carousel.html'>Carousel</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='listgroup.html'>List Group</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='typography.html'>Typography</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='accordions.html'>Accordions</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='tabs.html'>Tabs</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-3' aria-controls='submenu-3'><i className='fas fa-fw fa-chart-pie' />Chart</a>
                  <div id='submenu-3' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='chart-c3.html'>C3 Charts</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='chart-chartist.html'>Chartist Charts</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='chart-charts.html'>Chart</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='chart-morris.html'>Morris</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='chart-sparkline.html'>Sparkline</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='chart-gauge.html'>Guage</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item '>
                  <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-4' aria-controls='submenu-4'><i className='fab fa-fw fa-wpforms' />Forms</a>
                  <div id='submenu-4' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='form-elements.html'>Form Elements</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='form-validation.html'>Parsely Validations</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='multiselect.html'>Multiselect</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-5' aria-controls='submenu-5'><i className='fas fa-fw fa-table' />Tables</a>
                  <div id='submenu-5' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='general-table.html'>General Tables</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='data-tables.html'>Data Tables</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-divider'>
                  Features
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-6' aria-controls='submenu-6'><i className='fas fa-fw fa-file' />Pages</a>
                  <div id='submenu-6' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='invoice.html'>Invoice</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='blank-page.html'>Blank Page</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='blank-page-header.html'>Blank Page Header</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='login.html'>Login</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='404-page.html'>404 page</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='sign-up.html'>Sign up Page</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='forgot-password.html'>Forgot Password</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='pricing.html'>Pricing Tables</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='timeline.html'>Timeline</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='calendar.html'>Calendar</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='sortable-nestable-lists.html'>Sortable/Nestable List</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='widgets.html'>Widgets</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='media-object.html'>Media Objects</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='cropper-image.html'>Cropper</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='color-picker.html'>Color Picker</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-7' aria-controls='submenu-7'><i className='fas fa-fw fa-inbox' />Apps <span className='badge badge-secondary'>New</span></a>
                  <div id='submenu-7' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='inbox.html'>Inbox</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='email-details.html'>Email Detail</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='email-compose.html'>Email Compose</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='message-chat.html'>Message Chat</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-8' aria-controls='submenu-8'><i className='fas fa-fw fa-columns' />Icons</a>
                  <div id='submenu-8' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='icon-fontawesome.html'>FontAwesome Icons</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='icon-material.html'>Material Icons</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='icon-simple-lineicon.html'>Simpleline Icon</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='icon-themify.html'>Themify Icon</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='icon-flag.html'>Flag Icons</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='icon-weather.html'>Weather Icon</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="##" data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9"><i class="fas fa-fw fa-map-marker-alt"></i>Maps</a>
                  <div id="submenu-9" class="collapse submenu" style={{}}>
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a class="nav-link" href="map-google.html">Google Maps</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="map-vector.html">Vector Maps</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-10' aria-controls='submenu-10'><i className='fas fa-f fa-folder' />Menu Level</a>
                  <div id='submenu-10' className='collapse submenu' style={{}}>
                    <ul className='nav flex-column'>
                      <li className='nav-item'>
                        <a className='nav-link' href='##'>Level 1</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='##' data-toggle='collapse' aria-expanded='false' data-target='##submenu-11' aria-controls='submenu-11'>Level 2</a>
                        <div id='submenu-11' className='collapse submenu' style={{}}>
                          <ul className='nav flex-column'>
                            <li className='nav-item'>
                              <a className='nav-link' href='##'>Level 1</a>
                            </li>
                            <li className='nav-item'>
                              <a className='nav-link' href='##'>Level 2</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='##'>Level 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end left sidebar */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* wrapper  */}
      {/* ============================================================== */}
      <div className='dashboard-wrapper'>
        <div className='container-fluid dashboard-content'>
          {/* ============================================================== */}
          {/* pageheader */}
          {/* ============================================================== */}
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
              <div className='page-header'>
                <h2 className='pageheader-title'>Blank Pageheader </h2>
                <p className='pageheader-text'>Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                <div className='page-breadcrumb'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'><a href='##' className='breadcrumb-link'>Dashboard</a></li>
                      <li className='breadcrumb-item'><a href='##' className='breadcrumb-link'>Pages</a></li>
                      <li className='breadcrumb-item active' aria-current='page'>Blank Pageheader</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================== */}
          {/* end pageheader */}
          {/* ============================================================== */}
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
              <h3 className='text-center'>Content goes here!</h3>
            </div>
          </div>
        </div>


      </div>

    </div>


  )
}

export default HeaderAdmin