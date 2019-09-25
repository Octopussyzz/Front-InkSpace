import React from 'react';
import {Route} from "react-router";
import AdminLayout from "../layouts/Admin";
import Visitor from "../layouts/Visitor";

class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }

    getAuth = () => {
        const TOKEN = localStorage.getItem("access_token")
        TOKEN != null ? this.setState({isAuthenticated: true}) : this.setState({isAuthenticated: false})
    }

    render() {
        return (
            <>
                <Route path="/" render={props => <Visitor {...props} />} />
                {this.state.isAuthenticated && <Route path="/admin" render={props => <AdminLayout {...props} />}/>}
            </>
        )
    }
}

export default Authentication;