import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Component/CMS/Home/Home";
import Head from "../Common/Head/Head";
import Navbar from "../Common/Navbar/Navbar";
import Sidebar from "../Common/Sidebar/Sidebar";
// import Footer from "../Common/Footer/Footer";
import Login from "../Component/Auth/Login/Login";
import Changepassword from "../Component/CMS/Changepassword/Changepassword";
import Register from "../Component/Auth/Register/Register";

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
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
};

export default MyRouter;
