import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Component/CMS/Home/Home";
// import Head from "../Common/Head/Head";
// import Navbar from "../Common/Navbar/Navbar";
// import Sidebar from "../Common/Sidebar/Sidebar";
// import Footer from "../Common/Footer/Footer";
import Login from "../Component/Auth/Login/Login";
import Changepassword from "../Component/CMS/Changepassword/Changepassword";
import Register from "../Component/Auth/Register/Register";
import Forgetpassword from "../Component/CMS/Forgetpassword/Forgetpassword";
import Resetpassword from "../Component/CMS/Resetpassword/Resetpassword";
import Pagenotfound from "../Component/CMS/Pagenotgound/Pagenotfound";
import Teacher from "../Component/CMS/Teacher/Teacher";
import Teacheradd from "../Component/CMS/Teacher/Teacheradd";


const MyRouter = () => {
  return (
    <>
      <Router>
        {/* <Head /> */}
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/chnagepassword' element={<Changepassword/>}/>
            <Route path='/forgetpassword' element={<Forgetpassword/>}/>
            <Route path='/resetpassword' element={<Resetpassword/>}/>
            <Route path='/teacher' element={<Teacher/>}/>
            <Route path='/teacheradd' element={<Teacheradd/>}/>          
            <Route path='/*' element={<Pagenotfound/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
};

export default MyRouter;
