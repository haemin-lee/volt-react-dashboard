
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Card, Toast, Col, Row, Button, Modal, Form, InputGroup, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

import { ApproveModal } from "../components/ApproveModal"
import { GroceryItem } from "./GroceryItem"

import { customStyles } from './Styles'

import ExportViaEmail from './ExportViaEmail';
import ModalFoodItem from './ModalFoodItem';
import FoodRecalls from './FoodRecalls';
import SearchBar from './SearchBar'
import ShoppingList from "./ShoppingList";

import axios from "axios";
// import Modal from "react-modal";

export default () => {

    
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  const [showToastDefault, setShowToastDefault] = useState(true);
  const toggleDefaultToast = () => setShowToastDefault(!showToastDefault);

  const [shoppingList, setShoppingList] = useState([]); // items in shopping list
  const [recall, setRecall] = useState([]);
  const [currInput, setCurrInput] = useState("");
  const [currItem, setCurrItem] = useState([""]); // input the user typed into search box
  const [open, setOpen] = useState(false); // for recalls
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() { setIsOpen(true); }
  function closeModal() { setIsOpen(false); }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  // for recalls
  useEffect(() => {
    // Update the document title using the browser API
    axios.post(`https://127.0.0.1:5000/get-food-recalls`).then((response) => {
      console.log(response.data);
      setRecall(response.data["food_recall_list"]);
    });
  }, []);

  

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      
      {/* search box with 'add item' submit button */}
        <SearchBar
              currInput={currInput} 
              setCurrInput={setCurrInput} 
              shoppingList={shoppingList} 
              setCurrItem={setCurrItem} 
              recall={recall} 
              openModal={openModal} />
        {/* allow users to email shopping list */}
        <ExportViaEmail shoppingList={shoppingList} />
      </div>

      <Row className="justify-content-md-center">


        {/* APPROVAL MODAL */}
        <ApproveModal
            showDefault={modalIsOpen}
            setShowDefault={setIsOpen}
            currItem={currItem}
            setCurrItem={setCurrItem}
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
            closeModal={closeModal}
          />

      {/* GROCERY ITEMS - TOAST */}
      <Col xs={12}>
  
        {/* display all approved items in shopping list */}
        <ShoppingList
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
      </Col>


      </Row>
    </>
  );
};
