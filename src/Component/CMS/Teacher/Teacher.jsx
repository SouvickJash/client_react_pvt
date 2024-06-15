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

const Teacher = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(true);
  const getApi = async () => {
    const response = await axios.get("/getteacher");
    setTeacher(response?.data);
  };

  // update details
  // function UpdateDetails(_id,teacher_name,depterment,email,phone,city,age){
  //    console.log("details: ",`id:${_id},teacher_name:${teacher_name},email:${email},phone:${phone},city:${city},age:${age}`)
  // }

  // delete details
  const DeleteTeacherDetails = async (id) => {
    if (window.confirm("Do you want to Delete Data ?")) {
      axios.delete(`/delete/${id}`);
      toast.success("Data deleted successfully");
      getApi();
    } else {
    }
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
          <h1>Data Tables</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/home">Home</a>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Teacher Data</li>
              <li>
                <NavLink className="nav-link1" to="/teacheradd">
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
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Depterment</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Age</th>
                        <th colspan="2">Action</th>
                      </tr>
                    </thead>
                    {teacher.Data?.map((item, index) => {
                      //node js
                      return (
                        <>
                          <tbody>
                            <tr key={index}>
                              <td>
                                <strong>{index + 1}</strong>
                              </td>
                              <td>{item.Teacher_Name}</td>
                              <td>{item.Depterment}</td>
                              <td>{item.Email}</td>
                              <td>{item.Phone}</td>
                              <td>{item.City}</td>
                              <td>{item.Age}</td>
                              {/* <td>
                                <Link
                                  type="button"
                                  class="btn btn-primary btn-sm"
                                  to={`/update/${item._id}`}
                                  // onClick={()=>UpdateDetails(item._id,item.Teacher_Name,item.Depterment,item.Email,item.Phone,item.City,item.Age)}
                                >
                                  Update
                                </Link>
                              </td> */}

                              <td>
                                <Link to={`/view/${item._id}`}>
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
                                      DeleteTeacherDetails(item._id)
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

export default Teacher;
