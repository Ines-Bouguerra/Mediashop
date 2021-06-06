import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { getProductDetails } from "../../actions/product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { addToWishlist } from "../../actions/auth";
const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match]);

  // redux
  const { user } = useSelector((state) => ({ ...state }));
  // router
  let history = useHistory();
  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product.id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to wishlist");
      history.push("/wishlist");
    });
  };

  return (
    <div className="single_product">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item Link to="/">
              {product.category}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="row">
            {/* Images */}
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                <li data-image="images/single_4.jpg">
                  <img src={product.image} alt="" />
                </li>
                <li data-image="images/single_2.jpg">
                  <img src={product.image} alt="" />
                </li>
                <li data-image="images/single_3.jpg">
                  <img src={product.image} alt="" />
                </li>
              </ul>
            </div>

            {/* Selected Image */}
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="image_selected">
                <img src={product.image} alt={product.name} />
              </div>
            </div>
            {/* Description */}
            <div className="col-lg-5 order-3">
              <div className="product_description">
                <div className="product_category">{product.category}</div>
                <div className="product_name">{product.name}</div>
                <div className="rating_r rating_r_4 product_rating">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="product_text">
                  <p>
                    {product.reference}
                    <br></br>
                    <br></br>
                    {product.description}
                    <br></br>
                    <br></br>
                    {product.retailer}
                    <br></br>
                  </p>
                </div>
                <div className="">
                  {product.price} {product.currency}
                  <div className="product_price m-4">
                    <button
                      type="submit"
                      className="btn bg-pink  waves-effect waves-circle waves-float"
                    >
                      <i class="material-icons ">favorite</i>
                    </button>
                  </div>
                </div>
                <div className="">chart Evolution prix</div>
              </div>
            </div>
          </div>
        </div>
      )}
      <br></br>
      <br></br>
      <div className="container"></div>
    </div>
  );
};

export default ProductScreen;
