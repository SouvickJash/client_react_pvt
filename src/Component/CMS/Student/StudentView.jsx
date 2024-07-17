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
  const [loading, setLoading] = useState(true);
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
      <div
        className="card text-white bg-dark mb-3"
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
          <Link
            type="button"
            class="btn btn-danger btn-sm"
            to={`/studentdetails`}
          >
            Back
          </Link>
          &ensp;
          <Link
            type="button"
            class="btn btn-danger btn-sm"
            to={`/updatestudent/${id}`}
          >
            Edit User
          </Link>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default StudentView;
