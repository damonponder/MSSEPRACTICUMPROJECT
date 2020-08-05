import React, {Component} from 'react';
import './ToggleButton.style.scss'
import {Redirect} from 'react-router-dom';

export default class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {redirectObservation: null};
        this.state = {redirectIncident: null};
        this.handleChangeObservation = this.handleChangeObservation.bind(this);
        this.handleChangeIncident = this.handleChangeIncident.bind(this);
    }

    handleChangeObservation() {
        this.setState({redirectObservation:"/execDashboard"})
    }

    handleChangeIncident() {
        this.setState({redirectIncident:"/incident"})
    }
render () {
    if (this.state.redirectObservation) {
        return <Redirect to={this.state.redirectObservation}/>
    } 
    if (this.state.redirectIncident) {
            return <Redirect to={this.state.redirectIncident}/>
}
    return(
        <React.Fragment>
        
        <div className='toggle-switch'>
            <button className="observation-button" onClick={this.handleChangeObservation} redirectObservation={this.state.redirect}>Observation Reports</button>
            <button className="incident-button" onClick={this.handleChangeIncident} redirectIncident={this.state.redirect}>Incident Reports</button>
            </div>
            </React.Fragment>
        );
    }
}