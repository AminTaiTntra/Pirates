import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Container } from 'react-bootstrap';
import { logout } from '../action/loginAction';
import {
  setSidebarCollapse,
  setSidebarVisibility,
} from '../action/sidebar';
import { getHeaderTitle, showToast } from '../utility';
import HeaderDropdown from './common/headerDropdown';

const Header = ({ location }) => {
  const dispatch = useDispatch();
  const { profile, isCollapsed, isVisible, language } = useSelector(
    (state) => ({
      isCollapsed: state,
      // isVisible: state.sidebar.isVisible,
      // profile: state.profile,
      // language: state.language,
    }),
  );
  const logoutAction = () => dispatch(logout());

  const toggleCollapse = () => dispatch(setSidebarCollapse(!isCollapsed));
  const toggleVisibility = () => dispatch(setSidebarVisibility(!isVisible));
  let headerTitle = "getHeaderTitle(location.pathname)";
  return (
    <Navbar fixed="top">
      <Container fluid className="justify-content-between px-3">
        <i
          className={`collapse-menu-btn ${isCollapsed ? 'fas fa-angle-right' : 'fas fa-angle-left'
            }`}
          onClick={toggleCollapse}
        />
        <div className="page-title">
          <h1>{headerTitle}</h1>
        </div>
        <div className="navigation-items">
          {/* <LanguageDropdown dispatch={dispatch} language={language} /> */}
          <HeaderDropdown profile={profile} logout={logoutAction} />
          <i
            className="fas fa-bars collapse-sidebar-btn"
            onClick={toggleVisibility}
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
