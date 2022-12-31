import React from 'react';
import './topnav.css';


export const TopNav = () => {
    return (
        <div className='topnav'>
            <div className='logoContainer'>
                <div className='logo'></div>
                <h1>Monster Manual</h1>
            </div>
            <div className='search'>
                <input type='text' placeholder='Search'></input>
            </div>
        </div>
    )
}