import React, { useEffect, useState } from "react";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import Navbar from "../../../Common/Navbar/Navbar";
import Head from "../../../Common/Head/Head";
import Footer from '../../../Common/Footer/Footer'
import  addicon from "../../../Image/addicon.svg";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";


const Teacher = () => {
  const navigate = useNavigate();
  const [teacher,setTeacher]=useState([])
  const getApi = async () => {
    const response = await axios.get("/getteacher");
    console.log('data+++++',response)
    setTeacher(response?.data);
  };
    useEffect(()=>{
        getApi();
    },[])


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
                <a href="index.html">Home</a>
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
                  <h5 className="card-title">Datatables</h5>
           
                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>
                          <b>N</b>ame
                        </th>
                        <th>Ext.</th>
                        <th>City</th>
                        <th data-type="date" data-format="YYYY/DD/MM">
                          Start Date
                        </th>
                        <th>Completion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Unity Pugh</td>
                        <td>9958</td>
                        <td>Curicó</td>
                        <td>2005/02/11</td>
                        <td>37%</td>
                      </tr>
               
                      
                    </tbody>
                  </table>
                  {/* End Table with stripped rows */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Teacher;
