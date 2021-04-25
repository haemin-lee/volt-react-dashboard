import React from 'react';
import { Row, Col } from "react-bootstrap";
import { GroceryItem } from './GroceryItem';

const ShoppingList = (props) => {
    const {shoppingList, setShoppingList} = props;

    const deleteShoppingItem = (foodName, e) => {
        console.log(`shoppinglist: ${shoppingList}`)
        console.log(`deleting item: ${foodName}`)

        e.stopPropagation();
        e.preventDefault();

        setShoppingList(shoppingList.filter(el => el.name !== foodName));
        console.log(`updated state: ${shoppingList}`)
    }

    // show individual food item from shopping list
    const getFood = (i) => {

        var violationType = "None"
        if(shoppingList[i].recall == 1) { //recalled
            violationType = "recalled";
        }
        else if(shoppingList[i].ingredientNumber > 5) { //more than 5 ingredients
            violationType = "greater than 5 ingredients";
        }

        return(
            <GroceryItem 
                foodName={shoppingList[i].name}
                violationsList={shoppingList[i].violationsList}
                deleteShoppingItem={deleteShoppingItem}
                violationType={violationType} />
        )
    }

    const returnShoppingList = () => {
        var returnObj = []
        var i = 0
        for (i = 0; i < shoppingList.length; i++) {
            returnObj.push(getFood(i))
        }
        return returnObj
    }

    return(
        <>
            <Row className="shoppingListHeader">
                <Col xs={12} lg={12}>
                    <h4>Shopping List</h4>
                </Col>
            </Row>

            <Row className="shoppingListItems">
                <Col xs={12} lg={12}>
                    {returnShoppingList()}
                </Col>
            </Row>
        </>
    )
}

export default ShoppingList
