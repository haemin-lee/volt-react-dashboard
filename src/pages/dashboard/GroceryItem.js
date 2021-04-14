import React, { useState } from "react";
import { Toast, Button, Popover, OverlayTrigger  } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './WarningCode.css';

export const GroceryItem = (props) => {
    const [showToastDefault, setShowToastDefault] = useState(true);
    const toggleDefaultToast = () => setShowToastDefault(!showToastDefault);

    const { foodName, deleteShoppingItem, violationType } = props;

    console.log(`violation: ${violationType}`)

    const deleteItem = (foodName, e) => {
        deleteShoppingItem(foodName, e);
        // toggleDefaultToast();
    }

    function displayViolationCode(violationType) {
        var codeArr = [];
        if(violationType === "greater than 5 ingredients"){
            codeArr.push(
                <OverlayTrigger trigger="click"
                overlay={
                    <Popover>
                        <Popover.Content>5+ ingredients found</Popover.Content>
                    </Popover>}>
                  <span 
                    className="dot" 
                    style={{padding: '0.1rem', backgroundColor: "blue" }}></span>
                </OverlayTrigger>
                
            )
        }
        if(violationType === "recalled"){
            codeArr.push(
                <OverlayTrigger trigger="click"
                overlay={
                    <Popover>
                        <Popover.Content>recalled food item</Popover.Content>
                    </Popover>}>
                  <span 
                    className="dot" 
                    style={{padding: '0.1rem', backgroundColor: "red" }}></span>
                </OverlayTrigger>
            )
        }
        // TODO: ADD ONE FOR PRONUNCIATION

        return codeArr;
    }

    return (
        <Toast show={showToastDefault} onClose={toggleDefaultToast} className="my-1">
          
          <Toast.Header className="text-primary" closeButton={false}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <strong className="me-auto ms-2">{foodName}</strong>
              <Button variant="close" size="xs" onClick={(e) => deleteItem(foodName, e)} />
          </Toast.Header>
          
          <Toast.Body>
              Food Rule Violation: {violationType}
              <br></br>
              {displayViolationCode(violationType)}


          </Toast.Body>
        </Toast>
    )
}