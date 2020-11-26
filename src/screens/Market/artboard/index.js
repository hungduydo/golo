import React from 'react';
import Moment from 'react-moment';
import './artboard.scss';
const Artboard = (props) => {
  const point = (props.point * 1).toFixed(2);
  let updateDate = new Date((props.updateDate + '000')*1).toDateString();
  const rotatex = `rotate(272deg) rotate(${232 * (point * 1 / 100)}deg)`;
  let level = Math.ceil(point / 20);
  level = level > 5 ? 0 : level;
  const className = `artboard lock${level}`
  const numClasses = `artboard-num num-${level}`;
  return (
    <div className={className}>
      <div className="active-section"></div>
      <div className="clockwise" style={{ transform: rotatex }}></div>
      <p className={numClasses}>
        {point}
        <span className="mbi-date">
          <Moment format="HH:mm D/M/yyyy">
            {updateDate}
          </Moment>
        </span>
      </p>
    </div>
  )
}

export default Artboard;