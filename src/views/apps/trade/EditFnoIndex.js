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
      
      scriptName: "",
      call_type: "",
      active_value: "",
      SL: "",
      T1: "",
      T2: "",
      T3: "",
      t5:"",
      trl: "",
      qty: "",
      investment_amt: "",
      no_of_lots: "",
      expiryDate:"",
      trade_type:"",
      profit_loss_amt:"",
    };
    this.state = {
     
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
          scriptName: response.data.data.scriptName,
          call_type: response.data.data.call_type,
          active_value: response.data.data.active_value,
          SL: response.data.data.SL,
          T1: response.data.data.T1,
          T2: response.data.data.T2,
          T3: response.data.data.T3,
          t5: response.data.data.t5,
          trl: response.data.data.trl,
          qty: response.data.data.qty,
          investment_amt: response.data.data.investment_amt,
          no_of_lots: response.data.data.no_of_lots,
          trade_type: response.data.data.trade_type,
          expiryDate: response.data.data.expiryDate,
          profit_loss_amt: response.data.data.profit_loss_amt,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //Script//
    axiosConfig
      .get("/getFnoScript")
      .then((response) => {
        console.log(response);
        this.setState({
         
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
                  <Input type="date" name="expiryDate" 
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}/>
                </Col>
               
             
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
                      name="profit_loss_amt"
                      value={this.state.profit_loss_amt}
                      onChange={this.changeHandler}
                    />
                  </div>
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
                  <Label>T₹ 5</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 5"
                    name="t5"
                    value={this.state.t5}
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
              <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                <Label className="mb-1">SL</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="sl_type"
                    value="true"
                  />
                  <span style={{ marginRight: "20px" }}>True</span>
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="sl_type"
                    value="false"
                  />

                  <span style={{ marginRight: "3px" }}>False</span>
                </div>
              </Col>
              <Row className="mb-2">
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T1</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler2(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t1_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t1_type"
                      value="false"
                    />

                    <span style={{ marginRight: "3px" }}>False</span>
                  </div>
                </Col>
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T2</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler3(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t2_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t2_type"
                      value="false"
                    />

                    <span style={{ marginRight: "3px" }}>False</span>
                  </div>
                </Col>
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T3</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler4(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t3_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t3_type"
                      value="false"
                    />

                    <span style={{ marginRight: "3px" }}>False</span>
                  </div>
                </Col>
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T4</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler5(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t4_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t4_type"
                      value="false"
                    />

                    <span style={{ marginRight: "3px" }}>False</span>
                  </div>
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
