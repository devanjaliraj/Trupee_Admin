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
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

export class AddAllTrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equity_script: "",
      script_type: "",
      script_name: "",
      call_type: "",
      active_value: "",
      SL: "",
      T1: "",
      T2: "",
      T3: "",
      T4: "",
      qty: "",
      investment_amt: "",
      no_of_lots: "",
    };
    this.state = {
      scriptT: [],
      scriptN: [],
    };
  }

  async componentDidMount() {
    axiosConfig
      .get("/getScript")
      .then((response) => {
        console.log(response);
        this.setState({
          scriptT: response.data.data,
          scriptN: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // handleChange = (dealer) => {
  //   this.setState({ dealer }, () =>
  //     console.log(`Option selected:`, this.state.dealer)
  //   );
  // };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(
        "/addTrade",
        this.state
        // {
        //   headers: {
        //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
        //   },
        // }
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/trade/allTradeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { dealer } = this.state;
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add All Trade
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("app/trade/allTradeList")}
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
                <Col lg="6" md="6" sm="6" className="mb-2">
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
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script</Label>
                  <CustomInput
                    type="select"
                    name="script_name"
                    value={this.state.script_name}
                    onChange={this.changeHandler}
                  >
                    {this.state.scriptN.map((allScript) => (
                      <option value={allScript._id} key={allScript._id}>
                        {allScript.script_name}
                      </option>
                    ))}
                  </CustomInput>
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
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Script Name</Label>
                  <Input type="text" placeholder="Enter Script Name" />
                </Col> */}
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Tip</Label>
                  <Input type="text" placeholder="Enter Tip" />
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Call Type</Label>
                  <Input id="exampleSelect" name="select" type="select">
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
                  <Label>Active Value</Label>
                  <Input type="text" placeholder="Enter Active Value" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>SL</Label>
                  <Input type="text" placeholder="Enter Stop Loss" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 1 </Label>
                  <Input type="text" placeholder="Enter Target 1" />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 2</Label>
                  <Input type="text" placeholder="Enter Target 2" />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 3</Label>
                  <Input type="text" placeholder="Enter Target 3" />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 4</Label>
                  <Input type="text" placeholder="Enter Target 4" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Quantity</Label>
                  <Input type="text" placeholder="Enter Quantity" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Investment Amount</Label>
                  <Input type="text" placeholder="Enter Investment Amount" />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Number Of Lots</Label>
                  <Input type="text" placeholder="Enter Lots Price" />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add All Trade
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddAllTrade;
