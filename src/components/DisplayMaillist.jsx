import React from 'react';
import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import DraftButton from "./DraftButton";

class DisplayMailList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

    }

    render() {
        return (
            <div key={this.props.mail.id}>
                <Row>
                    <Col className="col-ms-9" xs="9" onClick={this.handleClick} style={{cursor:'pointer'}}>

                        <span className="text-muted" >
                            <small> <b>{this.props.mail.subject} </b> </small>
                        </span>
                    <br/>

                        <span className="text-muted">
                                <small>Updated at {this.props.mail.updatedAt}</small>
                              </span>
                    </Col>
                    <Col className="justify-content-around" md="3" xs="3">
                        <Row className="justify-content-around">
                        {!this.props.mail.status ? <DraftButton mail_id={this.props.mail.id}
                                                                audience_id={this.props.audience_id} /> : "Sent"}
                        </Row>

                        <Modal isOpen={this.state.modal} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>{this.props.mail.subject}</ModalHeader>
                            <ModalBody>
                                <div className="text-justify" dangerouslySetInnerHTML={{__html: this.props.mail.content}}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.handleClick}>Cancel</Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </Col>
                </Row>
            </div>)

    };
}

export default DisplayMailList;