import React from 'react';
import './Toolbar.style.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import image1 from '../../assets/WOT.png'


const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar_navigation'>
            <div className='toolbar-toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='toolbar_logo'>
                <img className='image-toolbar' src={image1}/>
                </div>
            <div className='spacer'></div>
            <div className='toolbar_navigation-items'>
                <ul>
                    <li><a href="/execDashboard">Graphs</a></li>
                    <li><a href="/spreadsheet">Spreadsheet</a></li>
                    <li><a href="/presentation">Presentation</a></li>
                    <li><a href='/'>Logout</a></li>

                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;