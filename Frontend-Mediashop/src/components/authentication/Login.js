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
import { Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { signIn } from "../../actions/auth";

const Login = ({ signIn, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();

    signIn(email, password);
  };
  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) { }
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
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
                    Login
                  </CardTitle>
                </Card.ImgOverlay>
              </CardHeader>
              <Form className="form" onSubmit={e => onSubmit(e)}>
                <CardBody>
                  <InputGroup className="p-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText style={{width:30}}>
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
                      <InputGroupText style={{width:30}}>
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
                </CardBody>
                <CardFooter>
                  <Button color="info" size="md" type='submit'>
                    Sign In
                  </Button>
                  <p className="my-1">
                    Don't have an account? <Link to="/Register">Sign Up</Link>
                  </p>
                  <p className="mt-3">
                    Forgot your Password?{" "}
                    <Link to="/reset-password">Reset Password</Link>
                  </p>
                </CardFooter>
              </Form>
              <button
                className="btn btn-danger mt-3"
                onClick={continueWithGoogle}
              >
                Continue With Google
              </button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});
export default connect(mapStateToProps, { signIn })(Login);

