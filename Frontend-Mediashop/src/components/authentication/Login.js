import React, { useState } from "react";
import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    
  });
  const {email, password,  } = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async (e) => {
    e.preventDefault();
   console.log('SUCCESS')
   
  }
  return (

    <div className="section section-signup my-3 p-3">
      <Container>
        <Row className="row-grid justify-content-between align-items-center">

          <Col className="mb-lg-auto" lg="4">
            <Card className="card-register">
              <CardHeader>
                <Card.Img height="100"
                  alt="..."
                  src="images/mediashop.png"
                />
                <Card.ImgOverlay>
                  <CardTitle tag="h6" className="py-5 my-2">Login</CardTitle></Card.ImgOverlay>
              </CardHeader>
              <Form className="form" onSubmit={e => onSubmit(e)}>
                <CardBody>
                 
                    
                  <InputGroup
                    className="p-3"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      required
                    />
                  </InputGroup>
                  <InputGroup
                    className="p-3"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={e => onChange(e)}
                      required
                      minLength='8'
                    />
                  </InputGroup>
                  {/* <small className="float-right ">SHOW</small> */}

                </CardBody>
                <CardFooter>
                  <Button color="info" size="md">
                    Sign In
                </Button>
                <p className="my-1">
                    Don't have an account? <Link to='/Register'>Sign Up</Link>
              </p>
                </CardFooter>
              </Form>
             
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}