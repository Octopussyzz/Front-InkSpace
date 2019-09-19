/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import {Redirect, Route, Switch} from "react-router-dom";

import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";


import routes from "../routes.js";
import Index from "../views/Index";
import FormAudience from "../components/FormAudience";
import PutAudience from "../components/PutAudience";
import LandingPage from "../views/examples/LandingPage";
import RegisterPage from "../views/examples/RegisterPage";
import LoginPage from "../views/examples/LoginPage";

class Visitor extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    <Route path="/" render={LandingPage}/>
                    <Route path="/register-page" render={props => <RegisterPage {...props} />}/>
                    <Route path="/login" render={props => <LoginPage {...props}/>}/>
                </Switch>
            </>
        );
    }
}

export default Visitor;
