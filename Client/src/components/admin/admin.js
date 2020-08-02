import React, {Component} from 'react';
import './admin.style.scss'
import Line from '../line/line';
import Pie from '../pie/pie';
import DoughNutChart from '../doughnut/doughnut'
import BarChart from '../bar/bar'
import Toolbar from '../Toolbar/ToolBar';
import SideDrawer from '../SideDrawer/SideDrawer';

export default class Admin extends Component {
    
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
                    <Line/>
                    <Pie/>
                    <DoughNutChart/>
                    <BarChart/>
                     
                </div>
            </React.Fragment>
        )
    }
}