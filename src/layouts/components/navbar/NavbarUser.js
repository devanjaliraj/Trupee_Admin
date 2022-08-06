import React from "react";
import { useState, useEffect } from "react";

import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axios from "axios";
import * as Icon from "react-feather";
import { Route } from "react-router-dom";

const handleNavigation = (e, path) => {
  e.preventDefault();
  // history.push(path);
  window.location.replace(path);
};

const NavbarUser = () => {
  const [adminimg, setAdminimg] = useState([]);
  // console.log(notifications);
  useEffect(() => {
    async function getNotifications() {
      try {
        const data = await axios.get(
          "http://65.0.183.149:8000/admin/viewoneadmin/62e125db337df218d9c152f9"
        );
        console.log(data.data.data);
        setAdminimg(data.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }
    getNotifications();
  }, []);

  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name text-bold-600" color="#fff">
              {adminimg.name}
            </span>
            {/* <span className="user-status">Available</span> */}
          </div>
          <span data-tour="user">
            <img
              src={adminimg?.adminimg}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        {/* {/ <UserDropdown {...this.props} /> /} */}
        <DropdownMenu right>
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => handleNavigation(e, "/#/pages/profile")}
          >
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>

          <DropdownItem divider />
          <Route
            render={({ history }) => (
              <DropdownItem
                tag="a"
                onClick={(e) => {
                  localStorage.removeItem("auth");
                  window.location.replace("/#/pages/login");
                }}
              >
                <Icon.Power size={14} className="mr-50" />
                <span className="align-middle">Log Out</span>
              </DropdownItem>
            )}
          />
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};
export default NavbarUser;
