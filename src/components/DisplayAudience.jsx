import React from 'react';
import {Button, Col, Row, UncontrolledTooltip, Form} from "reactstrap";
import Axios from "axios";
import DeleteButton from "./DeleteButton";

class DisplayAudience extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li key={this.props.audience.id}>
            <Row>
                <Col className="col-ms-9" xs="9">
                    {this.props.audience.name} <br />
                    <span className="text-muted">
                                <small>Updated at {this.props.audience.updatedAt}</small>
                              </span>
                </Col>
                <Col className="justify-content-around" md="3" xs="3">
                    <Row className="justify-content-around">
                        <UncontrolledTooltip placement="right" target="mailIcon1">
                            New Mail
                        </UncontrolledTooltip>
                        <UncontrolledTooltip placement="right" target="cogIcon1">
                            Parameters
                        </UncontrolledTooltip>
                       <DeleteButton id={this.props.audience.id}/>
                        <Button
                            className="btn-round btn-icon"
                            color="warning"
                            outline
                            size="sm"
                            id="cogIcon1"
                        >
                            <i className="fa fa-cog" />
                        </Button>
                        <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                            id="mailIcon1"
                        >
                            <i className="fa fa-envelope" />
                        </Button>
                    </Row>
                </Col>
            </Row>
        </li>)

        };
    }

export default DisplayAudience;