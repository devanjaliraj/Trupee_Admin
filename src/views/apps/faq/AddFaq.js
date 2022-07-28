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

export class AddFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
    };
  }

  async componentDidMount() {
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
                Add Script
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("app/script/scriptList")}
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
                  <Label for="exampleSelect">Entry Script</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Select Script</option>
                    <option>All TRADES</option>
                    <option>FNO INDEX</option>
                    <option>FNO EQUITY</option>
                    <option>CASH EQUITY</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Script Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Script Name"

                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add Script
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddFaq;
