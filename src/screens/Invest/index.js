import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import { Button, Card, CardText, CardTitle, Col, Container, Nav, Navbar, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import api from "../../service/api";
import StockRange from "./range";
import classnames from 'classnames';
import InvestTable from "./InvestTable";

const buyColumes = [
  {
    label: '#',
    field: 'index'
  },
  {
    label: 'Mã CTy',
    field: 'code'
  },
  {
    label: 'Ngày mua',
    field: 'date'
  },
  {
    label: 'Giá mua',
    field: 'price'
  },
  {
    label: 'Lời / lỗ hiện tại',
    field: 'profit'
  }
]

const historyColumes = [
  {
    label: '#',
    field: 'index'
  },
  {
    label: 'Mã CTy',
    field: 'code'
  },
  {
    label: 'Ngày mua',
    field: 'buy_date'
  },
  {
    label: 'Giá mua',
    field: 'buy_price'
  },
  {
    label: 'Ngày bán',
    field: 'sell_date'
  },
  {
    label: 'Giá bán',
    field: 'sell_price'
  },
  {
    label: 'Lời / lỗ hiện tại',
    field: 'profit'
  }
]

const Invest = () => {
  // let data = {};
  // let current, close, mothago, weekago = {};
  const [code, setCode] = useState({});
  const [buy, setbuy] = useState([])
  const [history, sethistory] = useState([])
  let count = 0;
  useEffect(() => {
    // Update the document title using the browser API
    Promise.all([
      api.post('investBuy', { "batdau": 0, "soluong": "10" }),
      api.post('investHistory', { "batdau": 0, "soluong": "10" })
    ])
      .then(([buyRes, historyRes, compValueRes]) => {

        if (buyRes && buyRes.data) {
          const buyData = buyRes.data.data.map((it, index) => {
            const { at_id, at_ticker, at_date, price_now, profit } = it;
            const row = {
              index: index + 1,
              id: at_id,
              code: at_ticker,
              price: roundPrice(price_now),
              profit: roundPrice(profit),
              date: new Date(at_date).toLocaleDateString()
            }

            return row;
          });
          setbuy(buyData);
        }

        if (historyRes && historyRes.data) {
          const histData = historyRes.data.data.map((it, index) => {
            const { ath_id, ath_com_code, ath_date_buy, ath_date_invest, ath_date_sell, ath_invest_type, ath_price_buy, ath_price_sell, ath_profit } = it;

            const row = {
              index: index + 1,
              id: ath_id,
              code: ath_com_code,
              buy_date: new Date(ath_date_buy).toLocaleDateString(),
              buy_price: roundPrice(ath_price_buy),
              sell_date: new Date(ath_date_sell).toLocaleDateString(),
              sell_price: roundPrice(ath_price_sell),
              profit: roundPrice(ath_profit)
            }

            return row;
          });
          sethistory(histData);
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
  const roundPrice = (priceString) => {
    return (priceString * 1).toFixed(2) * 1
  }
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return <Container className="invest">
    <Row className="code-info my-5">
      <p className="border-bottom pb-4 mb-4">
        <span className="code-name"><b>{code.name}</b> (NASDQA: {code.short_name})</span>
      </p>
      <p className="code-tab">
        <span className="code-point"><b>{code.point}</b> (Delayed Data As of {code.date})</span>
        <span className="code-change"><b>{code.change} / {code.percent}</b> Today's Change</span>
        <StockRange start={190} end={230} current={200}></StockRange>
        <span className="code-change"><b>+27.30%</b>Year to Date</span>
      </p>
      <p>

      </p>
    </Row>

    <Row className="chart">
      <Nav tabs className="invest-tab">
        <NavItem
          className={classnames({ active: activeTab === '1' })}
          onClick={() => { toggle('1'); }}>
          Mua
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === '2' })}
          onClick={() => { toggle('2'); }}>
          Lịch sử khuyến nghị
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === '3' })}
          onClick={() => { toggle('3'); }}>
          Hiệu quả mô hình
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="w-100">
        <TabPane tabId="1">
          <Row>
            <Col sm="12" className="mt-5">
              <InvestTable
                columns={buyColumes}
                data={buy}
                title="Danh Sách Cổ Phiếu Cho Tín Hiệu Mua"></InvestTable>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <InvestTable
                title="Danh Sách Cổ Phiếu Đã Khuyến Nghị"
                columns={historyColumes}
                data={history}></InvestTable>
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

export default Invest;
