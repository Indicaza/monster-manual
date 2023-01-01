import React from 'react';
import monsters from './monsters.json';
import { TopNav } from './componants/topnav/topnav';
import { Page } from './componants/pages/pages.jsx';
import './App.css';
// import { useInView } from 'react-intersection-observer';


function App() {

  return (
    <div className='background'>
      <TopNav />
      <div className='scrollContainer'>
          {monsters.map((monsters, i) => (
            <Page className='page' key={i} {...monsters} />
          ))}
      </div>
    </div>
  );
}


export default App;