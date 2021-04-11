import React, { useEffect,  } from 'react';
import { getProductByCategory } from '../../actions/product';
import { useDispatch, useSelector } from "react-redux"

import Product from '../../components/products/Product';

const CategoryScreen = ({ match }) => {

    const dispatch = useDispatch()

    const productByCategory = useSelector((state) => state.productByCategory)
    const { products ,loading} = productByCategory

    useEffect(() => {
        getProductByCategory(match.params.slug)
    }, [dispatch,match]);

    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col">
            {loading ? (
              <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                Loading...
              </h4>
            ) : (
              <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                {products.length} Products in {products.category} category
              </h4>
            )}
          </div>
        </div>
  
        <div className="row">
          {products.map((product) => (            
            <div className="col" key={product.id}>
              <Product product={product} />
            </div>
            
          ))}
        </div>
      </div>
    )
          }
export default CategoryScreen