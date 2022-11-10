import React, {useEffect} from 'react'
import femini from '../../../assets/femini.jpg'
import {Link,useNavigate} from 'react-router-dom'

function DoctorHome() {
  const navigate = useNavigate();

  useEffect(()=> {
    if (!localStorage.getItem('token')){
      navigate('/login')
    }
  },[])
  return (

  <div className="relative w-full min-h-screen ">
      <img className=' w-full h-full object-cover hidden lg:block ' class="responsive" src={femini} alt={femini} />

      <div className=' w-full h-[650px] absolute top-0 left-0 flex flex-col justify-center  md:text-6xl lg:text-6xl text-4xl font-semibold font-body text-black p-9 mx-5  '>
        <h1 >Welcome Doctor,</h1><br/>

        <div className='font-light my-7 text-lg text-black md:text-xl justify-center flex flex-col lg:justify-end  py-3'>
          <p className='md:max-w-[75%] lg:max-w-[50%] xl:max-w-[40%] '>
            Please update your profile and add information so that users can see it
          </p>
        </div>
        <div className='font-sembold'>
           <Link to="/update-profile"> <button className='px-5 py-4 rounded-full text-3xl bg-[#761137] border-[#761137] hover:text-[#761137]'>
              Update Profile</button> </Link>
          </div>

        <div className='font-light my-7 text-lg text-black md:text-xl justify-center flex flex-col lg:justify-end  py-5'>
          <p className='md:max-w-[75%] lg:max-w-[50%] xl:max-w-[40%] '>
            Please look at your appointments
          </p>
        </div>


          <div className='font-sembold'>
           <Link to="/doctor-appointments"> <button className='px-7 py-4 rounded-full text-3xl bg-[#761137] border-[#761137] hover:text-[#761137]'>
              Go To Appointments</button> </Link>
          </div>

            
        </div>
      </div>



   )
}

export default DoctorHome;