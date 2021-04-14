import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" href="#">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link mr-5" href="#">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" href="#">Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" href="#">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" href="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;