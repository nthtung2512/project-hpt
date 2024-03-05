'use client'
import { useState } from "react";
import styles from "./Header.module.css"
import { Link } from "react-router-dom";
const Header = () => {
    const userName = "David Simon";
    const firstLetter = userName[0];
    const [toggleDropdown, setToggleDropdown] = useState(false)
    const handleDropdown = () => {
        setToggleDropdown((prev) => !prev)
    }
    return (
        <>
            <div className={styles.desktop_header}>
                <Link to="/" className={styles.logo_link}>
                    <div className={styles.logo_container}>
                        <img src="/assets/Images/hospital.png" alt="" width={45} height={45}/>
                        <p className={styles.logo}>MEDISYS</p>
                    </div>
                    
                </Link>
                <div className={styles.btn_profile}>
                    <p className={styles.profile_icon}>{firstLetter}</p>
                    <span>{userName}</span>
                </div>
            </div>

            <div className={styles.mobile_header}>
            <img onClick={handleDropdown} src="/assets/Images/menu.png" alt="" width={30} height={30} className={styles.menu}/>
                <Link to="/" className={styles.logo_link}>
                    <div className={styles.logo_container}>
                        <img src="/assets/Images/hospital.png" alt="" width={45} height={45}/>
                        <p className={styles.logo}>MEDISYS</p>
                    </div>
                </Link>
                
                {toggleDropdown && (
                    <div className={styles.dropdown}>
                        <Link to="/" className={styles.dropdown_item}>HOME</Link>
                        <Link to="/doctor" className={styles.dropdown_item}>DOCTOR</Link>
                        <Link to="/nurse" className={styles.dropdown_item}>NURSE</Link>
                        <Link to="/patient" className={styles.dropdown_item}>PATIENT</Link>
                        <Link to="/medication" className={styles.dropdown_item}>MEDICATION</Link>
                        <Link to="/medProvider" className={styles.dropdown_item}>PROVIDER</Link>
                        <Link to="/login" className={styles.dropdown_item}>LOGOUT</Link>
                    </div>
                )}
                <div className={styles.btn_profile}>
                    <p className={styles.profile_icon}>{firstLetter}</p>
                    <span>{userName}</span>
                </div>
            </div>
        </>
        
    )
}

export default Header