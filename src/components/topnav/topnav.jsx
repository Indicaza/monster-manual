// import React from 'react';
// import monsters from '../monsters.json';
// import './topnav.css';


// export const TopNav = () => {

//     const [monsters, setNames] = React.useState(monsters);

//     const filterNames = (e) => {
//         const search = e.target.value.toLowerCase();
//         const filteredNames = monsters.filter(names => names.name.toLowerCase().includes(search));
//         setNames(filteredNames);
//     }



//     return (
//         <div className='topnav growNav'>
//             <div className='logoContainer growNav'>
//                 <div className='logo growNav'></div>
//                 <h1>Monster Manual</h1>
//             </div>
//             <div className='search growNav'>
//                 <input type='text' placeholder='Search...' value={monsters} onChange={(e) => filterNames(e)}/>
//             </div>
//         </div>
//     )
// }