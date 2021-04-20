import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { 
  VIOLATION_PRONUNCIATION,
  VIOLATION_NO_ORDINARY_INGREDIENTS,
  VIOLATION_HEALTH_CLAIM_WORDS,
  VIOLATION_UNIVERSAL_NAME,
  VIOLATION_AVOID_HFCS,
  VIOLATION_ADDED_SUGAR
} from './constants'
import './WarningCode.css';
import { Button, Popover, OverlayTrigger, ButtonGroup } from '@themesberg/react-bootstrap';



const LegendDot = (props) => {
    return(
        <span className="dot" style={{backgroundColor: props.color}}></span>
    )
}
const Legend = () => {
    return(
        <OverlayTrigger
        placement="right"
        trigger="click"
        overlay={
          <Popover>
            <Popover.Title>Food Rule Violation Labels</Popover.Title>
            <Popover.Content>
                <Row>
                    <Col style={{width: '25%'}}>
                    <LegendDot color="Coral" />
                    </Col>          
                    <Col style={{width: "75%", padding: 0, margin: 0}} xs={11} xs={11}>
                    <p style={{fontSize: '0.6rem'}}>{VIOLATION_PRONUNCIATION}</p>
                    </Col>
                </Row>

                <Row>
                    <Col style={{width: '25%'}} xs={1} lg={1}>
                        <LegendDot color="CornflowerBlue" />
                    </Col>          
                    <Col style={{width: "75%", padding: 0, margin: 0}} xs={11} xs={11}>
                    <p style={{fontSize: '0.6rem'}}>{VIOLATION_NO_ORDINARY_INGREDIENTS}</p>
                    </Col>
                </Row>

                <Row>
                    <Col style={{width: '25%'}} xs={1} lg={1}>
                        <LegendDot color="DarkGoldenRod" />
                    </Col>          
                    <Col style={{width: "75%", padding: 0, margin: 0}} xs={11} xs={11}>
                    <p style={{fontSize: '0.6rem'}}>{VIOLATION_HEALTH_CLAIM_WORDS}</p>
                    </Col>
                </Row>

                <Row>
                    <Col style={{width: '25%'}} xs={1} lg={1}>
                        <LegendDot color="DarkGreen" />
                    </Col>          
                    <Col style={{width: "75%", padding: 0, margin: 0}} xs={11} xs={11}>
                    <p style={{fontSize: '0.6rem'}}>{VIOLATION_UNIVERSAL_NAME}</p>
                    </Col>
                </Row>

                <Row>
                    <Col style={{width: '25%'}} xs={1} lg={1}>
                        <LegendDot color="BlueViolet" />
                    </Col>          
                    <Col style={{width: "75%", padding: 0, margin: 0}} xs={11} xs={11}>
                    <p style={{fontSize: '0.6rem'}}>{VIOLATION_AVOID_HFCS}</p>
                    </Col>
                </Row>

                <Row>
                    <Col style={{width: '25%'}} xs={1} lg={1}>
                        <LegendDot color="DarkOrange" />
                    </Col>          
                    <Col style={{width: "75%", padding: 0, margin: 0}} xs={11} xs={11}>
                    <p style={{fontSize: '0.6rem'}}>{VIOLATION_ADDED_SUGAR}</p>
                    </Col>
                </Row>
                                        

            </Popover.Content>
          </Popover>
        }>
        
        <ButtonGroup style={{paddingBottom: '1.25rem'}}>
            <Button variant="outline-primary" size="sm" className="m-2">Legend</Button>
        </ButtonGroup>
    
      </OverlayTrigger>
    )
}

export default Legend