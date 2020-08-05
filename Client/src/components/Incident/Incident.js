import React, {Component} from 'react';
import Pie from '../pie/pie';
import Line from '../line/line';
import DoughNutChart from '../doughnut/doughnut';
import BarChart from '../bar/bar';
import Toolbar from '../Toolbar/ToolBar';
import SideDrawer from '../SideDrawer/SideDrawer';
import ToggleButton from '../ToggleButton/ToggleButton';



export default class IncidentDashboard extends Component {
    
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
                    <ToggleButton />
                    <Pie/>
                    <Line/>
                    <DoughNutChart/>
                    <BarChart/>
                     
                </div>
            </React.Fragment>
        )
    }
}