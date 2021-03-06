import React, { Suspense, lazy } from "react";
import { Router, Switch, Route, HashRouter } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category";
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions";
import { ContextLayout } from "./utility/context/Layout";

// Route-based code splitting
const analyticsDashboard = lazy(() =>
  import("./views/dashboard/analytics/AnalyticsDashboard")
);
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
);

const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"));

//Discount Code//
const DiscountCode = lazy(() => import("./views/apps/discount/DiscountCode"));
const DiscountList = lazy(() => import("./views/apps/discount/DiscountList"));

// feedback //
const FeedBackList = lazy(() => import("./views/apps/feedback/FeedBackList"));

//pageSetUp//
const aboutUs = lazy(() => import("./views/apps/pageSetUp/about/AboutUs"));
const AllaboutUs = lazy(() =>
  import("./views/apps/pageSetUp/about/AllaboutUs")
);
const EditAboutUs = lazy(() =>
  import("./views/apps/pageSetUp/about/EditAboutUs")
);

const TermConditionList = lazy(() =>
  import("./views/apps/pageSetUp/termscondition/TermConditionList")
);
const AddTermsCondition = lazy(() =>
  import("./views/apps/pageSetUp/termscondition/AddTermsCondition")
);
const EditTermCondition = lazy(() =>
  import("./views/apps/pageSetUp/termscondition/EditTermCondition")
);
const helpUs = lazy(() => import("./views/apps/pageSetUp/helpUs/HelpUS"));
const EdithelpusForm = lazy(() =>
  import("./views/apps/pageSetUp/helpUs/EdithelpusForm")
);
const ViewHelpUs = lazy(() =>
  import("./views/apps/pageSetUp/helpUs/ViewHelpUs")
);

const membershipList = lazy(() =>
  import("./views/apps/membership/MembershipList")
);

const editMembership = lazy(() =>
  import("./views/apps/membership/EditMembership")
);
const notificationList = lazy(() =>
  import("./views/apps/notification/NotificationList")
);
const addNotification = lazy(() =>
  import("./views/apps/notification/AddNotification")
);
const productDetail = lazy(() =>
  import("./views/apps/ecommerce/detail/Detail")
);
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"));

// my component
const subplanvideos = lazy(() => import("./views/apps/subplan/SubPlanVideos"));
const editSubplanvideos = lazy(() =>
  import("./views/apps/subplan/EditSubplanvideos")
);
const addPlan = lazy(() => import("./views/apps/subplan/AddPlan"));

// user//
const UsersList = lazy(() => import("./views/apps/users/UsersList"));
const AddUsers = lazy(() => import("./views/apps/users/AddUsers"));
const EditUsers = lazy(() => import("./views/apps/users/EditUsers"));
const ViewUsers = lazy(() => import("./views/apps/users/ViewUsers"));
// userNotification//
const UserNotification = lazy(() =>
  import("./views/apps/userNotif/UserNotification")
);

// script//
const ScriptList = lazy(() => import("./views/apps/script/ScriptList"));
const AddScript = lazy(() => import("./views/apps/script/AddScript"));
const EditScript = lazy(() => import("./views/apps/script/EditScript"));

// Trade
const AllTradeList = lazy(() => import("./views/apps/trade/AllTradeList"));
const AddAllTrade = lazy(() => import("./views/apps/trade/AddAllTrade"));
const EditAllTrade = lazy(() => import("./views/apps/trade/EditAllTrade"));

const EquityCashList = lazy(() => import("./views/apps/trade/EquityCashList"));
const AddEquityCash = lazy(() => import("./views/apps/trade/AddEquityCash"));
const EditEquityCash = lazy(() => import("./views/apps/trade/EditEquityCash"));

const FnoEquityList = lazy(() => import("./views/apps/trade/FnoEquityList"));
const AddFnoEquity = lazy(() => import("./views/apps/trade/AddFnoEquity"));
const EditFnoEquity = lazy(() => import("./views/apps/trade/EditFnoEquity"));

