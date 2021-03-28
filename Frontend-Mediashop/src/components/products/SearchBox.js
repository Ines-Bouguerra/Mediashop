import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from '../../actions/category';

const SearchBox = ({ history, getCategories, category }) => {


    const [setCategories] = useState([])
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
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
            <div className="header_search">
                <div className="header_search_content">
                    <div className="header_search_form_container">
                        <form onSubmit={submitHandler} inline className="header_search_form clearfix">
                            <input
                                type="search"
                                required="required"
                                name='q'
                                onChange={(e) => setKeyword(e.target.value)}
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
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    category: state.category,

});

export default connect(mapStateToProps, { getCategories })(SearchBox);
