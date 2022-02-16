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
            <div className='shape'></div>
            <br />
            <input class="input_full" type="text" id="fname" name="fname"></input>
            <Form.Label> Company Name</Form.Label>
            </Col>
            <Col>
            <h5 className='txt_tittle'>BILLING <span className='txt_tittle_2'>INFORMATION</span> </h5>
            <div className='shape'></div>
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
            <Col class="row_break">
          <strong><div>Drop Off</div></strong>
            <input class="input_33 gx-5" ></input> 
            <input  class="input_33 gx-5" ></input> 
            <input  class="input_33 gx-5"></input> 
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col>
            <input class="input_full" type="text" id="fname" name="fname"></input>
            <Form.Label> Address</Form.Label>
            </Col>
            <Col >
            <Form.Label class="label_33_l "> Company</Form.Label>
            <Form.Label class="label_33_c"> Client</Form.Label>
            <Form.Label class="label_33_r"> Phone #</Form.Label>
            </Col>
          </Row>
        </div>

        <div>
        <Row>
            <Col>
            <input class="input_full" type="text" id="fname" name="fname"></input>
            <Form.Label> Phone #</Form.Label>
            </Col>
            <Col>
            <Form.Label class=" m-t">Address</Form.Label>
            <input class="input_full " type="text" id="fname" name="fname"></input>
            </Col>
          </Row>
        </div>

        <div>
        <Row>
            <Col>
            <input class="input_50" type="text" id="fname" name="fname"></input>
            <input class="input_50" type="text" id="fname" name="fname"></input>
            </Col>
            <Col>
            <input class="input_33 gx-5" ></input> 
            <input  class="input_33 gx-5" ></input> 
            <input  class="input_33 gx-5"></input> 
            </Col>
          </Row>
        </div>

        <div>
        <Row>
            <Col>
            <Form.Label class="label_33_l "> Phone #</Form.Label>
            
            <Form.Label class="label_33_r2"> Email Address</Form.Label>
            </Col>
            <Col>
            <Form.Label class="label_33_l "> Delivery $</Form.Label>
            <Form.Label class="label_33_c"> Gas $</Form.Label>
            <Form.Label class="label_33_r"> Toll $ </Form.Label>
            
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col>
           
            </Col>
            <Col class="row_break">
            <br />
          <strong><div>Shipping</div></strong>
            <input class="input_33 gx-5" ></input> 
            <input  class="input_33 gx-5" ></input> 
            <input  class="input_33 gx-5"></input> 
            </Col>
          </Row>
        </div>

        <Row>
          <Col>
          <h5 className='txt_tittle'>PROJECT <span className='txt_tittle_2'>INFORMATION</span> </h5>
          <div className='shape'></div>
          <br />
          <input class="input_50" type="date" id="fname" name="fname"></input>
          <input class="input_50" type="date" id="fname" name="fname"></input>
          </Col>
          <Col>
          
          <Form.Label class="label_33_l "> FedEx $</Form.Label>
            <Form.Label class="label_33_c"> UPS $</Form.Label>
            <Form.Label class="label_33_r"> Other $ </Form.Label>
            <br />
          <strong><div>Third Party Shipping</div></strong>
          </Col>
          </Row>

          <div>
        <Row>
            <Col>
            <Form.Label class="label_33_l "> Date In</Form.Label>
            
            <Form.Label class="label_33_r2"> Due Date</Form.Label>
            </Col>
            <Col>
            <input class="input_50_r" type="text" id="fname" name="fname"></input>
            <Form.Label>FedEx Acct. #</Form.Label>
            <input class="input_50_r" type="text" id="fname" name="fname"></input>
            <Form.Label>UPS Acct. #</Form.Label>
            <input class="input_50_r" type="text" id="fname" name="fname"></input>
            <Form.Label>Other Acct. #</Form.Label>
            </Col>
          </Row>
        </div>

        <div>
        <Row>
            <Col>
            <input class="input_full" type="text" id="fname" name="fname"></input>
            <Form.Label> Project Name</Form.Label>
            </Col>
            <Col></Col>
          </Row>
        </div>

        <div>
        <Row>
            <Col>
            <input class="input_full" type="text" id="fname" name="fname"></input>
            <Form.Label> Job Description</Form.Label>
            </Col>
            <Col>
            <h5 className='txt_tittle'>BCS COST <span className='txt_tittle_2'>INFORMATION</span> </h5>
          <div className='shape'></div>
            </Col>
          </Row>
        </div>

        <div>
        <Row>
            <Col>
            <h5 className='txt_tittle'>SPEC <span className='txt_tittle_2'>INFORMATION</span> </h5>
          <div className='shape'></div>
          <br />
            </Col>
            <Col>
           
            </Col>
          </Row>
        </div>

        <div>
        <Row>
            <Col>
            <input class="input_33 gx-5" ></input> 
            <input  class="input_33 gx-5" ></input> 
            <input  class="input_33 gx-5"></input> 

            
            </Col>
            <Col>
            <Form.Label class="label_33_l "> BCS Cost $</Form.Label>
            <input class="input_billing" type="text" id="fname" name="fname"></input>
            <Form.Label > + 120 design & Layout (2-5 hrs. est.)</Form.Label>
            
            </Col>
          </Row>
        </div>

        <div>
        <Row>
            <Col>
            <Form.Label class="label_33_l "> Quantinty </Form.Label>
            <Form.Label class="label_33_c"> Size </Form.Label>
            <Form.Label class="label_33_r"> Color(s) </Form.Label>
            </Col>
            <Col>
            <Form.Label> 30% Mark Up</Form.Label>
            <input class="input_billing_2" type="text" id="fname" name="fname"></input>
            <Form.Label > 50% Mark Up </Form.Label>
            <input class="input_billing_2" type="text" id="fname" name="fname"></input>
            <Form.Label> Doubled </Form.Label>
            <input class="input_billing_2" type="text" id="fname" name="fname"></input>
           
            
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