import React from "react";
import classnames from "classnames";
// reactstrap components
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
import {Card} from 'react-bootstrap';

export default function Register() {
    const [fullNameFocus, setFullNameFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
     const [passwordFocus, setPasswordFocus] = React.useState(false);
     const [confirmpasswordFocus, setConfirmPasswordFocus] = React.useState(false);

  return (
    <div className="section section-signup my-3 p-3">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
         
          <Col className="mb-lg-auto" lg="4">
            <Card className="card-register" action="" method="post">
              <CardHeader>
                <Card.Img height="100"
                  alt="..."
                  src="images/mediashop.png"
                />
                <Card.ImgOverlay>
                <CardTitle tag="h6" className="py-5 my-2">Register</CardTitle></Card.ImgOverlay>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    },"p-3")} 
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    },"p-3")}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    },"p-3")}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  {/* <small className="float-right ">SHOW</small> */}

                  <InputGroup
                    className={classnames({
                      "input-group-focus": confirmpasswordFocus,
                    },"p-3")}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirm Password"
                      type="text"
                      onFocus={(e) => setConfirmPasswordFocus(true)}
                      onBlur={(e) => setConfirmPasswordFocus(false)}
                    />
                  </InputGroup>
                  {/* <small className="float-right">SHOW</small> */}
                  <FormGroup check className="text-leftp-3," color="info" >
                    <Label check >
                      <Input type="checkbox" />
                      <span className="form-check-sign "  />I agree to the{" "}
                      <a  href="#pablo"   onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button color="info" size="md">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}