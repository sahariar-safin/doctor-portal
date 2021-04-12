import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashbord/Dashbord/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route exact path="/dashboard/appointment">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
