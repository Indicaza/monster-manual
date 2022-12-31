import React from 'react';
import page1 from './imgs/paper1.png';
import page2 from './imgs/paper2.png';
import page3 from './imgs/paper3.png';
import page5 from './imgs/paper5.png';
import page6 from './imgs/paper6.png';
// import props from '../props.json';
// import { useRef, useEffect } from 'react';

import './pages.js';
import './pages.css';


export const Page = (props) => {
  const pagesArray = [page1, page2, page5, page6];
  const randomIndex = Math.floor(Math.random() * pagesArray.length);
  const page = pagesArray[randomIndex];


  return (
    <div className='container'>
        <div className='page reveal fade-bottom' style={{backgroundImage:`url(${page})`}}>
          <div className='title'>
            <h2>{props.name}</h2>
            <div className='challenge'>
                <h3>{props.meta}</h3>
                <p>CR: {props.Challenge}</p>
            </div>
          </div>
          <div 
          // className=''
          id="torn_edge_banner" 
          className="picture torn_container torn_left torn_right"
            style={{
              backgroundImage:`url(${props.img_url})`,
            }}
          />
          <div className='savingThrows'>
            <p>Saving Throws: {props['Saving Throws']}</p>
          </div>
          <div className='details'>
            <p>Armor Class: {props['Armor Class']}</p>
            <p>Hit Points: {props['Hit Points']}</p>
            <p>Speed: {props.Speed}</p>
          </div>
          <div className='content'>
            <div className='stats'>
              <ul>
                <li>
                  <p>STR: {props.STR} - {props.STR_mod}</p>
                </li>
                <li>
                  <p>DEX: {props.DEX} - {props.DEX_mod}</p>
                </li>
                <li>
                  <p>CON: {props.CON} - {props.CON_mod}</p>
                </li>
                <li>
                  <p>INT: {props.INT} - {props.INT_mod}</p>
                </li>
                <li>
                  <p>WIS: {props.WIS} - {props.WIS_mod}</p>
                </li>
                <li>
                  <p>CHA: {props.CHA} - {props.CHA_mod}</p>
                </li>
              </ul>
            </div>
            <div className='body'>
              <ul className='abilities'>
                <h3>Ablilities</h3>
                <li>
                  <p>Languages: {props.Languages}</p>
                </li>
                <li>
                  <p>Senses: {props.Senses}</p>
                </li>
                <li>
                  <p>Skills: {props.Skills}</p>
                </li>
              </ul>
                <h3>Traits</h3>
                <div className='text' id='traits' dangerouslySetInnerHTML={{__html:props.Traits}}></div>
                <h3>Actions</h3>
                <div className='text' dangerouslySetInnerHTML={{__html:props.Actions}}></div>
                <h3>Legendary Actions</h3>
                <div className='text' dangerouslySetInnerHTML={{__html:props['Legendary Actions']}}></div>
            </div>
          </div>
        </div>
    </div>
  );
}