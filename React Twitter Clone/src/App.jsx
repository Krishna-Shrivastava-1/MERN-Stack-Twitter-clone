// import React, { useEffect } from 'react'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-loading-skeleton/dist/skeleton.css'
// import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Loginpage from './Pages/Loginapage/Loginpage';
// import Homepage from './Pages/Homepage/Homepage';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './Firebase/Firebase.js';
// import Profilepage from './Pages/Profilpage/Profilepage.jsx';
// import Skillspage from './Pages/Skillspage/Skillspage.jsx';
// import Education from './Pages/Educationpage/Education.jsx';
// import Loadingscreen from './Components/Loadingscreen/Loadingscreen.jsx';
// import Allloader from './Components/AllLoader/Allloader.jsx';
// const App = () => {
//   const navigate = useNavigate()
//   const location =useLocation()

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         if (location.pathname === '/') {
//           navigate('/home'); 
//         }
//       } else {
//         if (location.pathname !== '/') {
//           navigate('/'); 
//         }
//       }
//     });
//     return () => unsub();
//   }, [navigate, location.pathname]);
  
  
//   return (
//     <div>
//       <ToastContainer/>
//       <Allloader/>
//       <Routes>
//         <Route path='/' element={<Loginpage/>} />
//         <Route path='/home' element={<Homepage/>} />
//         <Route path='/profile' element={<Profilepage/>} />
//         <Route path='/skill' element={<Skillspage/>} />
//         <Route path='/education' element={<Education/>} />
//       </Routes>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Loginpage from "./Pages/Loginapage/Loginpage";
import Homepage from "./Pages/Homepage/Homepage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase.js";
import Profilepage from "./Pages/Profilpage/Profilepage.jsx";
import Skillspage from "./Pages/Skillspage/Skillspage.jsx";
import Education from "./Pages/Educationpage/Education.jsx";
import Allloader from "./Components/AllLoader/Allloader.jsx";
import Contact from "./Components/Contactus/Contactus.jsx";
import Contactuspage from "./Pages/Contactuspage/Contactuspage.jsx";
import Mediapage from "./Pages/Mediapage/Mediapage.jsx";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Specific Routes for which Loader should appear
    const specificRoutes = ["/home", "/profile"];

    if (specificRoutes.includes(location.pathname)) {
      setShowLoader(true); // Show loader
      const timer = setTimeout(() => setShowLoader(false), 1000); // Hide loader after timeout
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [location.pathname]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (location.pathname === "/") {
          navigate("/home"); // Redirect to Home if user is authenticated
        }
      } else {
        if (location.pathname !== "/") {
          navigate("/"); // Redirect to Login if user is not authenticated
        }
      }
    });
    return () => unsub();
  }, [navigate, location.pathname]);

  return (
    <div>
      <ToastContainer />
      {showLoader && <Allloader />} {/* Conditional rendering for loader */}
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/skill" element={<Skillspage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contactus" element={<Contactuspage />} />
        <Route path="/media" element={<Mediapage />} />
      </Routes>
    </div>
  );
};

export default App;
