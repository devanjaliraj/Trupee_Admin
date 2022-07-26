import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  FormGroup,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import moment from "moment";

export default class EditPackagePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planId: "",
      dealer_name: "",
      // start_date:'',
      plan_name: "",
      date: "",
      expdate: "",
      transaction_id: "",
      sttaus: "",
      membershipData: {},
    };
    this.state = {
      planN: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    //plan
    axiosConfig
      .get("/admin/allplan")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ planN: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    var transaction_id = "";
    var expdate = "";
    const queryParams = new URLSearchParams(window.location.href);
    transaction_id = queryParams.get("transaction_id");
    expdate = queryParams.get("expdate");

    this.setState({ transaction_id: transaction_id, expdate: expdate });
    var payload = {
      transaction_id: transaction_id,
      expdate: expdate,
    };

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/dealer/updatemembership/${id}`, payload)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          membershipData: response.data.data,
          date: response.data.data?.date,
          // start_date:response.data.data?.date,
          expdate: response.data.data?.expdate,
          amount: response.data.data?.amount,
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
    const { transaction_id, expdate, date, status, amount, planId } =
      this.state;
    var payload = {
      transaction_id: transaction_id,
      expdate: expdate,
      amount: amount,
      planId: planId,
      date: date,
      status: status,
    };
    console.log(payload);
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/dealer/updatemembership/${id}`, payload)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/membership/MembershipList`);
      })

      .catch((error) => {
        console.log(error.response);
      });
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  render() {
    let { membershipData } = this.state;
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle=" Edit Membership"
          breadCrumbParent="Membership"
          breadCrumbActive=" Edit Membership"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Membership Plan
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/package/PackagePlanList")}
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
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>User ID</Label>
                  <Input
                    type="text"
                    placeholder="Enter User Id"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Package Plan</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Select Plan</option>
                    <option>FREE PLAN</option>
                    <option>1 Month</option>
                    <option>3 Month</option>
                    <option>6 Month</option>
                    <option>1 Year</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>MRP Price</Label>
                  <Input
                    type="text"
                    placeholder="Enter MRP Price"

                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Discount Price</Label>
                  <Input
                    type="text"
                    placeholder="Enter Discount Price"

                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>{" "}
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
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
