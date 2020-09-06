import React, { useState } from 'react';
import Button from '../components/Public/Button';
import '../App.css';
// import axios from 'axios';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const Register = e => {
    e.preventDefault();
    const data = {
      phone: phoneNumber,
      password: password,
      country: country,
      latlong: "-",
      device_token: "999",
      device_type: 2,
    }

    console.log(data)

    // AXIOS
    // axios({
    //   method: "post",
    //   url: "http://pretest-qa.dcidev.id/api/v1/register",
    //   data: data,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    // })
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    // FETCH
    // const formData = new FormData();
    // formData.append('phone', '6287887056115')
    // fetch('http://pretest-qa.dcidev.id/api/v1/register/otp/request', { mode: 'cors', method: 'POST', body: formData }).then(res => console.log(res))
    //   .catch((err) => console.log(err))
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card main-card py-5 px-2">
            <div className="card-body">
              <form onSubmit={Register}>
                <div className="form-group">
                  <input className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Phone number" />
                </div>
                <div className="form-group">
                  <input className="form-control" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
                <div className="form-group">
                  <input className="form-control" onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country" />
                </div>
                <Button text="Register" />
                <div className="mt-3">
                  <span>Already on Pretest? <a className="auth-link"
                    href="login.html">Login</a></span><br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;