import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import Navbar from "../../../Common/Navbar/Navbar";
import Head from "../../../Common/Head/Head";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countTeacher, setCountTeacher] = useState("");
  const [countStudent, setCountStudent] = useState("");

  const data = [
    {
      id: 0,
      value: countTeacher,
      label: "Teachers",
      color: "rgb(2, 178, 175)",
    },
    {
      id: 1,
      value: countStudent,
      label: "Students",
      color: "rgb(46, 150, 250)",
    },
  ];
  
  const barChartData = [
    {
      value: countTeacher,
      name: "Teachers",
      count: countTeacher,
      fill: "rgb(2, 178, 175)",
    },
    {
      value: countStudent,
      name: "Students",
      count: countStudent,
      fill: "rgb(46, 150, 250)",
    },
  ];

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
 // 
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
  const teacherDetails = () => {
    navigate("/teacher");
    // console.log("heyy")
  };

  //student details
  const studentDetails = () => {
    navigate("/studentdetails");
    // console.log("heyy")
  };

  useEffect(() => {
    isLogin();
    getApi(); //teacher count
    getStudentCount(); //student count
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  if (loading) {
    return (
      <>
        <div
          class="spinner-border text-primary"
          role="status"
          style={{ marginLeft: 630, marginTop: 250, width: 50, height: 50 }}
        >
          <span class="sr-only">Loading...</span>
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
                          <h6>
                            <a
                              href=""
                              onClick={teacherDetails}
                              style={{ color: "red" }}
                            >
                              {countTeacher}
                            </a>
                          </h6>
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
                          <h6>
                            <a
                              href=""
                              onClick={studentDetails}
                              style={{ color: "red" }}
                            >
                              {countStudent}
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* pie chart */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Pie Charts Teacher & Student <span>| Today</span>
                      </h5>
                      <PieChart
                        series={[
                          {
                            data,
                          },
                        ]}
                        height={200}
                        width={300}
                        marginLeft={200}
                      />
                      
                    </div>
                  </div>
                </div>

                {/* bar chart */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Bar Charts Teacher & Student <span>| Today</span>
                      </h5>
                      <ResponsiveContainer width="90%" height={200}>
                        <BarChart data={barChartData}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          {/* <Legend /> */}
                          <Bar dataKey="count" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* <Button variant="contained">Contained</Button> */}
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
