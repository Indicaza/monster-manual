import React from 'react';
import monsters from './monsters.json';
// import { TopNav } from './components/topnav/topnav';
import './App.css';
// import { Suspense } from 'react';
import { Page } from './components/pages/pages.jsx';
// const Page = lazy(() => import('./componants/pages/pages'));
// import { useInView } from 'react-intersection-observer';



function App() {

const [filter, filterSet] = React.useState("");

// function getPercent(array, percent) {
//   return array.slice(0, Math.ceil(array.length * percent / 100));
// }

window.addEventListener('scroll', function(){
  console.log('Are we there yet?')
})

  return (

    <div className='background'>
      {/* <TopNav {...monsters}/> */}


      <div className='topnav growNav'>
            <div className='logoContainer growNav'>
                <div className='logo growNav'></div>
                <h1>Monster Manual</h1>
            </div>
            <div className='search growNav'>
                <input 
                  type='text' 
                  placeholder='Search...' 
                  value={filter} 
                  onChange={(evt) => filterSet(evt.target.value)}
                />
            </div>
        </div>
        


        <div className='scrollContainer'>
          {monsters
          .filter((monsters) => monsters.name.toLowerCase().includes(filter.toLowerCase()))
          .slice(0, Math.ceil(monsters.length * 5 / 100))
          .map((monsters, i) => (
            <Page className='page' key={i} {...monsters} />
          ))}
        </div>
    </div>
  );
}


export default App;