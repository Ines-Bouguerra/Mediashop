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
          <div className="row  mt-3">
            {loading ? (
              <Loader />
            ) : (
              <>
                {products.map((product) => (
                  <div
                    className="col-xs-12 col-sm-4 col-md-3 mt-3  "
                    key={product.id}
                  >
                    <div className="card" style={{ height: 360 }}>
                      <div className="header bg-cyan" style={{ height: 130 }}>
                        <span>
                          {product.name} - {product.priceString} TND
                          <br />
                          <span className="col-pink">{product.retailer}</span>
                        </span>
                      </div>
                      <img
                        className="align-center"
                        alt=""
                        variant="top"
                        src={product.image}
                        style={{ width: 180, height: 180 }}
                      />

                      <div className="body align-center" style={{ height: 50 }}>
                        <p className="font-overline col-pink">
                          Last updated : {product.timestamp}
                        </p>
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
