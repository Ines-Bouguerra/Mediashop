import React, { useEffect } from 'react';
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from '../../actions/category';

const Category = ({ getCategories, category: { categories }, loading }) => {

    useEffect(() => {
        getCategories()
    }, [getCategories]);

    return (
        <div class="shop">
            <h2 className="recommandation__title">Take advantage of great Shopping plans all year round!</h2>
            <a href="#all_categories" className="browse-category__link">Search by category</a>
            <div class="container">
                {loading ? (
                    <>
                        <Spinner animation="border" variant="info" size="sm" />
                        <Spinner animation="border" variant="info" />
                        <Spinner animation="grow" variant="info" size="sm" />
                        <Spinner animation="grow" variant="info" />
                    </>
                ) : (
                    <div class="row">

                        {categories.map((category) => (
                            <div className="col-md-3 mt-3 py-3 " key={category.id}>
                                <div className="product_border" />
                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                    <img src={category.image} alt="" /></div>
                                <Link to={`/category/${category.slug}`}>
                                    <div className="product_name center">
                                        {category.name}<br></br>
                                    </div></Link>
                                {category.children.length} products
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    category: state.category,
});

export default connect(mapStateToProps, { getCategories })(Category)