import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import leftarrow from "../../../Image/left-arrow.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const StudentAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    student_name: "",
    email: "",
    phone: "",
    stream: "",
    city: "",
    age: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { student_name, email, phone, stream, city, age } = values;
    if (
      student_name === "" ||
      email === "" ||
      phone === "" ||
      stream === "" ||
      city === "" ||
      age === ""
    ) {
      toast.error("All fields is require");
    } else {
      axios
        .post("/createstudent", values)
        .then((res) => {
          console.log("res", res);
          navigate("/studentdetails");
        })
        .catch((err) => console.log(err));
    }
  };

  // const getTeacher = async (e) => {
  //   e.preventDefault();

  //   // var obj = {
  //   //   Teacher_Name: name,
  //   //   Depterment: depterment,
  //   //   Email: email,
  //   //   Phone: phone,
  //   //   City: city,
  //   //   Age: age,
  //   // };
  //   // console.log("value", obj);
  //   if (
  //     student_name === "" ||
  //     email === "" ||
  //     phone === "" ||
  //     stream === "" ||
  //     city === "" ||
  //     age === ""
  //   ) {
  //     toast.error("All fields is require");
  //   } else {
  //     await axios
  //       .post("/createstudent", obj)
  //       .then((response) => {
  //         console.log("response+++", response);

  //         if (response.data.status === 201) {
  //           toast.success(response.data.message);

  //           navigate("/teacher");
  //         } else if (response.data.status === 404) {
  //           console.log("response.status", response.data.status);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("error++++", error);
  //         // if (error.response) {
  //         //   toast.error(error.response.data.error); //working
  //         // }
  //       });
  //   }
  // };

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

      {/* Section: Design Block */}
      <section className="background-radial-gradient overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div
              className="col-lg-6 mb-5 mb-lg-0"
              style={{ zIndex: 10, marginLeft: -122, width: 473 }}
            ></div>
            <div
              className="col-lg-6 mb-5 mb-lg-0 position-relative"
              style={{ width: 473 }}
            >
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <div className="pt-4 pb-2">
                    <h5
                      className="card-title text-center pb-0 fs-4"
                      style={{ marginTop: -55 }}
                    >
                      Create an Teacher Account
                    </h5>
                  </div>
                  <NavLink className="nav-link1" to="/home">
                    <caption>
                      <img
                        className="lert-arrow"
                        src={leftarrow}
                        alt=""
                        width="40"
                        height="40"
                        onClick={() => navigate(-1)}
                        style={{ marginLeft: -90, marginTop: -210 }}
                      />
                    </caption>
                  </NavLink>

                  <form onSubmit={handleSubmit}>
                    {/* student name */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Student Name"
                        onChange={(e) =>
                          setValues({ ...values, student_name: e.target.value })
                        }
                      />
                    </div>
                    {/* email */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) =>
                          setValues({ ...values, email: e.target.value })
                        }
                      />
                    </div>
                    {/* phone */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="test"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Phone"
                        onChange={(e) =>
                          setValues({ ...values, phone: e.target.value })
                        }
                      />
                    </div>
                    {/* stream */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Stream"
                        onChange={(e) =>
                          setValues({ ...values, stream: e.target.value })
                        }
                      />
            
                    </div>
                    {/* City */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        placeholder="City"
                        onChange={(e) =>
                          setValues({ ...values, city: e.target.value })
                        }
                      />
                    </div>
                    {/* age */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="number"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Age"
                        onChange={(e) =>
                          setValues({ ...values, age: e.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-dark btn-block mb-4"
                    >
                      {/* <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
                      Sign up
                    </button>

                    <div className="text-center" style={{marginLeft:-150}}>
                      View Detais:{" "}
                      <Link
                        type="button"
                        class="btn btn-primary btn-sm"
                        to={`/studentdetails`}
                      >
                        Click View
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default StudentAdd;
