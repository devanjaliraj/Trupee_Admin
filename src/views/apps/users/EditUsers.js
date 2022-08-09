// import React, { Component } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   CustomInput,
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import swal from "sweetalert";
// import { Route } from "react-router-dom";

// export class EditUsers extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullname: "",
//       mobile: "",
//       email: "",
//       address: "",
//       city: "",
//       pack_name: "",
//       date: "",
//       expdate: "",
//       status: "",
//     };
//   }

//   componentDidMount() {
//     let { id } = this.props.match.params;
//     axiosConfig
//       .get(`/viewonemembership/${id}`, {
//         //   headers: {
//         //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
//         //   },
//       })
//       .then((response) => {
//         console.log(response);
//         // console.log(response.data);
//         console.log("ss####", response.data.data.userid);
//         // this.setState({ data: response.data.data });
//         this.setState({
//           fullname: response.data.data.fullname,
//           mobile: response.data.data.mobile,
//           email: response.data.data.email,
//           address: response.data.data.address,
//           city: response.data.data.city,
//           pack_name: response.data.pack_name,
//           date: response.data.data.date,
//           expdate: response.data.data.expdate,
//           status: response.data.data.status,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     let { id } = this.props.match.params;
//     axiosConfig
//       .post(`/updatemembership/${id}`, this.state, {
//         //   headers: {
//         //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
//         //   },
//       })
//       .then((response) => {
//         console.log(response);
//         swal("Success!", "Submitted SuccessFull!", "success");
//         this.props.history.push("/app/users/usersList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <Row>
//           <Col sm="12">
//             <div>
//               <Breadcrumb listTag="div">
//                 <BreadcrumbItem href="/analyticsDashboard" tag="a">
//                   Home
//                 </BreadcrumbItem>
//                 <BreadcrumbItem href="/app/users/usersList" tag="a">
//                   Users List
//                 </BreadcrumbItem>
//                 <BreadcrumbItem active>Edit Users</BreadcrumbItem>
//               </Breadcrumb>
//             </div>
//           </Col>
//         </Row>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Edit Users
//               </h1>
//             </Col>
//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() => history.push("/app/users/usersList")}
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>User Name</Label>
//                   <Input
//                     type="text"
//                     name="fullname"
//                     value={this.state.userid?.fullname}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Mobile</Label>
//                   <Input
//                     type="number"
//                     name="mobile"
//                     value={this.state.userid?.mobile}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Email Id</Label>
//                   <Input
//                     type="email"
//                     name="email"
//                     value={this.state.data.userid?.email}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Address</Label>
//                   <Input
//                     type="text"
//                     name="address"
//                     value={this.state.userid?.address}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>City</Label>
//                   <Input
//                     type="text"
//                     name="city"
//                     value={this.state.userid?.city}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Membership Plan</Label>
//                   <Input
//                     type="text"
//                     name="pack_name"
//                     value={this.state.planId?.pack_name}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Start Date</Label>
//                   <Input
//                     type="date"
//                     name="date"
//                     value={this.state.date}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Expiry Date</Label>
//                   <Input
//                     type="date"
//                     name="expdate"
//                     value={this.state.expdate}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Size</Label>
//                   <Input
//                     type="text"
//                     name="status"
//                     value={this.state.status}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Add
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
// export default EditUsers;

import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import { Route } from "react-router-dom";

import swal from "sweetalert";
export default class EditSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      mobile: "",
      email: "",
      address: "",
      city: "",
      pack_name: "",
      date: "",
      expdate: "",
      status: "",
      fullnameU: [],
      mobileU: [],
      emailU: [],
      addressU: [],
      cityU: [],
      pack_nameM: [],
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonemembership/${id}`, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          fullname: response.data.data.fullname,
          mobile: response.data.data.mobile,
          email: response.data.data.email,
          address: response.data.data.address,
          city: response.data.data.city,
          pack_name: response.data.pack_name,
          date: response.data.data.date,
          expdate: response.data.data.expdate,
          status: response.data.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //Script//
    axiosConfig
      .get("/getuser")
      .then((response) => {
        console.log(response);
        this.setState({
          fullnameU: response.data.data,
          mobileU: response.data.data,
          emailU: response.data.data,
          addressU: response.data.data,
          cityU: response.data.data,
          // mobileU: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //plan//
    axiosConfig
      .get("/plan_list")
      .then((response) => {
        console.log(response);
        this.setState({
          pack_nameM: response.data.data,
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
      .post(`/updatemembership/${id}`, this.state, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/users/usersList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/users/usersList" tag="a">
                  User List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit User</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit User
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/users/usersList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>User Name</Label>
                  <CustomInput
                    type="select"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.changeHandler}
                  >
                    {this.state.fullnameU.map((userfullname) => (
                      <option value={userfullname._id} key={userfullname._id}>
                        {userfullname.fullname}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <CustomInput
                    type="select"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  >
                    {this.state.mobileU.map((usermobile) => (
                      <option value={usermobile._id} key={usermobile._id}>
                        {usermobile.mobile}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email Id</Label>
                  <CustomInput
                    type="select"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  >
                    {this.state.emailU.map((useremail) => (
                      <option value={useremail._id} key={useremail._id}>
                        {useremail.email}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address</Label>
                  <CustomInput
                    type="select"
                    name="address"
                    value={this.state.address}
                    onChange={this.changeHandler}
                  >
                    {this.state.addressU.map((useraddress) => (
                      <option value={useraddress._id} key={useraddress._id}>
                        {useraddress.address}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>City</Label>
                  <CustomInput
                    type="select"
                    name="city"
                    value={this.state.city}
                    onChange={this.changeHandler}
                  >
                    {this.state.cityU.map((usercity) => (
                      <option value={usercity._id} key={usercity._id}>
                        {usercity.city}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Membership plan</Label>
                  <CustomInput
                    type="select"
                    name="pack_name"
                    value={this.state.pack_name}
                    onChange={this.changeHandler}
                  >
                    {this.state.pack_nameM.map((planmemship) => (
                      <option value={planmemship._id} key={planmemship._id}>
                        {planmemship.pack_name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <Input
                    type="date"
                    name="expdate"
                    value={this.state.expdate}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Status</Label>
                  <Input
                    type="text"
                    name="status"
                    value={this.state.status}
                    onChange={this.changeHandler1}
                  ></Input>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
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
