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
import "./assets/css/paper-kit.css";
// pages
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LandingPage from "./views/examples/LandingPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";
import RegisterPage from "./views/examples/RegisterPage.js";
import LoginPage from "./views/examples/LoginPage";
import AdminLayout from "./layouts/Admin.jsx";
import FormAudience from "./components/FormAudience";
// others

const Auth = {
  isAuthenticated: false
};

const isConnected = () =>  {
    const TOKEN = localStorage.getItem('access_token');
    TOKEN != null ? Auth.isAuthenticated = true : Auth.isAuthenticated = false;
    console.log(Auth.isAuthenticated);
    return TOKEN;
}
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
            isConnected()
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
    Auth.isAuthenticated = false;
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
)

const Protected = () => <h3>Protected {AuthButton}</h3>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/admin"  render={props => <AdminLayout {...props} />} />

      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/login"
        render={props => <LoginPage />}
      />
      <PrivateRoute path='/protected' component={Protected} />
        {/*<Redirect to="/landing-page" />*/}
        {/*<Redirect to="/admin/dashboard" />*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
