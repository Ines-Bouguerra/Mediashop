import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/product";
import Loader from "../Loader";

const Product = ({ match }) => {
  const dispatch = useDispatch();
  const query = match.params.query;
  const pageNumber = match.params.pageNumber || 1;
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  useEffect(() => {
    dispatch(getProduct(query, pageNumber));
  }, [dispatch, query, pageNumber]);
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <h2>Mediashop Products</h2>
        </div>

        <div className="row clearfix">
          <div className="col-md-3 mt-3">
            {loading ? (
              <Loader />
            ) : (
              <>
                {products.map((product) => (
                  <div key={product.id}>
                    <div className="card">
                      <div className="header bg-cyan">
                        <h2>
                          {product.name} - {product.priceString} TND
                          <small>{product.marketplace}</small>
                        </h2>
                      </div>
                      <img alt="" variant="top" src={product.image} style={{width:250,height:250}}/>

                      <div className="body align-center">
                        {product.description}
                        <p class="font-overline col-pink">Last updated : {product.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
