import React, { useEffect, useState } from "react";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import Navbar from "../../../Common/Navbar/Navbar";
import Head from "../../../Common/Head/Head";
import Footer from "../../../Common/Footer/Footer";
import addicon from "../../../Image/addicon.svg";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import deleteuser from "../../../Image/deletenew2.svg";
import view from "../../../Image/viewnew.svg";
import edit from "../../../Image/edit.svg";
import Swal from 'sweetalert2';

const StudentDetails = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    const response = await axios.get("/getstudent");
    console.log("studentgetdata",response)
    setStudent(response?.data);
  };

  // delete details
  // const DeleteTeacherDetails = async (id) => {
  //   if (window.confirm("Do you want to Delete Data ?")) {
  //     axios.delete(`/deletestudent/${id}`);
  //     toast.success("Data deleted successfully");
  //     getApi();
  //   } else {
  //   }
  // };

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
          getApi(); //calling getapi
          // toast.success("Data deleted successfully");
        } catch (error) {
          console.error("Error deleting teacher:", error);
          Swal.fire("Error!", "There was a problem deleting the teacher.", "error");
        }
      }
    });
  };


  useEffect(() => {
    getApi();
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
                      // onClick={() => navigate(-1)}
                      style={{ marginLeft: 150, marginBottom: -20 }}
                    />
                  </caption>
                </NavLink>
              </li>
            </ol>
          </nav>
        </div>

        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Datatables: </h5>

                  {/* Table with stripped rows */}
                  <table className="table datatable" >
                    <thead >
                      <tr>
                        <th>Sl.No</th>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Stream</th>
                        <th>City</th>
                        <th>Age</th>
                        <th colspan="2">Action</th>
                      </tr>
                    </thead>
                    {student.data?.map((item, index) => {
                      //node js
                      return (
                        <>
                          <tbody>
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
                                  <img
                                    src={view}
                                    alt=""
                                    width="30"
                                    height="30"
                                  />
                                </Link>
                              </td>
                              <td>
                                <Link to={`/update/${item._id}`}>
                                  <img
                                    src={edit}
                                    alt=""
                                    width="30"
                                    height="30"
                                  />
                                </Link>
                              </td>
                              <td>
                                <Link>
                                  <img
                                    src={deleteuser}
                                    alt=""
                                    width="30"
                                    height="30"
                                    onClick={() =>
                                      DeleteStudentDetails(item._id)
                                    }
                                  />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}
                  </table>
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

