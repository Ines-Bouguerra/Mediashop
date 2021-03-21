import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { getCategories,  } from '../../actions/category';
import { Link } from "react-router-dom";

const Category = ({ getCategories, category,  }) => {


    const [loading, setLoading] = useState(false)
    const [setCategories] = useState([])
    const [setCategory] = useState({})


    useEffect(() => {
        loadCategories()
    }, []);

    const loadCategories = () => {
        setLoading(true);
        getCategories()
            .then((res) => {
                setCategories(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };
    

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

                        {category.categories.map((category) => (
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

Category.propTypes = {
    category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    category: state.category,
});


export default connect(mapStateToProps, { getCategories,  })(Category)