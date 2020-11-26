import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import { Button, Card, CardText, CardTitle, Col, Container, Nav, Navbar, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import api from "../../service/api";
import MarketChart from "./chart";
import StockRange from "./range";
const Stock = () => {
  // let data = {};
  // let current, close, mothago, weekago = {};
  const [code, setCode] = useState({});
  const [close, setClose] = useState({});
  const [mothago, setMothago] = useState({});
  const [weekago, setWeekago] = useState({});
  const [updateDate, setUpdateDate] = useState({});
  let count = 0;
  useEffect(() => {
    // Update the document title using the browser API
    Promise.all([
      api.post('marketChartCom', { "date": new Date(2020, 1, 1), "mact":"VNM" }),
      api.post('marketChartCom', { "date": new Date(2020, 1, 1), "mact":"VNM" })
    ])
      .then(([compValueRes]) => {
  
        if (compValueRes && compValueRes.data && compValueRes.data.data) {
          
        }
      }).finally(() => {
        setCode({
          name: 'APPLE INC',
          short_name: 'AAPL',
          point: "373.81",
          date: new Date().getTime(),
          change: "9.70",
          percent: "+2.66%",
          start: 192.58,
          end: 275.78,
          current: 330.43,
          year_percent: 27.30
        })
      });
  }, [count]);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  
  return <Container className="stock">
    <Row className="code-info">
      <p>
        <span><b>{code.name}</b> (NASDQA: {code.short_name})</span>
      </p>
      <p>
        <span><b>{code.point}</b> (Delayed Data As of {code.date})</span>
        <span><b>{code.change} / {code.percent}%</b> Today's Change</span>
        <StockRange start={190} end={230} current={200}></StockRange>
        <span><b>+27.30%</b>Year to Date</span>
      </p>
      <p>
        
      </p>
    </Row>

    <Row className="chart">
      <Nav tabs>
        <NavItem>
          <NavLink onClick={() => { toggle('1'); }}>
            Dự Phòng
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => { toggle('2'); }}>
            Đồ Thị FA
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => { toggle('3'); }}>
            Đồ Thị RS
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Row>

    <Row className="chart">
      
    </Row>
    <Row className="chart">
      
    </Row>
  </Container>
};

export default Stock;
