import React, { Component } from 'react'
import './SideDrawer.style.scss'

const sideDrawerButtons = props => (
    <nav className='side-drawer'>
        <ul>
            <li ><a className='close-button' onClick={props.click}>Close X</a></li>
            <li><a href='/'>Reports</a></li>
            <li><a href='/'>SpreadSheet</a></li>
            <li><a href='/'>Presentation</a></li>
            <li><a href='/signin'>Logout</a></li>
            
        </ul>
    </nav>
    );
export default sideDrawerButtons;