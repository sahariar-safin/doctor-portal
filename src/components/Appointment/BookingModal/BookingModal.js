import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


Modal.setAppElement('#root')

const BookingModal = ({ modalIsOpen, title, date }) => {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data) => {
        data.appointmentDate = (date).toDateString();
        data.bookingDate = (new Date()).toDateString();
        axios.post('http://localhost:5000/booking', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    console.log(date);
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div>
                    <h1 className="text-center text-brand">{title}</h1>
                    <p className="text-center"><small>{(date).toDateString()}</small></p>
                </div>
                <form className="container row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input {...register("name")} name='name' type="name" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">Number</label>
                        <input {...register("number")} name="number" type="phoneNumber" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputCity" class="form-label">Age</label>
                        <input {...register("age")} name='age' type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Gender</label>
                        <select {...register("gender")} name='gender' id="inputState" class="form-select">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputZip" class="form-label">Weight</label>
                        <input {...register("weight")} name="weight" type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-brand">Book Appointment</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default BookingModal;