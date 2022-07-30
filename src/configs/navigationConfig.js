import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Circle size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "Component",
  },
  {
    id: "users",
    title: "Users ",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "usersList",
        title: "Users List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/users/usersList",
      },
    ],
  },
  {
    id: "script",
    title: "Script ",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "scriptList",
        title: "Script List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/script/scriptList",
      },
    ],
  },
  {
    id: "trade",
    title: "Trade",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "allTradeList",
        title: "All Trade",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/trade/allTradeList",
      },
      {
        id: "fNoIndexList",
        title: "FNO Index",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/trade/fNoIndexList",
      },
      {
        id: "fNoEquityList",
        title: "FNO Equity",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/trade/fNoEquityList",
      },
      {
        id: "equityCashList",
        title: "Equity Cash",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/trade/equityCashList",
      },
      {
        id: "niftyList",
        title: "NIFTY",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/trade/niftyList",
      },
      {
        id: "bankNiftyList",
        title: "BANK NIFTY",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/trade/bankNiftyList",
      },
    ],
  },
  {
    id: "packagePlanList",
    title: "Membership Plan",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/package/packagePlanList",
  },
  // {
  //   id: "paidServeiceList",
  //   title: "Premium Services",
  //   type: "item",
  //   icon: <Icon.User size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/premium/paidServeiceList",
  // },
  {
    id: "paidServeice",
    title: "Membership Content",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/paid/paidServeice",
  },
  {
    id: "faqList",
    title: "FAQ",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/faq/faqList",
  },
  {
    id: "discountList",
    title: "Discount Code List",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/discount/discountList",
  },
  {
    id: "notification",
    title: "Notification",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "notificationList",
        title: "Notification List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/notification/notificationList",
      },
    ],
  },
  {
    id: "explore",
    title: "Explore",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "startUp",
        title: "StartUp List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/explore/Trupee/startUp",
      },
      {
        id: "trupeeUnivercity",
        title: "Trupee Univercity List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/explore/Trupee/trupeeUnivercity",
      },
      {
        id: "performanceSheet",
        title: "Performance Sheet List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/explore/Trupee/performanceSheet",
      },
      {
        id: "refferEarn",
        title: "Reffer Earn List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/explore/Trupee/refferEarn",
      },
      {
        id: "opportunity",
        title: "Opportunity List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/explore/Trupee/opportunity",
      },
      {
        id: "tradingViewCharts",
        title: "Trading View Charts List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/explore/Trupee/tradingViewCharts",
      },
    ],
  },

  // {
  //   id: "subplan",
  //   title: "Subscription ",
  //   type: "collapse",
  //   icon: <Icon.User size={20} />,
  //   children: [
  //     {
  //       id: "SubPlanVideos",
  //       title: "Plan Video ",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/subplan/SubPlanVideos",
  //     },
  //   ],
  // },
  {
    id: "userNotification",
    title: "User Notification List ",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/userNotif/userNotification",
  },
  // {
  //   id: "showAppreciation",
  //   title: "Show Appreciation List ",
  //   type: "item",
  //   icon: <Icon.Circle size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/showAppre/showAppreciation",
  // },
  {
    id: "userAppreciation",
    title: "User Appreciation List ",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/showAppre/userAppreciation",
  },
  {
    id: "feedbackList",
    title: "Feedback List ",
    type: "item",
    icon: <Icon.User size={20} />,

    permissions: ["admin", "editor"],
    navLink: "/app/feedback/feedbackList",
  },
  {
    id: "pageSetUP",
    title: "Page SetUp",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "aboutus",
        title: "About Us ",
        type: "item",
        icon: <Icon.User size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pageSetUP/about/AllaboutUs",
      },
      {
        id: "helpUs",
        title: "Help Us",
        type: "item",
        icon: <Icon.User size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pageSetUP/helpUs/HelpUs",
      },

      {
        id: "TermConditionList",
        title: "Term And Condition ",
        type: "item",
        icon: <Icon.User size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pageSetUP/termscondition/TermConditionList",
      },
    ],
  },
];
export default navigationConfig;
