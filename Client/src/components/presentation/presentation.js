import React, {Component} from 'react';
import './presentation.style.scss'
import Toolbar from '../Toolbar/ToolBar';
import SideDrawer from '../SideDrawer/SideDrawer';



export default class PresentationDashboard extends Component {
    
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    drawerCloseClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    }
    
    render() {

        let sideDrawer;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer click={this.drawerCloseClickHandler}/>; 
    
        }
        return (
            <React.Fragment>
                <div style={{height:'100%'}}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                    {sideDrawer}
                    
                </div>
            </React.Fragment>
        )
    }
}