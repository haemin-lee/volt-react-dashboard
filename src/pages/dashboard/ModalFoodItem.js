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
                  {currItem[0].ingredientNumber}
                </div>
                <div>
                  <strong>Ingredient list: </strong>
                  {currItem[0].ingredientListStr}
                </div>
              </div>
            </>
    )

}

export default ModalFoodItem;
