import React, { useState } from 'react';
import chair from '../../../images/chair.png';
import './AppointmentHeader.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const AppointmentHeader = () => {

    const [date, setDate] = useState(new Date());

    const onChange = (value) => {
        setDate(value);
    }
    return (
        <div>
            <main style={{
                height: '600px',
            }} className="appointmentHeader-container row d-flex align-items-center" >
                <div className="col-md-4 offset-md-1">
                    <Calendar
                        onChange={onChange}
                        value={date}
                    />
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </main >
            <BookingAppointment date={date}></BookingAppointment>
        </div>
    );
};

export default AppointmentHeader;