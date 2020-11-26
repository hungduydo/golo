import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledCollapse, UncontrolledDropdown } from "reactstrap";

const Cards = () => {
  return <Container fluid>

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Cards</h1>
    </div>

    <div className="row">
      <div className="col-xl-3 col-md-6 mb-4">
        <Card className="border-left-primary shadow h-100 py-2">
          <CardBody>
            <Row className="no-gutters align-items-center">
              <Col className="mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
              </Col>
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </Row>
          </CardBody>
        </Card>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <Card className="border-left-success shadow h-100 py-2">
          <CardBody>
            <Row className="no-gutters align-items-center">
              <Col className="mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
              </Col>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </Row>
          </CardBody>
        </Card>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <Card className="border-left-info shadow h-100 py-2">
          <CardBody>
            <Row className="no-gutters align-items-center">
              <Col className="mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                <Row className="no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </Row>
              </Col>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </Row>
          </CardBody>
        </Card>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <Card className="border-left-warning shadow h-100 py-2">
          <CardBody>
            <Row className="no-gutters align-items-center">
              <Col className="mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
              </Col>
              <div className="col-auto">
                <i className="fas fa-comments fa-2x text-gray-300"></i>
              </div>
            </Row>
          </CardBody>
        </Card>
      </div>
    </div>

    <Row>
      <Col lg="6">
        <Card className="mb-4">
          <CardHeader>Default Card Example</CardHeader>
          <CardBody>
            This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
        </CardBody>
        </Card>

        <Card className="mb-4 shadow">
          <CardHeader className="py-3">
            <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
          </CardHeader>
          <CardBody>
            This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
          </CardBody>
        </Card>
      </Col>
        
      <Col lg="6">
        <Card className="mb-4 shadow">
          <CardHeader className="py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
            <UncontrolledDropdown className="no-arrow" setActiveFromChild>
              {/* <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a> */}
              <DropdownToggle tag="a" href="#">
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </DropdownToggle>
              <DropdownMenu right className="shadow animated--fade-in">
                <DropdownItem header>Dropdown Header:</DropdownItem>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardHeader>
          <CardBody>
            Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
          </CardBody>
        </Card>
        <Card className="shadow mb-4">
          <CardHeader className="d-block py-3" href="#" data-toggle="collapse" id="collapseCardExample">
            <h6 className="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
          </CardHeader>
          <UncontrolledCollapse toggler="#collapseCardExample">
            <CardBody>
              This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!
            </CardBody>
          </UncontrolledCollapse>
        </Card>
      </Col>
    </Row>

  </Container>
};

export default Cards;
