import React, { useEffect, useState } from "react";
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentView = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  const viewApi = async () => {
    const response = await axios.get(`/editstudent/${id}`);
    toast.success("User Details loaded successfully");
    console.log("view student", response);
    setData(response?.data);
  };
  useEffect(() => {
    viewApi();
  }, []);

  return (
    <>
    
      <div
        className="card text-white bg-secondary mb-3"
        style={{
          maxWidth: "18rem",
          marginTop: 150,
          marginLeft: 500,
          width: 800,
        }}
      >
        <h5 className="card-header">Teacher Details Page</h5>
        <div className="card-body">
          <main>
            {data ? (
              <div>
                <h6>Student_Name: {data?.data.student_name}</h6>
               
                <h6>Email: {data?.data.email}</h6>
                <h6>Phone: {data?.data.phone}</h6>
                <h6>Stream: {data?.data.stream}</h6>
                <h6>City: {data?.data.city}</h6>
                <h6>Age: {data?.data.age}</h6>
              </div>
            ) : (
              <h5>Loading data...</h5>
            )}
          </main>
          <Link type="button" class="btn btn-dark btn-sm" to={`/studentdetails`}>
            Back
          </Link>
          &ensp;
          <Link type="button" class="btn btn-dark btn-sm" to={`/updatestudent/${id}`}>
            Edit User
          </Link>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default StudentView;

