import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Project from "./pages/Project/Project"
import Error from "./pages/Error/Error"
import Layout from "./pages/Layout"
import Contact from "./pages/Contact/Contact"

const Router = () => {
    return (
        <Routes>

            <Route element={<Layout />} >

                {/* définie page par default*/}
                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/project' element={<Project />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                {/*si trouve pas execute cette route*/}
                <Route path='*' element={<Error />} />

            </Route>

        </Routes>
    );
};

export default Router;

{/* <Route path='/project/:id' element={<Project />} /> */}