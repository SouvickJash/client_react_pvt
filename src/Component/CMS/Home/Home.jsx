import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import Navbar from "../../../Common/Navbar/Navbar";
import Head from "../../../Common/Head/Head";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countTeacher, setCountTeacher] = useState("");
  const [countStudent, setCountStudent] = useState("");


  //teacher count
  const getApi = async () => {
    const response = await axios.get("/getcount");
    console.log("count", response.data.totalTeacher);
    setCountTeacher(response?.data.totalTeacher);
  };
  //student count
  const getStudentCount = async () => {
    const response = await axios.get("/getcountstudent");
    console.log("count", response.data.totalStudent);
    setCountStudent(response?.data.totalStudent);
  };

  const isLogin = () => {
    let token = localStorage.getItem("token");
    if (token === null) {
      navigate("/");
    } else {
      navigate("/home");
    }
    console.log("token....+", token);
  };
  //teacher details
  const teacherDetails=()=>{
    navigate('/teacher')
    // console.log("heyy")
  }

  //student details
  const studentDetails=()=>{
    navigate('/studentdetails')
    // console.log("heyy")
  }

  useEffect(() => {
    isLogin();
    getApi(); //teacher count
    getStudentCount();  //student count
  }, []);

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
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-8">
              <div className="row">
                {/* teacher */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Total Teacher <span>| Today</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          {/* <h6 style={{ color: "red" }}>{countTeacher}</h6> */}
                          <h6 ><a href="" onClick={teacherDetails}style={{ color: "red" }}>{countTeacher}</a></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* student Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Total Student <span>| Today</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          {/* <h6 style={{ color: "red" }} onClick={teacherDetails}>{countStudent}</h6> */}
                          <h6 ><a href="" onClick={studentDetails}style={{ color: "red" }}>{countStudent}</a></h6>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ext */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Nothing
                        {/* <h1 style={{ color: "red" }}>Null</h1> */}
                      </h5>
                    </div>
                  </div>
                </div>

                {/* ext */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Nothing
                        {/* <h1 style={{ color: "red" }}>Null</h1> */}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Left side columns */}
            {/* Right side columns */}
            <div className="col-lg-4"></div>
            {/* End Right side columns */}
          </div>
        </section>
      </main>
      {/* End #main */}
    </>
  );
};

export default Home;
