import React, { useState } from "react";
import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
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

export default function Register() {

  const [formData, setFormData] = useState({
    username: '',
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: "",
  });
  const { username, email, password, confirmPassword, checkbox } = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Password do not match')

    }
    else {
      const newUser = {
        username,
        email,
        password,
        confirmPassword,
        checkbox
      }
      try {
        const config = {
          headers: {
            'content-type': 'application/json'
          }
        }
        const body = JSON.stringify(newUser)
        const res = await axios.post('/api/authentication/register', body, config)
        console.log("🚀 ~ file: Register.js ~ line 56 ~ onSubmit ~ res", res.data)
      } catch (error) {
        console.log("🚀 ~ file: Register.js ~ line 60 ~ onSubmit ~ error", error.response.data)
      }

    }
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
                  <CardTitle tag="h6" className="py-5 my-2">Register</CardTitle></Card.ImgOverlay>
              </CardHeader>
              <Form className="form" onSubmit={e => onSubmit(e)}>
                <CardBody>
                  <InputGroup
                    className="p-3"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      id="usernameField"
                      name="username"
                      value={username}
                      onChange={e => onChange(e)}
                      required
                    />
                  </InputGroup>
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

                  <InputGroup
                    className="p-3"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={e => onChange(e)}
                      required
                      minLength='8'
                    />
                  </InputGroup>
                  {/* <small className="float-right">SHOW</small> */}
                  <FormGroup check className="text-leftp-3," color="info" >
                    <Label check >
                      <Input type="checkbox"
                        name="checkbox"
                        value={checkbox}
                        onChange={e => onChange(e)}
                        required />
                      <span className="form-check-sign " />I agree to the{" "}
                      <Link to="/">
                        terms and conditions
                      </Link>
                      .
                    </Label>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button color="info" size="md">
                    Sign Up
                </Button>
                <p className="my-1">
                   Already have an account? <Link to='/Login'> Sign In</Link>
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