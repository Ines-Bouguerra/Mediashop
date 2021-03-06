import React, { Component } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import Category from '../components/category/Category'
import products from  '../products'
export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Category product={product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}
