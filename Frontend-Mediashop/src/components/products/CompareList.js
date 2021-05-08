import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';


export default class CompareList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      name: '',
      priceString: '',
      reference: ''
    }
  }

  async componentDidMount() {

    axios.get(`http://localhost:8080/api/products/compare_product`, {
      params: {
        name: 'test creme 2',
        priceString: '139.00',
        reference: 'Creme'
      }
    })

      .then(res => {
        const products = res.data.results;
        this.setState({ products });
        console.log("TCL ~ file: CompareList.js ~ line 41 ~ CompareList ~ render ~ this.state.products", products)
        console.table([products]);
      })
  }



  render() {
    let products = this.state.products
    return (
      <div className=" m-5">
        <MDBTable>
          <MDBTableHead dark bordered>
            <tr>
              <th>REFERENCE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>BRAND</th>
              <th>SHORT DESCRIPTION</th>
              <th>DESCRIPTION</th>
              <th>IMAGE</th>
              <th>DISCOUNT</th>
              <th>SUB CATEGORY</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
           
              {products.map((product) => (
                <tr>

                  <td >{product.reference}</td>
                  <td>{product.name}</td>
                  <td>{product.priceString}  TND</td>
                  <td>{product.brand}</td>
                  <td>{product.short_description}  TND</td>
                  <td>{product.description}</td>
                  <td ><img src={product.image} alt="" width="40%" height="40%" /></td>
                  <td>{product.discount}</td>
                  <td>{product.sub_category}</td>
                </tr>
              ))}
           
          </MDBTableBody>
        </MDBTable>
      </div>
    )
  }
}