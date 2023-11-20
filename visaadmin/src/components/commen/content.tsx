import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from '../home';
import Login from '../login';


const Content = () => {
  return (
  
    <Router>
            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
    </Router>
  );
}

export default Content