import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Error from "./pages/Error/Error";
import Layout from "./pages/Layout";

const Router = ({ isOn, setIsOn }) => {
    return (
        <Routes>
            <Route element={<Layout isOn={isOn} setIsOn={setIsOn} />}>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/project' element={<Project />} />
                <Route path='/project/:id' element={<ProjectDetail />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default Router;

