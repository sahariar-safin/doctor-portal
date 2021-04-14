import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('https://calm-woodland-69462.herokuapp.com/doctors')
            .then(function (response) {
                setDoctors(response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;