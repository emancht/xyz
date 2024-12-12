import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

import CreateBlogPage from "./pages/CreateBlogPage.jsx";
import CreateServicePage from "./pages/CreateServicePage.jsx";
import CreateMemberPage from "./pages/CreateMemberPage.jsx";
import DashBoardPage from "./pages/DashBoardPage.jsx";
import UpdateBlogPage from "./pages/UpdateBlogPage.jsx";
import {Toaster} from "react-hot-toast";
import BlogDetails from "./components/BlogDetails.jsx";
import ServiceDetails from "./components/ServiceDetails.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import TeamDetails from "./components/TeamDetails.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/blog-details/:id" element={<BlogDetails/>} />
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/service" element={<ServicePage/>}/>
                <Route path="/service-details/:id" element={<ServiceDetails/>}/>
                <Route path="/team-details/:id" element={<TeamDetails/>}/>
                {/*  CRUD Operation  */}
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/dashboard" element={<DashBoardPage/>}/>
                <Route path="/create-blog" element={<CreateBlogPage/>}/>
                <Route path="/update-blog" element={<UpdateBlogPage/>}/>
                <Route path="/create-service" element={<CreateServicePage/>}/>
                <Route path="/create-member" element={<CreateMemberPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;