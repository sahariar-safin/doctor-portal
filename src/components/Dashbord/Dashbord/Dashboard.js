import React, { useState } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import AddDoctor from '../AddDoctor/AddDoctor';
import AppointmentDashboard from '../AppointmentDashbord/AppointmentDashbord';
import Sidebar from '../SideBar/SideBar';

const Dashboard = () => {

    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
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