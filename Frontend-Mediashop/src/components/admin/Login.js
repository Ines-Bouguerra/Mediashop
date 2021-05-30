import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/plugins/jquery/jquery.min.js";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthHandler from "../../utils/AuthHandler";
import Config from "../../utils/Config";


class Login extends React.Component {
  state = {
    email: "",
    password: "",
    btnDisabled: true,
    loginStatus: 0,
  };
  saveInputs = (event) => {
    var key = event.target.name;
    this.setState({ [key]: event.target.value });
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  };

  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ loginStatus: 1 });
    AuthHandler.login(
      this.state.email,
      this.state.password,
      this.handleAjaxResponse
    );
  };

  handleAjaxResponse = (data) => {
    console.log(data);
    if (data.error) {
      this.setState({ loginStatus: 4 });
    } else {
      this.setState({ loginStatus: 3 });
      window.location = Config.homeUrl;
    }
  };

  getMessages = () => {
    if (this.state.loginStatus === 0) {
      return "";
    } else if (this.state.loginStatus === 1) {
      return (
        <div class="alert alert-warning">
          <strong>Logging in!</strong> Please Wait...
        </div>
      );
    } else if (this.state.loginStatus === 3) {
      return (
        <div class="alert alert-success">
          <strong>Login Successfull!</strong>
        </div>
      );
    } else if (this.state.loginStatus === 4) {
      return (
        <div class="alert alert-danger">
          <strong>Invalid Login Details</strong>
        </div>
      );
    }
  };

  render() {
    document.body.className = "hold-transition login-page";
    return (
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <Card className="card-register">
              <Card.Img height="100" alt="..." src="/images/Mediashop.png" />
              <Card.ImgOverlay>

              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form id="sign_in" method="POST" onSubmit={this.formSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required
                  autofocus
                  onChange={this.saveInputs} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={this.saveInputs} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Remember Me
              </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block" disabled={this.state.btnDisabled}>Sign In</button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center mt-2 mb-3">

              <Link href="#c" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </Link>
            </div>
            {/* /.social-auth-links */}
            <p className="mb-1">
              <Link href="forgot-password.html">I forgot my password</Link>
            </p>
            <p className="mb-0">
              <Link href="register.html" className="text-center">Register a new membership</Link>
            </p>
            <div className="col-xs-12">{this.getMessages()}</div>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>

    )
  }
}

export default Login;
