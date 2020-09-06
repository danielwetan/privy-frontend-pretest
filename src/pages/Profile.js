import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';
import backgroundImg from '../assets/images/background.png';
import profileImg from '../assets/images/profile.jpg';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState("Daniel Saputra");
  const [gender, setGender] = useState("Male");
  const [birthday, setBirthday] = useState("2001-09-27");
  const [hometown, setHometown] = useState("Indonesia");
  const [bio, setBio] = useState("A person who passionate about learning, likes to collaborate, interested in logic and problem solving.");

  const [companyName, setCompanyName] = useState("Mediacipta");
  const [startingFrom, setStartingFrom] = useState("2020-08-14");
  const [endingIn, setEndingIn] = useState("2020-08-14");

  const [schoolName, setSchoolName] = useState("Arkademy");
  const [graduationTime, setGradiationTime] = useState("2020-08-14");

  const [generalInfo, setGeneralInfo] = useState(false);
  const [education, setEducation] = useState(false)
  const [workExperience, setWorkExperience] = useState(false);
  const toggleGeneralInfo = () => setGeneralInfo(!generalInfo);
  const toggleEducation = () => setEducation(!education);
  const toggleWorkExperience = () => setWorkExperience(!workExperience);


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
                    <p class="profile-name mt-2" style={{ fontSize: "20px", fontWeight: "600" }}>{name}</p>
                  </div>
                  <div class="col-1 d-none d-sm-block">
                    <Link to="#">
                      <span onClick={toggleGeneralInfo} style={{ fontSize: "13px" }}><i class="fas fa-pencil-alt"></i></span>
                    </Link>
                  </div>
                </div>

                <div class="row">
                  <div class="col-6" style={{ minHeight: "100px" }}>
                    <h6><b>About</b></h6>
                    <span style={{ fontSize: "15px" }}>
                      {bio}
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
                          <span style={{ fontSize: "15px", color: "#797a7e" }}>{birthday}</span>
                          <br></br>
                          <span style={{ fontSize: "15px", color: "#797a7e" }}>{gender}</span>
                          <br></br>
                          <span style={{ fontSize: "15px", color: "#797a7e" }}>{hometown}</span>
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
                        <Link to="#">
                          <span onClick={toggleEducation} style={{ fontSize: "13px" }}><i class="fas fa-pencil-alt"></i></span>
                        </Link>
                      </div>
                    </div> <span style={{ fontSize: "15px", fontWeight: "bold" }}>{schoolName}</span>
                    <br></br>
                    <div class="row">
                      <div class="col-md-5 col-sm-12">
                        <span style={{ fontSize: "15px" }}>Graduate</span>
                        <br></br>
                      </div>
                      <div class="col-md-7 col-sm-12">
                        <span style={{ fontSize: "15px", color: "#797a7e" }}>{graduationTime}</span>
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
                        <Link to="#">
                          <span onClick={toggleWorkExperience} style={{ fontSize: "13px" }}><i class="fas fa-pencil-alt"></i></span>
                        </Link>
                      </div>
                    </div>

                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>{companyName}</span>
                    <br></br>
                    <div class="row">
                      <div class="col-md-5 col-sm-12">
                        <span style={{ fontSize: "15px" }}>Start</span>
                        <br></br>
                        <span style={{ fontSize: "15px" }}>End</span>
                        <br></br>
                      </div>
                      <div class="col-md-7 col-sm-12">
                        <span style={{ fontSize: "15px", color: "#797a7e" }}>{startingFrom}</span>
                        <br></br>
                        <span style={{ fontSize: "15px", color: "#797a7e" }}>{endingIn}</span>
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

        <Modal isOpen={generalInfo} toggle={toggleGeneralInfo}>
          <ModalHeader toggle={toggleGeneralInfo}>Update General Info</ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("TESTING HERE!")}>
              <FormGroup>
                <Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Gender" onChange={(e) => setGender(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Birthday" onChange={(e) => setBirthday(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Hometown" onChange={(e) => setHometown(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" placeholder="Bio" onChange={(e) => setBio(e.target.value)} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleGeneralInfo} type="submit">Update</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={education} toggle={toggleEducation}>
          <ModalHeader toggle={toggleEducation}>Update Education</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input type="text" placeholder="School name" onChange={(e) => setSchoolName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Graduation time" onChange={(e) => setGradiationTime(e.target.value)} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={toggleEducation}>Update</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={workExperience} toggle={toggleWorkExperience}>
          <ModalHeader toggle={toggleWorkExperience}>Update Work Experience</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Starting from" onChange={(e) => setStartingFrom(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Ending in" onChange={(e) => setEndingIn(e.target.value)} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleWorkExperience}>Update</Button>
          </ModalFooter>
        </Modal>

      </div>
    </>
  )
}

export default Profile;