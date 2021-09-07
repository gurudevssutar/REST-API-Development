import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import Backdrop from './Pages/Backdrop'
import SideDrawer from "./Pages/SideDrawer";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [drawerIsOpen,setDrawerIsOpen]=useState(false);

  const openDrawer = ()=>{
    setDrawerIsOpen(true);
  }

  const closeDrawer=()=>{
    setDrawerIsOpen(false);
  }
  
  return (
    
    <>
    {drawerIsOpen ? <Backdrop onClick={closeDrawer }/>:null}
    <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <div className="sdbase">
          <nav >
            <Link className="sdlinks" to="/"></Link><br/>
            <Link className="sdlinks" to="/"></Link><br/>
            
            <Link className="" to="/"></Link>
          </nav>
        </div>
        
    </SideDrawer>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click?"nav-menu active":"nav-menu"}> 
          <li className="nav-item ritu-class" >
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                id="ritual">
                API Development
              </NavLink>
            </li>
          <li className="nav-item" id="div1">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                onClick={openDrawer}
              >
                Course Outline
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
