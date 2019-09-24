import React from 'react';
import Axios from "axios";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Row} from "reactstrap";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class PutAudience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //id: null,
            name: "",
            description: "",
            public: false,
            file: null
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
               //id: response.data.id,
                name: response.data.name,
                description: response.data.description,
                public: response.data.public
            }

        )
    };

componentDidMount() {
    let jwt = this.getToken();
    let id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    console.log(id);
    this.getOneAudience(jwt,id);
}

    putAudiences = async (jwt, id) => {

        await Axios({
            method: 'put',
            url: 'http://localhost:8080/api/audience/' + id,
            headers: {
                'Authorization' : 'Bearer ' + jwt,
            },
            data: {
                name: this.state.name,
                description: this.state.description,
                public: this.state.public,
                updated_at: this.state.updated_at
            }

        });
    };

    handleUpload = (jwt, id) => {
        let file = this.state.file;
        let formdata = new FormData();

        formdata.append('file', file);

        Axios({
            method: 'post',
            url: 'http://localhost:8080/api/subscribe/' + id + '/file',
            headers: {
                'Authorization' : 'Bearer ' + jwt,
            },
            data: formdata
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleFile = event => {
        this.setState({ file: event.target.files[0] })
    }

    handleDescriptionChange = (description) => {
        this.setState({
            description: description
        });
        console.log(this.props)
        console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
        let jwt = this.getToken();
        let id = this.props.match.params.id;
        this.handleUpload(jwt, id);
        this.putAudiences(jwt,id);
        window.location = "/admin/audiences"
    };

    handleCheckbox = () => {
        this.setState({
            public: !this.state.public
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
                                    <CardTitle tag="h5">Edit Audience </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit} >
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <label>Audience Name</label>
                                                    <Input
                                                        type="text"
                                                        id="name"
                                                        defaultValue={this.state.name}
                                                        onChange={this.handleChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Description
                                                    </label>
                                                    <CKEditor id="description" name="description"
                                                              editor={ ClassicEditor }
                                                              data={this.state.description}
                                                              onChange={ ( event, editor ) => {
                                                                  const data = editor.getData();
                                                                  this.handleDescriptionChange(data);
                                                              }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <Input type="file" onChange={this.handleFile} id="file" name="file"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">Public Audience ?</label>
                                                    <Input
                                                        checked={this.state.public}
                                                        type="checkbox"
                                                        id="public"
                                                        onChange={this.handleCheckbox}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Col md="5">
                                                <Button className="btn btn-round btn-danger" type="submit">Update Audience </Button>
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

export default PutAudience;
