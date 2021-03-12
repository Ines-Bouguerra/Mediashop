import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProduct } from "../../actions/product";

const ProductList = ({ getProduct, product }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProduct()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="col">
      {loading ? <h4 class>Loading ...</h4> : <h4>All Products</h4>}
      {product.products.map((p) => (
        <div>{p.name}</div>
      ))}
      <div className="col">{JSON.stringify(product.products)}</div>
    </div>
  );
};

ProductList.propTypes = {
  getProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
});

export default connect(mapStateToProps, { getProduct })(ProductList);
