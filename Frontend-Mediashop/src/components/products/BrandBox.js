import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import { listBrands } from "../../actions/brand";

 const BrandBox = ({ history }) => {
    const dispatch = useDispatch();

    const [brand_slug, setbrand_slug] = useState("");
    const brandListe = useSelector((state) => state.brandListe);
    const { brandss } = brandListe;
    const submitHandler = (e) => {
        e.preventDefault();
        if (brand_slug.trim()) {
            history.push(`/brand_slug/${brand_slug}`)
        } else {
            history.push('/product-list')
        }
    }
    useEffect(() => {
        dispatch(
         
          listBrands(),
         
        );
      }, [
        dispatch,
       
      ]);

    return (
        <div>
             <ul className="brands_list" onSubmit={submitHandler}>
                    {brandss.map((brand) => (
                      <li
                        className="brand"
                        style={{ cursor: "pointer", liststyleType: "none" }}
                        key={brand}
                        onClick={() => setbrand_slug(brand.slug)}
                      >
                        {brand.name}
                      </li>
                    ))}
                  </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
});
export default connect(mapStateToProps, { listBrands })(BrandBox);