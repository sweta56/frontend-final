import React,{useState, useCallback } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'

import MainNavigation from './components/Navigation/NavBar/MainNavigation';
import DoctorInfo from './components/Reuseable/DoctorInfo'
import Form from "./pages/Form"
import Home from './components/Navigation/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from './components/Navigation/About';
import Calendar from './components/Navigation/Calendar';
import Appointment from './components/Navigation/Appointment';
import Appointments from "./components/Appointments/User/Appointments";
import GetStarted from './pages/GetStarted';
import Verify from './pages/Verify'
import UserDashboard from "./components/Dashboard/User/UserDashboard"
import DoctorHome from './components/Dashboard/Doctor/DoctorHome';
import DoctorAppointments from './components/Appointments/Doctor/doctorappointments';
import Reset from './pages/Reset.js';
import Forgot from './pages/Forgot.js';
import UpdateProfile from './components/Dashboard/Doctor/UpdateProfile'

import {AuthContext} from './components/Reuseable/auth'


const App = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const login = useCallback(()=>{
      setIsLoggedIn(true);
    },[]);

    const logout = useCallback(()=>{
      setIsLoggedIn(false);
    },[]);

  return (

      <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login: login, logout:logout}}>
      <Router>
        <MainNavigation/>
        <main>
        <Routes>
          
        <Route path="/" element={<GetStarted/>}/>
             <Route path="/home"  element={<Home/>}/>
             <Route path="/doctor-home"  element={<DoctorHome/>}/>
             <Route path="/doctorInfo/:name" element={<DoctorInfo/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup">
                <Route path=":role" element={<Signup/>}/>
                <Route path=":role" element={<Signup/>}/>
             </Route>
             <Route path="/about" element={<About/>}/>
             <Route path="/appointment" element={<Appointment/>}/>
             <Route path="/form" element={<Form/>}/>
            
             <Route path="/calendar" element={<Calendar/>}/>
             <Route path="/my-appointments" element={<Appointments/>}/>
             <Route path="/doctor-appointments" element={<DoctorAppointments/>}/>
             {/* <Route path=":role" element={<Appointments/>}/>
             <Route path=":role" element={<Appointments/>}/>
             </Route> */}
             <Route path="/update-profile" element={<UpdateProfile/>}/>
             <Route path="/userdashboard" element={<UserDashboard/>}/>
             <Route path="/reset-password" element={<Reset/>}/>
             <Route path="/forgot-password" element={<Forgot/>}/>
             <Route path="/verify" element={<Verify/>}/>

          </Routes>
          </main>
      </Router>

      </AuthContext.Provider>

  );

}

export default App;
