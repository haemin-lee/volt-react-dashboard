import React, { useState } from "react";
import { Toast, Button, Popover, OverlayTrigger  } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './WarningCode.css';
import { 
    VIOLATION_PRONUNCIATION,
    VIOLATION_NO_ORDINARY_INGREDIENTS,
    VIOLATION_HEALTH_CLAIM_WORDS,
    VIOLATION_UNIVERSAL_NAME,
    VIOLATION_AVOID_HFCS,
    VIOLATION_ADDED_SUGAR
} from './constants'

const ViolationDot = (props) => {
    const { warningText, color } = props;
    return(
        <OverlayTrigger 
            trigger="click"
            overlay={
                    <Popover>
                        <Popover.Content>{warningText}</Popover.Content>
                    </Popover>}>
            <span className="dot" style={{padding: '0.4rem', marginRight: '0.5rem', backgroundColor: props.color}}></span>
        </OverlayTrigger>
    )
}

export const GroceryItem = (props) => {
    const [showToastDefault, setShowToastDefault] = useState(true);
    const toggleDefaultToast = () => setShowToastDefault(!showToastDefault);

    const { foodName, violationsList, deleteShoppingItem, violationType } = props;

    console.log(`violation: ${violationType}`)

    const deleteItem = (foodName, e) => {
        deleteShoppingItem(foodName, e);
    }

    function displayViolationCode(violationType) {
        var codeArr = [];

        for(var i = 0; i < violationsList.length; i++){
            var violation = violationsList[i]
            console.log(`violation: ${violation.name}`)

            if(violation.name === "VIOLATION_PRONUNCIATION"){
                codeArr.push( <ViolationDot warningText={VIOLATION_PRONUNCIATION} color={"Coral"} /> )
            }
            if(violation.name === "VIOLATION_NO_ORDINARY_INGREDIENTS"){
                codeArr.push( <ViolationDot warningText={VIOLATION_NO_ORDINARY_INGREDIENTS} color={"CornflowerBlue"} /> )
            }
            if(violation.name === "VIOLATION_HEALTH_CLAIM_WORDS"){
                codeArr.push( <ViolationDot warningText={VIOLATION_HEALTH_CLAIM_WORDS} color={"DarkGoldenRod"} /> )
            }
            if(violation.name === "VIOLATION_UNIVERSAL_NAME"){
                codeArr.push( <ViolationDot warningText={VIOLATION_UNIVERSAL_NAME} color={"DarkGreen"} /> )
            }
            if(violation.name === "VIOLATION_AVOID_HFCS"){
                codeArr.push( <ViolationDot warningText={VIOLATION_AVOID_HFCS} color={"BlueViolet"} /> )
            }
            if(violation.name === "VIOLATION_ADDED_SUGAR"){
                codeArr.push( <ViolationDot warningText={VIOLATION_ADDED_SUGAR} color={"DarkOrange"} /> )
            }
        }

        if(violationType === "greater than 5 ingredients"){
            codeArr.push( <ViolationDot warningText={"5+ ingredients found"} color={"MediumOrchid"} /> )
        }
        if(violationType === "recalled"){
            codeArr.push( <ViolationDot warningText={"recalled food item"} color={"Crimson"} /> )
        }

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
              {displayViolationCode(violationType)}
          </Toast.Body>
        </Toast>
    )
}