import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
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

class EditFnoEquity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      script_type: "",
      fnoequty_scrpt_name: "",
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
      type: "Equity",
      status: "",
      cstmMsg: "",
    };
    this.state = {
      expdateI: [],
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
          equity_script: response.data.data.equity_script,
          expiryDate: response.data.data.expiryDate,
          profit_loss_amt: response.data.data.profit_loss_amt,
          fnoequty_scrpt_name: response.data.data.fnoequty_scrpt_name,
          call_type: response.data.data.call_type,
          active_value: response.data.data.active_value,
          active_value2: response.data.data.active_value2,
          SL: response.data.data.SL,
          T1: response.data.data.T1,
          T2: response.data.data.T2,
          T3: response.data.data.T3,
          T4: response.data.data.T4,
          t5: response.data.data.t5,
          qty: response.data.data.qty,
          investment_amt: response.data.data.investment_amt,
          no_of_lots: response.data.data.no_of_lots,
          sl_type: response.data.data.sl_type,
          t1_type: response.data.data.t1_type,
          t2_type: response.data.data.t2_type,
          t3_type: response.data.data.t3_type,
          t4_type: response.data.data.t4_type,
          type: response.data.data.type,
          status: response.data.data.status,
          cstmMsg: response.data.data.cstmMsg,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    //Script//
    axiosConfig
      .get("/getEquityScript")
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
              // expDate//
    axiosConfig
    .get("/datelist")
    .then((response) => {
      console.log(response);
      this.setState({
        expdateI: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  changeHandler1 = (e) => {
    if(e.target.checked){
      this.setState({ sl_type: "true" });
    }else{
      this.setState({ sl_type: "false" });
    }
  };
  changeHandler2 = (e) => {
    if(e.target.checked){
      this.setState({ t1_type: "true" });
    }else{
      this.setState({ t1_type: "false" });
    }
  };
  changeHandler3 = (e) => {
    if(e.target.checked){
      this.setState({ t2_type: "true" });
    }else{
      this.setState({ t2_type: "false" });
    }
  };
  changeHandler4 = (e) => {
    if(e.target.checked){
      this.setState({ t3_type: "true" });
    }else{
      this.setState({ t3_type: "false" });
    }
  };
  changeHandler5 = (e) => {
    if(e.target.checked){
      this.setState({ t4_type: "true" });
    }else{
      this.setState({ t4_type: "false" });
    }
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
      .post(`/editfnoOption/${id}`, this.state, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/trade/fnoEquityList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    console.log('this.state.sl_type',this.state.sl_type)
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="FNO Equity"
          breadCrumbParent="Home"
          breadCrumbActive="FNO Equity"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit FNO Equity
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/fnoEquityList")}
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
            
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script Name</Label>
                  <CustomInput
                    type="select"
                    name="fnoequty_scrpt_name"
                    value={this.state.fnoequty_scrpt_name}
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <CustomInput
                    type="select"
                    name="expiryDate"
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}
                  >
                    <option>Expiry Date</option>
                    {this.state.expdateI?.map((allExpDate) => (
                      <option value={allExpDate?._id} key={allExpDate?._id}>
                        {allExpDate?.expDate}
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
                  <Label for="exampleSelect1">Call Type</Label>
                  <Input
                    id="exampleSelect1"
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
                  <Label>Range Value</Label>
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
                    type="text"
                    placeholder="Enter Stop Loss"
                    value={this.state.SL}
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
                  <Label>T₹ 4</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 4"
                    name="T4"
                    value={this.state.T4}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Achieved Target+</Label>
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
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Investment Amount</Label>
                  <Input
                    name="investment_amt"
                    type="text"
                    placeholder="Enter Investment Amount"
                    value={this.state.investment_amt}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Per Lot Price</Label>
                  <Input
                    type="text"
                    name="no_of_lots"
                    placeholder="Enter Per Lot Price"
                    value={this.state.no_of_lots}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Trade Type</Label>
                  <Input
                    type="text"
                    name="type"
                    placeholder="Enter Trade Type"
                    value={this.state.type}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
              <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                <Label className="mb-1">SL</Label>
                <div
                  className="form-label-group"
                  
                >
          
                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="sl_type"
                    onChange={(e) => this.changeHandler1(e)}
                   
                    checked={this.state.sl_type === "false" || this.state.sl_type === false ? false : true}
                  />
                <span style={{ marginRight: "20px" }}>{this.state.sl_type}</span>
            
                </div>
              </Col>
              </Row>
              <Row className="mb-2">
              <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                <Label className="mb-1">T1</Label>
                <div
                  className="form-label-group"
                  
                >
          
                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="t1_type"
                    onChange={(e) => this.changeHandler2(e)}
                   
                    checked={this.state.t1_type === "false" || this.state.t1_type === false ? false : true}
                  />
                <span style={{ marginRight: "20px" }}>{this.state.t1_type}</span>
            
                </div>
              </Col>
              <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                <Label className="mb-1">T2</Label>
                <div
                  className="form-label-group"
                  
                >
          
                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="t2_type"
                    onChange={(e) => this.changeHandler3(e)}
                   
                    checked={this.state.t2_type === "false" || this.state.t2_type === false ? false : true}
                  />
                <span style={{ marginRight: "20px" }}>{this.state.t2_type}</span>
            
                </div>
              </Col>
              <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                <Label className="mb-1">T3</Label>
                <div
                  className="form-label-group"
                  
                >
          
                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="t3_type"
                    onChange={(e) => this.changeHandler4(e)}
                   
                    checked={this.state.t3_type === "false" || this.state.t3_type === false ? false : true}
                  />
                <span style={{ marginRight: "20px" }}>{this.state.t3_type}</span>
            
                </div>
              </Col>
              <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                <Label className="mb-1">T4</Label>
                <div
                  className="form-label-group"
                  
                >
          
                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="t4_type"
                    onChange={(e) => this.changeHandler5(e)}
                   
                    checked={this.state.t4_type === "false" || this.state.t4_type === false ? false : true}
                  />
                <span style={{ marginRight: "20px" }}>{this.state.t4_type}</span>
            
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
                <Col lg="6" md="6" className="mb-2">
                  <Label>Trade Alert</Label>
                  <Input
                    type="text"
                    placeholder="Keep booking or trailing stop loss"
                    name="cstmMsg"
                    value={this.state.cstmMsg}
                    onChange={this.changeHandler}
                  />
                  {/* <span>
                    <b> We will type 210+ Keep booking or trailing stop loss</b>
                  </span> */}
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update FNO Equity
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

export default EditFnoEquity;
