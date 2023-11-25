import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/home';
import { Home2 } from '../pages/home2';
export const Routers: React.FC = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home2' element={<Home2 />}/>
        </Routes>
    )
};