import React, { useEffect, useState } from "react";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import Navbar from "../../../Common/Navbar/Navbar";
import Head from "../../../Common/Head/Head";
import Footer from "../../../Common/Footer/Footer";
import addicon from "../../../Image/addicon.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import deleteuser from "../../../Image/deletenew2.svg";
import view from "../../../Image/viewnew.svg";
import edit from "../../../Image/edit.svg";
import Swal from 'sweetalert2';

const StudentDetails = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    try {
      const response = await axios.get("/getstudent");
      // console.log("studentgetdata", response);
      setStudent(response?.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
    setLoading(false);
  };

  const DeleteStudentDetails = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/deletestudent/${id}`);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          getApi();
        } catch (error) {
          console.error("Error deleting student:", error);
          Swal.fire("Error!", "There was a problem deleting the student.", "error");
        }
      }
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <>
        <div className="loader">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="h-12 w-12 flex-shrink-0 spin"
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
          <h1>Student Data Tables</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/home">Home</a>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Student Data</li>
              <li>
                <NavLink className="nav-link1" to="/studentadd">
                  <caption>
                    <img
                      className="addicon"
                      src={addicon}
                      alt=""
                      width="40"
                      height="40"
                      style={{ marginLeft: 150, marginTop:-40,height:60,width: 60 }}
                    />
                  </caption>
                </NavLink>
              </li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Datatables:</h5>
                  {student.data && student.data.length > 0 ? (
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th>Sl.No</th>
                          <th>Student Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Stream</th>
                          <th>City</th>
                          <th>Age</th>
                          <th colSpan="2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {student.data.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <strong>{index + 1}</strong>
                            </td>
                            <td>{item.student_name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.stream}</td>
                            <td>{item.city}</td>
                            <td>{item.age}</td>
                            <td>
                              <Link to={`/viewdetails/${item._id}`}>
                                <img src={view} alt="" width="30" height="30" />
                              </Link>
                            </td>
                            <td>
                              <Link to={`/studentupdate/${item._id}`}>
                                <img src={edit} alt="" width="30" height="30" />
                              </Link>
                            </td>
                            <td>
                              <img
                                src={deleteuser}
                                alt=""
                                width="30"
                                height="30"
                                onClick={() => DeleteStudentDetails(item._id)}
                                style={{ cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="alert alert-info" role="alert">
                      <h4 style={{ textAlign: "center" }}>No Student Data Found</h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StudentDetails;
