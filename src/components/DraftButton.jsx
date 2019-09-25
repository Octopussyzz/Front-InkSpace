import React from 'react';
import {Button} from "reactstrap";

class DraftButton extends React.Component {
    handleClick = () => {
        console.log(this.props);
        let mail_id = this.props.mail_id;
        let audience_id = this.props.audience_id;
        window.location = "/admin/" + audience_id + "/mail/" + mail_id;
    };

    render() {
        return (
            <>
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