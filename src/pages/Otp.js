import React from 'react';
import '../App.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Otp = () => {
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
                    <Link to="/profile">
                      <button type="button" class="btn btn-primary btn-blue">Verifikasi</button>
                    </Link>
                  </div>
                </div>
                <div class="auth-msg mt-4">
                  <Link to="#">
                    <span style={{
                      fontSize: "15px",
                      color: "#797a7e"
                    }}
                      onClick={() => console.log("Kirim ulang kode verifikasi")}
                    >Kirim ulang kode verifikasi</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Otp;