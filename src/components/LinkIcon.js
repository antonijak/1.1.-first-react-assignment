import React from 'react';

const LinkIcon= (props) => {
  return(
    <a href={props.link} className="tooltip">
      {props.icon}
      <div className="tooltiptext">Vimeo</div>
    </a>
  );
}

export default LinkIcon;