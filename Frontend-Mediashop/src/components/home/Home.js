import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="banner">
                <div className="home__top-container home_background parallax-window" data-parallax="scroll" data-image-src="images/shop_background.jpg">
                    <div className="home_overlay" />
                    <div className="home__top">
                        <a href="/" aria-current="page" className="home__logo nuxt-link-exact-active nuxt-link-active">
                            <img src="/images/mediashop.png" alt="Mediashop" background="transparent" /></a>
                        <p className="home__tagline">Search. Compare. Economize.</p>
                        <p className="home__baseline">
                            At all times, we filter and compare thousands of offers
                        <br></br>
                                    so that you find good deals </p>
                    </div>
                </div>
                <div class="shop">
                    <a href="#all_categories" className="browse-category__link">Search by category</a>
                    <br></br>
                    <h2 className="recommandation__title">Take advantage of great Shopping plans all year round!</h2>
                    <div class="container">
                        <div class="row">
                            <div className="col-lg-12">
                                {/* Shop Content */}
                                <div className="shop_content" />
                                <div class="product_grid ">
                                    <div className="product_item is_new ">
                                        <div className="product_border" />
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_name"><div>IT <br></br>&<br></br>TECHNOLOGIES</div></div>
                                        </div>
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
