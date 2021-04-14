import React from "react";
import { Col, Row, Button, Modal, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import ModalFoodItem from '../dashboard/ModalFoodItem'
import { buttonStyles } from '../dashboard/Styles'

export const ApproveModal = (props) => {

    const {
        showDefault,
        setShowDefault,
        currItem,
        setCurrItem,
        shoppingList,
        setShoppingList,
        closeModal
    } = props;

    // reject currItem typed in
    function reject() {
        let tempData = shoppingList;
        let empty = [];
        empty.push("");
        setCurrItem([...empty]);
        closeModal();
    }

    // approve
    function approve() {
        let tempData = shoppingList;
        let empty = [];
        empty.push("");
        tempData.push(currItem[0]);
        setShoppingList([...tempData]);
        setCurrItem([...empty]);
        console.log(`currItem: ${currItem}`);
        closeModal();
    }

    return(
        <React.Fragment>

            <Modal as={Modal.Dialog} centered show={showDefault} onHide={closeModal}>
                <Modal.Header>
                    <Modal.Title className="h6">Approve Your Item</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={closeModal} />
                </Modal.Header>
                <Modal.Body>
                    {/* display data (ingredient list, food rule violations) for the search input value */}
                    <ModalFoodItem
                        currItem={currItem}
                        setCurrItem={setCurrItem}
                        shoppingList={shoppingList}
                        setShoppingList={setShoppingList}
                        closeModal={closeModal}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="success"
                        onClick={() => approve()}
                        style={buttonStyles}
                        >Approve
                    </Button>

                    <Button
                        variant="danger"
                        onClick={() => reject()}
                        style={buttonStyles}
                        >Reject
                    </Button>
                </Modal.Footer>
            </Modal>
            </React.Fragment>
    )
}
