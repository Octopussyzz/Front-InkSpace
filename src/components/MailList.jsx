import React from 'react';
import Axios from "axios";
import DisplayMailList from "./DisplayMaillist";
import Card from "reactstrap/es/Card";
import {CardHeader, CardTitle, Col, Row} from "reactstrap";

class MailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mails: [],
            audienceName: "",
            audience_id: null
        }
    }

    getToken = () => {
        let token = localStorage.getItem('access_token');
        return token;
    };

    getMailLists = async (jwt, id ) => {
        let response = await Axios.get('http://localhost:8080/api/'+ id +'/mails',{
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        });
        this.setState({
                mails: response.data
            }

        )
    };
    getCurrentAudience = async (jwt ,id_audience) => {
        let response = await Axios.get('http://localhost:8080/api/audience/'+ id_audience
            ,{
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        });
        this.setState({
            audienceName: response.data.name,
            audience_id: response.data.id
            }

        )
    };

    componentDidMount (){
        let jwt = this.getToken();
        console.log(this.props);
        let id = this.props.match.params.id;
        this.getCurrentAudience(jwt, id);
        this.getMailLists(jwt, id);
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h5" className="text-center">{this.state.audienceName}</CardTitle>
                                </CardHeader>
                            </Card>
                <Card className="card-user">
                {this.state.mails.map(mail =>
                    <DisplayMailList mail={mail} key={mail.id} audience_id={this.state.audience_id}/>
                )}
                </Card>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default MailList;