import React from 'react';

import backgroundImg from '../assets/images/background.png';
import profileImg from '../assets/images/profile.jpg';

import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <div class="container d-flex justify-content-center mt-3 mb-3">

        <div class="row">
          <div class="col-12">
            <div class="card" style={{ maxWidth: "600px" }}>
              <img src={backgroundImg} class="card-img-top img-fluid" style={{ height: "180px" }} alt="background" />
              <div class="card-body">
                <img src={profileImg} class="card-img-top img-fluid"
                  style={{
                    width: "125px",
                    height: "125px",
                    marginTop: "-110px",
                    borderRadius: "100px",
                  }}
                  alt="profile" />
                <div class="row">
                  <div class="col-11">
                    <p class="profile-name mt-2" style={{ fontSize: "20px", fontWeight: "600" }}>Daniel Saputra</p>
                  </div>
                  <div class="col-1 d-none d-sm-block">
                    <span style={{ fontSize: "13px" }}><i class="fas fa-pencil-alt"></i></span>
                  </div>
                </div>

                <div class="row">
                  <div class="col-6" style={{ minHeight: "100px" }}>
                    <h6><b>About</b></h6>
                    <span style={{ fontSize: "15px" }}>
                      A person who passionate about learning, likes to collaborate, interested in logic and problem solving.
                    </span>
                  </div>
                  <div class="col-6" style={{ minHeight: "100px" }}>
                    <div>
                      <h6><b>General info</b></h6>
                      <div class="row">
                        <div class="col-md-5 col-sm-12">
                          <span style={{ fontSize: "15px" }}>Age</span>
                          <br></br>
                          <span style={{ fontSize: "15px" }}>Birthday</span>
                          <br></br>
                          <span style={{ fontSize: "15px" }}>Gender</span>
                          <br></br>
                          <span style={{ fontSize: "15px" }}>Hometown</span>
                        </div>

                        <div class="col-md-7 col-sm-12">
                          <span style={{ fontSize: "15px", color: "#797a7e" }}>18 y.o</span>
                          <br></br>
                          <span style={{ fontSize: "15px", color: "#797a7e" }}>2001-09-27</span>
                          <br></br>
                          <span style={{ fontSize: "15px", color: "#797a7e" }}>Male</span>
                          <br></br>
                          <span style={{ fontSize: "15px", color: "#797a7e" }}>Cilacap</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row my-3" style={{ borderTop: "1px solid lightgray" }}>
                  <div class="col-6 mt-4" style={{ minHeight: "100px" }}>
                    <div class="row">
                      <div class="col-10">
                        <h6><b>Education</b></h6>
                      </div>
                      <div class="col-1 d-none d-sm-block">
                        <span style={{ fontSize: "13px" }}><i class="fas fa-pencil-alt"></i></span>
                      </div>
                    </div> <span style={{ fontSize: "15px", fontWeight: "bold" }}>Arkademy</span>
                    <br></br>
                    <div class="row">
                      <div class="col-md-5 col-sm-12">
                        <span style={{ fontSize: "15px" }}>Graduate</span>
                        <br></br>
                      </div>
                      <div class="col-md-7 col-sm-12">
                        <span style={{ fontSize: "15px", color: "#797a7e" }}>2020-08-14</span>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 mt-4" style={{ minHeight: "100px" }}>
                    <div class="row">
                      <div class="col-10">
                        <h6><b>Work Experience</b></h6>
                      </div>
                      <div class="col-1 d-none d-sm-block">
                        <span style={{ fontSize: "13px" }}><i class="fas fa-pencil-alt"></i></span>
                      </div>
                    </div>

                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>Mediacipta</span>
                    <br></br>
                    <div class="row">
                      <div class="col-md-5 col-sm-12">
                        <span style={{ fontSize: "15px" }}>Start</span>
                        <br></br>
                        <span style={{ fontSize: "15px" }}>End</span>
                        <br></br>
                      </div>
                      <div class="col-md-7 col-sm-12">
                        <span style={{ fontSize: "15px", color: "#797a7e" }}>2020-08-14</span>
                        <br></br>
                        <span style={{ fontSize: "15px", color: "#797a7e" }}>2020-08-14</span>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row my-3" style={{ borderTop: "1px solid lightgray" }}>
                  <div class="col-12 mt-4" style={{ minHeight: "150px" }}>
                    <div class="row">
                      <div class="col-9">
                        <h6><b>Messages</b></h6>
                      </div>
                      <div class="col-3 d-none d-sm-block">
                        <span style={{ fontSize: "13px" }}>Get message</span>
                      </div>
                    </div>

                    <span style={{ fontSize: "15px" }}>Hello World!</span>
                    <br></br>
                  </div>
                </div>

                <div class="row my-3" style={{ borderTop: "1px solid lightgray" }}>
                  <div class="col-6 mt-4">
                    <Link to="/auth/register">
                      <span style={{ fontSize: "15px", color: "red" }}>Delete account</span>
                    </Link>
                    <br></br>
                  </div>
                  <div class=" col-6 mt-4">
                    <Link to="/auth/login">
                      <span style={{ fontSize: "15px", color: "#004380" }}>Logout</span>
                    </Link>
                    <br></br>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Profile;