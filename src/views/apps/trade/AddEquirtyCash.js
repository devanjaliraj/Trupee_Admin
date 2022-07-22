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
  // CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
import Select from "react-select";
// import { history } from "../../../history";
// import axiosConfig from "../../../../axiosConfig";
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

const dealerName = [];

export class AddEquirtyCash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: null,
      desc: "",
    };
  }

  async componentDidMount() {
    //dealer List
    //let array =[]
    //let obj ={}
    axiosConfig
      .get("/dealer/alldealers")
      .then((response) => {
        console.log(response);
        //this.setState({ dealerN: response.data.data });

        // eslint-disable-next-line no-unused-expressions
        response.data?.data?.map((dealerp) => {
          let obj = {
            label: dealerp.dealer_name,
            value: dealerp._id,
          };
          dealerName.push(obj);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (dealer) => {
    this.setState({ dealer }, () =>
      console.log(`Option selected:`, this.state.dealer)
    );
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(
        "/admin/addnotification",
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
        this.props.history.push("/app/users/usersList");
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
                Add Equirty Cash
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("app/trade/EquirtyCashList")}
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
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add Equirty Cash
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddEquirtyCash;
