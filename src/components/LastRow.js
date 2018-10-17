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
            <Tab 
            button="DESIGN"
            id="tab-1"
            name="tab-group-1"
            title="The Design"
            checked={true}
            />
            <Tab 
            button="PRODUCTION"
            id="tab-2"
            name="tab-group-2"
            title="Production"
            checked={false}
            />
          </div>
      </div>

    <Banner 
    text={<h2>GET IN TOUCH WITH US<span>NOW!</span></h2>}
    button= 'CONTACT US'
    />
   </div>
  );
}

export default LastRow;