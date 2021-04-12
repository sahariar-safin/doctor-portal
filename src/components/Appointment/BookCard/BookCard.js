import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookCard = ({ book, date }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="card p-5 text-center m-3">
            <h3>{book.subject}</h3>
            <p>{book.visitingHour}</p>
            <small className='p-1'>{book.totalSpace} spaces available.</small>
            <button onClick={openModal} className="btn btn-brand">Book Appointment</button>
            <BookingModal closeModal={closeModal} date={date} modalIsOpen={modalIsOpen} title={book.subject}></BookingModal>
        </div>
    );
};

export default BookCard;