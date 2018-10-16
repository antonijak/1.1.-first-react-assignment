import React from 'react';
import FirstRow from './FirstRow';
import MiddleRow from './MiddleRow';
import LastRow from './LastRow';
import './Main.css'

const Main = () => {
  return(
    <main>
      <FirstRow />
      <MiddleRow />
      <LastRow />
   </main>
  );
}

export default Main;