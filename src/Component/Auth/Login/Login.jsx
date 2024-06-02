import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";

const Login = () => {
  // const notify = () => toast.success("Wow so easy!");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const email1="admin@gmail.com";
  // const password1="admin123"

  const submitLogin = async (e) => {
    e.preventDefault();
    // console.log("+++",email);
    // console.log("+++",password);
    //  if(email==email1 && password==password1){
    //   navigate("/home");
    //  }else{
    //   setEmail("")
    //   setPassword("")
    //   navigate("/");
    //  }

    var obj = {
      email: email,
      password: password,
    };
    console.log("value", obj);

    await axios
      .post("/login", obj)
      .then((response) => {
        console.log("response....login", response);

        if (response.data.status === 200) {
          toast.success(response.data.message);

          localStorage.setItem("token", response.data.token); //settoken
          localStorage.setItem("id", response.data.info[0]._id);
          console.log("helllooo", localStorage);
          // toast.success("login success ")
          navigate("/home");
        } else if (response.data.status === 404) {
          console.log("response.status", response.data.status);
        }
      })
      .catch((error) => {
        // console.log("response",error.response.data.message);
        if (error.response) {
          // alert(error.response.data.message)
          toast.success(error.response.data.message); 
        } else {
          alert("Error", error.message);
        }
      });

   
  };

  return (
    <>
 {/* <Head/>  */}
    {/* <Navbar/> */}
      {/* <h1>login page</h1> */}
      <main style={{ backgroundColor: "#0073e6" }}>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    {/* <a
                      href="/"
                      className="logo d-flex align-items-center w-auto"
                    > */}
                    {/* <img src="assets/img/logo.png" alt /> */}
                    {/* <span className="d-none d-lg-block">NiceAdmin</span> */}
                    {/* </a> */}
                  </div>
                  {/* End Logo */}
                  <div
                    className="card mb-3"
                    style={{ width: "360px", height: "430px" }}
                  >
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h3 className="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h3>
                        <p className="text-center small">
                          Enter your email &amp; password to login
                        </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Email
                          </label>
                          <div className="input-group has-validation">
                            {/* <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              @
                            </span> */}
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="remember"
                              defaultValue="true"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            style={{ marginTop: "36px" }}
                            className="btn btn-primary w-100"
                            type="submit"
                            onClick={submitLogin}
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          {/* <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p> */}
                        </div>
                        <div class="col-12">
                      <p class="small mb-0">Don't have account? <a href="/register">Create an account</a></p>
                    </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default Login;
