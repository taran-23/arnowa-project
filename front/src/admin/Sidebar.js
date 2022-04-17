import React from 'react';
import {   Routes, Route, Link } from 'react-router-dom';


import './Sidebar.css'
import Topbar from './Topbar';

import Dashboard from './Dashboard';




function Sidebar() {

 
  
  return (
  
    <div>
      <Topbar/>
  
      <div >
        <div className='wrapper' >
      <div className='sidebar'>
            <ul >
          <li >

          <Link  to='/admin'>Dashboard</Link>

          </li>
        
        </ul>
        </div>
        </div>
        <div className='admin-content'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          


          </Routes>
        </div>
      

      
        </div>
      </div>

     



      );
    }
    
   
  

export default Sidebar;