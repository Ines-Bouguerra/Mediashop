import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Category from '../components/category/Category'
import categories from '../category'
export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {categories.map(category => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Category category={category} />
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}
