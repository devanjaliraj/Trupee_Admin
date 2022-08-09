import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  //FormGroup,
  CustomInput,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import Textarea from "../../../forms/form-elements/textarea/Textarea";

class EditFnoIndex extends React.Component {
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
      trl: "",
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
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getone_fnoIndex/${id}`, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          equity_script: response.data.data.equity_script,
          script_type: response.data.data.script_type,
          script_name: response.data.data.script_name,
          call_type: response.data.data.call_type,
          active_value: response.data.data.active_value,
          SL: response.data.data.SL,
          T1: response.data.data.T1,
          T2: response.data.data.T2,
          T3: response.data.data.T3,
          trl: response.data.data.trl,
          qty: response.data.data.qty,
          investment_amt: response.data.data.investment_amt,
          no_of_lots: response.data.data.no_of_lots,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //Script//
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
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/edit_fnoIndex/${id}`, this.state, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
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
        <Breadcrumbs
          breadCrumbTitle="Trade"
          breadCrumbParent="Home"
          breadCrumbActive=" Edit FNO Index"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit FNO Index
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
                    {this.state.scriptT?.map((allScript) => (
                      <option value={allScript?._id} key={allScript?._id}>
                        {allScript?.script_type}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script Name</Label>
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
                  <Label>Active Value</Label>
                  <Input
                    type="text"
                    placeholder="Enter Active Value"
                    name="active_value"
                    value={this.state.active_value}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>SL</Label>
                  <Input
                    name="SL"
                    type="text"
                    placeholder="Enter Stop Loss"
                    value={this.state.SL}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Trail</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 4"
                    name="T4"
                    value={this.state.trl}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 1 </Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 1"
                    name="T1"
                    value={this.state.T1}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 2</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 2"
                    name="T2"
                    value={this.state.T2}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 3</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 3"
                    name="T3"
                    value={this.state.T3}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>IS Range</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 2"
                    name="T4"
                    // value={this.state.T4}
                    // onChange={this.changeHandler}
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update FNO Index
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

export default EditFnoIndex;
