import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentDashboard = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (value) => {
        setDate(value);
    }
    
    return (
        <div>
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

export default AppointmentDashboard;