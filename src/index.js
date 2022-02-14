import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";


class ComponentToPrint extends React.Component {
  render() {
    return (
      
      <Container>


        <div>
          <br />
          <Row >
            <Col lg="6">
            <h5 className='txt_tittle'>ESTIMATE <span className='txt_tittle_2'>INFORMATION</span> </h5>
            <input type="text" id="fname" name="fname"></input>
            
            </Col>
            <Col  lg="6" >
            
            <h5 className='txt_tittle'>BILLING  <span className='txt_tittle_2'>INFORMATION</span> </h5>
            <Col  lg="2">
            <Form.Label >Customer Pickup</Form.Label>
            <input type="text" id="fname" name="fname"></input>
            </Col>
            <Col lg="2">
            <Form.Label >Pick Up Date</Form.Label>  
            <input type="text" id="fname" name="fname"></input>
            </Col>
            <Col lg="2">
            <Form.Label >Time</Form.Label>  
            <input type="text" id="fname" name="fname"></input>
            </Col>
            </Col>
            
            </Row>
        </div>







      </Container>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <Container>
        <br />
      <Button onClick={handlePrint}>PRINT</Button>
      </Container>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));