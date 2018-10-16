import React from 'react';
import imgPlaceholder from '../assets/img-placeholder.png';
import  './BlogTitle.css'

const BlogTitle = () => {
  return(
    <div className="blog-title">
        <img src={imgPlaceholder} alt="image placeholder"></img>
        <h5>Blog title</h5>
        <p>Lick yarn hanging out of own butt cat is love, cat is life lick the curtain just to be annoying.
        </p>
    </div>
  );
}

export default BlogTitle;