import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBrandDetails } from "../../actions/brand";
import Loader from "../Loader";
import Message from "../Message";
 const BrandDetails = ({match}) => {
    const dispatch = useDispatch();
    const brandDetails = useSelector((state) => state.brandDetails);
    const { loading, error, brand } = brandDetails;
    useEffect(() => {
      dispatch(listBrandDetails(match.params.id));
    }, [dispatch, match]);
  
 
    return (
        <div className="single_product">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="container">
           
            <div className="row">
              {/* Images */}
              <div className="col-lg-2 order-lg-1 order-2">
                <ul className="image_list">
                  <li data-image="images/single_4.jpg">
                    <img src={brand.image} alt="" />
                  </li>
                  <li data-image="images/single_2.jpg">
                    <img src={brand.image} alt="" />
                  </li>
                  <li data-image="images/single_3.jpg">
                    <img src={brand.image} alt="" />
                  </li>
                </ul>
              </div>
  
              {/* Selected Image */}
              <div className="col-lg-5 order-lg-2 order-1">
                <div className="image_selected">
                  <img src={brand.image} alt={brand.name} />
                </div>
              </div>
              {/* Description */}
              <div className="col-lg-5 order-3">
                <div className="product_description">
                  
                  <div className="product_name">{brand.name}</div>
                 
                 
                
                </div>
              </div>
            </div>
          </div>
        )}
        <br></br>
        <br></br>
        <div className="container"></div>
      </div>
    )
}
export default BrandDetails