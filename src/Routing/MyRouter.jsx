import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Component/CMS/Home/Home";
import Login from "../Component/Auth/Login/Login";
// import Changepassword from "../Component/CMS/Changepassword/Changepassword";
import Register from "../Component/Auth/Register/Register";
import Forgetpassword from "../Component/CMS/Forgetpassword/Forgetpassword";
import Resetpassword from "../Component/CMS/Resetpassword/Resetpassword";
import Pagenotfound from "../Component/CMS/PagenotFound/Pagenotfound";
import Teacher from "../Component/CMS/Teacher/Teacher";
import Teacheradd from "../Component/CMS/Teacher/Teacheradd";
import UpdateTeacher from "../Component/CMS/Teacher/UpdateTeacher";
import Contact from "../Component/CMS/Contact/Contact";
import View from "../Component/CMS/Teacher/View";

import StudentDetails from "../Component/CMS/Student/StudentDetails";
import StudentAdd from "../Component/CMS/Student/StudentAdd";
import StudentView from "../Component/CMS/Student/StudentView";
import StudentUpdate from "../Component/CMS/Student/StudentUpdate";
import DragandDrop from "../Component/CMS/ImageUpload/DragandDrop";

const MyRouter = () => {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/chnagepassword" element={<Changepassword />} /> */}
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacheradd" element={<Teacheradd />} />
          <Route path="/update/:id" element={<UpdateTeacher />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view/:id" element={<View />} />

          {/* student details */}
          <Route path='/studentdetails' element={<StudentDetails/>}/>
          <Route path='/studentadd' element={<StudentAdd/>}/>
          <Route path='/viewdetails/:id' element={<StudentView/>}/>
          <Route path='/studentupdate/:id' element={<StudentUpdate/>}/>
          <Route path='/imageupload' element={<DragandDrop/>}/>

          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRouter;
