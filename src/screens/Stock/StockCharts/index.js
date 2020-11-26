import React from 'react';
import { Hint, HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from "react-vis";
import { Row } from 'reactstrap';
const StockCharts = (props) => {
  return (
    <div className="combine-chart">
      <Row className="chart">
        <XYPlot width={1200} height={500} className="index-chart" xType="time">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickValues={props.keys ? props.keys : null} />
          <YAxis orientation="right" />

          <LineSeries className="line-index"
            data={props.indexData} />
        </XYPlot>
      </Row>
      <p className="chart-pe-pb">Đồ Thị Định Giá PE, PB</p>
      <Row className="chart">
        
        <p className="chart-title">Đồ Thị Định Giá PE, PB</p>
        <p className="chart-desc">
          <span className="index-line">Fear & Greed Index</span>
        </p>
        <XYPlot width={1200} height={500} className="index-chart" xType="time">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickValues={props.keys ? props.keys : null} />
          <YAxis orientation="right" />

          <LineSeries className="line-index"
            data={props.indexData} />
        </XYPlot>
      </Row>

      <Row className="chart">
        <p className="chart-title">Đồ Thị Định Giá PE, PB</p>
        <p className="chart-desc">
          <span className="index-line">Fear & Greed Index</span>
        </p>
        <XYPlot width={1200} height={500} className="index-chart" xType="time">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickValues={props.keys ? props.keys : null} />
          <YAxis orientation="right" />

          <LineSeries className="line-index"
            data={props.indexData} />
        </XYPlot>
      </Row>
    </div>
  )
}

export default StockCharts;