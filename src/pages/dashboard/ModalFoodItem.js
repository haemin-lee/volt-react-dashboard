import React, { useEffect, useState, useRef } from "react";

const ModalFoodItem = (props) => {

    const { currItem, setCurrItem, shoppingList, setShoppingList, closeModal } = props;

    // display warning on modal popup
    function findWarning() {
        // food rule violation: recalled food item
        if (currItem[0].recall) {
          return <div>Recall Found</div>;
        }
        // food rule violation: more than 5 ingredients found
        if (currItem[0].ingredientNumber > 5) {
          return <span>Food Rule Violation: More than 5 ingredients found</span>;
        }

        // TODO: filter through currItem[0].violationsList

        // recalled food item found
        console.log(`recall: ${currItem[0].recall}`);
    }

    function returnNumIngredients(){
      console.log(`test: ${currItem[0].ingredientListStr}`)
      if(currItem[0].ingredientNumber == null|| currItem[0].ingredientNumber === undefined || typeof currItem[0].ingredientNumber === "undefined")
      {
        return "None Found"
      }
      else
      {
        return currItem[0].ingredientNumber
      }
    }

    function returnIngredients(){
      if(currItem[0].ingredientListStr == null|| currItem[0].ingredientListStr === undefined || typeof currItem[0].ingredientListStr === "undefined")
      {
        return "None Found"
      }
      else
      {
        return currItem[0].ingredientListStr
      }
    }

    return(
            <>
              <h5>{currItem[0].name}</h5>
              <div className="approveBody">
                <div
                  className="warningLabel"
                  style={{ color: "red", fontStyle: "italic" }} >
                  {findWarning()}
                </div>
                <div>
                  <strong>Number of ingredients: </strong>{" "}
                  {/* {currItem[0].ingredientNumber} */}
                  {returnNumIngredients()}
                </div>
                <div>
                  <strong>Ingredient list: </strong>
                  {/* {currItem[0].ingredientListStr} */}
                  {returnIngredients()}
                </div>
              </div>
            </>
    )

}

export default ModalFoodItem;
