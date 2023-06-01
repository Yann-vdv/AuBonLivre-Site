import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';

function Layout() {
  return (
    <div className="">
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default Layout;