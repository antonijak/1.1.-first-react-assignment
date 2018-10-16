import React from 'react';
import './Tab.css'

const Tab = () => {
  return(
    <div className="tab">
      <input type="radio" id="tab-1" name="tab-group-1" checked></input>
        <label for="tab-1">DESIGN</label>
        <div className="tab-content">
          <h5>The Design</h5>
          <p>Chirp at birds under the bed stare out the window i like cats because they are fat and fluffy so human give
            me attention meow, plays league of legends.
          </p>
          <p>
            Chirp at birds under the bed stare out the window i like cats because they are fat and fluffy so human give me attention
            meow, plays league of legends.
          </p>
          <button>READ MORE</button>
        </div>
    </div>
  );
}

export default Tab;