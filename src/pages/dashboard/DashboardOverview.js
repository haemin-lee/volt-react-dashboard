
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Card, Toast, Col, Row, Button, Modal, Form, InputGroup, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { ApproveModal } from "../components/ApproveModal"
import AccordionComponent from "../../components/AccordionComponent"
import { GroceryItem } from "./GroceryItem"

export default () => {

  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  const [showToastDefault, setShowToastDefault] = useState(true);
  const toggleDefaultToast = () => setShowToastDefault(!showToastDefault);

  const groceryItems = [
    {
      id: 1,
      eventKey: "panel-1",
      title: "FOOD 1 ",
      description: "Ingredient list & any food violations"
    },
    {
      id: 2,
      eventKey: "panel-2",
      title: "FOOD 2",
      description: "Ingredient list & any food violations"
        },
    {
      id: 3,
      eventKey: "panel-3",
      title: "FOOD 3",
      description: "Ingredient list & any food violations"

    }
  ]
  

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      
      {/* search box with 'add item' submit button */}
      <div className="d-flex justify-content-between w-50">
          <div className="d-flex align-items-center">
            <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <Button variant="primary" className="my-3" onClick={() => setShowDefault(true)}>Add Item</Button>
        </div>


        <ButtonGroup>
          <Button variant="outline-primary" size="sm">Share/Export</Button>
        </ButtonGroup>
      </div>

      <Row className="justify-content-md-center">


        {/* APPROVAL MODAL */}
        <ApproveModal
            setShowDefault={setShowDefault}
            handleClose={handleClose}
            showDefault={showDefault}
          />

        {/* GROCERY ITEMS - ACCORDIAN */}
        {/* <AccordionComponent
        defaultKey="panel-1"
        data={groceryItems}/> */}

      {/* GROCERY ITEMS - TOAST */}
      <Col xs={12}>
  
        <GroceryItem foodName={'test'}/>
        <GroceryItem />
      </Col>


      </Row>
    </>
  );
};
