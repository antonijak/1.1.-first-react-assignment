import React from 'react';
import headerImage from '../assets/Header-img.png'
import './Header.css';
import Banner from './Banner'

const Header = () => {
  return(
    <header> 
      <div id="main-picture">
        <img src={headerImage} alt="image of computers"/>
      </div>
      <div id="main-headline">
      <h1>
      <span>POWERFULLY SIMPLE</span> WITH A
      <span> SQUEEKY CLEAN</span> DESIGN.
      </h1>
    <p>Find out now how you can offer quick and powerful solutions to you customers now!</p>
    <button className="big-button">LEARN MORE</button>
    </div>
    <Banner text={<h2>CREATE A<span>POWERFUL</span> SOLUTION NOW!</h2>}/>
    </header>
  );
}

export default Header;