const FnoIndexList = lazy(() => import("./views/apps/trade/FnoIndexList"));
const AddFnoIndex = lazy(() => import("./views/apps/trade/AddFnoIndex"));
const EditFnoIndex = lazy(() => import("./views/apps/trade/EditFnoIndex"));

const BankNiftyList = lazy(() => import("./views/apps/trade/BankNiftyList"));

const NiftyList = lazy(() => import("./views/apps/trade/NiftyList"));

//package//
const PackagePlanList = lazy(() =>
  import("./views/apps/package/PackagePlanList")
);
const AddPackagePlan = lazy(() =>
  import("./views/apps/package/AddPackagePlan")
);
const EditPackagePlan = lazy(() =>
  import("./views/apps/package/EditPackagePlan")
);
//FAQ//
const FaqList = lazy(() => import("./views/apps/faq/FaqList"));
const AddFaq = lazy(() => import("./views/apps/faq/AddFaq"));

//Premium//
const AddPaidServeice = lazy(() =>
  import("./views/apps/premium/AddPaidServeice")
);
const PaidServeiceList = lazy(() =>
  import("./views/apps/premium/PaidServeiceList")
);

// Appreciation//
const AddShowAppreciation = lazy(() =>
  import("./views/apps/showAppre/AddShowAppreciation")
);
const EditShowAppreciation = lazy(() =>
  import("./views/apps/showAppre/EditShowAppreciation")
);
const ShowAppreciation = lazy(() =>
  import("./views/apps/showAppre/ShowAppreciation")
);
const UserAppreciation = lazy(() =>
  import("./views/apps/showAppre/UserAppreciation")
);
// Explore//
const TrupeeUnivercity = lazy(() =>
  import("./views/apps/explore/Trupee/TrupeeUnivercity")
);
const EditTruUni = lazy(() => import("./views/apps/explore/Trupee/EditTruUni"));

const StartUp = lazy(() => import("./views/apps/explore/Trupee/StartUp"));
const AddStartUp = lazy(() => import("./views/apps/explore/Trupee/AddStartUp"));
const EditStartUp = lazy(() =>
  import("./views/apps/explore/Trupee/EditStartUp")
);
const ViewStartUp = lazy(() =>
  import("./views/apps/explore/Trupee/ViewStartUp")
);

const RefferEarn = lazy(() => import("./views/apps/explore/Trupee/RefferEarn"));
const TradingViewCharts = lazy(() =>
  import("./views/apps/explore/Trupee/TradingViewCharts")
);
const PerformanceSheet = lazy(() =>
  import("./views/apps/explore/Trupee/PerformanceSheet")
);
const Opportunity = lazy(() =>
  import("./views/apps/explore/Trupee/Opportunity")
);
const AddTVC = lazy(() => import("./views/apps/explore/Trupee/AddTVC"));
// const RefferEarn = lazy(() => import("./views/apps/explore/Trupee/RefferEarn"));

// MemberShipContent//
const MemberShipContent = lazy(() =>
  import("./views/apps/membercontent/MemberShipContent")
);
const EditMemContent = lazy(() =>
  import("./views/apps/membercontent/EditMemContent")
);
// setting

