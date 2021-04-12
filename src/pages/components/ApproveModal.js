import React from "react";
import { Col, Row, Button, Modal, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';


export const ApproveModal = (props) => {

    const {
        setShowDefault,
        handleClose,
        showDefault
    } = props;

    return(
        <React.Fragment>

            <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h6">Shopping Item Name Here</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <p>DATA Here</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Approve
                    </Button>
                    <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
                        Reject
                    </Button>
                </Modal.Footer>
            </Modal>
            </React.Fragment>
    )
}
