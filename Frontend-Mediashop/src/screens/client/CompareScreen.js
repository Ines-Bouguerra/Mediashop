import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { compareProduct } from '../../actions/product'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const CompareScreen = ({ match }) => {


    const dispatch = useDispatch()

    const compare = useSelector((state) => state.compare)
    const { loading, error, products} = compare
 

    useEffect(() => {
        dispatch(compareProduct(match.params.name,match.params.reference,match.params.price));
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
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>    
              </tr>
            </thead>
            <tbody>
                  <td>{products.id}</td>
                  <td>{products.name}</td>
                  <td>{products.price}  TND</td>
                  <td>{products.category}</td>
                  <td>{products.brand}</td>
            </tbody>
          </Table>
         
        </>
        )}</>
    )
}
export  default CompareScreen