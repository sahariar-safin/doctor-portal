import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, watch } = useForm();
    const [image, setImage] = useState();
    const handleImage = (e) => {
        const doctorData = new FormData();
        doctorData.append("image", e.target.files[0])
        axios.post('http://localhost:5000/uploadDoctorImage', doctorData)
            .then(function (response) {
                setImage(response.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onSubmit = data => {
        data.image = image;
        console.log(data);
        axios.post('http://localhost:5000/addDoctor', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <form class="row g-3 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div class="col-md-12">
                <label for="inputName" class="form-label">Name</label>
                <input {...register("name")} type="Name" class="form-control" id="inputName" />
            </div>
            <div class="col-md-12">
                <label for="inputEmail" class="form-label">Email</label>
                <input {...register("email")} type="email" class="form-control" id="inputEmail" />
            </div>
            <div class="col-md-12">
                <label for="inputNumber" class="form-label">Number</label>
                <input {...register("phoneNumber")} type="number" class="form-control" id="inputNumber" />
            </div>
            <div class="col-md-12 mb-3">
                <label for="formFile" class="form-label">Upload Image</label>
                <input onChange={handleImage} class="form-control" type="file" id="formFile" />
            </div>
            <input type="submit" className="btn btn-brand mt-3 ml-3" value="Add Doctor" />
        </form >
    );
};

export default AddDoctor;