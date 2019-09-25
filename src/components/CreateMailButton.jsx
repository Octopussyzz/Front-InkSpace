import React from 'react';
import {Button} from "reactstrap";

class CreateMailButton extends React.Component {

    handleClick = () => {
        let id = this.props.id;
        window.location = "/admin/audience/" + id + "/mail";
    };

    render() {
        return (
            <>
                <Button
                    className="btn-round btn-icon"
                    color="success"
                    outline
                    size="sm"
                    id={this.props.id}
                    onClick={this.handleClick}
                >
                    <i className="fa fa-envelope" />
                </Button>
            </>
        )
    }
}

export default CreateMailButton;