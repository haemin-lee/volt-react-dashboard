
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
          <Button variant="outline-primary" size="sm">Share</Button>
          <Button variant="outline-primary" size="sm">Export</Button>
        </ButtonGroup>
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          {/* <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          /> */}
        </Col>
        {/* <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col> */}
        {/* <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Customers"
            title="345k"
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col> */}

        {/* <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Revenue"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col> */}
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
      <Col>
      <Toast show={showToastDefault} onClose={toggleDefaultToast} className="my-1">
          <Toast.Header className="text-primary" closeButton={false}>
              <FontAwesomeIcon icon={faBootstrap} />
              <strong className="me-auto ms-2">FOOD NAME HERE</strong>
              <small>violations</small>
              <Button variant="close" size="xs" onClick={toggleDefaultToast} />
          </Toast.Header>
          <Toast.Body>
              Food info (ingredient list, rating, and food rule violations)
          </Toast.Body>
        </Toast>
      </Col>

        


      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                {/* <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                </Col> */}

                {/* <Col xs={12} lg={6} className="mb-4">
                  <TeamMembersWidget />
                </Col> */}

                {/* <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col> */}
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                {/* <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Total orders"
                    value={452}
                    percentage={18.2}
                    data={totalOrders} />
                </Col> */}

                {/* <Col xs={12} className="px-0 mb-4">
                  <RankingWidget />
                </Col> */}

                {/* <Col xs={12} className="px-0">
                  <AcquisitionWidget />
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
