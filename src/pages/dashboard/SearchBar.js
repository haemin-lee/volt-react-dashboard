import React from 'react';
import { Form } from "react-bootstrap";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import foodSuggestionList from './foodSuggestionList'
import { Food } from './Food'
import axios from "axios";


const SearchBar = (props) => {

    const { currInput, setCurrInput, shoppingList, setCurrItem, recall, openModal } = props;

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
              []
            );
            let empty = [];
            empty.push(newFoodVar);
            setCurrItem(empty);
            break;
          }
        }
    
        if (found === 0) {
          console.log(`GET request with currInput ${currInput}`);
          axios
            .post(`https://127.0.0.1:5000/get-num-ingredients`, {
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
        openModal();
    
        event.preventDefault();
      }

    return(
        <Form
              onSubmit={(e) => {
                addItem(e);
              }}
              style={{display: 'inline-block', width: '100%'}}
            >
              <div style={{float:'left', paddingRight: '0.5rem'}} class="form-group">
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
              </div>
              <div style={{float: 'left'}} >
                <button type="submit" class="btn btn-primary">
                  Add Item
                </button>
              </div>
              
          </Form>
    )

}

export default SearchBar;
