import React, { useEffect, useState } from "react";
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({});
  const getApi = async () => {
    try {
      const response = await axios.get("/getContact");
      console.log("contact+++", response);
      setContact(response?.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
    // setLoading(false);
  };
  useEffect(() => {
    getApi();
  });

  return (
    <>
      <Head />
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Contact Data Tables</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Data</li>
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
                        <th>Sl.no</th>
                        <th>
                          <b>N</b>ame
                        </th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th data-type="date" data-format="YYYY/DD/MM">Start Date</th> */}
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contact.data?.map((item, index) => {
                        return (
                          <>
                            <tr>
                              <td><b>{index+1}</b></td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td>{item.message}</td>
                              <td><button type="button" class="btn btn-primary btn-sm">Send mail</button></td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* End Table with stripped rows */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End #main */}
    </>
  );
};

export default Contact;



//thank you for contactus we will get tough very soon