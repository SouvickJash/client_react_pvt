import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import view from "../../../Image/view.svg";

const Login = () => {
  // const notify = () => toast.success("Wow so easy!");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // const email1="admin@gmail.com";
  // const password1="admin123"

  //show password
  const passwordShow = () => {
    setShow(!show);
  };
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
    setEmail("");
    setPassword("");
    var obj = {
      email: email,
      password: password,
    };
    console.log("value", obj);

    await axios
      .post("/admin/login", obj)
      .then((response) => {
        console.log("response....login", response);

        if (response.data.status === 200) {
          toast.success(response.data.message);
        // alert(response.data.message)

          localStorage.setItem("token", response.data.token); //settoken
          localStorage.setItem("id", response.data.info[0]._id);
          // console.log("helllooo", localStorage);
         
          navigate("/home");
        
        } else if (response.data.status === 404) {
          console.log("response.status", response.data.status);
        }
      })
      .catch((error) => {
        // console.log("response++++++++",error);
        if (error.response) {
          toast.error(error.response.data.error); //working
        } 
      });
  };

  return (
    <>
      <main style={{ backgroundColor: "#4da6ff" }}>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="card mb-3"
                    style={{ width: "360px", height: "430px", borderRadius:13}}
                  >
                    <div
                      className="card-body"
                      style={{ border: "1px solid green", borderRadius: 12 }}
                    >
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
                            <input
                              type="email"
                              name="name"
                              className="form-control"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type={show ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />

                          <img
                            src={view}
                            alt=""
                            width="30"
                            height="40"
                            onClick={passwordShow}
                            style={{ marginTop: -66, marginLeft: 280 }}
                          />
                        </div>
                        {/* <div className="col-12">
                          <div className="form-check">
                            <input
                              style={{ marginTop: "-10px" }}
                              className="form-check-input"
                              type="checkbox"
                              name="remember"
                              defaultValue="true"
                              id="rememberMe"
                            />
                            <p style={{ marginTop: "-10px" }}> Remember me</p>
                            <h5
                              className="form-check-label"
                              htmlFor="rememberMe"
                              style={{ marginTop: "-10px !impo" }}
                            >
                              Remember me
                            </h5>
                          </div>
                        </div> */}
                        <div className="col-12">
                          <button
                            style={{ marginTop: "20px" }}
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
                          <p class="small mb-0">
                            Don't have account?{" "}
                            <a href="/register">Create an account</a>
                          </p>
                        </div>
                        <div class="col-12">
                          <p class="small mb-0">
                            <a href="/forgetpassword">Forget Password</a>
                          </p>
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
