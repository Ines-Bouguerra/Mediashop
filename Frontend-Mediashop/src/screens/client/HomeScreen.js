import React, { useEffect } from "react"
import Product from "../../components/products/Product"
import { useDispatch, useSelector } from "react-redux"

import { compareProduct, getProduct } from "../../actions/product"
import Loader from "../../components/Loader"
import Filter from "../../components/products/Filter"
import { getCategories, getSubCategories } from "../../actions/category"
import Paginate from "../../components/products/Paginate"
import ProductCarousel from "../../components/products/ProductCarousel"
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
const HomeScreen = ({ match }) => {
    const dispatch = useDispatch()
    const query = match.params.query
    const pageNumber = match.params.pageNumber || 1
    const name = match.params.name
    const reference = match.params.reference
    const price = match.params.price
    const productList = useSelector((state) => state.productList)
    const { loading, products, page, pages } = productList

    const categoryList = useSelector((state) => state.categoryList)
    const { categories } = categoryList

    const subcategoryList = useSelector((state) => state.subcategoryList)
    const { subcategories } = subcategoryList

    useEffect(() => {
        dispatch(
            getProduct(query, pageNumber),
            getCategories(),
            getSubCategories(),
            compareProduct(name, reference, price)
        )
    }, [dispatch, query, pageNumber, name, reference, price])

    // Our States
    const [value, setValue] = React.useState([2, 100000000]);

    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };


    return (
        <div class="super_container">
            {/* Home */}
            {!query ? (
                <ProductCarousel />
            ) : (
                <>
                </>
            )}
            {/* Shop */}
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            {/* Shop Sidebar */}
                            <div className="shop_sidebar">
                                <div className="sidebar_section">
                                    <div className="sidebar_title">Categories</div>
                                    <ul className="sidebar_categories">
                                        {categories.map((category) => (
                                            <li>
                                                <a href="#!">{category.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar_section">
                                    <div className="sidebar_title">Sub Categories</div>
                                    <ul className="sidebar_categories">
                                        {subcategories.map((subcategory) => (
                                            <li>
                                                <a href="#!">{subcategory.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar_section filter_by_section">
                                    <div className="sidebar_title">Filter By</div>
                                    <div className="sidebar_subtitle">Price</div>
                                    <div style={{
            margin: 'auto',
            display: 'block',
            width: 'fit-content'
          }}>
                                    <div className="filter_price">
                                        <div id="slider-range" className="slider_range" />
                                        <Typography id="range-slider" gutterBottom>
                                            Select Price Range:
                                        </Typography>
                                        <Slider
                                            value={value}
                                            onChange={rangeSelector}
                                            valueLabelDisplay="auto"
                                        />
                                        <p>Range:  {value[0]} - {value[1]} </p>
                                     </div>
                                     </div>
                                </div>
                                <div className="sidebar_section">
                                    <div className="sidebar_subtitle brands_subtitle">Brands</div>
                                    <ul className="brands_list">
                                        <li className="brand">
                                            <a href="#!">Apple</a>
                                        </li>
                                        <li className="brand">
                                            <a href="#!">Beoplay</a>
                                        </li>
                                        <li className="brand">
                                            <a href="#!">Google</a>
                                        </li>
                                        <li className="brand">
                                            <a href="#!">Meizu</a>
                                        </li>
                                        <li className="brand">
                                            <a href="#!">OnePlus</a>
                                        </li>
                                        <li className="brand">
                                            <a href="#!">Samsung</a>
                                        </li>
                                        <li className="brand">
                                            <a href="#!">Sony</a>
                                        </li>
                                        <li className="brand">
                                            <a href="#!">Xiaomi</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {/* Product Content */}
                            <div className="shop_content">
                                <Filter />
                                <div className="product_grid ">
                                    <div className="product_grid_border" />
                                    {/* Product Item */}
                                    {loading ? (
                                        <Loader />
                                    ) : (
                                        <>
                                            <div class="row">
                                                {products.map((product) => (
                                                    <div
                                                        className="product_item is_new col-md-3 mt-3 product"
                                                        key={product.id}
                                                    >
                                                        <Product product={product} />
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Product Page Navigation */}
                                            <br></br>
                                            <br></br>
                                            <br></br>

                                            <Paginate
                                                pages={pages}
                                                page={page}
                                                query={query ? query : ""}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
