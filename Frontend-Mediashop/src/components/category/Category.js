import React from 'react'
import { Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Category = ({ category }) => {
    return (
        <div>

            <Card className="my-3 p-3 " border="info" style={{ height: '18rem' }} >
                <Link to={'/category/${category._id}'}>
                    <Card.Img src={category.image} variant='top' style={{ height: '200px' }} />
                    <Card.Body className="text-center" style={{ minHeight: '80vh' }}>
                        <Card.Link >{category.name}</Card.Link>
                    </Card.Body>

                </Link>

            </Card>

        </div>
    )
}

export default Category
