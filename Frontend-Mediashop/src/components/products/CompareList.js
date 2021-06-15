import "adminbsb-materialdesign/css/style.css";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import "adminbsb-materialdesign/css/themes/all-themes.css";
import "adminbsb-materialdesign/js/pages/tables/jquery-datatable.js";
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/jquery-datatable/jquery.dataTables.js";
import "adminbsb-materialdesign/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleFontLoader from "react-google-font-loader";
import { compareProduct } from "../../actions/product";
const CompareList = ({ match }) => {
  const dispatch = useDispatch();
  const productCompare = useSelector((state) => state.productCompare);
  const { loading, error, product } = productCompare;
  useEffect(() => {
    dispatch(
      compareProduct(
        match.params.name,
        match.params.reference,
        match.params.priceString
      )
    );
  }, [dispatch, match]);

  return (
    <React.Fragment>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, 700],
          },
        ]}
        subsets={["latin", "cyrillic-ext"]}
      />
      <GoogleFontLoader
        fonts={[
          {
            font: "Material+Icons",
          },
        ]}
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div>
                  <div className="body">
                    {product.map((product) => (
                      <div
                        className="table-responsive col-sm-12"
                        key={product.id}
                      >
                        <div
                          id="DataTables_Table_0_wrapper"
                          className="dataTables_wrapper form-inline dt-bootstrap "
                        >
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                className="table table-bordered table-striped table-hover js-basic-example dataTable"
                                id="DataTables_Table_0"
                                role="grid"
                                aria-describedby="DataTables_Table_0_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      className="sorting_asc"
                                      tabIndex="0"
                                      aria-controls="DataTables_Table_0"
                                      rowSpan="1"
                                      colSpan="1"
                                      style={{ width: 122 }}
                                      aria-sort="ascending"
                                      aria-label="Name: activate to sort column descending"
                                    >
                                      Image
                                    </th>
                                    <th
                                      className="sorting_asc"
                                      tabIndex="0"
                                      aria-controls="DataTables_Table_0"
                                      rowSpan="1"
                                      colSpan="1"
                                      style={{ width: 122 }}
                                      aria-sort="ascending"
                                      aria-label="Name: activate to sort column descending"
                                    >
                                      Name
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="DataTables_Table_0"
                                      rowSpan="1"
                                      colSpan="1"
                                      style={{ width: 122 }}
                                      aria-label="Position: activate to sort column ascending"
                                    >
                                      Price
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="DataTables_Table_0"
                                      rowSpan="1"
                                      colSpan="1"
                                      style={{ width: 122 }}
                                      aria-label="Office: activate to sort column ascending"
                                    >
                                      Marketplace
                                    </th>
                                    <th
                                      className="sorting align-center"
                                      tabIndex="0"
                                      aria-controls="DataTables_Table_0"
                                      rowSpan="1"
                                      colSpan="1"
                                      style={{ width: 209 }}
                                      aria-label="Age: activate to sort column ascending"
                                    ></th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr role="row" className="odd">
                                    <td>
                                      
                                      <img src={product.image} alt="" className="" style={{ width: 150, height:130}}/>
                                    </td>
                                    <td className="sorting_1">
                                      {product.name}
                                    </td>
                                    <td>{product.priceString}</td>
                                    <td>{product.retailer}</td>
                                    <td>
                                      <button
                                        type="submit"
                                        class="btn bg-teal btn-block btn-lg waves-effect"
                                      >
                                        <span className="font-bold">
                                          see the offer
                                        </span>
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};
export default CompareList;
