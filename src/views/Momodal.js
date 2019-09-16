import {Button, Col, Modal} from "reactstrap";
import React from "react";


function Momodal(){
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    return(
        <>
            <Col md="6">
                {/* Modal */}
                <Modal isOpen={modal} toggle={toggleModal}>
                    <div className="modal-header">
                        <button
                            aria-label="Close"
                            className="close"
                            type="button"
                            onClick={toggleModal}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                        <h5
                            className="modal-title text-center"
                            id="exampleModalLabel"
                        >
                            Modal title
                        </h5>
                    </div>
                    <div className="modal-body">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.
                        Separated they live in Bookmarksgrove right at the coast of
                        the Semantics, a large language ocean. A small river named
                        Duden flows by their place and supplies it with the necessary
                        regelialia. It is a paradisematic country, in which roasted
                        parts of sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text
                        by the name of Lorem Ipsum decided to leave for the far World
                        of Grammar.
                    </div>
                    <div className="modal-footer">
                        <div className="left-side">
                            <Button
                                className="btn-link"
                                color="default"
                                type="button"
                                onClick={toggleModal}
                            >
                                Never mind
                            </Button>
                        </div>
                        <div className="divider" />
                        <div className="right-side">
                            <Button className="btn-link" color="danger" type="button">
                                Delete
                            </Button>
                        </div>
                    </div>
                </Modal>
            </Col>
        </>
    );
}

export default Momodal;