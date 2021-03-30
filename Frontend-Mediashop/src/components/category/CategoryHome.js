import { getCategory } from '../../actions/category';
import React, { useEffect, useState } from 'react';

const CategoryHome = ({ match, }) => {
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState({})

    const { slug } = match.params
    useEffect(() => {
        loadCategoryBySlug()
    }, []);

    const loadCategoryBySlug = () => {
        setLoading(true)
        getCategory(slug).then((c) => {
            console.log(JSON.stringify(c.data, null, 4));
            setCategory(c.data);
        });
    }

    return (
        <div>
            {slug}
        </div>
    )
}
export default CategoryHome