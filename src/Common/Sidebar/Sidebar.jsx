import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/home">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
            {/* <Link to={'/'}>Dashboard</Link> */}
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide" />
              <span>Teacher</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
              
            >
              
              <li>
              
                <Link to={"/teacher"}>Teacher Details</Link>
              </li>
            </ul>
          </li>
          {/* End Components Nav */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text" />
              <span>Student</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
               <li>
                <Link to={"/student"}>Student Details</Link>
              </li>
              </ul>
          </li>
          {/* End Forms Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-layout-text-window-reverse" />
              <span>Tables</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle" />
                  <span>General Tables</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i className="bi bi-circle" />
                  <span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Tables Nav */}

          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person" />
              <span>Profile</span>
            </a>
          </li>
          {/* End Profile Page Nav */}

          <li className="nav-item">
            <a className="nav-link collapsed" href="/contact">
              <i className="bi bi-envelope" />
              <span>Contact</span>
            </a>
          </li>
          {/* End Contact Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="/register">
              <i className="bi bi-card-list" />
              <span>Register</span>
            </a>
          </li>
          {/* End Register Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="/">
              <i className="bi bi-box-arrow-in-right" />
              <span>Login</span>
            </a>
          </li>
          {/* End Login Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <i className="bi bi-dash-circle" />
              <span>Error 404</span>
            </a>
          </li>
          {/* End Error 404 Page Nav */}
        </ul>
      </aside>
      {/* End Sidebar*/}
    </>
  );
};

export default Sidebar;
