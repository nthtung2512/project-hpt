import React, { useEffect, useState } from 'react'
import styles from "./auth.module.css"
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TypeIn = ({setIsLoggedIn}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Password", password)
        console.log("Code", code)
        setIsLoggedIn(true)
        navigate("/")
    }

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleCodeChange = (event) => {
        setCode(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    

    return (
        <div className={styles.typeIn}>
            <form onSubmit={handleLoginSubmit} className={styles.form}>
                <FormControl sx={{width: '350px'}} variant="outlined" required>
                    <InputLabel htmlFor="outlined-code">Enter Code</InputLabel>
                    <OutlinedInput 
                        id='outlined-code' 
                        type="text"
                        label="Enter Code" 
                        variant="outlined" 
                        value={code} 
                        onChange={handleCodeChange}
                        required 
                    />
                </FormControl>
                
                <FormControl sx={{width: '350px'}} variant="outlined" required>
                    <InputLabel htmlFor="outlined-adornment-password">Enter Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Enter Password"
                    />
                </FormControl>
                <Button type="submit" sx={{
                    backgroundColor: "var(--btn)", 
                    color: "var(--text)", 
                    width: '350px',
                    "&:hover": {
                        backgroundColor: "var(--btn_soft)", 
                        transition: "background-color 0.5s ease",
                    }
                }}>
                    LOGIN
                </Button>
            </form>
            
        </div>
        
        
    )
}

const Auth = ({setIsLoggedIn, setAuthentication}) => {
    const { auth_role } = useParams();
    const [title, setTitle] = useState("");

    const checkAuth = () => {
        setTitle(auth_role)
        setAuthentication(auth_role);
    }

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <div className={styles.auth}>
            <h1>LOGIN AS {title}</h1>
            <TypeIn setIsLoggedIn={setIsLoggedIn}/>
        </div>
    )
}

export default Auth