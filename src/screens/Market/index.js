import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import { Col, Container, Row } from "reactstrap";
import api from "../../service/api";
import Artboard from "./artboard";
import MarketChart from "./chart";
const MBINum = (props) => {
  const [up, down] = (props.point + '').substr(0, 5).split('.');
  const numColor = `mbi-num num-${Math.ceil(up * 1 / 20)}`;
  return (
    <span className={numColor}>{up}<i>.{down}</i></span>
  );
}

const Market = () => {
  // let data = {};
  // let current, close, mothago, weekago = {};
  const [current, setCurrent] = useState({});
  const [close, setClose] = useState({});
  const [mothago, setMothago] = useState({});
  const [weekago, setWeekago] = useState({});
  const [updateDate, setUpdateDate] = useState({});

  const [fgiCurrent, setfgiCurrent] = useState({})
  const [fgiClose, setFgiClose] = useState({})
  const [fgiMoth, setFgiMoth] = useState({})
  const [fgiWeek, setFgiWeek] = useState({})
  const [fgiUpdate, setFgiUpdate] = useState({})

  // Chart data
  const [indexData, setindexData] = useState([]);
  const [keyData, setkeyData] = useState([])
  const [valueData, setvalueData] = useState([]);

  const [fgiindexData, setfgiindexData] = useState([]);
  const [fgikeyData, setfgikeyData] = useState([])
  const [fgivalueData, setfgivalueData] = useState([]);
  let count = 0;
  useEffect(() => {
    // Update the document title using the browser API
    Promise.all([
      api.post('marketMBI', { "date": new Date() }),
      api.post('marketFGI', { "date": new Date() }),
      api.post('marketChartMBI', { "date": new Date(2020, 1, 1) }),
      api.post('marketChartFGI', { "date": new Date(2020, 1, 1) }),
      api.post('marketChartIndex', { "date": new Date(2020, 1, 1) })])
      .then(([mbiRes, fgiRes, mbiChartRes, fgiChartRes, compValueRes]) => {
        if (mbiRes) {
          const mbiData = mbiRes.data.data;
          setCurrent(mbiData.current_date);
          setClose(mbiData.previous_close);
          setWeekago(mbiData.week_ago);
          setMothago(mbiData.month_ago);
          setUpdateDate(mbiData.last_update);

          const fgiData = fgiRes.data.data;
          setfgiCurrent(fgiData.current_date);
          setFgiClose(fgiData.previous_close);
          setFgiWeek(fgiData.week_ago);
          setFgiMoth(fgiData.month_ago);
          setFgiUpdate(fgiData.last_update);

        }

        if (mbiChartRes && mbiChartRes.data && mbiChartRes.data.data) {
          let key = [];
          const total =  mbiChartRes.data.data.length;
          const step = Math.round(total/7)
          let mbiChartData = mbiChartRes.data.data.map((it, index) => {
            const x = new Date(it[0] * 1000).getTime();
            const y = it[1]*1;
            if (index % step == 0) {
              key.push(x)
            }
            return { x, y }
          });
          setindexData(mbiChartData);
          setkeyData(key);
        }

        if (fgiChartRes && fgiChartRes.data && fgiChartRes.data.data) {
          let key = [];
          const total =  fgiChartRes.data.data.length;
          const step = Math.round(total/7)
          let fgiChartData = fgiChartRes.data.data.map((it, index) => {
            const x = new Date(it[0] * 1000).getTime();
            const y = it[1]*1;
            if (index % step == 0) {
              key.push(x)
            }
            return { x, y }
          });
          setfgiindexData(fgiChartData);
          setfgikeyData(key);
        }

        if (compValueRes && compValueRes.data && compValueRes.data.data) {
          let valueData = compValueRes.data.data.map((it, index) => {
            const x = it[0] * 1000;
            const y = it[1]*1;
            return { x, y }
          });

          setvalueData(valueData);
        }
      });
  }, [count]);

  return <Container className="market-page">
    <Row className="mt-5">
      <Col md="6" className="mbi-info">
        <p className="cycle m-0">chu ky 1-2 tháng</p>
        <p className="title">Market Breadth Index (MBI)</p>
        <p className="description">What emotion is driving the market now?</p>
        <p className="market-num">
          <MBINum point={current.value}></MBINum>
          <span className="mbi-status">Now: <b>{current.label}</b></span>
        </p>
        <div className="mbi-total-status mb-3">
          <div className="status-2">
            <MBINum point={close.value}></MBINum>
            <span className="mbi-status">Previous Close: <b>{close.label}</b></span>
          </div>
          <div className="status-2">
            <MBINum point={weekago.value}></MBINum>
            <span className="mbi-status">1 Week Ago: <b>{weekago.label}</b></span>
          </div>
          <div className="status-2">
            <MBINum point={mothago.value}></MBINum>
            <span className="mbi-status">1 Moth Ago: <b>{mothago.label}</b></span>
          </div>
        </div>
        <p className="last-update">Last updated &nbsp;
          <Moment format="MMM D \at H:mma">
            {updateDate}
          </Moment>
        </p>
      </Col>
      <Col md="6">
        <Artboard point={current.value} updateDate={current.date}></Artboard>
      </Col>
    </Row>

    <Row className="chart">
      <p className="chart-title">Market Breadth Index (MBI) vs. VNindex</p>
      <p className="chart-desc">
        <span className="value-line mr-4">S&P 500</span>
        <span className="index-line">Market Breadth Index</span>
      </p>
      <MarketChart indexData={indexData} valueData={valueData} keys={keyData}></MarketChart>
      <p className="chart-source">Source: CNN (Market Breadth Index)</p>
    </Row>

    <Row className="mt-5">
      <Col md="6" className="mbi-info">
        <p className="cycle m-0">chu ky 2-4 tháng</p>
        <p className="title">Fear & Greed Index (FGI)</p>
        <p className="description">What emotion is driving the market now?</p>
        <p className="market-num">
          <MBINum point={fgiCurrent.value}></MBINum>
          <span className="mbi-status">Now: <b>{fgiCurrent.label}</b></span>
        </p>
        <div className="mbi-total-status mb-3">
          <div className="status-2">
            <MBINum point={fgiClose.value}></MBINum>
            <span className="mbi-status">Previous Close: <b>{fgiClose.label}</b></span>
          </div>
          <div className="status-2">
            <MBINum point={fgiWeek.value}></MBINum>
            <span className="mbi-status">1 Week Ago: <b>{fgiWeek.label}</b></span>
          </div>
          <div className="status-2">
            <MBINum point={fgiMoth.value}></MBINum>
            <span className="mbi-status">1 Moth Ago: <b>{fgiMoth.label}</b></span>
          </div>
        </div>
        <p className="last-update">Last updated &nbsp;
          <Moment format="MMM D \at H:mma">
            {fgiUpdate}
          </Moment>
        </p>
      </Col>
      <Col md="6">
        <Artboard point={fgiCurrent.value} updateDate={fgiCurrent.date}></Artboard>
      </Col>
    </Row>
    <Row className="chart">
      <p className="chart-title">Fear & Greed Index (FGI) vs. VNindex</p>
      <p className="chart-desc">
        <span className="value-line mr-4">S&P 500</span>
        <span className="index-line">Fear & Greed Index</span>
      </p>
      <MarketChart indexData={fgiindexData} keys={fgikeyData} valueData={valueData}></MarketChart>
      <p className="chart-source">Source: CNN (Fear & Greed Index)</p>
    </Row>
  </Container>
};

export default Market;
