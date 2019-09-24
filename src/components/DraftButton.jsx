import React from 'react';
import Axios from "axios";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class DraftButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log(this.props);
        let mail_id = this.props.mail_id;
        let audience_id = this.props.audience_id;
        window.location = "/admin/" + audience_id + "/mail/" + mail_id;
    };

    render() {
        return (
            <>
                {/*<UncontrolledTooltip placement="right" target={this.props.id}>
                    Delete Audience
                </UncontrolledTooltip>*/}
                <Button
                    className="btn-round btn-icon"
                    color="warning"
                    outline
                    size="sm"
                    id={this.props.id}
                    onClick={this.handleClick}
                >
                    <i className="fas fa-edit" />
                </Button>
            </>
        )
    }
}

export default DraftButton;