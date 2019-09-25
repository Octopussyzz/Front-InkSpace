import React from 'react';
import { Col, Row,} from "reactstrap";
import DeleteButton from "./DeleteButton";
import PutButton from "./PutButton";
import CreateMailButton from "./CreateMailButton";
import MailsButton from "./MailsButton";

class DisplayAudience extends React.Component {
    render() {
        return (
            <li key={this.props.audience.id}>
            <Row>
                <MailsButton audience={this.props.audience} />
                <Col className="justify-content-around" md="3" xs="3">
                    <Row className="justify-content-around">
                       <DeleteButton id={this.props.audience.id}/>
                       <PutButton id={this.props.audience.id} />
                       <CreateMailButton id={this.props.audience.id}/>
                    </Row>
                </Col>
            </Row>
        </li>)

        };
    }

export default DisplayAudience;