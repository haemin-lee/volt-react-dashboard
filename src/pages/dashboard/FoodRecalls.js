import React from 'react';
import {
    Row,
    Col,
    Container,
    Form,
    Card,
    Collapse,
    CardGroup,
  } from "react-bootstrap";
import Button from "react-bootstrap/Button";


  const FoodRecalls = (props) => {

    const { recall, open, setOpen } = props;

    function getRecall(i) {
        if (i < recall.length) {
          return (
            <Card style={{ width: "18rem", height: 300 }}>
              <Card.Header>{recall[i]["city"]}</Card.Header>
              <Card.Body>
                <Card.Title>{recall[i]["product_description"]}</Card.Title>
                <Card.Text>
                  Reason for recall: {recall[i]["reason_for_recall"]}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        } else {
          return <div></div>;
        }
      }
    
      function getRecallStyler(i) {
        return (
          <CardGroup>
            {getRecall(i)}
            {getRecall(i + 1)}
            {getRecall(i + 2)}
          </CardGroup>
        );
      }
      function renderRecalls() {
        var returnObj = [];
        var i = 0;
        console.log("attempt");
        for (i = 0; i < recall.length; i++) {
          returnObj.push(getRecallStyler(i));
          i = i + 2;
        }
        return returnObj;
      }

    return(
        <Row>
          <Col>
            <h4>Food Recalls</h4>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              open list
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">{renderRecalls()}</div>
            </Collapse>
          </Col>
        </Row>
    )

}

export default FoodRecalls;
