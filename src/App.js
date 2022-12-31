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
            {monsters.map((monsters, i) => (
              <div className='scrollContainer'>
              <Page className='Page' key={i} {...monsters} />
              </div>
            ))}
    </div>
  );
}


export default App;