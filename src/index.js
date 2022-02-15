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

          <Row>

            <Col>
            <h5 className='txt_tittle'>ESTIMATE <span className='txt_tittle_2'>INFORMATION</span> </h5>
            <br />
            <input class="input_full" type="text" id="fname" name="fname"></input>
            <Form.Label> Company Name</Form.Label>
            </Col>
            <Col>
            <h5 className='txt_tittle'>BILLING <span className='txt_tittle_2'>INFORMATION</span> </h5>
            </Col>
          </Row>

          <Row>

            <Col class="col-2">
            </Col>


            <Col class="col-10">
            <form>
              <div class="form-group">


                <Form.Label>Customer Pickup</Form.Label>
                <input class="input_billing" type="text" id="fname" name="fname"></input>


                <Form.Label>Pick Up Date</Form.Label>
                <input class="input_billing" type="text" id="fname" name="fname"></input>


                <Form.Label>Time</Form.Label>
                <input class="input_billing" type="text" id="fname" name="fname"></input>

              </div>
            </form>
            </Col>



          </Row>


        </div>
        <div>
          <Row>
            <Col>
            <input class="input_full" type="text" id="fname" name="fname"></input>
            <Form.Label> Client Name</Form.Label>
            </Col>
            <Col>
            <input class="input_full" type="text" id="fname" name="fname"></input>

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