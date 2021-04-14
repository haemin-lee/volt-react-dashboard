import React from "react";
import { Card, Toast, Col, Row, Button, Modal, Form, InputGroup, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_KhUJAZGrNxtemlOYQ1Po3");

var templateParams = {
    service_id: "service_5ot4vcd",
    template_id: "template_jo6vovg",
    user_id: "user_KhUJAZGrNxtemlOYQ1Po3",
    template_params: {
      to_name: "James",
      message: "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },
  };

const ExportViaEmail = (props) => {
    const {shoppingList} = props;

    const sendEmail = (input) => {
    emailjs.send("service_5ot4vcd", "template_jo6vovg", {
        to_name: input.template_params.to_name,
        message: input.template_params.message,
    });
    var alertMsg = "successfully sent an email!";
    alert(alertMsg);
    }

    const sendEmailWrapper = (name) => {
        console.log(name);
        let message = "";
        var i = 0;
        for (i = 0; i < shoppingList.length; i++) {
          message += shoppingList[i].name + "\r\n";
        }
        console.log(`sending email ${message}`);
        templateParams.template_params.to_name = name;
        templateParams.template_params.message = message;
        sendEmail(templateParams);
      }


    return(
        <ButtonGroup>
          <Button 
            variant="outline-primary" 
            size="sm" 
            onClick={() => sendEmailWrapper("Jenny")}>Share/Export</Button>
        </ButtonGroup>
    )
}

export default ExportViaEmail;
