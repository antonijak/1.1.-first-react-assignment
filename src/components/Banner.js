import React from 'react';
import './Banner.css'

const Banner = (props) => {
  return(
    <div className="banner" id="banner1">
    {props.text}
    <button className="big-button">GET STARTED</button>
  </div>
  );
}

export default Banner;