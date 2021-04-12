import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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

const BookingModal = ({ modalIsOpen, title }) => {


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div>
                    <h1 className="text-center text-brand">{title}</h1>
                </div>
                
            </Modal>
        </div>
    );
};

export default BookingModal;