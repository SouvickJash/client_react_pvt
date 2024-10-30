import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeletePopup from "../Navbar/DeletePopup";
import view from "../../Image/view.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [profileImage, setProfileImage] = useState("");

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [password, setPassword] = useState("");
  const [confrompassword, setConfirmPassword] = useState("");
 

 

  const getAdminApi = async () => {
    const responce = await axios.get("/admin/getdata");
    // console.log("admin profile_image+++++", responce.data.userData[0].image);
    const concat = "http://localhost:3002/" + responce.data.userData[0].image;
    console.log("concat", concat);
    setProfileImage(concat);
    setProfile(responce?.data);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  //show password
  const passwordShow = () => {
    setShow(!show);
  };
  const passwordShow1 = () => {
    setShow1(!show1);
  };
  //change password api
  const submitPass = async (e) => {
    e.preventDefault();
    setPassword("");
    setConfirmPassword("");
    const id = localStorage.getItem("id");
    var obj = {
      user_id: id,
      password: password,
      confrompassword: confrompassword,
    };
    console.log("object+++", obj);
    if (password === "") {
      toast.error("Password is require");
    } else if (confrompassword === "") {
      toast.error("confirmpassword is require");
    } else if (password !== confrompassword) {
      toast.error("password and cpassword are not matched");
    } else {
      await axios
        .post("/admin/updatepass", obj)
        .then((response) => {
          console.log("response.....", response);

          if (response.status === 200) {
            // toast.success(response.data.message);
            alert(response.data.message);
            setIsOpen(false);
            navigate("/home");
          } else {
            navigate("/chnagepassword");
          }
        })
        .catch((err) => {
          console.log(err);
          // toast.error(err);
        });
    }
  };

  useEffect(() => {
    getAdminApi();
  }, []);
  // console.log("admin_image",profile)

  const signOut = () => {
    localStorage.removeItem("token");
    toast.error("Logout successfully");
    navigate("/");
  };
  // const chnagePassword=()=>{
  //   console.log("hello")
  //   navigate("/chnagepassword");
  // }
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="/home" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt />
            <span className="d-none d-lg-block">Admin Panel</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        {/* End Logo */}


   
        {/* End Search Bar */}
        <nav className="header-nav ms-auto">
          {isOpen && (
            <DeletePopup
              content={
                <>
                  <div
                    className="nested_popupcontent"
                    style={{ marginTop: -80 }}
                  >
                    {/* <h6> Are you want to delete selected file?</h6> */}

                    <form className="w-50a mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light">
                      <div
                        class="form-group text-left"
                        style={{ width: 250, marginLeft: -30 }}
                      >
                        <input
                          type={show ? "text" : "password"}
                          class="form-control"
                          name="password"
                          id="password"
                          placeholder="New Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <img
                          src={view}
                          alt=""
                          width="30"
                          height="40"
                          onClick={passwordShow}
                          style={{ marginTop: -66, marginLeft: 215 }}
                        />
                      </div>
                      <div
                        class="form-group text-left"
                        style={{ width: 250, marginLeft: -30 }}
                      >
                        <input
                          type={show1 ? "text" : "password"}
                          class="form-control"
                          name="password"
                          id="password"
                          placeholder="Confirm Password"
                          value={confrompassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <img
                          src={view}
                          alt=""
                          width="30"
                          height="40"
                          onClick={passwordShow1}
                          style={{ marginTop: -66, marginLeft: 215 }}
                        />
                      </div>

                      <div className="text-left">
                        <button
                          onClick={submitPass}
                          style={{ width: 250, marginLeft: -30 }}
                          type="submit"
                          class="btn form-control btn-sm btn-dark"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                    <br />
                    <div className="button_opt"></div>
                  </div>
                </>
              }
              handleClose={togglePopup}
            />
          )}
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown"></li>
            {/* End Notification Nav */}

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: 40, height: 50 }}
                  />
                ) : (
                  <img
                    src="assets/img/profile-img.jpg"
                    alt="Profile"
                    className="rounded-circle"
                  />
                )}

                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Souvick
                </span>
              </a>
              {/* End Profile Iamge Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person" />
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/"
                  >
                    <i className="bi bi-box-arrow-right" />
                    <span onClick={signOut}>Sign Out</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right" />
                    {/* <span onClick={chnagePassword}>Change Password</span> */}
                    <Link>
                      <span onClick={togglePopup}>Change Password</span>
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <ToastContainer />
    </>
  );
};

export default Navbar;
