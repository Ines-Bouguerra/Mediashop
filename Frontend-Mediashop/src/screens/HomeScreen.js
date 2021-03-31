import React, { useEffect } from 'react'
import Product from '../components/products/Product'
import { useDispatch, useSelector } from 'react-redux'

import { getProduct } from '../actions/product'
import Loader from '../components/Loader'
import Filter from '../components/products/Filter'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, products } = productList

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div class='super_container'>
            {/* Home */}
            <div class='home'>
                <div
                    class='home_background parallax-window'
                    data-parallax='scroll'
                    data-image-src='images/shop_background.jpg'
                ></div>
                <div class='home_overlay'></div>
                <div class='home_content d-flex flex-column align-items-center justify-content-center'>
                    <h2 class='home_title'>Smartphones & Tablets</h2>
                </div>
            </div>

            {/* Shop */}
            <div className='shop'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            {/* Shop Sidebar */}
                            <div className='shop_sidebar'>
                                <div className='sidebar_section'>
                                    <div className='sidebar_title'>Categories</div>
                                    <ul className='sidebar_categories'>
                                        {/* {categories.map((category) => (
                        <li>
                          <a href='#!'>{category.name}</a>
                        </li>
                      ))} */}
                                    </ul>
                                </div>
                                <div className='sidebar_section filter_by_section'>
                                    <div className='sidebar_title'>Filter By</div>
                                    <div className='sidebar_subtitle'>Price</div>
                                    <div className='filter_price'>
                                        <div id='slider-range' className='slider_range' />
                                        <p>Range: </p>
                                        <p>
                                            <input
                                                type='text'
                                                id='amount'
                                                className='amount'
                                                readOnly
                                                style={{ border: 0, fontWeight: 'bold' }}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className='sidebar_section'>
                                    <div className='sidebar_subtitle color_subtitle'>Color</div>
                                    <ul className='colors_list'>
                                        <li className='color'>
                                            <a href='#!' style={{ background: '#b19c83' }}>
                                                {' '}
                                            </a>{' '}
                                        </li>
                                        <li className='color'>
                                            <a href='#!' style={{ background: '#000000' }}>
                                                {' '}
                                            </a>{' '}
                                        </li>
                                        <li className='color'>
                                            <a href='#!' style={{ background: '#999999' }}>
                                                {' '}
                                            </a>
                                        </li>
                                        <li className='color'>
                                            <a href='#!' style={{ background: '#0e8ce4' }}>
                                                {' '}
                                            </a>
                                        </li>
                                        <li className='color'>
                                            <a href='#!' style={{ background: '#df3b3b' }}>
                                                {' '}
                                            </a>
                                        </li>
                                        <li className='color'>
                                            <a
                                                href='#!'
                                                style={{
                                                    background: '#ffffff',
                                                    border: 'solid 1px #e1e1e1',
                                                }}
                                            >
                                                {' '}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='sidebar_section'>
                                    <div className='sidebar_subtitle brands_subtitle'>Brands</div>
                                    <ul className='brands_list'>
                                        <li className='brand'>
                                            <a href='#!'>Apple</a>
                                        </li>
                                        <li className='brand'>
                                            <a href='#!'>Beoplay</a>
                                        </li>
                                        <li className='brand'>
                                            <a href='#!'>Google</a>
                                        </li>
                                        <li className='brand'>
                                            <a href='#!'>Meizu</a>
                                        </li>
                                        <li className='brand'>
                                            <a href='#!'>OnePlus</a>
                                        </li>
                                        <li className='brand'>
                                            <a href='#!'>Samsung</a>
                                        </li>
                                        <li className='brand'>
                                            <a href='#!'>Sony</a>
                                        </li>
                                        <li className='brand'>
                                            <a href='#!'>Xiaomi</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            {/* Product Content */}
                            <div className='shop_content'>
                                <Filter />
                                <div className='product_grid '>
                                    <div className='product_grid_border' />
                                    {/* Product Item */}
                                    {loading ? (
                                        <Loader />
                                    ) : (
                                        <div class='row'>
                                            {products.map((product) => (
                                                <div
                                                    className='product_item is_new col-md-3 mt-3 product'
                                                    key={product._id}
                                                >
                                                    <Product product={product} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/* Product Page Navigation */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
