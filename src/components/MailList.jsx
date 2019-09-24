import React from 'react';
import Axios from "axios";
import DisplayMailList from "./DisplayMaillist";

class MailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mails: []
        }
    }

    getToken = () => {
        let token = localStorage.getItem('access_token');
        return token;
    };

    getMailLists = async (jwt, id ) => {
        let response = await Axios.get('http://localhost:8080/'+ id +'/mails',{
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        });
        this.setState({
                mails: response.data
            }

        )
    };

    componentDidMount() {
        let jwt = this.getToken();
        console.log(this.props);
        let id = this.props.match.params.id;
        this.getMailLists(jwt, id);
    }

    render() {
        return (
            <>
                {this.state.mails.map(mail =>
                    <DisplayMailList mail={mail} key={mail.id}/>
                )}
            </>
        )
    }
}

export default MailList;