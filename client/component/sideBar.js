import React from 'react';
import { connect } from 'react-redux';;
import { NavLink } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';
import {
  setSidebarCollapse,
  setSidebarVisibility,
} from '../action/sidebar';
import { constants } from '../constants';
import { getSidebarMenuClasses } from '../utility';

const Sidebar = ({
  isCollapsed,
  profile,
  isVisible,
  setSidebarVisibility,
  // location,
}) => {
  // let sidebarMenuClasses = getSidebarMenuClasses(location.pathname);
  const closeSidebar = () => setSidebarVisibility(false);
  const { manageUsersPlaceholder,
    dashboardPlaceholder,
    usersPlaceholder,
    rolePlaceholder,
    productsGroupPlaceholder,
    productPlaceholder,
    teamsPlaceholder,
    targetPlaceholder,
    salesPersonPlaceholder,
    commisionPlaceholder,
  } = constants.sidebar;
  return (
    <ProSidebar
      collapsed={isCollapsed}
      breakPoint="lg"
      toggled={isVisible}
      onToggle={setSidebarVisibility}
    >
      <SidebarHeader>
        {isCollapsed ? (
          <img
            alt="Icon logo"
            className="small-logo"
            src="/images/dnb-small.png"
          />
        ) : (
          <img alt="Logo" className="brand-logo" src="/images/dnb-logo.svg" />
        )}
        <i className="fas fa-times close-sidebar" onClick={closeSidebar} />
      </SidebarHeader>
      <Menu iconShape="round">
        {/* <MenuItem
          // className={sidebarMenuClasses.dashboard}
          icon={<i className="fa fa-home" />}
        >
          <NavLink onClick={closeSidebar} to="/dashboard">
            {dashboardPlaceholder}
          </NavLink>
        </MenuItem> */}
        {/* <MenuItem
          // className={sidebarMenuClasses.users}
          icon={<i className="fa fa-user" />}
        >
          <NavLink onClick={closeSidebar} to="/users">
            {usersPlaceholder}
          </NavLink>
        </MenuItem>
        <MenuItem
          className={sidebarMenuClasses.teams}
          icon={<i className="fa fa-users" />}
        >
          <NavLink onClick={closeSidebar} to="/teams">
            {teamsPlaceholder}
          </NavLink>
        </MenuItem>
        <MenuItem
          className={sidebarMenuClasses.roles}
          icon={<i class="fa fa-solid fa-user-tie" />}
        >

          <NavLink onClick={closeSidebar} to="/roles">
            {rolePlaceholder}
          </NavLink>
        </MenuItem>
        <MenuItem
          className={sidebarMenuClasses.productGroup}
          icon={<i class="fa fas fa-boxes" />}
        >
          <NavLink onClick={closeSidebar} to="/product-groups">
            {productsGroupPlaceholder}
          </NavLink>
        </MenuItem> */}
 

        {/* {profile.is_admin ? (
          <MenuItem
            className={sidebarMenuClasses.manageUsers}
            icon={<i className="fa fa-user-plus" />}
          >
            <NavLink onClick={closeSidebar} to="/manage-users">
              {manageUsersPlaceholder}
            </NavLink>
          </MenuItem>
        ) : (
          <></>
        )} */}
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
