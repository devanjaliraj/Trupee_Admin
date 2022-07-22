import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  CustomInput,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import Textarea from "../../../forms/form-elements/textarea/Textarea";

class EditEquirtyCash extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Equirty Cash"
          breadCrumbParent="Home"
          breadCrumbActive="Equirty Cash"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Equirty Cash
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/equirtyCashList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6" className="mb-2">
                  <Label>Date</Label>
                  <Input type="date" placeholder="Enter User Id" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Time</Label>
                  <Input type="time" placeholder="Enter User Id" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Equity Script</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Select Script</option>
                    <option>CE</option>
                    <option>PF</option>
                    <option>BUY</option>
                    <option>SELL</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Script Name</Label>
                  <Input type="text" placeholder="Enter Script Name" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Tip</Label>
                  <Input type="text" placeholder="Enter Tip" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Call Type</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Select Typr</option>
                    <option>Intraday</option>
                    <option>BTST</option>
                    <option>Short Term</option>
                    <option>Intraday or BTST</option>
                    <option>Intraday (Risky)</option>
                    <option>Intraday (Trailed)</option>
                    <option>Intraday (Re-entry)</option>
                    <option>Intraday (Re-entry- Trailed)</option>
                    <option>Intraday (Hero-Zero)</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Active Value</Label>
                  <Input type="text" placeholder="Enter Active Value" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>SL</Label>
                  <Input type="text" placeholder="Enter Stop Loss" />
                </Col>
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Target </Label>
                  <Input type="text" placeholder="Enter Target 1" />
                </Col>{" "} */}
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Target 2</Label>
                  <Input type="text" placeholder="Enter Target 2" />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Target 3</Label>
                  <Input type="text" placeholder="Enter Target 3" />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Target 4</Label>
                  <Input type="text" placeholder="Enter Target 4" />
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Quantity</Label>
                  <Input type="text" placeholder="Enter Quantity" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Investment Amount</Label>
                  <Input type="text" placeholder="Enter Investment Amount" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Lots Price</Label>
                  <Input type="text" placeholder="Enter Lots Price" />
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update All Trade
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EditEquirtyCash;
