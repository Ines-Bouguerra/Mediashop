import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow, MDBCardText, MDBCardFooter, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../../actions/product';
import Loader from '../Loader';


const Product = ({ match }) => {
    const dispatch = useDispatch()
    const query = match.params.query
    const pageNumber = match.params.pageNumber || 1
    const productList = useSelector((state) => state.productList)
    const { loading, products, page, pages } = productList
    useEffect(() => {
        dispatch(
            getProduct(query, pageNumber),

        )
    }, [dispatch, query, pageNumber])
    return (
        <>
            <MDBRow className='row-cols-1 row-cols-md-5 g-4  m-5'>


                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {products.map((product) => (
                            <div
                                key={product.id}
                            >

                                <MDBCol>
                                    <MDBCard shadow='0' border='info' style={{ maxWidth: '14rem' }}>
                                        <MDBCardImage
                                            src={product.image}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle>{product.name}</MDBCardTitle>
                                            <MDBCardText>
                                                {product.name}
                                            </MDBCardText>
                                        </MDBCardBody>
                                        <MDBCardFooter background='info' >
                                            <MDBBtn className='ms-2 m-3' tag='a' color='warning' floating>
                                                <i class="fas fa-plus-circle"></i>
                                            </MDBBtn>
                                            <MDBBtn className='ms-2 m-3' tag='a' color='warning' floating>
                                                <i class="fas fa-edit"></i>
                                            </MDBBtn><MDBBtn className='ms-2 m-3' tag='a' color='warning' floating>
                                                <MDBIcon class="fas fa-trash" />
                                            </MDBBtn>
                                            <br />
                                            <small className='text-white m-3'>Last updated 3 mins ago</small>
                                        </MDBCardFooter>
                                    </MDBCard>
                                </MDBCol> </div>

                        ))}
                    </>)}

            </MDBRow>
            <iframe width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmEwNDdhZTktMzlmYi00NjNmLWEzOTUtN2MzMGIyOGRiYmY1IiwidCI6Ijg5MTRmYmNhLTBiODctNGFiNS1iMzJhLTUxMzU1Zjk2Y2Y3NyJ9&embedImagePlaceholder=true&pageName=ReportSection" frameborder="0" allowFullScreen="true" alt="Mediasop Repport"></iframe>
        </>
    )
}

export default Product