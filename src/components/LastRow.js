import React from 'react';
import Testimonial from './Testimonial';
import Banner from './Banner'
import Tab from './Tab'
import './LastRow.css'

const LastRow = () => {
  return(
    <div id="last-row">
      <div id="testimonials">
        <h4 className="border-text">TESTIMONIALS</h4>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
      <div id="developement">
        <h4 className="border-text">RECENT WORK</h4>
          <div className="tabs">
            <Tab />
            <Tab />
          </div>
      </div>

    <Banner text={<h2>GET IN TOUCH WITH US<span>NOW!</span></h2>}/>
   </div>
  );
}

export default LastRow;