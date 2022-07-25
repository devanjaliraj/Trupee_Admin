// import React, { Component } from "react";
// import {
//   AccordionItem,
//   AccordionHeader,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// // import LayoutOne from "../../../../layouts/LayoutOne";
// // import Accordion from "react-bootstrap/Accordion";
// // import Cloth from "../../../../assets/img/Cloth.jpg";
// import { width } from "dom-helpers";
// import { Route } from "react-router-dom";
// import Select from "react-select";
// // import { history } from "../../../history";
// // import axiosConfig from "../../../../axiosConfig";
// // import swal from "sweetalert";
// import axiosConfig from "../../../axiosConfig";
// import { Accordion } from "react-bootstrap-accordion";

// export class AddFaq extends Component {
//   render() {
//     return (
//       // <LayoutOne>
//       <Container fluid>
//         <Row className="mb-5">
//           {/* <div
//               className="d-flex justify-content-center align-items-center"
//               style={{
//                 backgroundImage: `url(${Cloth})`,
//                 height: "70vh",
//                 width: "100%",
//               }}
//             > */}
//           <div className="">
//             <h1 className="">Frequently Asked Questions</h1>
//           </div>
//           {/* </div> */}
//         </Row>
//         <Row className="">
//           <Col xs lg="2"></Col>
//           <Col xs lg="8">
//             <Accordion>
//               <Accordion.Item eventKey="0" className="m-4">
//                 <Accordion.Header>
//                   What to expect from Agricoin?
//                 </Accordion.Header>
//                 <Accordion.Body>
//                   Agricoin is an online discovery platform plus an e-commerce
//                   platform. Here you can search for clothes, or you can search
//                   for specific shops. Go to shop profiles and check out which
//                   products are listed for online shopping. You can check out the
//                   shop profile and then pay a visit for the “look and feel” of
//                   the clothes. You can view reviews and ratings of other
//                   customers before you buy. You can expect SMS communication
//                   from the shops once you have made a transaction.
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="1" className="m-4">
//                 <Accordion.Header>
//                   I don’t remember my password. Help!?
//                 </Accordion.Header>
//                 <Accordion.Body>
//                   Very Easy. You can reset the password through the following
//                   <br></br>
//                   steps<br></br>
//                   a.Click on Forgot Password<br></br>
//                   b.Enter your registered email address or your registered
//                   contact number<br></br>
//                   c.In case you have entered your registered email address,
//                   click on the link received in your email or in case you have
//                   entered your contact number, enter the OTP received in your
//                   phone.<br></br>
//                   d.Now enter the new password as well re-enter the new Password
//                   and click on Save.
//                 </Accordion.Body>
//               </Accordion.Item>
//             </Accordion>
//           </Col>
//           <Col xs lg="2"></Col>
//         </Row>
//         <Row className="justify-content-md-center">
//           <Col xs lg="2"></Col>
//           <Col xs lg="8">
//             <Accordion>
//               <Accordion.Item eventKey="0" className="m-4">
//                 <Accordion.Header>
//                   I have received a call/sms/email asking for money?
//                 </Accordion.Header>
//                 <Accordion.Body>
//                   We NEVER request our customers for unsolicited
//                   financial information or advance payments in exchange for
//                   rewards. Please DO NOT respond to any call/sms/email claiming
//                   to offer rewards/lucky draw prizes on behalf of Agricoin.
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="1" className="m-4">
//                 <Accordion.Header>
//                   What are the payment options available for my orders at
//                   Agricoin?
//                 </Accordion.Header>
//                 <Accordion.Body>
//                   Cash-on-Delivery (COD), UPI, Net Banking. All these options
//                   are available for payment.
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="3" className="m-4">
//                 <Accordion.Header>
//                   Why can’t I see the COD option on the payment page?
//                 </Accordion.Header>
//                 <Accordion.Body>
//                   If you do not see the COD option, then either your order value
//                   is less than Rs299 or above Rs49,999.
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="4" className="m-4">
//                 <Accordion.Header>What is the COD limit?</Accordion.Header>
//                 <Accordion.Body>
//                   Agricoin reserves the right to determine the COD limit for
//                   every customer and/or orders. The COD limit includes any
//                   undelivered, unpaid orders and any new orders being placed.
//                 </Accordion.Body>
//               </Accordion.Item>
//             </Accordion>
//           </Col>
//           <Col xs lg="2"></Col>
//         </Row>
//       </Container>
//       // </LayoutOne>
//     );
//   }
// }

// export default AddFaq;

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
// import axiosConfig from "../../../axiosConfig";
import { Accordion } from "react-bootstrap-accordion";
const dealerName = [];

export class AddFaq extends Component {
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
        this.props.history.push("/app/notification/notificationList");
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
                Add FAQ
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/faq/faqList")}
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
                {/* <Col md="6" sm="12">

                  <Label>Dealer List</Label>
                  <Select
                    isMulti
                    type="select"
                    name="dealer"
                    className="React"
                    classNamePrefix="select"
                    options={dealerName}
                    value={dealer}
                    onChange={this.handleChange}
                  />
                </Col> */}
                <Accordion>
                  <Col lg="12" md="12" className="mb-2">
                    <Label>ans</Label>
                    <Input
                      type="text"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Accordion>
                <Col lg="12" md="12" className="mb-2">
                  <Label>Descripiton</Label>
                  <Input
                    type="textarea"
                    name="desc"
                    value={this.state.desc}
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
                  Add FAQ List
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
