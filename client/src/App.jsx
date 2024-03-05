import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Auth, Patient, Nurse, MedProvider, Medication, Doctor, Department} from "./pages";
import { PatientDetail, AddImport } from "./pages";
import { Navbar, Footer, Header } from "./components";
import { Snackbar, Alert } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./App.css";
const MaybeShowNavbar = ({showNavbar, setShowNavbar, children}) => {
  const location = useLocation();
  

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname.match(/^\/auth\/\w+$/)) {
      setShowNavbar(false);
    }
    else {
      setShowNavbar(true);
    }
  }, [location])

  return (
    <div>{showNavbar && children}</div>
  )
}

function App() {
  // const [isLogin, setIsLogin] = useState(true);
  // const [hasLogin, setHasLogin] = useState(getCookie('userID') !== null);
  // const [openAlert, setOpenAlert] = useState(false);
  // const [alertSeverity, setAlertSeverity] = useState("error");
  // const [alertMessage, setAlertMessage] = useState("");
 
//    /* make cookie when need to get customer id*/
//    const setCookie = (name, value, days) => {
//   const expirationDate = new Date();
//   expirationDate.setDate(expirationDate.getDate() + days);

//   // Set SameSite=Strict attribute
//   const cookieOptions = {
//     expires: expirationDate.toUTCString(),
//     path: '/',
//     secure: true,
//     SameSite: 'Strict',
//   };

//   const cookieValue = `${name}=${value}; ${serializeCookieOptions(cookieOptions)}`;
//   document.cookie = cookieValue;
// };

// // Helper function to serialize cookie options
// const serializeCookieOptions = (options) => {
//   return Object.entries(options)
//     .map(([key, value]) => `${key}=${value}`)
//     .join('; ');
// };
//   /*Take cookie*/
//   function getCookie(cookieName) {
//     const name = cookieName + "=";
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const cookieArray = decodedCookie.split(';');
  
//     for (let i = 0; i < cookieArray.length; i++) {
//       let cookie = cookieArray[i].trim();
//       if (cookie.indexOf(name) === 0) {
//         return cookie.substring(name.length, cookie.length);
//       }
//     }
//     return null;
//   }

//   function deleteCookie(cookieName) {
//     document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//   }

  // const handleAlertClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpenAlert(false);
  // };

  // <div className="App">

  //       <NavBar hasLogin={hasLogin} setHasLogin={setHasLogin} deleteCookie={deleteCookie}/>
  //       <div className="content">
  //         <Routes>
  //           <Route exact path="/" element={<Home />} />
  //           <Route path="/History" element={<History customerID={getCookie('userID')} setOpenAlert={setOpenAlert} setAlertSeverity={setAlertSeverity} setAlertMessage={setAlertMessage}/>} />
  //           <Route path="/Schedule/:restaurant_id" element={<Schedule getCookie={getCookie} hasLogin={hasLogin}/>} />
  //           <Route path="/APIsExample" element={<APIsExample />} />
  //           <Route exact path="/Login" element={<Login setOpenAlert={setOpenAlert} setAlertSeverity={setAlertSeverity} setAlertMessage={setAlertMessage} hasLogin={hasLogin} setHasLogin={setHasLogin} isLogin={isLogin} setIsLogin={setIsLogin} setCookie={setCookie} getCookie={getCookie}/>} />
  //         </Routes>
  //       </div>
  //       {/* <Snackbar
  //         open={openAlert}
  //         autoHideDuration={6000}
  //         onClose={handleAlertClose}
  //       >
  //         <Alert onClose={handleAlertClose} severity={alertSeverity}>
  //           {alertMessage}
  //         </Alert>
  //       </Snackbar> */}
  //     </div>
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [authentication, setAuthentication] = useState("");
  // authentication: RECEPTIONIST, IPDOCTOR, OPDOCTOR, NURSE, ADMINISTRATOR
  return (
    <Router>
      <main className='container'>
        <Header/>
        <div className="mainContent">
          <MaybeShowNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar}>
            <Navbar setIsLoggedIn={setIsLoggedIn} authentication={authentication}/>
          </MaybeShowNavbar>
          
          <div className={showNavbar ? "navbarContent" : "noNavbarContent"}>
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/auth/:auth_role" element={<Auth setIsLoggedIn={setIsLoggedIn} setAuthentication={setAuthentication}/>}/>
              <Route path="/patient/patientDetail/:patientCode" element={<PatientDetail />} />
              <Route path="medProvider/addImport/:providerCode" element={<AddImport/>}/>
              <Route exact path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
              <Route path="/patient" element={<Patient authentication={authentication}/>} />
              <Route path="/nurse" element={<Nurse authentication={authentication}/>} />
              <Route path="/medProvider" element={<MedProvider authentication={authentication}/>} />
              <Route path="/medication" element={<Medication authentication={authentication}/>} />
              <Route path="/doctor" element={<Doctor authentication={authentication}/>} />
              <Route path="/department" element={<Department authentication={authentication}/>} />
            </Routes>
            <Footer/>
          </div>
          
        </div>
        
      </main>
      
    </Router>
    
  );
}

export default App;
