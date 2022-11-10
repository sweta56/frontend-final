import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';


import { AuthContext } from '../../Reuseable/auth';
import './NavLinks.css';

const NavLinks = props => {


    const auth = useContext(AuthContext);
    const deleteItem = (index) =>{
      localStorage.removeItem('token');
      window.location.reload()};

      

  return <ul className="nav-links">
            <li className="hover:text-pink-300">
              < NavLink to="/home">Home</NavLink>
            </li>
           <li className="hover:text-pink-300">
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
            <li className="hover:text-pink-300">
                <NavLink to="/appointment">Book Appointment </NavLink>
            </li>
            <li className="hover:text-pink-300">
                <NavLink to="/my-appointments">My Appointment </NavLink>
            </li>
            <li className="hover:text-pink-300 text-black">
                <NavLink to="/about">About</NavLink>
            </li>
            {auth.isLoggedIn && ( 
              <button className='color:pink' onClick={deleteItem}>
                <li className="hover:text-pink-300">
                  <NavLink to="/">Log Out</NavLink>
                </li>
                </button>

            )
             }
             {!auth.isLoggedIn && (
             <li className="hover:text-pink-300 text-black">
                <NavLink to="/">Get Started</NavLink>
            </li>
            )}
              
           
</ul>
};

export default NavLinks;