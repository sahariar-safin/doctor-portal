import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {

    const [date, setDate] = useState(new Date());

    const onChange = (value) => {
        setDate(value);
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-4 bg-brand">
                <button className="btn btn-primary">Appointment</button>
            </div>
            <div className="col-md-4 mt-5">
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
            <div className="col-md-4 mt-5">
                
            </div>
        </div>
    );
};

export default Dashboard;