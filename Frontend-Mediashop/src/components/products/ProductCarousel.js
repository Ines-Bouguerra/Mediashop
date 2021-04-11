import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Carousel, Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import { listTopProducts } from "../../actions/product"
import Loader from "../Loader"
import Message from "../Message"

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopPromotion = useSelector((state) => state.productTopPromotion)
    const { loading, error, products } = productTopPromotion

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant="danger">{error}</Message>
    ) : (
        <Carousel pause="hover" className="bg-darkc">
            {products.map((product) => (
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product.id}`}>
                        <Image
                            className="arousel-caption d-none d-md-block"
                            src={product.image}
                            alt={product.name}
                            fluid
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h4>
                                <h4 className="colorcarousel">
                                    Take advantage of our best promotion
                </h4>
                                {product.name}
                            </h4>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProductCarousel
