import React, { useState } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import AddDoctor from '../AddDoctor/AddDoctor';
import AppointmentDashboard from '../AppointmentDashbord/AppointmentDashbord';

const Dashboard = () => {

    return (
        <div className="container-fluid row">
            <div className="col-md-4 bg-brand">
                <Link to="/dashboard/appointment"><button className="btn btn-primary">Appointment</button></Link>
                <Link to="/dashboard/addDoctor"><button className="btn btn-primary">Add Doctor</button></Link>
            </div>
            <div className="col-md-8">
                <Route path="/dashboard/appointment">
                    <AppointmentDashboard></AppointmentDashboard>
                </Route>
                <Route path="/dashboard/addDoctor">
                    <AddDoctor></AddDoctor>
                </Route>
            </div>
        </div>
    );
};

export default Dashboard;