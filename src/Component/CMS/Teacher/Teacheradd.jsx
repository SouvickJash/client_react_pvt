import React, { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import leftarrow from "../../../Image/left-arrow.svg";


const Teacheradd = () => {
    const navigate = useNavigate();
    


//     const getTeacher=()=>{
// }


    
  return (
    <>
      <Head />
      <Navbar />
      <Sidebar />

      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
              <NavLink className="nav-link1" to="/home">
                <caption>
                  <img
                    className="lert-arrow"
                    src={leftarrow}
                    alt=""
                    width="40"
                    height="40"
                    onClick={() => navigate(-1)}
                    style={{ marginLeft: 310, marginTop: -50 }}
                  />
                </caption>
              </NavLink>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="card mb-3" style={{ marginTop: -65 }}>
                    <div
                      className="card-body"
                      style={{ border: "1px solid blue", borderRadius: 15 }}
                    >
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Create an Account
                        </h5>
                        <p className="text-center small">
                          Enter your personal details to create account
                        </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <input
                            type="text"
                            name="teacher"
                            className="form-control"
                            placeholder="Teacher name"
                            required
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="dept"
                            name="dept"
                            className="form-control"
                            id="yourPassword"
                            placeholder="Depterment"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="number"
                            name="phone"
                            className="form-control"
                            placeholder="Phone"
                            required
                          />
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                            // onClick={getTeacher}
                          >
                            Add Teacher
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            View ? <a href="/teacher">Teacher List</a>
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
    </>
  );
};

export default Teacheradd;
