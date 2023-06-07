import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import SideBar from './SideBar';

function Layout() {
  return (
    <div className="">
      <NavBar/>
      <div className='flex w-full' style={{backgroundColor: "#CCBDBD"}}>
        <div className='w-60'>
          <SideBar/>
        </div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;