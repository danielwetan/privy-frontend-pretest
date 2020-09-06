import React, { useState } from 'react';
import Button from '../components/Public/Button';
import '../App.css';
import axios from 'axios';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const Login = e => {
    e.preventDefault();
    const data = {
      phone: phoneNumber,
      password: password,
      latlong: "-",
      device_token: "999",
      device_type: 2,
    }

    console.log(data)

    // axios({
    //   method: "post",
    //   url: "http://pretest-qa.dcidev.id/api/v1/oauth/sign_in",
    //   data: data,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    // })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card main-card py-5 px-2">
            <div className="card-body">
              <form onSubmit={Login}>
                <div className="form-group">
                  <input className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Phone number" />
                </div>
                <div className="form-group">
                  <input className="form-control" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
                <Button text="Login" />
                <div className="mt-3">
                  <span>New to Pretest? <a className="auth-link"
                    href="login.html">Register</a></span><br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;