import React, { useEffect, useState } from "react";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import Navbar from "../../../Common/Navbar/Navbar";
import Head from "../../../Common/Head/Head";
import addicon from "../../../Image/addicon.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import deleteuser from "../../../Image/deletenew2.svg";
import view from "../../../Image/viewnew.svg";
import edit from "../../../Image/edit.svg";
import Swal from "sweetalert2";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchDetails, setSearchDetails] = useState([]);
  const [isvisiable,setisVisiable]=useState(false)
  

  // search api
  const searchApi = async (e) => {
    e.preventDefault();
    const obj = {
      name: search,
    };
    console.log("obj", obj);
    try {
      const res = await axios.get(`/search/${search}`);
      setSearchDetails(res.data.data);
      setisVisiable(true);
      console.log("search response+++", res);
    } catch (error) {
      console.error("Error fetching:", error);
    }
    // axios
    //   .get("/search", obj)
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => console.log(err));

    // fetch("/search", obj)
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };

  //fetch getdata
  const getApi = async () => {
    try {
      const response = await axios.get("/getteacher");
      setTeachers(response?.data?.Data || []);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
    setLoading(false);
  };

  //sweetalert delete
  const DeleteTeacherDetails = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/delete/${id}`);
          toast.success("Data Deleted Successfully.");
          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
          getApi(); //calling getApi again to refresh the data
        } catch (error) {
          console.error("Error deleting teacher:", error);
          Swal.fire(
            "Error!",
            "There was a problem deleting the teacher.",
            "error"
          );
        }
      }
    });
  };

  //pagination function calling
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(teachers.length / recordsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  if (loading) {
    return (
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
    );
  }

  //pagination
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = teachers.slice(firstIndex, lastIndex);
  const npage = Math.ceil(teachers.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <Head />
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        {/* search bar */}
        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
          
              id="form3Example3"
              className="form-control"
              placeholder="Teacher Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: 280 }}
            />
            <button class="btn btn-primary btn-sm" onClick={searchApi} style={{marginLeft:10}}>Search</button>
            {/* <button
             
              type="submit"
              title="Search"
              onClick={searchApi}
            >
              <i className="bi bi-search" />
            </button> */}
          </form>
        </div>
        {/* <button
        style={{marginLeft:-123}}
          className="btn btn-primary btn-sm"
          type="button"
          onClick={searchApi}
        >
          Search
        </button> */}
  
        <div className="pagetitle">
          <h1>Teacher Data Tables</h1>

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
                      className="addicon1"
                      src={addicon}
                      alt=""
                      width="40"
                      height="40"
                      style={{
                        marginLeft: 150,
                        marginTop: -40,
                        height: 60,
                        width: 60,
                      }}
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
                  <h5 className="card-title">Datatables: </h5>
                  {records.length > 0 && !isvisiable ? (
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th>Sl.No</th>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>City</th>
                          <th>Age</th>
                          <th colSpan="3">Action</th>
                        </tr>
                      </thead>
                      {records.map((item, index) => (
                        <tbody key={index}>
                          <tr>
                            <td>
                              <strong>
                                {(currentPage - 1) * recordsPerPage + index + 1}
                              </strong>
                            </td>
                            <td>{item.Teacher_Name}</td>
                            <td>{item.Depterment}</td>
                            <td>{item.Email}</td>
                            <td>{item.Phone}</td>
                            <td>{item.City}</td>
                            <td>{item.Age}</td>
                            <td>
                              <Link to={`/view/${item._id}`}>
                                <img src={view} alt="" width="30" height="30" />
                              </Link>
                            </td>
                            <td>
                              <Link to={`/update/${item._id}`}>
                                <img src={edit} alt="" width="30" height="30" />
                              </Link>
                            </td>
                            <td>
                              <img
                                src={deleteuser}
                                alt=""
                                width="30"
                                height="30"
                                onClick={() => DeleteTeacherDetails(item._id)}
                                style={{ cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  ) : (
                    <div className="alert alert-info" role="alert">
                      <h4 style={{ marginLeft: 300 }}>Found</h4>
                    </div>
                  )}

           

                  {searchDetails.length > 0 && isvisiable ? (
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th>Sl.No</th>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>City</th>
                          <th>Age</th>
                          <th colSpan="3">Action</th>
                        </tr>
                      </thead>
                      {searchDetails.map((item, index) => (
                        <tbody key={index}>
                          <tr>
                            <td>
                              <strong>
                                {(currentPage - 1) * recordsPerPage + index + 1}
                              </strong>
                            </td>
                            <td>{item.Teacher_Name}</td>
                            <td>{item.Depterment}</td>
                            <td>{item.Email}</td>
                            <td>{item.Phone}</td>
                            <td>{item.City}</td>
                            <td>{item.Age}</td>
                            <td>
                              <Link to={`/view/${item._id}`}>
                                <img src={view} alt="" width="30" height="30" />
                              </Link>
                            </td>
                            <td>
                              <Link to={`/update/${item._id}`}>
                                <img src={edit} alt="" width="30" height="30" />
                              </Link>
                            </td>
                            <td>
                              <img
                                src={deleteuser}
                                alt=""
                                width="30"
                                height="30"
                                onClick={() => DeleteTeacherDetails(item._id)}
                                style={{ cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  ) : (
                    <div className="alert alert-info" role="alert">
                      <h4 style={{ marginLeft: 300 }}>No Teacher Found</h4>
                    </div>
                  )}

                  {/* pagination */}
                  <nav>
                    <ul className="pagination">
                      <li className="page-item">
                        <a href="#" className="page-link" onClick={prePage}>
                          Prev
                        </a>
                      </li>
                      {numbers.map((n, i) => (
                        <li
                          className={`page-item ${
                            currentPage === n ? "active" : ""
                          }`}
                          key={i}
                        >
                          <a
                            href="#"
                            className="page-link"
                            onClick={() => changePage(n)}
                          >
                            {n}
                          </a>
                        </li>
                      ))}
                      <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage}>
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
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
