import React, { useState } from 'react'
import styles from "./login.module.css"
import { Link } from 'react-router-dom'
const LoginButton = ({title, link}) => {
    return (
        <Link to={link} className={styles.loginButton}>
            <p>LOGIN AS {title}</p>
        </Link>
    )
}

const Login = () => {
    return (
        <>
            <div className={styles.login}>
                <h1>CHOOSE YOUR ROLE</h1>
                <LoginButton title="RECEPTIONIST" link={"/auth/RECEPTIONIST"}/>
                <LoginButton title="DOCTOR" link={"/auth/DOCTOR"}/>
                <LoginButton title="NURSE" link={"/auth/NURSE"}/>
                <LoginButton title="ADMINISTRATOR" link={"/auth/ADMINISTRATOR"}/>
            </div>
        </>
        
    )
}

export default Login