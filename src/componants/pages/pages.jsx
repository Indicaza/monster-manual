import React from 'react';
import page1 from './imgs/paper1.png';
import page2 from './imgs/paper2.png';
import page3 from './imgs/paper3.png';
import page4 from './imgs/paper4.png';
import page5 from './imgs/paper5.png';
import page6 from './imgs/paper6.png';
import page7 from './imgs/paper7.png';
import monsters from '../monsters.json';
// import { useRef, useEffect } from 'react';

import './pages.js';
import './pages.css';


export const Page = () => {
  const pagesArray = [page1, page2, page3, page4, page5, page6, page7];
  const randomIndex = Math.floor(Math.random() * pagesArray.length);
  const page = pagesArray[randomIndex];


  return (
    <div className='container'>
      {monsters.map((monsters) => (
        <div className='page reveal fade-bottom' style={{backgroundImage:`url(${page})`}}>
          <div className='title'>
            <h2>{monsters.name}</h2>
            <div className='challenge'>
                <h3>{monsters.meta}</h3>
                <p>CR: {monsters.Challenge}</p>
            </div>
          </div>
          <div className='picture'
            style={{
              backgroundImage:`url(${monsters.img_url})`,
            }}
          />
          <div className='savingThrows'>
            <p>Saving Throws: {monsters['Saving Throws']}</p>
          </div>
          <div className='details'>
            <p>Armor Class: {monsters['Armor Class']}</p>
            <p>Hit Points: {monsters['Hit Points']}</p>
            <p>Speed: {monsters.Speed}</p>
          </div>
          <div className='content'>
            <div className='stats'>
              <ul>
                <li>
                  <p>STR: {monsters.STR} - {monsters.STR_mod}</p>
                </li>
                <li>
                  <p>DEX: {monsters.DEX} - {monsters.DEX_mod}</p>
                </li>
                <li>
                  <p>CON: {monsters.CON} - {monsters.CON_mod}</p>
                </li>
                <li>
                  <p>INT: {monsters.INT} - {monsters.INT_mod}</p>
                </li>
                <li>
                  <p>WIS: {monsters.WIS} - {monsters.WIS_mod}</p>
                </li>
                <li>
                  <p>CHA: {monsters.CHA} - {monsters.CHA_mod}</p>
                </li>
              </ul>
            </div>
            <div className='body'>
              <ul className='abilities'>
                <h3>Ablilities</h3>
                <li>
                  <p>Languages: {monsters.Languages}</p>
                </li>
                <li>
                  <p>Senses: {monsters.Senses}</p>
                </li>
                <li>
                  <p>Skills: {monsters.Skills}</p>
                </li>
              </ul>
                <h3>Traits</h3>
                <div className='text' id='traits' dangerouslySetInnerHTML={{__html:monsters.Traits}}></div>
                <h3>Actions</h3>
                <div className='text' dangerouslySetInnerHTML={{__html:monsters.Actions}}></div>
                <h3>Legendary Actions</h3>
                <div className='text' dangerouslySetInnerHTML={{__html:monsters['Legendary Actions']}}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}