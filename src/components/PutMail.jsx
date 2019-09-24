import React from 'react';
import Axios from "axios";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Row} from "reactstrap";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class PutMail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            audience_id: this.props.match.params.id,
            mail_id: null,
            subject: "",
            content: "",
            status: false
        }
    }

    getToken = () => {
        let token = localStorage.getItem('access_token');
        return token;
    };

    getCurrentMail = async (jwt, id ) => {
        let response = await Axios.get('http://localhost:8080/api/mail/' + id,{
            headers: {
                'Authorization': 'Bearer ' + jwt,
            }
        });
        this.setState({
                subject: response.data.subject,
                content: response.data.content,
                mail_id: response.data.id,
                status: response.data.status
            }

        )
    };

componentDidMount() {
    console.log(this.props)


    let jwt = this.getToken();
    let id_audience = this.props.match.params.mail_id;
    this.getCurrentMail(jwt,id_audience);
}

    putMail = async (jwt, id_mail) => {

        await Axios({
            method: 'put',
            url: 'http://localhost:8080/api/mail/' + id_mail,
            headers: {
                'Authorization' : 'Bearer ' + jwt,
            },
            data: {
                subject: this.state.subject,
                content: this.state.content,
                status: this.state.status
            }

        });
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    handleDescriptionChange = (content) => {
        this.setState({
            content: content
        });

    }

    handleSubmit = event => {
        event.preventDefault();
        let jwt = this.getToken();
        let idMail = this.props.match.params.mail_id;
        let audienceId = this.props.match.params.id;
        this.putMail(jwt, idMail);
        window.location = "/admin/audiences"
    };

    handleDraft = () => {
        this.setState({
            status: false
        })
    }

    handleSend = () => {
        this.setState({
            status: true
        })
    }


    render() {
        return (
            <>
                <div className="content">
                    <Row className="justify-content-center">
                        <Col md="10">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">Edit Mail </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit} >
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <label>Subject</label>
                                                    <Input
                                                        type="text"
                                                        id="subject"
                                                        defaultValue={this.state.subject}
                                                        onChange={this.handleChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Content
                                                    </label>
                                                    <CKEditor id="content" name="content"
                                                              editor={ ClassicEditor }
                                                              data={this.state.content}
                                                              onChange={ ( event, editor ) => {
                                                                  const data = editor.getData();
                                                                  this.handleDescriptionChange(data);
                                                              }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Col md="3">
                                                <Button className="btn btn-round btn-warning" onClick={this.handleDraft}
                                                        type="submit">Draft Mail </Button>
                                            </Col>
                                            <Col md="3">
                                                <Button className="btn btn-round btn-success" onClick={this.handleSend}
                                                        type="submit">Send Mail </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default PutMail;
