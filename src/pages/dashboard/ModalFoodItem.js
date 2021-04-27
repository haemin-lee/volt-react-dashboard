import React, { useEffect, useState, useRef } from "react";
import {
  VIOLATION_PRONUNCIATION,
  VIOLATION_NO_ORDINARY_INGREDIENTS,
  VIOLATION_HEALTH_CLAIM_WORDS,
  VIOLATION_UNIVERSAL_NAME,
  VIOLATION_AVOID_HFCS,
  VIOLATION_ADDED_SUGAR,
} from "./constants";

const ModalFoodItem = (props) => {
  const {
    currItem,
    setCurrItem,
    shoppingList,
    setShoppingList,
    closeModal,
  } = props;

  function wrapper(violations) {
    let warnings2 = [];
    for (let i = 0; i < violations.length; i++) {
      let violation = violations[i];
      if (violation === null) {
        continue;
      }

      if (violation.name === "VIOLATION_PRONUNCIATION") {
        warnings2.push(<span>WARNING: {VIOLATION_PRONUNCIATION}</span>);
      }
      if (violation.name === "VIOLATION_NO_ORDINARY_INGREDIENTS") {
        warnings2.push(
          <span>WARNING: {VIOLATION_NO_ORDINARY_INGREDIENTS}</span>
        );
      }
      if (violation.name === "VIOLATION_HEALTH_CLAIM_WORDS") {
        warnings2.push(<span>WARNING: {VIOLATION_HEALTH_CLAIM_WORDS}</span>);
      }
      if (violation.name === "VIOLATION_UNIVERSAL_NAME") {
        warnings2.push(<span>WARNING: {VIOLATION_UNIVERSAL_NAME}</span>);
      }
      if (violation.name === "VIOLATION_AVOID_HFCS") {
        warnings2.push(<span>WARNING: {VIOLATION_AVOID_HFCS}</span>);
      }
      if (violation.name === "VIOLATION_ADDED_SUGAR") {
        warnings2.push(<span>WARNING: {VIOLATION_ADDED_SUGAR}</span>);
      }

      return warnings2;
    }
  }

  // display warning on modal popup
  function findWarning() {
    try {
      let warnings = [];
      if (currItem[0].ingredientNumber > 5) {
        warnings.push(<span>WARNING: More than 5 ingredients found</span>);
      }

      let violations = currItem[0].violationsList;
      if (
        violations == null ||
        violations === undefined ||
        typeof violations === "undefined"
      ) {
        return;
      }

      warnings.push(<div>{wrapper(violations)}</div>);
      return warnings;
    } catch (err) {
      console.log(err);
      return;
    }

    // TODO: filter through currItem[0].violationsList

    // recalled food item found
    console.log(`recall: ${currItem[0].recall}`);
  }

  function returnNumIngredients() {
    console.log(`test: ${currItem[0].ingredientListStr}`);
    if (
      currItem[0].ingredientNumber == null ||
      currItem[0].ingredientNumber === undefined ||
      typeof currItem[0].ingredientNumber === "undefined"
    ) {
      return "None Found";
    } else {
      return currItem[0].ingredientNumber;
    }
  }

  function returnIngredients() {
    if (
      currItem[0].ingredientListStr == null ||
      currItem[0].ingredientListStr === undefined ||
      typeof currItem[0].ingredientListStr === "undefined"
    ) {
      return "None Found";
    } else {
      return currItem[0].ingredientListStr;
    }
  }

  return (
    <>
      <h5>{currItem[0].name}</h5>
      <div className="approveBody">
        <div
          className="warningLabel"
          style={{ color: "red", fontStyle: "italic" }}
        >
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
  );
};

export default ModalFoodItem;
