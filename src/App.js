import React from 'react';
// import monsters from './monsters.json';
import { Page } from './componants/pages/pages.js';
// import { Picture } from './componants/picture/picture';
import './App.css';


function App() {
  return (
    <div className='container'>
          <Page>
          </Page>
    </div>
  );
}


export default App;


// function App() {
//   return (
//     <div className='container'>
      
//         <div className='monsterTable'>
//           <div>
//             {monsters.map((monsters) => (
//               <Page>
//                 <div key={monsters.id}>
//                   <h2>{monsters.name}</h2>
//                   <div className='monsterPicture' style={{ 
//                     margin: "0 auto",
//                     backgroundImage:`url(${monsters.img_url})`,
//                     backgroundRepeat:"no-repeat",
//                     backgroundSize:"contain", 
//                     height:600,
//                     width:600,
//                     position: "absolute",
//                   }}/>
//                 </div>
//               </Page>
//             ))}
//           </div>
//         </div>
//     </div>
//   );
// }