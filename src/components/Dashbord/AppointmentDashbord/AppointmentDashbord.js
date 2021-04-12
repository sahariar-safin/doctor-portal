import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Appointments from '../Appointments/Appointments';

const AppointmentDashboard = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (value) => {
        setDate(value);
    }

    return (
        < div className="row">
            <div className="col-md-4 mt-5">
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
            <div className="col-md-8 mt-5">
                <Appointments date={(date).toDateString()}></Appointments>
            </div>
        </div>
    );
};

export default AppointmentDashboard;