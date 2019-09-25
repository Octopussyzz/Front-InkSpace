import React from 'react';
import Axios from "axios";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input, Modal,
    ModalBody, ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CreateMail extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            subject: "",
            content: "",
            status: false,
            audienceTitle: "",
            audienceDescription: "",
            public: false,
            modal: false
        }
    }

    getToken = () => {
        let token = localStorage.getItem('access_token');
        return token;
    };

    getOneAudience = async (jwt, id ) => {
        let response = await Axios.get('http://localhost:8080/api/audience/' + id,{
            headers: {
                'Authorization': 'Bearer ' + jwt,
            }
        });
        this.setState({
                audienceTitle: response.data.name,
                audienceDescription: response.data.description,
                public: response.data.public
            }

        )
    };
    postMail = async (jwt, id ) => {
        await Axios({
            method: 'post',
            url: 'http://localhost:8080/api/' + id + '/mail',
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
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let jwt = this.getToken();
        let id = this.props.match.params.id;
        this.setState({
            status: true
        });
        this.postMail(jwt, id);
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

    componentDidMount() {
        let jwt = localStorage.getItem('access_token');
        let id = this.props.match.params.id;
        this.getOneAudience(jwt, id);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row className="justify-content-center">
                        <Col md="10">
                            <Card className="card-user">
                                <CardBody style={{minHeight: 0}}>
                                    <h5 className="text-center">{this.state.audienceTitle}</h5>
                                    <div className="text-justify" dangerouslySetInnerHTML={{__html: this.state.audienceDescription}}/>
                                </CardBody>
                            </Card>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5" className="text-center">Create an Email </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <label><b>Object</b> </label>
                                                    <Input
                                                        type="text"
                                                        id="subject"
                                                        value={this.state.subject}
                                                        onChange={this.handleChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        <b>Content</b>
                                                    </label>
                                                    <CKEditor id="content" name="description"
                                                              editor={ClassicEditor}
                                                              data={this.state.content}
                                                              onChange={(event, editor) => {
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
                                                <Button className="btn btn-round btn-success" onClick={this.toggle}
                                                        >Send Mail </Button>
                                            </Col>

                                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                                <ModalHeader toggle={this.toggle}>Are you sure ?</ModalHeader>
                                                <ModalBody>
                                                    Do you really want to send this mail ?
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="primary" onClick={this.toggle}>Cancel</Button>{' '}
                                                    <Button color="danger" type="submit" onClick={this.handleSubmit} >Send</Button>
                                                </ModalFooter>
                                            </Modal>

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

export default CreateMail;