const enquiryForm = lazy(() => import("./views/apps/setting/EnquiryForm"));
const grid = lazy(() => import("./views/ui-elements/grid/Grid"));
const typography = lazy(() =>
  import("./views/ui-elements/typography/Typography")
);
const textutilities = lazy(() =>
  import("./views/ui-elements/text-utilities/TextUtilities")
);
const syntaxhighlighter = lazy(() =>
  import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter")
);
const colors = lazy(() => import("./views/ui-elements/colors/Colors"));
const reactfeather = lazy(() =>
  import("./views/ui-elements/icons/FeatherIcons")
);
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"));
const statisticsCards = lazy(() =>
  import("./views/ui-elements/cards/statistics/StatisticsCards")
);
const analyticsCards = lazy(() =>
  import("./views/ui-elements/cards/analytics/Analytics")
);
const actionCards = lazy(() =>
  import("./views/ui-elements/cards/actions/CardActions")
);
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"));
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"));
const Breadcrumbs = lazy(() =>
  import("./components/reactstrap/breadcrumbs/Breadcrumbs")
);
const Carousel = lazy(() =>
  import("./components/reactstrap/carousel/Carousel")
);
const Collapse = lazy(() =>
  import("./components/reactstrap/collapse/Collapse")
);
const Dropdowns = lazy(() =>
  import("./components/reactstrap/dropdowns/Dropdown")
);
const ListGroup = lazy(() =>
  import("./components/reactstrap/listGroup/ListGroup")
);
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"));
const Pagination = lazy(() =>
  import("./components/reactstrap/pagination/Pagination")
);
const NavComponent = lazy(() =>
  import("./components/reactstrap/navComponent/NavComponent")
);
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"));
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"));
const TabPills = lazy(() =>
  import("./components/reactstrap/tabPills/TabPills")
);
const Tooltips = lazy(() =>
  import("./components/reactstrap/tooltips/Tooltips")
);
const Popovers = lazy(() =>
  import("./components/reactstrap/popovers/Popovers")
);
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"));
const BadgePill = lazy(() =>
  import("./components/reactstrap/badgePills/BadgePill")
);
const Progress = lazy(() =>
  import("./components/reactstrap/progress/Progress")
);
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"));
const Spinners = lazy(() =>
  import("./components/reactstrap/spinners/Spinners")
);
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"));
const AutoComplete = lazy(() =>
  import("./components/@vuexy/autoComplete/AutoComplete")
);
const chips = lazy(() => import("./components/@vuexy/chips/Chips"));
const divider = lazy(() => import("./components/@vuexy/divider/Divider"));
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"));
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"));
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"));
const select = lazy(() => import("./views/forms/form-elements/select/Select"));
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
);
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
);
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"));
const input = lazy(() => import("./views/forms/form-elements/input/Input"));
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
);
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
);
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
);
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
);
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
);
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"));
const formik = lazy(() => import("./views/forms/formik/Formik"));
const tables = lazy(() => import("./views/tables/reactstrap/Tables"));
const ReactTables = lazy(() =>
  import("./views/tables/react-tables/ReactTables")
);
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"));
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"));
const profile = lazy(() => import("./views/pages/profile/Profile"));
const faq = lazy(() => import("./views/pages/faq/FAQ"));

const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
);
const search = lazy(() => import("./views/pages/search/Search"));
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
);
const invoice = lazy(() => import("./views/pages/invoice/Invoice"));
const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"));
const error404 = lazy(() => import("./views/pages/misc/error/404"));
const error500 = lazy(() => import("./views/pages/misc/error/500"));
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"));
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"));
const apex = lazy(() => import("./views/charts/apex/ApexCharts"));
const chartjs = lazy(() => import("./views/charts/chart-js/ChartJS"));
const extreme = lazy(() => import("./views/charts/recharts/Recharts"));
const leafletMaps = lazy(() => import("./views/maps/Maps"));
const toastr = lazy(() => import("./extensions/toastify/Toastify"));
const sweetAlert = lazy(() => import("./extensions/sweet-alert/SweetAlert"));
const rcSlider = lazy(() => import("./extensions/rc-slider/Slider"));
const uploader = lazy(() => import("./extensions/dropzone/Dropzone"));
const editor = lazy(() => import("./extensions/editor/Editor"));
const drop = lazy(() => import("./extensions/drag-and-drop/DragAndDrop"));
const tour = lazy(() => import("./extensions/tour/Tour"));
const clipboard = lazy(() =>
  import("./extensions/copy-to-clipboard/CopyToClipboard")
);
const menu = lazy(() => import("./extensions/contexify/Contexify"));
const swiper = lazy(() => import("./extensions/swiper/Swiper"));
const i18n = lazy(() => import("./extensions/i18n/I18n"));
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"));
const tree = lazy(() => import("./extensions/treeview/TreeView"));
const Import = lazy(() => import("./extensions/import-export/Import"));
const Export = lazy(() => import("./extensions/import-export/Export"));
const ExportSelected = lazy(() =>
  import("./extensions/import-export/ExportSelected")
);

