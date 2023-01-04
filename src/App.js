import React from 'react';
import monsters from './monsters.json';
import { TopNav } from './components/topnav/topnav';
import './App.css';
// import { Suspense } from 'react';
import { Page } from './components/pages/pages.jsx';
// const Page = lazy(() => import('./componants/pages/pages'));
// import { useInView } from 'react-intersection-observer';


function App() {

  return (
    <div className='background'>
      <TopNav />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <div className='scrollContainer'>
          {monsters.map((monsters, i) => (
            <Page className='page' key={i} {...monsters} />
          ))}
        </div>
      {/* </Suspense> */}
    </div>
  );
}


export default App;