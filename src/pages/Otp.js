import React, { useState } from 'react';
import Button from '../components/Public/Button';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

        <div class="col-12">
          <div class="card main-card align-items-center text-center py-5 px-2">
            <div class="card-body" style={{
              marginTop: "10%"
            }}>
              < form >
                <div class="form-row">
                  <div class="col-8">
                    <input type="text" class="form-control" placeholder="Kode OTP" />
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn btn-primary btn-blue">Verifikasi</button>
                  </div>
                </div>
                <div class="auth-msg mt-4">
                  <span style={{
                    fontSize: "15px",
                    color: "#797a7e"
                  }}
                    onClick={() => console.log("Kirim ulang kode verifikasi")}
                  >Kirim ulang kode verifikasi</span>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Login;