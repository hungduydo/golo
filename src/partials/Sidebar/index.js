import React from "react";
import { NavbarBrand, NavItem, NavLink, UncontrolledCollapse } from "reactstrap";

const Sidebar = () => {
  
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <NavbarBrand href="/" className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </NavbarBrand>

      <hr className="sidebar-divider my-0"></hr>

      <NavItem >
        <NavLink href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </NavItem>

      <hr className="sidebar-divider"></hr>

      <div className="sidebar-heading">
        Interface
      </div>

      <NavItem >
        <NavLink className="collapsed" href="#" data-toggle="collapse" id="component">
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </NavLink>
        <UncontrolledCollapse toggler="#component">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards">Cards</a>
          </div>
        </UncontrolledCollapse>
      </NavItem>

      <NavItem>
        <NavLink className="collapsed" href="#" data-toggle="collapse" id="utiliti">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </NavLink>
        <UncontrolledCollapse toggler="#utiliti">
           <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">Colors</a>
            <a className="collapse-item" href="utilities-border.html">Borders</a>
            <a className="collapse-item" href="utilities-animation.html">Animations</a>
            <a className="collapse-item" href="utilities-other.html">Other</a>
          </div>
        </UncontrolledCollapse>
      </NavItem>

      <hr className="sidebar-divider"></hr>
    
      <div className="sidebar-heading">
        Addons
      </div>

      <NavItem>
        <NavLink id="pages" className="collapsed" href="#" data-toggle="collapse">
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </NavLink>
        <UncontrolledCollapse toggler="#pages">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">Login</a>
            <a className="collapse-item" href="register.html">Register</a>
            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">404 Page</a>
            <a className="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </UncontrolledCollapse>
      </NavItem>


      <NavItem>
        <NavLink href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="tables.html">
        <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </NavLink>
      </NavItem>

      <hr className="sidebar-divider d-none d-md-block"></hr>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default Sidebar;
