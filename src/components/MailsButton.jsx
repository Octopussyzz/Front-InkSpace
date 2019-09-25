import React from 'react';
import {Col} from "reactstrap";

class MailsButton extends React.Component {

    handleClick = () => {
        let id = this.props.audience.id;
        window.location = "/admin/" + id + "/mails";
    };

    render() {
        return (
            <>
                <Col className="col-ms-9" xs="9" onClick={this.handleClick} style={{cursor:'pointer'}}>
                    <b >{this.props.audience.name}</b> <br />
                    <span className="text-muted">
                        <small>Updated at {this.props.audience.updatedAt}</small>
                    </span>
                </Col>
            </>
        )
    }
}

export default MailsButton;