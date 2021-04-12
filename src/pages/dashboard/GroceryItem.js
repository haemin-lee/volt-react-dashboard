import React, { useState } from "react";
import { Card, Toast, Col, Row, Button, Modal, Form, InputGroup, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GroceryItem = (props) => {
    const [showToastDefault, setShowToastDefault] = useState(true);
    const toggleDefaultToast = () => setShowToastDefault(!showToastDefault);

    const { foodName, ingredientList } = props;

    return (
        <Toast show={showToastDefault} onClose={toggleDefaultToast} className="my-1">
          
          <Toast.Header className="text-primary" closeButton={false}>
              <FontAwesomeIcon icon={faBootstrap} />
              <strong className="me-auto ms-2">{foodName}</strong>
              <small>violations</small>
              <Button variant="close" size="xs" onClick={toggleDefaultToast} />
          </Toast.Header>
          
          <Toast.Body>
              Food info (ingredient list, rating, and food rule violations)
              <br></br>
              {/* Ingredient List: {ingredientList} */}
              <br></br>
              {/* Number of Ingredients:  */}
          </Toast.Body>
        </Toast>
    )
}