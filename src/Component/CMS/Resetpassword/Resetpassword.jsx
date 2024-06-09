import React, { useState } from "react";
import view from "../../../Image/view.svg";
import leftarrow from "../../../Image/left-arrow.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [otp, setOtp] = useState();
  const [newpassword, setNewpassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();

  //show password
  const passwordShow = () => {
    setShow(!show);
  };
  const passwordShow1 = () => {
    setShow1(!show1);
  };

  const submitData=async(e)=>{
    e.preventDefault();

    setOtp("");
    setNewpassword("");
    setConfirmpassword("")

    const obj={
      otp:otp,
      newpassword:newpassword,
      confirmpassword:confirmpassword
    }
    console.log("++++++",obj)
  }

  return (
    <>
      <div className="container-f11">
      <NavLink className="nav-link1" to="/forgetpassword">
          <caption>
            <img
              className="lert-arrow"
              src={leftarrow}
              alt=""
              width="40"
              height="40"
              onClick={() => navigate(-1)}
              style={{ marginLeft: 380, marginBottom: -200 }}
            />
          </caption>
        </NavLink>
        <h2
          className="mx-auto mt-3"
          style={{ marginLeft: 100, color: "green", marginBottom: 50 }}
        >
          {/* reset password */}
        </h2>

        <form
          className="w-500 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light"
          style={{ width: 420, marginBottom: 122 }}
        >
          <pre style={{background:"#4d79ff"}}>Reset password</pre>
          <div class="form-group text-left">
            <input
              type="number"
              class="form-control"
              name="otp"
              id="otp"
              placeholder="Otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div class="form-group text-left">
            <input
              type={show ? "text" : "password"}
              class="form-control"
              name="newpassword"
              id="newpassword"
              placeholder="New password"
              value={newpassword}
              onChange={(e) => setNewpassword(e.target.value)}
            />
            <img
              src={view}
              alt=""
              width="30"
              height="40"
              onClick={passwordShow}
              style={{ marginTop: -66, marginLeft: 280 }}
            />
          </div>

          <div class="form-group1 text-left1" style={{marginTop:-18}}>
            <input
              type={show1 ? "text" : "password"}
              class="form-control"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <img
              src={view}
              alt=""
              width="30"
              height="40"
              onClick={passwordShow1}
              style={{ marginTop: -66, marginLeft: 280 }}
            />
          </div>

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
    </>
  );
};

export default Resetpassword;
