import React from 'react';
// import monsters from './monsters.json';
import { Page } from './componants/pages/pages.jsx';
// import { Picture } from './componants/picture/picture';
import './App.css';
// import { useInView } from 'react-intersection-observer';

function App() {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });


  return (
    <div className='background'>
          <Page/>
    </div>
  );
}


export default App;

