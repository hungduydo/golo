import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import auth, { useAuth } from "../../context/auth";
import logo from "../../assets/logo.png"

const Header = (props) => {
  const { setAuthTokens, authTokens, } = useAuth();
  function logout() {
    auth.logout();
    const { history } = props;
    history.push('/')
  }

  return (
    <nav className="navbar navbar-expand navbar-light topbar static-top shadow">

      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>
      <img className="home-logo" src={logo} alt="golo logo"></img>
      <ul className="navbar-nav ml-auto">

        <NavItem>
          <NavLink href="/">
            <span>Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/market">
            <span>Market</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/stock">
            <span>Stocks</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ai-train">
            <span>AI Traiding</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/edu">
            <span>Edu</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog">
            <span>Blog</span>
          </NavLink>
        </NavItem>
        {authTokens ? renderButtonUser() : renderLoginBtn()}


      </ul>
    </nav>
  );
  function renderLoginBtn() {
    return (<NavItem className="mx-3">
      <Link to='/login' className="btn btn-primary">ĐĂNG NHẬP</Link>
    </NavItem>);
  }
  function renderButtonUser() {
    return (
      <UncontrolledDropdown className="nav-item" setActiveFromChild>
        <DropdownToggle tag="a" className="nav-link" href="#">
          <Button color="primary">
            <i className="fas fa-user fa-sm"></i> Vo Hieu Phuc
              </Button>
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem>
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </DropdownItem>
          <DropdownItem>
            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </DropdownItem>
          <DropdownItem>
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </DropdownItem>
          <DropdownItem divider></DropdownItem> */}
          <DropdownItem onClick={logout}>
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

};

export default Header;
