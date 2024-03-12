'use client'
import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'; 
import { useNavigate, useLocation } from 'react-router-dom';
const Navbar = ({setIsLoggedIn, authentication}) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    const distanceFromTop = 65; // Distance from top when navbar sticks
    
    if (window.scrollY > distanceFromTop) {
      navbar.classList.add(styles.sticky); // Use styles.sticky from your CSS module
    } else {
      navbar.classList.remove(styles.sticky); // Use styles.sticky from your CSS module
    }
  });
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login")
  }
  return (
    <div className={styles.navbar} id="navbar">
      <Link to="/" style={{textDecoration: "none"}}>
        <div className={`${styles.container} ${
          location.pathname === "/" ? styles.active : styles.navbar_item
        }`}>
          {location.pathname === "/" ? (
            <img src="/assets/Images/blue_home.png" alt="" width={20} height={20}/>
          ) : (
            <img src="/assets/Images/home.png" alt="" width={20} height={20}/>
          )}
          <p>HOME</p>
        </div>
      </Link>
      
      <Link to="/doctor" style={{textDecoration: "none", display: authentication == "RECEPTIONIST" && "none"}}>
        <div className={`${styles.container} ${
          location.pathname === "/doctor" ? styles.active : styles.navbar_item
        }`}>
          {location.pathname === "/doctor" ? (
            <img src="/assets/Images/blue_doctor.png" alt="" width={20} height={20}/>
          ) : (
            <img src="/assets/Images/white_doctor.png" alt="" width={20} height={20}/>
          )}
          <p>DOCTOR</p>
        </div>
      </Link>

      <Link to="/department" style={{textDecoration: "none", display: authentication == "RECEPTIONIST" && "none"}}>
        <div className={`${styles.container} ${
          location.pathname === "/department" ? styles.active : styles.navbar_item
        }`}>
          {location.pathname === "/department" ? (
            <img src="/assets/Images/blue_department.png" alt="" width={20} height={20}/>
          ) : (
            <img src="/assets/Images/white_department.png" alt="" width={20} height={20}/>
          )}
          <p>DEPARTMENT</p>
        </div>
      </Link>

      <Link to="/nurse" style={{textDecoration: "none", display: authentication == "RECEPTIONIST" && "none"}}>
        <div className={`${styles.container} ${
          location.pathname === "/nurse" ? styles.active : styles.navbar_item
        }`}>
          {location.pathname === "/nurse" ? (
            <img src="/assets/Images/blue_nurse.png" alt="" width={20} height={20}/>
          ) : (
            <img src="/assets/Images/white_nurse.png" alt="" width={20} height={20}/>
          )}
          <p>NURSE</p>
        </div>
      </Link>

      <Link to="/patient" style={{textDecoration: "none"}}>
        <div className={`${styles.container} ${
          location.pathname.startsWith("/patient") ? styles.active : styles.navbar_item
        }`}>
          {location.pathname.startsWith("/patient") ? (
            <img src="/assets/Images/blue_patient.png" alt="" width={20} height={20}/>
          ) : (
            <img src="/assets/Images/white_patient.png" alt="" width={20} height={20}/>
          )}
          <p>PATIENT</p>
        </div>
      </Link>

      <Link to="/medication" style={{textDecoration: "none", display: authentication == "ADMINISTRATOR" ? "flex" : "none"}}>
        <div className={`${styles.container} ${
          location.pathname === "/medication" ? styles.active : styles.navbar_item
        }`}>
          {location.pathname === "/medication" ? (
            <img src="/assets/Images/blue_pills.png" alt="" width={20} height={20}/>
          ) : (
            <img src="/assets/Images/white_pills.png" alt="" width={20} height={20}/>
          )}
          <p>MEDICATION</p>
        </div>
      </Link>

      <Link to="/medProvider" style={{textDecoration: "none", display: authentication == "ADMINISTRATOR" ? "flex" : "none"}}>
        <div className={`${styles.container} ${
          location.pathname.startsWith("/medProvider") ? styles.active : styles.navbar_item
        }`}>
          {location.pathname.startsWith("/medProvider") ? (
            <img src="/assets/Images/blue_provider.png" alt="" width={20} height={20}/>
          ) : (
            <img src="/assets/Images/white_provider.png" alt="" width={20} height={20}/>
          )}
          <p>PROVIDER</p>
        </div>
      </Link>

      <button onClick={handleLogout} className={`${styles.navbar_item} ${styles.container} ${styles.logout}`}>
        <img src="/assets/Images/logout.png" alt="" width={20} height={20}/>
        <p>LOGOUT</p>
      </button>
    </div>
  )
}

export default Navbar