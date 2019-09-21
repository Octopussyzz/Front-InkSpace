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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "./assets/css/bootstrap.min.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// pages
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LandingPage from "./views/examples/LandingPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";
import RegisterPage from "./views/examples/RegisterPage.js";
import LoginPage from "./views/examples/LoginPage";
import AdminLayout from "./layouts/Admin.jsx";
import FormAudience from "./components/FormAudience";
import Authentication from "./components/Authentication";
import Visitor from "./layouts/Visitor";
// others

const Auth = {
  isAuthenticated: false
};

function getToken() {
  const TOKEN = localStorage.getItem('access_token');
  TOKEN != null ? Auth.isAuthenticated = true : Auth.isAuthenticated = false;
  return TOKEN;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
              pathname: '/landing-page',
              state: { from: props.location }
            }} />
    )} />
);

function sendLogout() {
  const TOKEN = localStorage.getItem('access_token');
  if (TOKEN) {
    localStorage.removeItem('access_token');
    this.routeChange();
  }
}

const AuthButton = (
    Auth.isAuthenticated ? (
        <p>
          Welcome! <button onClick={() => {sendLogout()
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
);


const TOKEN = localStorage.getItem("access_token");

const Protected = () => <h3>Protected {AuthButton}</h3>;

ReactDOM.render(
  <BrowserRouter>
        <Authentication/>
  </BrowserRouter>,
  document.getElementById("root")
);