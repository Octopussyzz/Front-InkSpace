import React from 'react';
import {Button} from "reactstrap";

class PutButton extends React.Component {

    handleClick = () => {
        console.log(this.props);
        let id = this.props.id;
        window.location = "/admin/audience/" + id;
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
                    <i className="fa fa-cog" />
                </Button>
            </>
        )
    }
}

export default PutButton;