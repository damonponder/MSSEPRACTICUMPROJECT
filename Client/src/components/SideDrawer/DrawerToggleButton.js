import React from 'react';
import './DrawerToggleButton.style.scss';



const drawerToggleButton = props => (
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button_line'></div>
        <div className='toggle-button_line'></div>
        <div className='toggle-button_line'></div>
    </button>
);

export default drawerToggleButton