import React from "react";
import axios from "axios";
import { Food } from './Food'
import { Col, Row, Button, Form, InputGroup, Modal, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { faSearch, faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import ShoppingList from "./ShoppingList";
import foodSuggestionList from "./foodSuggestionList";

const SearchFoodInput = (props) => {
  const { shoppingList, setShoppingList, recall, currInput, setCurrInput, setCurrItem, handleOpenModal } = props;

  function addItem(event) {
    let tempData = shoppingList;
    var i = 0;
    var found = 0;

    console.log(`currInput: ${currInput}`);

    for (i = 0; i < recall.length; i++) {
      console.log(`recall: ${recall[i]["product_description"]}`);
      if (currInput === recall[i]["product_description"]) {
        console.log("yes");
        found = 1;
        let newFoodVar = new Food(
          recall[i]["product_description"],
          "24",
          1,
          0,
          "null for now",
          []);
        let empty = [];
        empty.push(newFoodVar);
        setCurrItem(empty);
        break;
      }
    }

    // make axios POST request to get food data (ingredients & list of food rule violations)
    if (found === 0) {
      console.log(`GET request with currInput ${currInput}`);
      axios.post(`https://food-safety-backend.herokuapp.com/get-num-ingredients`, {
          food_item: currInput,
        })
        .then((response) => {
          console.log(response.data);
          let responseVar = response.data;
          let newFoodVar = new Food(
                responseVar["food_item"],
                responseVar["num_ingredients"],
                0,
                0,
                responseVar["ingredients"],
                responseVar["violations_list"]
              );
          let empty = [];
          empty.push(newFoodVar);
          setCurrItem(empty);
        });
    }

    // create popup modal
    handleOpenModal();

    event.preventDefault();
  }
    
    return(
        <div className="d-flex justify-content-between w-50">
          <div className="d-flex align-items-center">
            <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  {/* <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text> */}

                  <Autocomplete
                    id="combo-box-demo"
                    freeSolo
                    value={currInput.name}
                    onChange={(event, newValue) => {
                      if (newValue === null) {
                        setCurrInput("");
                      } else {
                        setCurrInput(newValue.name);
                      }
                    }}
                    options={foodSuggestionList}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} variant="outlined" />
                    )}
                  />
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <Button variant="primary" className="my-3" onClick={(e) => {addItem(e)}} >Add Item</Button>
      </div>
    )
}

export default SearchFoodInput;
