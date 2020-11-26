import React from 'react';
import { Hint, HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from "react-vis";
import './range.scss';
const StockRange = (props) => {
  return (
    <div className="code-range">
      <span>{props.start}</span>
      <div className="range-bar">
        <span className="caret">Today</span>
        <p>52 Week Range</p>
      </div>
      <span>{props.end}</span>
     
    </div>
  )
}

export default StockRange;