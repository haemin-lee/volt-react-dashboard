import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ApproveModal } from "../components/ApproveModal"
import ExportViaEmail from './ExportViaEmail';
import SearchBar from './SearchBar'
import ShoppingList from "./ShoppingList";
import axios from "axios";
import Legend from './Legend';


export default () => {

  const [showToastDefault, setShowToastDefault] = useState(true);

  const [shoppingList, setShoppingList] = useState([]); // items in shopping list
  const [recall, setRecall] = useState([]);
  const [currInput, setCurrInput] = useState("");
  const [currItem, setCurrItem] = useState([""]); // input the user typed into search box
  const [open, setOpen] = useState(false); // for recalls
  
  const [modalIsOpen, setIsOpen] = useState(false); // for approval modal
  function openModal() { setIsOpen(true); }
  function closeModal() { setIsOpen(false); }


  // for recalls
  useEffect(() => {
    // Update the document title using the browser API
    // axios.post(`https://127.0.0.1:5000/get-food-recalls`).then((response) => {
    //   console.log(response.data);
    //   setRecall(response.data["food_recall_list"]);
    // });
    setRecall([]);
  }, []);

  

  return (
    <>
      <div xs={12} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        {/* search box with 'add item' submit button */}
        <Row xs={12}>
          <SearchBar
                  currInput={currInput} 
                  setCurrInput={setCurrInput} 
                  shoppingList={shoppingList} 
                  setCurrItem={setCurrItem} 
                  recall={recall} 
                  openModal={openModal} />
        </Row>
      </div>

      {/* allow users to email shopping list */}
      {/* <ExportViaEmail shoppingList={shoppingList} /> */}

      {/* legend/key for violations */}
      <Legend />
      
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

      <Row xs={12} className="justify-content-md-center">
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
