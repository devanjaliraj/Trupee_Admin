import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "DASHBOARD",
    type: "item",
    // icon: <Icon.Circle size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "SCRIPTS",
  },
  {
    id: "fnIndex",
    title: "FNO Index List",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/scripts/fnIndex",
  },
  {
    id: "fnoOption",
    title: "FNO Options List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/scripts/fnoOption",
  },
  {
    id: "cashEquity",
    title: " Cash Equity List",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/scripts/cashEquity",
  },
  {
    type: "groupHeader",
    groupTitle: "TRADES",
  },
  {
    id: "fnoIndexList",
    title: "FNO INDEX",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/trade/fnoIndexList",
  },
  // {
  //   id: "trade",
  //   title: "FNO INDEX",
  //   type: "collapse",
  //   icon: <Icon.ArrowRight size={12} />,
  //   children: [
  //     {
  //       id: "niftyList",
  //       title: "NIFTY50",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/trade/niftyList",
  //     },
  //     {
  //       id: "bankNiftyList",
  //       title: "BANK NIFTY",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/trade/bankNiftyList",
  //     },
  //   ],
  // },
  {
    id: "fnoEquityList",
    title: "FNO OPTIONS",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/trade/fnoEquityList",
  },
  {
    id: "equityCashList",
    title: "CASH EQUITY",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/trade/equityCashList",
  },

  {
    type: "groupHeader",
    groupTitle: "USERS",
  },
  {
    id: "usersList",
    title: "Users List",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/users/usersList",
  },
  {
    id: "membershipList",
    title: "Membership List",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/membership/membershipList",
  },
  {
    type: "groupHeader",
    groupTitle: "UPDATE",
  },
  {
    id: "allTradeList",
    title: "Trade Notification ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/trade/allTradeList",
  },
  {
    id: "generalNotifList",
    title: "General Notification ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/trade/generalNotifList",
  },
  // {
  //   id: "generalNotif",
  //   title: "General Notification ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/notif/generalNotif",
  // },
  // {
  //   id: "popupNotif",
  //   title: "Pop Up Notification ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/notif/popupNotif",
  // },

  {
    type: "groupHeader",
    groupTitle: "App Page Setup",
  },
  {
    id: "packagePlanList",
    title: "Active Members ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/package/packagePlanList",
  },
  {
    id: "nonActivePlanList",
    title: "Premium Service ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    // navLink: "/app/package/nonActivePlanList",
    navLink: "/",
  },
  {
    id: "faqList",
    title: "FAQ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/faq/faqList",
  },
  {
    id: "refferalWalletList",
    title: "Refferal Wallet ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/package/refferalWalletList",
  },
  {
    id: "discountList",
    title: "Discount Code List",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/discount/discountList",
  },

  {
    type: "groupHeader",
    groupTitle: "Explore",
  },

  {
    id: "startUp",
    title: "StartUp List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/explore/Trupee/startUp",
  },
  {
    id: "trupeeUnivercity",
    title: "Trupee Univercity List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/explore/Trupee/trupeeUnivercity",
  },
  {
    id: "performanceSheet",
    title: "Performance Sheet List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/explore/Trupee/performanceSheet",
  },
  {
    id: "userPerformanceSheet",
    title: "User Performance Sheet List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/explore/Trupee/userPerformanceSheet",
  },
  {
    id: "refferEarn",
    title: "Reffer Earn List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/explore/Trupee/refferEarn",
  },
  {
    id: "opportunity",
    title: "Opportunity List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/explore/Trupee/opportunity",
  },
  {
    id: "tradingViewCharts",
    title: "Trading View Charts List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/explore/Trupee/tradingViewCharts",
  },

  {
    type: "groupHeader",
    groupTitle: "Profile Page",
  },
  {
    id: "profile",
    title: "My Account",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    // navLink: "/app/package/nonActivePlanList",
    navLink: "/pages/profile",
  },

  {
    id: "nonActivePlanList",
    title: "Transction History ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    // navLink: "/app/package/nonActivePlanList",
    navLink: "/",
  },
  {
    id: "feedbackList",
    title: "Feedback List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/feedback/feedbackList",
  },
  {
    id: "userAppreciation",
    title: "User Appreciation List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/showAppre/userAppreciation",
  },
  {
    id: "TermConditionList",
    title: "Logout ",
    type: "item",
    // icon: <Icon.ArrowRight size={12} />,

    permissions: ["admin", "editor"],
    navLink: "/pages/login",
  },
  // {
  //   id: "packagePlanList",
  //   title: "Active Members ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/package/packagePlanList",
  // },

  // {
  //   id: "packagePlanList",
  //   title: "Active Members ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/package/packagePlanList",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Component",
  // },
  // {
  //   id: "users",
  //   title: "Users ",
  //   type: "collapse",
  //   icon: <Icon.User size={12} />,
  //   children: [
  //     {
  //       id: "usersList",
  //       title: "Users List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/users/usersList",
  //     },
  //   ],
  // },
  // {
  //   id: "script",
  //   title: "Script ",
  //   type: "collapse",
  //   icon: <Icon.User size={12} />,
  //   children: [
  //     {
  //       id: "scriptList",
  //       title: "Script List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/script/scriptList",
  //     },
  //   ],
  // },
  // {
  //   id: "trade",
  //   title: "Trade",
  //   type: "collapse",
  //   icon: <Icon.Users size={12} />,
  //   children: [
  //     {
  //       id: "allTradeList",
  //       title: "All Trade",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/trade/allTradeList",
  //     },
  //     {
  //       id: "fnoIndexList",
  //       title: "FNO Index",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/trade/fnoIndexList",
  //     },
  //     {
  //       id: "fnoEquityList",
  //       title: "FNO Equity",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/trade/fnoEquityList",
  //     },
  //     {
  //       id: "equityCashList",
  //       title: "Equity Cash",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/trade/equityCashList",
  //     },
  // {
  //   id: "niftyList",
  //   title: "NIFTY",
  //   type: "item",
  //   icon: <Icon.Circle size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/trade/niftyList",
  // },
  // {
  //   id: "bankNiftyList",
  //   title: "BANK NIFTY",
  //   type: "item",
  //   icon: <Icon.Circle size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/trade/bankNiftyList",
  // },
  //   ],
  // },
  // {
  //   id: "packagePlanList",
  //   title: "Membership Plan",
  //   type: "item",
  //   icon: <Icon.User size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/package/packagePlanList",
  // },
  // {
  //   id: "paidServeiceList",
  //   title: "Premium Services",
  //   type: "item",
  //   icon: <Icon.User size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/premium/paidServeiceList",
  // },
  // {
  //   id: "memberShipContent",
  //   title: "Membership Content",
  //   type: "item",
  //   icon: <Icon.User size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/membercontent/memberShipContent",
  // },
  // {
  //   id: "faqList",
  //   title: "FAQ",
  //   type: "item",
  //   icon: <Icon.User size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/faq/faqList",
  // },
  // {
  //   id: "discountList",
  //   title: "Discount Code List",
  //   type: "item",
  //   icon: <Icon.User size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/discount/discountList",
  // },
  // {
  //   id: "notification",
  //   title: "Notification",
  //   type: "collapse",
  //   icon: <Icon.User size={12} />,
  //   children: [
  //     {
  //       id: "notificationList",
  //       title: "Notification List ",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/notification/notificationList",
  //     },
  //   ],
  // },

  // {
  //   id: "subplan",
  //   title: "Subscription ",
  //   type: "collapse",
  //   icon: <Icon.User size={12} />,
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
  // {
  //   id: "userNotification",
  //   title: "User Notification List ",
  //   type: "item",
  //   icon: <Icon.User size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/userNotif/userNotification",
  // },
  // {
  //   id: "showAppreciation",
  //   title: "Show Appreciation List ",
  //   type: "item",
  //   icon: <Icon.Circle size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/showAppre/showAppreciation",
  // },
  // {
  //   id: "userAppreciation",
  //   title: "User Appreciation List ",
  //   type: "item",
  //   icon: <Icon.User size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/showAppre/userAppreciation",
  // },
  // {
  //   id: "feedbackList",
  //   title: "Feedback List ",
  //   type: "item",
  //   icon: <Icon.User size={12} />,

  //   permissions: ["admin", "editor"],
  //   navLink: "/app/feedback/feedbackList",
  // },
  // {
  //   id: "pageSetUP",
  //   title: "Page SetUp",
  //   type: "collapse",
  //   icon: <Icon.User size={12} />,
  //   children: [
  //     {
  //       id: "aboutus",
  //       title: "About Us ",
  //       type: "item",
  //       icon: <Icon.User size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pageSetUP/about/AllaboutUs",
  //     },
  //     {
  //       id: "helpUs",
  //       title: "Help Us",
  //       type: "item",
  //       icon: <Icon.User size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pageSetUP/helpUs/HelpUs",
  //     },

  //     {
  //       id: "TermConditionList",
  //       title: "Term And Condition ",
  //       type: "item",
  //       icon: <Icon.User size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pageSetUP/termscondition/TermConditionList",
  //     },

  //   ],
  // },
];
export default navigationConfig;
