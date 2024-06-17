import React, { useEffect, useState } from "react";
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const View = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  const viewApi = async () => {
    const response = await axios.get(`/edit/${id}`);
    toast.success("User Details loaded successfully");
    // console.log("view+", response);
    setData(response?.data);
  };
  useEffect(() => {
    viewApi();
  }, []);

  return (
    <>
      <div
        className="card text-white bg-info mb-3"
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
                <h6>Teacher_Name: {data?.data.Teacher_Name}</h6>
                <h6>Depterment: {data?.data.Depterment}</h6>
                <h6>Email: {data?.data.Email}</h6>
                <h6>Phone: {data?.data.Phone}</h6>
                <h6>City: {data?.data.City}</h6>
                <h6>Age: {data?.data.Age}</h6>
              </div>
            ) : (
              <h5>Loading data...</h5>
            )}
          </main>
          <Link type="button" class="btn btn-dark btn-sm" to={`/teacher`}>
            Back
          </Link>
          &ensp;
          <Link type="button" class="btn btn-dark btn-sm" to={`/update/${id}`}>
            Edit User
          </Link>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default View;
