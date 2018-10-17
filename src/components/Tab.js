import React from 'react';
import './Tab.css'

const Tab = (props) => {
  return(
    <div className="tab">
      <input type="radio" id={props.id} name={props.name} checked={props.checked}></input>
        <label for={props.id}>{props.button}</label>
        <div className="tab-content">
          <h5>{props.title}</h5>
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