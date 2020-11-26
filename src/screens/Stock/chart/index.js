import React from 'react';
import { Hint, HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from "react-vis";
import './chart.scss';
const MarketChart = (props) => {
  return (
    <div className="combine-chart">
      <XYPlot width={1200} height={300} className="value-chart">
        <VerticalGridLines />
        <HorizontalGridLines />
        {/* <XAxis tickValues={[2012, 2013, 2014, 2015, 2016, 2017, 2018]}  hideTicks={false}/> */}
        <YAxis orientation="right" />
        <LineSeries
          data={props.valueData} />

      </XYPlot>

      <XYPlot width={1200} height={200} className="index-chart" yPadding={30} xType="time">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickValues={props.keys ? props.keys : null}/>
        <YAxis tickValues={[20, 80]} orientation="right" />

        <LineSeries className="line-index"
          data={props.indexData}/>
      </XYPlot>

    </div>

  )
}

export default MarketChart;