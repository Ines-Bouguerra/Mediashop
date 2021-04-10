import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { compareProduct } from '../../actions/product'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const CompareScreen = ({ match }) => {


  const dispatch = useDispatch()

  const compare = useSelector((state) => state.compare)
  const { loading, error, products } = compare


  useEffect(() => {
    dispatch(compareProduct(match.params.name, match.params.reference, match.params.price));
  }, [dispatch, match]);

  return (
    <>
      {loading ? (
        <Loader />
      ) :
        //   error ? (
        //     <Message variant='danger'>{error}</Message>
        //   ) : 
        (
          <>
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
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
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>

                    <td>{product.reference}</td>
                    <td>{product.name}</td>
                    <td>{product.priceString}  TND</td>
                    <td>{product.brand}</td>
                    <td>{product.short_description}  TND</td>
                    <td>{product.description}</td>
                    <td>{product.image}</td>
                    <td>{product.discount}</td>
                    <td>{product.sub_category}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

          </>
        )}</>
  )
}
export default CompareScreen