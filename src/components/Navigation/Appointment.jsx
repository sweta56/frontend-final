import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { fetcher } from '../../lib/http';
import SocialCard from '../Dashboard/User/SocialCard';


const Appointment = () => {
    const navigate = useNavigate();

    useEffect(()=> {
      if (!localStorage.getItem('token')){
        navigate('/login')
      }
    },[]);

    const [users,setUsers] = useState([]);
    async function userData(){
      const request = await fetcher("users/info/", "GET",null)
      console.log("user",request);
      const filterdata = Array.from(request).filter((user)=>user.role=="doctor")
      setUsers(filterdata);
    }

    useEffect(()=>{
        userData();
     },[]);

    console.log(users);

    return (
        <div className='flex flex-wrap ml-[300px]'>
           {users.map((user,index)=>(
           <SocialCard userData={user} key={index}/>
           ))}
           
        </div>
        
    )
}
export default Appointment;