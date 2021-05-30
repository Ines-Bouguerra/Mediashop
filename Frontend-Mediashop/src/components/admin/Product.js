import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../../actions/product';
import Loader from '../Loader';
import { Button, Row, Card } from 'react-bootstrap';


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
            <Row className='row-cols-1 row-cols-md-5 g-4  m-5'>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {products.map((product) => (
                            <div
                                key={product.id}
                            >

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <div>
                                            <Button variant="primary" size="sm">   <i class="fas fa-edit"></i></Button>
                                            <Button variant="primary" size="sm">   <i class="fas fa-trash"></i></Button>
                                            <Button variant="primary" size="sm">   <i class="fas fa-info"></i></Button>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="text-muted text-center">{product.timestamp}</Card.Footer>
                                </Card>

                            </div>

                        ))}
                    </>)}

            </Row>
            <iframe width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmEwNDdhZTktMzlmYi00NjNmLWEzOTUtN2MzMGIyOGRiYmY1IiwidCI6Ijg5MTRmYmNhLTBiODctNGFiNS1iMzJhLTUxMzU1Zjk2Y2Y3NyJ9&embedImagePlaceholder=true&pageName=ReportSection" frameborder="0" allowFullScreen="true" alt="Mediasop Repport"></iframe>
        </>
    )
}

export default Product