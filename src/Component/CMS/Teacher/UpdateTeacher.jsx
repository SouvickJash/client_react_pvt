import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import leftarrow from "../../../Image/left-arrow.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Teacher from "./Teacher";
// import Sidebar from "../../../Common/Sidebar/Sidebar";
// import Navbar from "../../../Common/Navbar/Navbar";
// import Head from "../../../Common/Head/Head";

const UpdateTeacher = () => {
  const { id } = useParams();
  // const [data, setData] = useState({});
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Teacher_Name: "",
    Depterment: "",
    Email: "",
    Phone: "",
    City: "",
    Age: "",
  });

//get api
  useEffect(() => {
    axios
      .get(`/edit/${id}`)
      .then((res) => {
        console.log("getEditdetails", res);
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  // update
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .put(`/update/${id}`, values)
      .then((res) => {
        console.log("res",res);
        toast.success("Teacher updated successfully!");
        navigate("/teacher");
      })
      .catch((err) => console.log(err));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   var obj = {
  //     id:id,
  //     Teacher_Name: name,
  //     Depterment: depterment,
  //     Email: email,
  //     Phone: phone,
  //     City: city,
  //     Age: age,
  //   };
  //   console.log("value", obj);

  //   await axios
  //     .put(`/update/${id}`,values)
  //     .then((response) => {
  //       console.log("response+++", response);

  //       if (response.data.data.status === 201) {
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

  // useEffect(() => {
  //   editData();
  // }, []);

  return (
    <>
    {/* <Navbar/> */}
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
                      style={{ marginLeft: 310, marginTop: -70 }}
                    />
                  </caption>
                </NavLink>
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="card mb-3"
                    style={{ marginTop: -65, borderRadius: 10, width: 350 }}
                  >
                    <div
                      className="card-body"
                      style={{ border: "2px solid blue", borderRadius: 10 }}
                    >
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Update Your Account
                        </h5>
                       
                      </div>
                      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                      
                        <div className="col-12">
                          <input
                            type="text"
                            name="Teacher_Name"
                            className="form-control"
                            placeholder="Teacher name"
                            value={values.data?.Teacher_Name}
                            onChange={(e) => setValues({Teacher_Name: e.target.value})}
                            // onChange={(e) => setValues(e.target.value)}
                            // onChange={handleChange}
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="dept"
                            name="Depterment"
                            className="form-control"
                            id="yourPassword"
                            placeholder="Depterment"
                            value={values.data?.Depterment}
                            onChange={(e) => setValues({Depterment: e.target.value})}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            name="Email"
                            className="form-control"
                            placeholder="Email"
                            value={values.data?.Email}
                            onChange={(e) => setValues({Email: e.target.value})}
                            
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="number"
                            name="Phone"
                            className="form-control"
                            placeholder="Phone"
                            value={values.data?.Phone}
                            onChange={(e) => setValues({Phone: e.target.value})}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            name="City"
                            className="form-control"
                            placeholder="City"
                            value={values.data?.City}
                            onChange={(e) => setValues({City: e.target.value})}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="number"
                            name="Age"
                            className="form-control"
                            placeholder="Age"
                            value={values.data?.Age}
                            onChange={(e) => setValues({Age: e.target.value})}
                          />
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12">
                          <button
                          style={{marginTop:20}}
                            className="btn btn-primary w-100"
                            type="submit"
                            // onClick={handleSubmit}
                          >
                            Update
                          </button>
                        </div>
                        <div className="col-12">
                          {/* <p className="small mb-0">
                            View ? <a href="/teacher">Teacher List</a>
                          </p> */}
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

export default UpdateTeacher;
