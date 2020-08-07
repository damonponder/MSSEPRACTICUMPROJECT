import React, {Component} from 'react';
import { Switch, Route, Router } from  "react-router-dom";
import SignIn from './components/home/signin';
import SignUp from './components/registration/signup';
import Admin from './components/admin/admin';
import SpreadSheet from './components/spreadsheet/spreadsheet';
import IncidentDashboard from './components/Incident/Incident';
import history from "../src/Utils/history";
import PresentationDashboard from './components/presentation/presentation';
import './App.css';



class App extends Component {
  render() {
    return (
        <Router history={history}>
          <Switch>
            <div className="App">
              <Route exact path="/" component={SignIn}/>
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/execDashboard" component={Admin}/>
              <Route exact path="/spreadSheet" component={SpreadSheet}/>
              <Route exact path="/presentation" component={PresentationDashboard}/>
              <Route exact path="/incident" component={IncidentDashboard}/>


            </div>
          </Switch>
        </Router>
    );
  }
}

export default App;
