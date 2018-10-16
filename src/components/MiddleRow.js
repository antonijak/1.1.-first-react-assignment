import React from 'react';
import BlogTitle from './BlogTitle'
import './MiddleRow.css'

const MiddleRow = () => {
  return(
    <div id="middle-row">
    <h4 className="border-text">RECENT WORK</h4>
      <BlogTitle/ >
      <BlogTitle/ >
      <BlogTitle/ >
   </div>
  );
}

export default MiddleRow;