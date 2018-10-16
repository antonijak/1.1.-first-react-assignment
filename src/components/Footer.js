import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <footer> 
      <div id="footer-items">
        <div className="foot-item" id="about-us">
          <h4>ABOUT US</h4>
          <p>Lick yarn hanging out of own butt cat is love, cat is life lick the curtain.</p>
          <address>
            Adress 12
            <br/> Town 10000
            <br/> Country
            <br/> +35862345
          </address>
        </div>
        <div className="foot-item" id="latest-tweets">
          <h4>LATEST TWEETS</h4>
          <p>Lick yarn hanging out of own butt cat is love, cat is life.</p>
          <p>Lick yarn hanging out of own butt cat is love, cat is life.</p>
        </div>
        <div className="foot-item" id="latest-posts">
          <h4>LATEST POSTS</h4>
          <p className="foot-post" id="first-post">Lick yarn hanging out of own butt.</p>
          <p className="foot-post" id="second-post">Lick yarn hanging out of own butt.e.</p>
          <p className="foot-post">Lick yarn hanging out of own butt cat.</p>
          <p>Lick yarn hanging out of own butt..</p>
        </div>
        <div className="foot-item" id="flickr">
          <h4>FLICKR</h4>
          <div id="grid">
            <div className="black-square" id="b1"></div>
            <div className="black-square" id="b2"></div>
            <div className="black-square" id="b3"></div>
            <div className="black-square" id="b4"></div>
            <div className="black-square" id="b5"></div>
            <div className="black-square" id="b6"></div>
            <div className="black-square" id="b7"></div>
            <div className="black-square" id="b8"></div>
          </div>
        </div>
        </div>
      <div id="links">
        <h4>COPYRIHT ALL RIGHTS RESERVED 2018</h4>
        <div id="icons">
          <a href="" className="tooltip">
            <i className="fab fa-twitter-square" ></i>
            <div className="tooltiptext">Twitter</div>
          </a>
          <a href="" className="tooltip">
            <i className="fab fa-facebook-square"></i>
            <div className="tooltiptext">Facebook</div>
          </a> 
          <a href="" className="tooltip">
            <i className="fab fa-pinterest-square"></i>
            <div className="tooltiptext">Pinterst</div>
          </a>
          <a href="" className="tooltip">
            <i className="fab fa-vimeo-square"></i>
            <div className="tooltiptext">Vimeo</div>
          </a>
          <a href="" className="tooltip">
            <i className="fab fa-google-plus-square"></i>
            <div className="tooltiptext">Google +</div>
          </a> 
          <a href="" className="tooltip">
            <i className="fab fa-github-square"></i>
            <div className="tooltiptext">GitHub</div>
          </a> 
        </div>
        <a href="#main-headline" id="arrow" title="top">
          <i className="fas fa-caret-square-up"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;