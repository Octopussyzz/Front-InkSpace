import React from 'react';
import { Col, Row,} from "reactstrap";
import DeleteButton from "./DeleteButton";
import PutButton from "./PutButton";
import CreateMailButton from "./CreateMailButton";

class DisplayMailList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }


    render() {
        return (
            <li key={this.props.mail.id}>
                <Row>
                    <Col className="col-ms-9" xs="9">
                        {this.props.mail.subject} <br />
                        {this.props.mail.content} <br />
                        <span className="text-muted">
                                <small>Updated at {this.props.mail.updatedAt}</small>
                              </span>
                    </Col>
                    <Col className="justify-content-around" md="3" xs="3">
                        <Row className="justify-content-around">
                        {!this.props.mail.status ? <PutButton id={this.props.mail.id} /> : "Sent"}
                        </Row>
                    </Col>
                </Row>
            </li>)

    };
}

export default DisplayMailList;