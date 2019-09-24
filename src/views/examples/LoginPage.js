/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Axios from "axios";

// reactstrap components
import {Button, Card, Form, Input, Container, Row, Col, Alert} from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import FormGroup from "reactstrap/es/FormGroup";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    //this.routeChange = this.routeChange.bind(this);
    this.state = {
      mailAddress: "",
      password: "",
      jwtToken: ""
    }
  }


  postCredencials = async () => {
    let response = await Axios({
      method: 'post',
      url: 'http://localhost:8080/authenticate',
      data: {
        mailAddress: this.state.mailAddress,
        password: this.state.password
      }

    });

    let jwt = response.data.token;
    if (response.status === 200 && jwt) {
      localStorage.setItem("access_token", jwt);
      window.location = "/admin/dashboard";
    }
  };


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let dangerMessage = document.getElementById("loginInfo");
    if (re.test(this.state.mailAddress)  ) {
      this.postCredencials();
    } else  {
      dangerMessage.setAttribute('style', 'display:flex;');
    }
  };

  render() {
    return (
        <>
          <ExamplesNavbar />
          <div
              className="page-header"
              style={{
                backgroundImage: "url(" + require("../../assets/img/login-image.jpg") + ")"
              }}
          >
            <div className="filter" />
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" lg="4">
                  <Card className="card-register ml-auto mr-auto">
                    <h3 className="title mx-auto">Welcome</h3>
                    <Alert className="alert-with-icon" color="danger"  id="loginInfo"  style={{display:'none'}}>
                      <Container>
                        <div className="alert-wrapper">

                          <div className="message">
                            <i className="nc-icon nc-bell-55" /> Invalid Credentials
                          </div>
                        </div>
                      </Container>
                    </Alert>
                    <Form className="register-form" onSubmit={this.handleSubmit} >
                      <FormGroup>
                        <label>Email</label>
                        <Input placeholder="Email" autoFocus
                               type="text"
                               id="mailAddress"
                               onChange={this.handleChange} />
                        <label>Password</label>
                      </FormGroup>
                      <Input placeholder="Password"
                             id="password"
                             onChange={this.handleChange}
                             type="password" />

                      <Button block className="btn-round" color="danger">
                        Login
                      </Button>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Container>
            <div className="footer register-footer text-center">
              <h6>
                © {new Date().getFullYear()}, made with{" "}
                <i className="fa fa-heart heart" /> by Leet Suntrip Development™
              </h6>
            </div>
          </div>
        </>
    );
  }
}

export default LoginPage;
