import React from 'react';
import '../App.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

import image from '../assets/images/hiring2.svg';

const PageNotFound = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row">

        <div class="col-12">
          <div class="card main-card py-5 px-2">
            <div class="card-body">
              <div class="text-center">
                <span style={{ fontSize: "22px" }}>Privy pretest</span>
              </div>
              <div class="row mt-5">
                <div class="col-6">
                  <span>Pages</span>
                  <ul>
                    <Link to="/auth/login">
                      <li>Login</li>
                    </Link>
                    <Link to="/auth/register">
                      <li>Register</li>
                    </Link>
                    <Link to="/auth/otp">
                      <li>OTP</li>
                    </Link>
                    <Link to="/auth/login">
                      <li>Profile</li>
                    </Link>
                  </ul>
                </div>
                <div class="col-6">
                  <img src={image} class="card-img-top img-fluid" style={{ height: "200px", width: "200px" }} alt="background" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default PageNotFound;