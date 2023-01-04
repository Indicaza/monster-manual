import React from 'react';
import './topnav.css';


export const TopNav = () => {
    return (
        <div className='topnav growNav'>
            <div className='logoContainer growNav'>
                <div className='logo growNav'></div>
                <h1>Monster Manual</h1>
            </div>
            <div className='search growNav'>
                <input type='text' placeholder='Search'></input>
            </div>
        </div>
    )
}