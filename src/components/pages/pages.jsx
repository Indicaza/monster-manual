import React from 'react';
import page1 from './imgs/paper1.png';
import page2 from './imgs/paper2.png';
import page5 from './imgs/paper5.png';
import page6 from './imgs/paper6.png';
import geo1 from './imgs/01.png';
import geo2 from './imgs/02.png';
import geo3 from './imgs/03.png';
import geo4 from './imgs/04.png';
import geo5 from './imgs/05.png';
import geo6 from './imgs/06.png';
import geo7 from './imgs/07.png';
import geo8 from './imgs/08.png';
import geo9 from './imgs/09.png';

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from 'react-intersection-observer';
import './pages.js';
import './pages.css';


export const Page = React.memo((props) => {
  
  const pagesArray = [page1, page2, page5, page6];
  const randomIndex = Math.floor(Math.random() * pagesArray.length);
  const page = pagesArray[randomIndex];

  const geoArray = [geo1, geo2, geo3, geo4, geo5, geo6, geo7, geo8, geo9];
  const randomGeoIndex = Math.floor(Math.random() * pagesArray.length);
  const geo = geoArray[randomGeoIndex];

  const [ref, inView] = useInView({
    threshold: .25,  // An element is considered in view when it is 50% in view
  });

  
  return (
    <div ref={ref} className='container'>

        <div className={inView ? 'page fade-bottom grow' : 'page'} style={{backgroundImage:`url(${page})`}}>
         

          <div className='sacredGeo' style={{backgroundImage:`url(${geo})`}}/>

            <div  className='title'>
              <h2>{props.name}</h2>
              <div className='challenge'>
                  <h3>{props.meta}</h3>
                  <p>CR: {props.Challenge}</p>
              </div>
            </div>
            
            <div className='pictureContainer grow'>
              <LazyLoadImage 
                className="picture" 
                effect="blur"
                src={props.img_url}
                // PlaceholderSrc={'./imgs/treeLogo.png'}
                alt="Picture of a monster"
              />
              <div className='savingThrows'>
                <p>Saving Throws: {props['Saving Throws']}</p>
              </div>
            </div>

            {/* <div className="picture grow" style={{backgroundImage:`url(${props.img_url})`}}> */}
            {/* </div> */}

            <div className='details grow'>
              <p className='grow'>Armor Class: {props['Armor Class']}</p>
              <p className='grow'>Hit Points: {props['Hit Points']}</p>
              <p className='grow'>Speed: {props.Speed}</p>
            </div>

            <div className='content'>
              <div className='stats grow'>
                <ul>
                  <li className='grow'>
                    <p>STR: {props.STR} - {props.STR_mod}</p>
                  </li>
                  <li className='grow'>
                    <p>DEX: {props.DEX} - {props.DEX_mod}</p>
                  </li>
                  <li className='grow'>
                    <p>CON: {props.CON} - {props.CON_mod}</p>
                  </li>
                  <li className='grow'>
                    <p>INT: {props.INT} - {props.INT_mod}</p>
                  </li>
                  <li className='grow'>
                    <p>WIS: {props.WIS} - {props.WIS_mod}</p>
                  </li>
                  <li className='grow'>
                    <p>CHA: {props.CHA} - {props.CHA_mod}</p>
                  </li>
                </ul>
              </div>
              <div className='body grow'>
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
});