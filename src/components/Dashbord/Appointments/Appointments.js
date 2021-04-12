import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Appointments = ({ date }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/appointment', { date })
            .then(function (response) {
                console.log(response.data);
                setAppointments(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [date])

    return (
        <>
            <h1 className="text-brand">Appointments</h1>
            <small>{date}</small>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Booking Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{appointment.name}</td>
                                <td>{appointment.number}</td>
                                <td>{appointment.bookingDate}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

export default Appointments;