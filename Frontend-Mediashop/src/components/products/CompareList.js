import "adminbsb-materialdesign/css/style.css";
import "adminbsb-materialdesign/css/themes/all-themes.css";
import "adminbsb-materialdesign/js/pages/tables/jquery-datatable.js";
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/jquery-datatable/jquery.dataTables.js";
import "adminbsb-materialdesign/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css";
import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
export default class CompareList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
     
    };
  }
 
 
  render() {
    let products = this.state.products;
    document.body.className = "theme-red";
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

        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div>
                  <div className="body">
                    <div className="table-responsive col-sm-12">
                      <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap "
                      >
                        <div className="row">
                          <div className="col-sm-12">
                            <img src={products.image} alt=""></img>
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
                              {this.state.products.map((product) => (
                                <tr role="row" className="odd">
                                  <td className="sorting_1">{products.name}</td>
                                  <td>{products.priceString}</td>
                                  <td>{products.retailer}</td>
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
                                 ))} 
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
