import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  // FormGroup,
  CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
import Select from "react-select";
// import { history } from "../../../history";
// import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

export class AddFnoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equity_script: "",
      scriptName: "",
      call_type: "",
      active_value: "",
      SL: "",
      trl: "",
      T1: "",
      T2: "",
      T3: "",
      qty: "",
      investment_amt: "",
      no_of_lots: "",
      expiryDate: "",
      pl_type:"",
      profit_loss_amt:"",
      trade_type:"",
      t5:"",
   
    };
    this.state = {
      // scriptT: [],
      scriptN: [],
    };
  }
  //Script//
  async componentDidMount() {
    axiosConfig
      .get("/getFnoScript")
      .then((response) => {
        console.log(response);
        this.setState({
          // scriptT: response.data.data,
          scriptN: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(
        "/add_fnoIndex",
        this.state
        // {
        //   headers: {
        //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
        //   },
        // }
      )
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/trade/fnoIndexList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add FNO Index
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/fnoIndexList")}
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
                  <Label>Exp. Date</Label>
                  <Input
                    type="date"
                    placeholder="Enter User Id"
                    name="date"
                    value={this.state.date}
                    onChange={this.changeHandler}
                  />
                </Col>
             
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script</Label>
                  <CustomInput
                    type="select"
                    name="script_type"
                    value={this.state.script_type}
                    onChange={this.changeHandler}
                  >
                    {this.state.scriptT.map((allScript) => (
                      <option value={allScript._id} key={allScript._id}>
                        {allScript.script_type}
                      </option>
                    ))}
                  </CustomInput>
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script Name</Label>
                  <CustomInput
                    type="select"
                    name="scriptName"
                    value={this.state.scriptName}
                    onChange={this.changeHandler}
                  >
                    {this.state.scriptN?.map((allScript) => (
                      <option value={allScript?._id} key={allScript?._id}>
                        {allScript?.scriptName}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Equity Script</Label>
                  <Input
                    id="exampleSelect"
                    name="equity_script"
                    type="select"
                    value={this.state.equity_script}
                    onChange={this.changeHandler}
                  >
                    <option>Select Script</option>
                    <option>CE</option>
                    <option>PF</option>
                    <option>BUY</option>
                    <option>SELL</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Trade Type</Label>
                  <Input
                    id="exampleSelect"
                     name="trade_type"
                    type="select"
                    value={this.state.trade_type}
                    onChange={this.changeHandler}
                  >
                    <option>Select Trade</option>
                    <option>BANK NIFTY</option>
                    <option>NIFTY</option>
                  </Input>
                </Col>
              
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Tip</Label>
                  <Input type="text" placeholder="Enter Tip" />
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Call Type</Label>
                  <Input
                    id="exampleSelect"
                    name="call_type"
                    type="select"
                    value={this.state.call_type}
                    onChange={this.changeHandler}
                  >
                    <option>Select Call Type</option>
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
                  <div>
                    <Label>P&L</Label>
                    <Input
                      type="select"
                      name="pl_type"
                      value={this.state.pl_type}
                      onChange={this.changeHandler}
                    >
                      <option value="Option 1">Select Option</option>
                      <option value="Option 2">Profit</option>
                      <option value="Option 3">Loss</option>
                    </Input>
                    <Input
                      type="text"
                      name="profit_loss"
                      value={this.state.profit_loss}
                      onChange={this.changeHandler}
                    />
                  </div>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Active Value</Label>
                  <Input
                    type="number"
                    placeholder="Enter Active Value"
                    name="active_value"
                    value={this.state.active_value}
                    onChange={this.changeHandler}
                  />
                </Col>
                 <Col lg="6" md="6" className="mb-2">
                  <Label>T5</Label>
                  <Input
                    name="t5"
                    type="number"
                    // placeholder="Enter Stop Loss"
                    value={this.state.t5}
                    onChange={this.changeHandler}
                  />
                </Col>
              {/*  <Col lg="6" md="6" className="mb-2">
                  <Label>TRIAL</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 4"
                    name="trl"
                    value={this.state.trl}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 1 </Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 1"
                    name="T1"
                    value={this.state.T1}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 2</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 2"
                    name="T2"
                    value={this.state.T2}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 3</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 3"
                    name="T3"
                    value={this.state.T3}
                    onChange={this.changeHandler}
                  />
                </Col>{" "} */}
                   <Col lg="6" md="6" className="mb-2">
                  <Label>IS Range</Label>
                  <Input
                    type="time"
                    placeholder="Enter User Id"
                    name="time"
                    value={this.state.time}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Quantity</Label>
                  <Input
                    type="text"
                    name="qty"
                    placeholder="Enter Quantity"
                    value={this.state.qty}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Investment Amount</Label>
                  <Input
                    name="investment_amt"
                    type="text"
                    placeholder="Enter Investment Amount"
                    value={this.state.investment_amt}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Number Of Lots</Label>
                  <Input
                    type="text"
                    name="no_of_lots"
                    placeholder="Enter Lots Price"
                    value={this.state.no_of_lots}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add FNO Index
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddFnoIndex;
