import React from 'react';
import page1 from './imgs/paper1.png';
import page2 from './imgs/paper2.png';
import page3 from './imgs/paper3.png';
import page4 from './imgs/paper4.png';
import page5 from './imgs/paper5.png';
import page6 from './imgs/paper6.png';
import page7 from './imgs/paper7.png';
import monsters from '../monsters.json';
// import { Picture } from './picture/picture';
import './pages.css';


export const Page = () => {
  const pagesArray = [page1, page2, page3, page4, page5, page6, page7];
  const randomIndex = Math.floor(Math.random() * pagesArray.length);
  const page = pagesArray[randomIndex];

  return (
    <div className='container'>
      {monsters.map((monsters) => (
        <div className='page' style={{backgroundImage:`url(${page})`}}>
                  <h2>{monsters.name}</h2>
                  <div className='picture'
                    style={{
                      backgroundImage:`url(${monsters.img_url})`,
                    }}
                  />
                  <div className='stats'>
                    <p>STR: {monsters.STR}</p>
                    <p>DEX: {monsters.DEX}</p>
                    <p>CON: {monsters.CON}</p>
                    <p>INT: {monsters.INT}</p>
                    <p>WIS: {monsters.WIS}</p>
                    <p>CHA: {monsters.CHA}</p>
                  </div>

        </div>
      ))}
    </div>
  );
}