import React, { useState } from "react";
import axios from "axios";
import view from "../../../Image/email.svg";
import leftarrow from "../../../Image/left-arrow.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Forgetpassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    setEmail("");
    var obj = {
      email: email,
    };

    await axios
      .post("/admin/forgetpassword", obj)
      .then((response) => {
        
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/resetpassword");
        } else {
          toast.error("Failed to send reset password email.");
          navigate("/forgetpassword");
        }

  
      })
      .catch((err) => {
        toast.error("An error occurred. Please try again."); 
        console.log(err);
        // toast.error(err);
      });
  };
  return (
    <>
      <div className="container-f11">
        <NavLink className="nav-link1" to="/">
          <caption>
            <img
              className="lert-arrow"
              src={leftarrow}
              alt=""
              width="40"
              height="40"
              onClick={() => navigate(-1)}
              style={{ marginLeft: 350, marginBottom: -300 }}
            />
          </caption>
        </NavLink>
        <h2
          className="mx-auto mt-3"
          style={{ marginLeft: 100, color: "green", marginBottom: 105 }}
        ></h2>

        <form 
          className="w-500 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light"
          style={{ width: 484, marginBottom: 122 }}
        >
          <pre style={{ background: "#4d79ff" }}>Forget password</pre>
          <label htmlFor="">Enter your email</label>
          <div class="form-group text-left">
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <img
              src={view}
              alt=""
              width="30"
              height="40"
              style={{ marginTop: -66, marginLeft: 350 }}
            />
          </div>

          <div class="form-group text-left form-check"></div>

          <div className="text-left">
            <button
              type="submit"
              class="btn form-control btn-sm btn-primary"
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Forgetpassword;
