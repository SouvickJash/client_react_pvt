import React, { useState } from "react";
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import axios from "axios";
import view from "../../../Image/view.svg";
import leftarrow from "../../../Image/left-arrow.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Changepassword = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [password, setPassword] = useState("");
  const [confrompassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  //show password
  const passwordShow = () => {
    setShow(!show);
  };
  const passwordShow1 = () => {
    setShow1(!show1);
  };

  const submitPass = async (e) => {
    e.preventDefault();
    setPassword("");
    setConfirmPassword("");
    const id = localStorage.getItem("id");
    var obj = {
      user_id: id,
      password: password,
      confrompassword: confrompassword,
    };
    console.log("object+++", obj);
    if (password === "") {
      toast.error("Password is require");
    } else if (confrompassword === "") {
      toast.error("confirmpassword is require");
    } else if (password !== confrompassword) {
      toast.error("password and cpassword are not matched");
    } else {
      await axios
        .post("/admin/updatepass", obj)
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
  // loading
  setTimeout(() => {
    setLoading(false);
  }, 500);
  if (loading) {
    return (
      <>
        <div class="loader">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="h-12 w-12 flex-shrink-0 spin"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path>
          </svg>
        </div>
      </>
    );
  }
  return (
    <>
      <Head />
      <Navbar />
      <Sidebar />

      <main style={{ backgroundColor: "" }}>
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
                      style={{ marginLeft: 290, marginTop: -90 }}
                    />
                  </caption>
                </NavLink>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="card mb-3"
                    style={{
                      width: "340px",
                      height: "400px",
                      marginLeft: -60,
                      marginTop: -90,
                      borderRadius: 7,
                    }}
                  >
                    <div
                      className="card-body"
                      style={{ border: "1px solid blue", borderRadius: 7 }}
                    >
                      <pre style={{ background: "#4d79ff", marginTop: 30 }}>
                        Reset password
                      </pre>
                      <form className="row g-3 needs-validation" noValidate>
                        {/* <pre style={{background:"#4d79ff", marginTop:30}}>Reset password</pre> */}
                        <div className="col-12">
                          <label htmlFor="newpassword" className="form-label">
                            New Password
                          </label>

                          <input
                            type={show ? "text" : "password"}
                            name="password"
                            className="form-control"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <img
                            src={view}
                            alt=""
                            width="30"
                            height="40"
                            onClick={passwordShow}
                            style={{ marginTop: -66, marginLeft: 265 }}
                          />
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type={show1 ? "text" : "password"}
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            className="form-control"
                            value={confrompassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <img
                            src={view}
                            alt=""
                            width="30"
                            height="40"
                            onClick={passwordShow1}
                            style={{ marginTop: -66, marginLeft: 265 }}
                          />
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12">
                          <button
                            style={{ marginTop: "6px" }}
                            className="btn btn-primary w-100"
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

      
      <ToastContainer />
    </>
  );
};

export default Changepassword;
