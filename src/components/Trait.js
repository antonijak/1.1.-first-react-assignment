import React from 'react';
import './Trait.css'


const Trait = (props) => {
  return(
    <div className="traits" id="superbly">
        <div className="round-icon">
          {props.icon}
        </div>
        <h3>
          <span>SUPERBLY</span> RESPONSIVE</h3>
        <p>"Rub face on owner. Nya nya nyan need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me so make muffins, for sleep nap... "</p>
        <button>READ MORE</button>
      </div>
  );
}

export default Trait;