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

const BookingModal = ({ modalIsOpen, title, date, closeModal }) => {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data) => {
        data.appointmentDate = (date).toDateString();
        data.bookingDate = (new Date()).toDateString();
        data.subject = title;
        axios.post('https://calm-woodland-69462.herokuapp.com/booking', data)
            .then(function (response) {
                console.log(response);
                if (response.data.insertedCount > 0) {
                    closeModal();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
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
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                        <input {...register("name")} name='name' type="name" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">Number</label>
                        <input {...register("number")} name="number" type="phoneNumber" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputCity" className="form-label">Age</label>
                        <input {...register("age")} name='age' type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Gender</label>
                        <select {...register("gender")} name='gender' id="inputState" className="form-select">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputZip" className="form-label">Weight</label>
                        <input {...register("weight")} name="weight" type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-md-10 mt-2">
                        <button type="submit" className="btn btn-brand">Book Appointment</button>
                    </div>
                    <div className="col-md-2 mt-2">
                        <button className="btn btn-brand" onClick={closeModal}>Close</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default BookingModal;