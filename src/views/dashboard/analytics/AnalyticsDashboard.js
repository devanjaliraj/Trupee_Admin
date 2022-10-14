import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import SalesCard from "./SalesCard";
// import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
// import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
// import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
// import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker"
// import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
// import SalesStat from "../../ui-elements/cards/analytics/Sales"
// import ActivityTimeline from "./ActivityTimeline"
// import DispatchedOrders from "./DispatchedOrders";
// import Notification from "./Notification";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/dashboard-analytics.scss";
// import axios from "axios";
// let $primary = "#7367F0",
//   $danger = "#EA5455",
//   $warning = "#FF9F43",
//   $info = "#00cfe8",
//   $primary_light = "#9c8cfc",
//   $warning_light = "#FFC085",
//   $danger_light = "#f29292",
//   $info_light = "#1edec5",
//   $stroke_color = "#e8e8e8",
//   $label_color = "#e7eef7",
//   $white = "#fff"

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total7sayplan: {},
      activetrade: {},
      Completetrade: {},
      Activeuser: {},
      endtoend: {},
      day7planearnig: {},
      basicplanearning: {},
      freeusers: {},
      total: {},
      weekly: {},
      thirtydays: {},
    };
  }

  componentDidMount() {
    // //end dealer //
    axiosConfig
      .get("/totlactivetrade")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ activetrade: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/ttlCompletetrade")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ Completetrade: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/ttlfreeusers")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ freeusers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/today_profit_loss")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ total: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/weekely_profit_loss")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ weekly: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/monthly_profit_loss")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ thirtydays: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    // axiosConfig
    //   .get("/dealer/total7dayplanearnig")
    //   .then((response) => {
    //     console.log(response.data);
    //     console.log(response.data.Earning);
    //     this.setState({ day7planearnig: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/dealer/totalbasicplanearning")
    //   .then((response) => {
    //     console.log(response.data);
    //     //console.log(response.data.data);
    //     this.setState({ basicplanearning: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axiosConfig
      .get("/ttlActiveuser")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ Activeuser: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    // axiosConfig
    //   .get("/dealer/totalmaneger")
    //   .then((response) => {
    //     console.log(response.data);
    //     //console.log(response.data.data);
    //     this.setState({ maneger: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axiosConfig
    //   .get("/dealer/totaldsm")
    //   .then((response) => {
    //     console.log(response.data);
    //     //console.log(response.data.data);
    //     this.setState({ dsm: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/dealer/totaloutherstaff")
    //   .then((response) => {
    //     console.log(response.data);
    //     //console.log(response.data.data);
    //     this.setState({ outherstaff: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <React.Fragment>
        <Col lg="12" md="12">
          <SalesCard />
        </Col>
        {/* <h3>Menbership Plans</h3> */}
        <Row className="match-height">
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Carry forward trade
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.activetrade.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Today Active Trade
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.activetrade.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Today Completed Trade
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Completetrade.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Active / Live Users
              </CardTitle>
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Activeuser.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Free Users
              </CardTitle>
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.freeusers.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Today P/L
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.total.total_prft_loss}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Weekly P/L
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.weekly.weekly_profit_loss}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Monthly P/L
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.thirtydays.thirtydays_prft_loss}
              </CardText>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* <Col sm="12">
            <DispatchedOrders />
          </Col> */}
          <Col sm="12">{/* <Notification />  */}</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AnalyticsDashboard;
