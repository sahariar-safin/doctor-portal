import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebase.config';
import LoginBg from '../../images/Group 140.png'
import { GoogleSignIn, JWTToken } from '../Dashbord/firebase.manager';
import './Login.css'



const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        JWTToken()
            .then(res => {
                sessionStorage.setItem('token', res);
            })
        if (redirect) {
            history.replace(from);
        }
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        GoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    return (
        <div className="login container-fluid row justify-content-evenly align-items-center">
            <div className="col-md-6">
                <div className="card">
                    <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10 col-md-6">
                                <input type="password" class="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-brand">Sign in</button>
                        <br />
                        <button onClick={handleGoogleSignIn} type="submit" class="btn btn-brand mt-4">Sign in with Google</button>
                    </form>
                </div>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={LoginBg} alt="" />
            </div>
        </div>
    );
};

export default Login;