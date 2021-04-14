import React, { useState } from "react";
import { Toast, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const GroceryItem = (props) => {
    const [showToastDefault, setShowToastDefault] = useState(true);
    const toggleDefaultToast = () => setShowToastDefault(!showToastDefault);

    const { foodName, deleteShoppingItem, violationType } = props;

    console.log(`violation: ${violationType}`)

    const deleteItem = (foodName, e) => {
        deleteShoppingItem(foodName, e);
        // toggleDefaultToast();
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
          </Toast.Body>
        </Toast>
    )
}