import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate, Link } from "react-router-dom";
import leftarrow from "../../../Image/left-arrow.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Sidebar from "../../../Common/Sidebar/Sidebar";
// import Navbar from "../../../Common/Navbar/Navbar";
// import Head from "../../../Common/Head/Head";

const UpdateTeacher = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Teacher_Name: "",
    Depterment: "",
    Email: "",
    Phone: "",
    City: "",
    Age: "",
  });

  //getapi2
  // const getEditApi = async () => {
  //   try {
  //     const response = await axios.get(`/edit/${id}`);
  //     // console.log("Editapi",response)
  //     setEdit(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getTeacherDetails = async (e) => {
  //   e.preventDefault();
  //   var obj = {
  //     id: id,
  //     Teacher_Name: teacher,
  //     Depterment: depterment,
  //     Email: email,
  //     Phone: phone,
  //     City: city,
  //     Age: age,
  //   };
  //   console.log("value", obj);

  //   await axios
  //     .put(`/update/${id}`,obj)
  //     .then((response) => {
  //       console.log("response+++", response);

  //       if (response.data.status === 200) {
  //         toast.success(response.data.message);
  //         navigate("/teacher");

  //       } else if (response.data.status === 404) {
  //         console.log("response.status", response.data.status);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error++++", error);

  //       // if (error.response) {
  //       //   toast.error(error.response.data.error); //working
  //       // }
  //     });
  // };

  useEffect(() => {
    axios
      .get(`/edit/${id}`)
      .then((res) => {
        setValues({
          ...values,
          Teacher_Name: res.data.data.Teacher_Name,
          Depterment: res.data.data.Depterment,
          Email: res.data.data.Email,
          Phone: res.data.data.Phone,
          City: res.data.data.City,
          Age: res.data.data.Age,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  //  update data
  //update data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/update/${id}`, values)
      .then((res) => {
        toast.success("Data updated successfully");
        navigate("/teacher");
      })
      .catch((err) => console.log(err));
  };

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
              style={{ width: 403 }}
            >
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div
                className="card bg-glass"
                style={{ width: 416, marginTop: -65, marginLeft: 150 }}
              >
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
                        style={{ marginLeft: -250, marginTop: -175 }}
                      />
                    </caption>
                  </NavLink>
                  {/* <form onSubmit={handleSubmit}> */}
                  <form onSubmit={handleSubmit}>
                    {/* teacher name */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Teacher Name"
                        name="Teacher_Name"
                        value={values.Teacher_Name}
                        onChange={(e) =>setValues({ ...values, Teacher_Name: e.target.value })}
                          
                        
                      />
                    </div>
                    {/* depterment */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Depterment"
                        name="Depterment"
                        value={values.Depterment}
                        onChange={(e) =>setValues({ ...values, Depterment: e.target.value })}
                      />
                    </div>

                    {/* Email input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Email"
                        name="Email"
                        value={values.Email}
                        onChange={(e) =>setValues({ ...values, Email: e.target.value })}
                        // onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* phone */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="number"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Phone"
                        name="Phone"
                        value={values.Phone}
                        onChange={(e) =>setValues({ ...values, Phone: e.target.value })}
                        // onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    {/* City */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        placeholder="City"
                        name="City"
                        value={values.City}
                        onChange={(e) =>setValues({ ...values, City: e.target.value })}
                        // onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    {/* age */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="number"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Age"
                        name="Age"
                        value={values.Age}
                        onChange={(e) =>setValues({ ...values, Age: e.target.value })}
                        // onChange={(e) => setAge(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-dark btn-block mb-4"
                      // onClick={getTeacherDetails}
                    >
                      Update
                    </button>

                    <div className="text-center" style={{ marginLeft: -150 }}>
                      View Detais:{" "}
                      <Link
                        type="button"
                        class="btn btn-primary btn-sm"
                        to={`/teacher`}
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

export default UpdateTeacher;
