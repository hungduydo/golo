import React from "react";

const Up = props => {
  return (
    <i className="code-up ml-1">{props.children} <i className="fas fa-caret-up"></i></i>
  )
}

const Down = props => {
  return (
    <i className="code-down ml-1">-{props.children} <i className="fas fa-caret-down"></i></i>
  )
}

const Topbar = () => {
  return (
    <div className="marquee">
      <div className="track">
        <div className="content">
          <span className="mx-3">MARUTI 6,146.15 <Down>1.07%</Down></span>
          <span className="mx-3">RELIANCE 2,146.15 <Up>4.29%</Up></span>
          <span className="mx-3">SBIN 191.95 <Down>3.17%</Down></span>
          <span className="mx-3">TCS 2,157.40 <Down>0.63%</Down></span>
          <span className="mx-3">MARUTI 6,146.15 <Down>1.07%</Down></span>
          <span className="mx-3">RELIANCE 2,146.15 <Up>4.29%</Up></span>
          <span className="mx-3">SBIN 191.95 <Down>3.17%</Down></span>
          <span className="mx-3">TCS 2,157.40 <Down>0.63%</Down></span>
          <span className="mx-3">MARUTI 6,146.15 <Down>1.07%</Down></span>
          <span className="mx-3">RELIANCE 2,146.15 <Up>4.29%</Up></span>
          <span className="mx-3">SBIN 191.95 <Down>3.17%</Down></span>
          <span className="mx-3">TCS 2,157.40 <Down>0.63%</Down></span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
