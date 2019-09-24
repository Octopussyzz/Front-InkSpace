import React from 'react';
import {Button, Col} from "reactstrap";

class MailsButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log(this.props);
        let id = this.props.audience.id;
        window.location = "/admin/" + id + "/mails";
    };

    render() {
        return (
            <>
                <Col className="col-ms-9" xs="9" onClick={this.handleClick}>
                    {this.props.audience.name} <br />
                    <span className="text-muted">
                        <small>Updated at {this.props.audience.updatedAt}</small>
                    </span>
                </Col>
            </>
        )
    }
}

export default MailsButton;