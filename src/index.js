import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Project from './project';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Errorlink  from './Error'
import Navbar from './Component/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Pure-Component" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/HOC" element={<Project/>}/>
          <Route path='*' element={<Errorlink/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

