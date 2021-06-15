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
import { Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alerts";
import { register } from "../../actions/auth";

function Register({ setAlert, register, isAuthenticated }) {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
    
  });
  const { first_name, last_name, email, password, re_password} = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== re_password) {
      setAlert("Password do not match", "danger");
    } else {
      register({ first_name, last_name, email, password, re_password})
      setAccountCreated(true)
    }
  }
  if (isAuthenticated) {
    return <Redirect to='/' />
  }
  if (accountCreated) {
    return <Redirect to='/login' />
  }
  return (
    <div className="section section-signup my-3 p-3">
      <Container>
        <Row className="row-grid justify-content-between align-items-center">
          <Col className="mb-lg-auto" lg="4">
            <Card className="card-register">
              <CardHeader>
                <Card.Img height="100" alt="..." src="images/mediashop.png" />
                <Card.ImgOverlay>
                  <br></br><br></br>
                  <CardTitle tag="h3" className="py-5 my-2">
                    Register
                  </CardTitle>
                </Card.ImgOverlay>
              </CardHeader>
              <Form className="form" onSubmit={(e) => onSubmit(e)}>
                <CardBody>
                  <InputGroup className="p-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="   First Name"
                      type="text"
                      id="firstNameField"
                      name="first_name"
                      value={first_name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </InputGroup>
                  <InputGroup className="p-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="   Last Name"
                      type="text"
                      id="lastNameField"
                      name="last_name"
                      value={last_name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </InputGroup>
                  <InputGroup className="p-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="   Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </InputGroup>
                  <InputGroup className="p-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="   Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      required
                      minLength="8"
                    />
                  </InputGroup>
                  {/* <small className="float-right ">SHOW</small> */}

                  <InputGroup className="p-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="   Confirm Password"
                      type="password"
                      name="re_password"
                      value={re_password}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </InputGroup>
                  {/* <small className="float-right">SHOW</small> */}
                  {/* <FormGroup check className="text-leftp-3," color="info" >
                    <Label check>
                      <Input
                        type="checkbox"
                        name="checkbox"
                        value={checkbox}
                        onChange={(e) => onChange(e)}
                        required
                        
                      />
                      <span className="form-check-sign " />I agree to the{" "}
                      <Link to="/">terms and conditions</Link>.
                    </Label>
                  </FormGroup> */}
                </CardBody>
                <CardFooter>
                  <Button color="info" size="md" type='submit'>
                    Sign Up
                  </Button>
                  <p className="my-1">
                    Already have an account? <Link to="/login"> Sign In</Link>
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

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, register })(Register)
