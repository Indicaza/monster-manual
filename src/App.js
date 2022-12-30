import React from 'react';
import monsters from './monsters.json';
import { Page } from './componants/pages/pages.jsx';
import './App.css';
// import { useInView } from 'react-intersection-observer';


function App() {

  return (
    <div className='background'>
            {monsters.map((monsters, i) => (
              <Page key={i} {...monsters} />
            ))}
    </div>
  );
}


export default App;