const Login = lazy(() => import("./views/pages/authentication/login/Login"));
const forgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
);
const lockScreen = lazy(() =>
  import("./views/pages/authentication/LockScreen")
);
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
);
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
);
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
);

const otpVerify = lazy(() => import("./views/pages/authentication/OtpVerify"));
const otpScreen = lazy(() => import("./views/pages/authentication/OtpScreen"));

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = (state) => {
  return {
    user: state.auth.login.userRole,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  componentDidMount() {
    let data = localStorage.getItem("auth");
    sessionStorage.clear();
    if (data === undefined || data === null) {
      //history.push("/#/pages/login")
      window.location.replace("/#/");

      // window.location.replace("/#/pages/login");
    }
  }
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder

      <Router history={history}>
        <HashRouter>
          <Switch>
            {/*<AppRoute exact={true} path="/" component={home} fullLayout /> */}
            <AppRoute exact={true} path="/" component={analyticsDashboard} />
            <AppRoute
              exact={true}
              path="/ecommerce-dashboard"
              component={ecommerceDashboard}
            />
            {/* MemberShipContent */}
            <AppRoute
              path="/app/membercontent/memberShipContent"
              component={MemberShipContent}
            />
            <AppRoute
              path="/app/membercontent/editMemContent/:id"
              component={EditMemContent}
            />
            {/* user */}
            <AppRoute path="/app/users/usersList" component={UsersList} />
            <AppRoute path="/app/users/addUsers" component={AddUsers} />
            <AppRoute path="/app/users/editUsers/:id" component={EditUsers} />
            <AppRoute path="/app/users/viewUsers/:id" component={ViewUsers} />
            {/* package */}
            <AppRoute
              path="/app/package/packagePlanList"
              component={PackagePlanList}
            />
            <AppRoute
              path="/app/package/addPackagePlan"
              component={AddPackagePlan}
            />
            <AppRoute
              path="/app/package/editPackagePlan/:id"
              component={EditPackagePlan}
            />
            {/* FAQ */}
            <AppRoute path="/app/faq/faqList" component={FaqList} />
            <AppRoute path="/app/faq/addFaq" component={AddFaq} />
            {/* FeedBack */}
            <AppRoute
              path="/app/feedback/FeedBackList"
              component={FeedBackList}
            />
            {/* Premium */}
            <AppRoute
              path="/app/premium/paidServeiceList"
              component={PaidServeiceList}
            />
            <AppRoute
              path="/app/premium/addPaidServeice"
              component={AddPaidServeice}
            />
            {/* script */}
            <AppRoute path="/app/script/scriptList" component={ScriptList} />
            <AppRoute path="/app/script/addScript" component={AddScript} />
            <AppRoute
              path="/app/script/EditScript/:id"
              component={EditScript}
            />
            {/* Trade */}
            <AppRoute path="/app/trade/allTradeList" component={AllTradeList} />
            <AppRoute path="/app/trade/addAllTrade" component={AddAllTrade} />
            <AppRoute
              path="/app/trade/editAllTrade/:id"
              component={EditAllTrade}
            />
            <AppRoute
              path="/app/trade/equityCashList"
              component={EquityCashList}
            />
            <AppRoute
              path="/app/trade/addEquityCash"
              component={AddEquityCash}
            />
            <AppRoute
              path="/app/trade/editEquityCash/:id"
              component={EditEquityCash}
            />
            <AppRoute
              path="/app/trade/fnoEquityList"
              component={FnoEquityList}
            />
            <AppRoute path="/app/trade/addFnoEquity" component={AddFnoEquity} />
            <AppRoute
              path="/app/trade/editFnoEquity/:id"
              component={EditFnoEquity}
            />
            <AppRoute path="/app/trade/fnoIndexList" component={FnoIndexList} />
            <AppRoute
              path="/app/trade/editFnoIndex/:id"
              component={EditFnoIndex}
            />
            <AppRoute path="/app/trade/addFnoIndex" component={AddFnoIndex} />
            <AppRoute
              path="/app/trade/bankNiftyList"
              component={BankNiftyList}
            />
            <AppRoute path="/app/trade/niftyList" component={NiftyList} />
            {/* setting */}
            <AppRoute path="/app/setting/enquiryForm" component={enquiryForm} />
            <AppRoute
              path="/email"
              component={() => <Redirect to="/email/inbox" />}
            />
            {/* Appreciation */}
            <AppRoute
              path="/app/showAppre/addShowAppreciation"
              component={AddShowAppreciation}
            />
            <AppRoute
              path="/app/showAppre/editShowAppreciation"
              component={EditShowAppreciation}
            />
            <AppRoute
              path="/app/showAppre/showAppreciation"
              component={ShowAppreciation}
            />
            <AppRoute
              path="/app/showAppre/userAppreciation"
              component={UserAppreciation}
            />
            {/* DiscountCode */}
            <AppRoute
              path="/app/discount/discountCode"
              component={DiscountCode}
            />
            <AppRoute
              path="/app/discount/discountList"
              component={DiscountList}
            />
            {/*userNotification*/}
            <AppRoute
              path="/app/userNotif/userNotification"
              component={UserNotification}
            />
            {/* Explore */}
            <AppRoute
              path="/app/explore/Trupee/trupeeUnivercity"
              component={TrupeeUnivercity}
            />
            <AppRoute
              path="/app/explore/Trupee/editTruUni/:id"
              component={EditTruUni}
            />
            <AppRoute path="/app/explore/Trupee/startUp" component={StartUp} />
            <AppRoute
              path="/app/explore/Trupee/addStratUp"
              component={AddStartUp}
            />
            <AppRoute
              path="/app/explore/Trupee/editStartUp/:id"
              component={EditStartUp}
            />
            <AppRoute
              path="/app/explore/Trupee/viewStratUp/:id"
              component={ViewStartUp}
            />
            <AppRoute
              path="/app/explore/Trupee/performance"
              component={Performance}
            />
            <AppRoute
              path="/app/explore/Trupee/refferEarn"
              component={RefferEarn}
            />
            <AppRoute path="/app/explore/Trupee/addTVC" component={AddTVC} />
            <AppRoute
              path="/app/explore/Trupee/opportunity"
              component={Opportunity}
            />
            <AppRoute
              path="/app/explore/Trupee/tradingViewCharts"
              component={TradingViewCharts}
            />
            <AppRoute
              path="/app/explore/Trupee/performanceSheet"
              component={PerformanceSheet}
            />
            {/* my componet */}
            <AppRoute
              path="/app/subplan/subplanvideos"
              component={subplanvideos}
            />
            <AppRoute path="/app/subplan/addPlan" component={addPlan} />
            <AppRoute
              path="/app/subplan/editSubplanvideos/:id"
              component={editSubplanvideos}
            />
            <AppRoute
              path="/todo"
              component={() => <Redirect to="/todo/all" />}
            />
            <AppRoute path="/ecommerce/shop" component={shop} />
            <AppRoute
              path="/ecommerce/product-detail"
              component={productDetail}
            />
            {/* pageSetUp */}
            <AppRoute path="/app/pageSetUp/about/aboutUs" component={aboutUs} />
            <AppRoute
              path="/app/pageSetUp/about/AllaboutUs"
              component={AllaboutUs}
            />
            <AppRoute
              path="/app/pageSetUp/about/EditAboutUs/:id"
              component={EditAboutUs}
            />
            <AppRoute
              path="/app/pageSetUp/termscondition/AddTermsCondition"
              component={AddTermsCondition}
            />
            <AppRoute
              path="/app/pageSetUp/termscondition/EditTermCondition/:id"
              component={EditTermCondition}
            />
            <AppRoute
              path="/app/pageSetUp/termscondition/TermConditionList"
              component={TermConditionList}
            />
            <AppRoute path="/app/pageSetUp/helpUs/HelpUs" component={helpUs} />
            <AppRoute
              path="/app/pageSetUp/helpUs/EdithelpusForm/:id"
              component={EdithelpusForm}
            />
            <AppRoute
              path="/app/pageSetUp/helpUs/ViewHelpUs/:id"
              component={ViewHelpUs}
            />
            <AppRoute
              path="/app/membership/MembershipList"
              component={membershipList}
            />
            <AppRoute
              path="/app/membership/EditMembership/:id"
              component={editMembership}
            />
            <AppRoute
              path="/app/notification/NotificationList"
              component={notificationList}
            />
            <AppRoute
              path="/app/notification/AddNotification"
              component={addNotification}
            />
            <AppRoute
              path="/ecommerce/checkout"
              component={checkout}
              permission="admin"
            />
            <AppRoute path="/data-list/list-view" component={listView} />
            <AppRoute path="/data-list/thumb-view" component={thumbView} />
            <AppRoute path="/ui-element/grid" component={grid} />
            <AppRoute path="/ui-element/typography" component={typography} />
            <AppRoute
              path="/ui-element/textutilities"
              component={textutilities}
            />
            <AppRoute
              path="/ui-element/syntaxhighlighter"
              component={syntaxhighlighter}
            />
            <AppRoute path="/colors/colors" component={colors} />
            <AppRoute path="/icons/reactfeather" component={reactfeather} />
            <AppRoute exact={true} path="/cards/basic" component={basicCards} />
            <AppRoute
              exact={true}
              path="/cards/statistics"
              component={statisticsCards}
            />
            <AppRoute
              exact={true}
              path="/cards/analytics"
              component={analyticsCards}
            />
            <AppRoute
              exact={true}
              path="/cards/action"
              component={actionCards}
            />
            <AppRoute
              exact={true}
              path="/components/alerts"
              component={Alerts}
            />
            <AppRoute
              exact={true}
              path="/components/buttons"
              component={Buttons}
            />
            <AppRoute
              exact={true}
              path="/components/breadcrumbs"
              component={Breadcrumbs}
            />
            <AppRoute
              exact={true}
              path="/components/carousel"
              component={Carousel}
            />
            <AppRoute
              exact={true}
              path="/components/collapse"
              component={Collapse}
            />
            <AppRoute
              exact={true}
              path="/components/dropdowns"
              component={Dropdowns}
            />
            <AppRoute
              exact={true}
              path="/components/list-group"
              component={ListGroup}
            />
            <AppRoute
              exact={true}
              path="/components/modals"
              component={Modals}
            />
            <AppRoute
              exact={true}
              path="/components/pagination"
              component={Pagination}
            />
            <AppRoute
              exact={true}
              path="/components/nav-component"
              component={NavComponent}
            />
            <AppRoute
              exact={true}
              path="/components/navbar"
              component={Navbar}
            />
            <AppRoute
              exact={true}
              path="/components/tabs-component"
              component={Tabs}
            />
            <AppRoute
              exact={true}
              path="/components/pills-component"
              component={TabPills}
            />
            <AppRoute
              exact={true}
              path="/components/tooltips"
              component={Tooltips}
            />
            <AppRoute
              exact={true}
              path="/components/popovers"
              component={Popovers}
            />
            <AppRoute
              exact={true}
              path="/components/badges"
              component={Badge}
            />
            <AppRoute
              exact={true}
              path="/components/pill-badges"
              component={BadgePill}
            />
            <AppRoute
              exact={true}
              path="/components/progress"
              component={Progress}
            />
            <AppRoute
              exact={true}
              path="/components/media-objects"
              component={Media}
            />
            <AppRoute
              exact={true}
              path="/components/spinners"
              component={Spinners}
            />
            <AppRoute
              exact={true}
              path="/extra-components/auto-complete"
              component={AutoComplete}
            />
            <AppRoute
              exact={true}
              path="/extra-components/avatar"
              component={avatar}
            />
            <AppRoute
              exact={true}
              path="/extra-components/chips"
              component={chips}
            />
            <AppRoute
              exact={true}
              path="/extra-components/divider"
              component={divider}
            />
            <AppRoute
              exact={true}
              path="/forms/wizard"
              component={vuexyWizard}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/select"
              component={select}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/switch"
              component={switchComponent}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/checkbox"
              component={checkbox}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/radio"
              component={radio}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input"
              component={input}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input-group"
              component={group}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/number-input"
              component={numberInput}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/textarea"
              component={textarea}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/pickers"
              component={pickers}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input-mask"
              component={inputMask}
            />
            <AppRoute
              exact={true}
              path="/forms/layout/form-layout"
              component={layout}
            />
            <AppRoute exact={true} path="/forms/formik" component={formik} />{" "}
            <AppRoute
              exact={true}
              path="/tables/reactstrap"
              component={tables}
            />
            <AppRoute
              exact={true}
              path="/tables/react-tables"
              component={ReactTables}
            />
            <AppRoute exact={true} path="/tables/agGrid" component={Aggrid} />
            <AppRoute
              exact={true}
              path="/tables/data-tables"
              component={DataTable}
            />
            <AppRoute exact={true} path="/pages/profile" component={profile} />
            <AppRoute exact={true} path="/pages/faq" component={faq} />
            <AppRoute
              exact={true}
              path="/pages/knowledge-base"
              component={knowledgeBase}
            />
            <AppRoute
              exact={true}
              path="/pages/knowledge-base/category"
              component={knowledgeBaseCategory}
            />
            <AppRoute
              exact={true}
              path="/pages/knowledge-base/category/questions"
              component={knowledgeBaseQuestion}
            />
            <AppRoute exact={true} path="/pages/search" component={search} />
            <AppRoute
              exact={true}
              path="/pages/account-settings"
              component={accountSettings}
            />
            <AppRoute exact={true} path="/pages/invoice" component={invoice} />
            <AppRoute
              exact={true}
              path="/misc/coming-soon"
              component={comingSoon}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/error/404"
              component={error404}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/login"
              component={Login}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/register"
              component={register}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/forgot-password"
              component={forgotPassword}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/lock-screen"
              component={lockScreen}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/reset-password/:id"
              component={resetPassword}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/otp-verify"
              component={otpVerify}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/otp-Screen"
              component={otpScreen}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/error/500"
              component={error500}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/not-authorized"
              component={authorized}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/maintenance"
              component={maintenance}
              fullLayout
            />
            <AppRoute exact={true} path="/charts/apex" component={apex} />
            <AppRoute exact={true} path="/charts/chartjs" component={chartjs} />
            <AppRoute
              exact={true}
              path="/charts/recharts"
              component={extreme}
            />
            <AppRoute
              exact={true}
              path="/maps/leaflet"
              component={leafletMaps}
            />
            <AppRoute
              exact={true}
              path="/extensions/sweet-alert"
              component={sweetAlert}
            />
            <AppRoute
              exact={true}
              path="/extensions/toastr"
              component={toastr}
            />
            <AppRoute
              exact={true}
              path="/extensions/slider"
              component={rcSlider}
            />
            <AppRoute
              exact={true}
              path="/extensions/file-uploader"
              component={uploader}
            />
            <AppRoute
              exact={true}
              path="/extensions/wysiwyg-editor"
              component={editor}
            />
            <AppRoute
              exact={true}
              path="/extensions/drag-and-drop"
              component={drop}
            />
            <AppRoute exact={true} path="/extensions/tour" component={tour} />
            <AppRoute
              exact={true}
              path="/extensions/clipboard"
              component={clipboard}
            />
            <AppRoute
              exact={true}
              path="/extensions/context-menu"
              component={menu}
            />
            <AppRoute
              exact={true}
              path="/extensions/swiper"
              component={swiper}
            />
            <AppRoute
              exact={true}
              path="/extensions/access-control"
              component={accessControl}
            />
            <AppRoute exact={true} path="/extensions/i18n" component={i18n} />
            <AppRoute exact={true} path="/extensions/tree" component={tree} />
            <AppRoute
              exact={true}
              path="/extensions/import"
              component={Import}
            />
            <AppRoute
              exact={true}
              path="/extensions/export"
              component={Export}
            />
            <AppRoute
              exact={true}
              path="/extensions/export-selected"
              component={ExportSelected}
            />
            <AppRoute
              exact={true}
              path="/extensions/pagination"
              component={reactPaginate}
            />
            <AppRoute component={error404} fullLayout />
          </Switch>
        </HashRouter>
      </Router>
    );
  }
}
export default AppRouter;
