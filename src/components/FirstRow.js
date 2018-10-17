import React from 'react';
import Trait from './Trait.js'
import './FirstRow.css'
import { MdStayCurrentPortrait } from "react-icons/md";
import { MdDesktopWindows } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { MdAutorenew } from "react-icons/md";

const FirstRow = () => {
  return(
    <div id="first-row" >
      <Trait icon={<MdStayCurrentPortrait />}/>
      <Trait icon={<MdDesktopWindows />}/>
      <Trait icon={<MdComputer />}/>
      <Trait icon={<MdAutorenew />}/>
   </div>
  );
}

export default FirstRow;