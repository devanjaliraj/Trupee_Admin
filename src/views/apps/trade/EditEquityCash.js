import React from "react";
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

class EditEquityCash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      script_type: "",
      cash_scrpt_name: "",
      active_value: "",
      active_value2: "",
      call_type: "",
      SL: "",
      sl_type: false,
      T1: "",
      t1_type: false,
      T2: "",
      t2_type: false,
      T3: "",
      t3_type: false,
      T4: "",
      t4_type: false,
      t5: "",
      t5_type: false,
      qty: "",
      investment_amt: "",
      no_of_lots: "",
      pl_type: "",
      profit_loss_amt: "",
      expiryDate: "",
      type: "Cash",
      status:""
 
    };
    this.state = {
      // scriptT: [],
      scriptN: [],
    };
  }
  async componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonetrades/${id}`, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          script_type: response.data.data.script_type,
          cash_scrpt_name: response.data.data.cash_scrpt_name,
          active_value2: response.data.data.active_value2,
          call_type: response.data.data.active_value,
          SL: response.data.data.SL,
          sl_type: response.data.data.sl_type,
          T1: response.data.data.T1,
          t1_type: response.data.data.t1_type,
          T2: response.data.data.T2,
          t2_type: response.data.data.t2_type,
          T3: response.data.data.T3,
          t3_type: response.data.data.t3_type,
          T4: response.data.data.T4,
          t4_type: response.data.data.t4_type,
          t5: response.data.data.t5,
          t5_type: response.data.data.t5_type,
          qty: response.data.data.qty,
          investment_amt: response.data.data.investment_amt,
          no_of_lots: response.data.data.no_of_lots,
          pl_type: response.data.data.pl_type,
          profit_loss_amt: response.data.data.profit_loss_amt,
          expiryDate: response.data.data.expiryDate,
          type: response.data.data.type,
          status: response.data.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //Script//
    axiosConfig
      .get("/getCashScript")
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
 
  changeHandler1 = (e) => {
    this.setState({ sl_type: e.target.value });
  };
  changeHandler2 = (e) => {
    this.setState({ t1_type: e.target.value });
  };
  changeHandler3 = (e) => {
    this.setState({ t2_type: e.target.value });
  };
  changeHandler4 = (e) => {
    this.setState({ t3_type: e.target.value });
  };
  changeHandler5 = (e) => {
    this.setState({ t4_type: e.target.value });
  };
  changeHandler6 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/editCash/${id}`, this.state, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/trade/equityCashList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Equity Cash"
          breadCrumbParent="Home"
          breadCrumbActive="Edit Equity Cash"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Equity Cash
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/equityCashList")}
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
                  <Label> Exp. Date</Label>
                  <Input
                    type="date"
                    placeholder="Enter User Id"
                    name="expiryDate"
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script Name</Label>
                  <CustomInput
                    type="select"
                    name="cash_scrpt_name"
                    value={this.state.scriptName}
                    onChange={this.changeHandler}
                  >
                    <option>select script</option>
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
                    name="script_type"
                    type="select"
                    value={this.state.script_type}
                    onChange={this.changeHandler}
                  >
                    <option>Select Script</option>
                    {/* <option>CE</option>
                    <option>PF</option> */}
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
                {/* <Col lg="6" md="6" className="mb-2">
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
                      type="number"
                      name="profit_loss_amt"
                      value={this.state.profit_loss_amt}
                      onChange={this.changeHandler}
                    />
                  </div>
                </Col> */}
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
                  <Label>Max. Value Price</Label>
                  <Input
                    type="number"
                    placeholder="Enter Max. Value Price"
                    name="active_value2"
                    value={this.state.active_value2}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>SL</Label>
                  <Input
                    name="SL"
                    type="number"
                    placeholder="Enter Stop Loss"
                    value={this.state.SL}
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
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 4</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 4"
                    name="T4"
                    value={this.state.T4}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T5</Label>
                  <Input
                    type="text"
                    placeholder="Enter T5"
                    name="t5"
                    value={this.state.t5}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    name="qty"
                    placeholder="Enter Quantity"
                    value={this.state.qty}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Investment Amount</Label>
                  <Input
                    name="investment_amt"
                    type="number"
                    placeholder="Enter Investment Amount"
                    value={this.state.investment_amt}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Number Of Lots</Label>
                  <Input
                    type="number"
                    name="no_of_lots"
                    placeholder="Enter Lots Price"
                    value={this.state.no_of_lots}
                    onChange={this.changeHandler}
                  />
                </Col>{" "} */}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Type</Label>
                  <Input
                    type="text"
                    name="type"
                    placeholder="Enter Type "
                    value={this.state.type}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">SL</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="sl_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="sl_type"
                      value="false"
                    />

                    <span style={{ marginRight: "3px" }}>False</span>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T1</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler2(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="t1_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
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
                      type="checkbox"
                      name="t2_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
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
                      type="checkbox"
                      name="t3_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
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
                      type="checkbox"
                      name="t4_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="t4_type"
                      value="false"
                    />

                    <span style={{ marginRight: "3px" }}>False</span>
                  </div>
                </Col>
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler6(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>NA</span>
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
                    Update Equity Cash
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

export default EditEquityCash;
