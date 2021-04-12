import React, { useState } from 'react';
import AppointmentDashboard from '../AppointmentDashbord/AppointmentDashbord';

const Dashboard = () => {

    return (
        <div className="container-fluid row">
            <div className="col-md-4 bg-brand">
                <button className="btn btn-primary">Appointment</button>
            </div>
            <div className="col-md-8">
                <AppointmentDashboard></AppointmentDashboard>
            </div>
        </div>
    );
};

export default Dashboard;