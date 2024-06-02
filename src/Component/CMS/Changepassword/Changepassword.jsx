import React, { useState } from "react";
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Changepassword = () => {
  const navigate=useNavigate()
  const [password, setPassword] = useState("");
  const [confrompassword, setConfirmPassword] = useState("");
  const submitPass = async (e) => {
    
    e.preventDefault();
    const id=localStorage.getItem("id");
    var obj = {
      user_id:id,
      password: password,
      confrompassword: confrompassword,
    };
    console.log("object+++", obj);
    if(password!==confrompassword){
      alert("password and cpassword are not matched")
    }else{
      await axios
      .post("/updatepass", obj)
      .then((response) => {
        console.log("response.....", response);

        if (response.status === 200) {
          // toast.success(response.data.message);
          alert(response.data.message);
          navigate("/home");
        } else {
          navigate("/chnagepassword");
        }
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err);
      });
    }
    
    
  };
  return (
    <>
      <Head />
      <Navbar />
      <Sidebar />
      <main style={{ backgroundColor: "#0073e6" }}>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="card mb-3"
                    style={{ width: "360px", height: "430px" }}
                  >
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h3 className="card-title text-center pb-0 fs-4">
                          Change password Your Account
                        </h3>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="newpassword" className="form-label">
                            New Password
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="New Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            className="form-control"
                            value={confrompassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          {/* <div className="invalid-feedback">
                            Please enter your password!
                          </div> */}
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12">
                          <button
                            style={{ marginTop: "36px" }}
                            className="btn btn-success w-100"
                            type="submit"
                            onClick={submitPass}
                          >
                            Submit
                          </button>
                        </div>
                        <div className="col-12">
                          {/* <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p> */}
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
    </>
  );
};

export default Changepassword;
