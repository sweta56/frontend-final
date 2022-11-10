import React, {useEffect} from 'react'
import femini from '../../assets/femini.jpg'
import {Link,useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  

  useEffect(()=> {
    if (!localStorage.getItem('token')){
      navigate('/login')
    }
  },[])
  return (

  <div className="relative w-full min-h-screen ">
      <img className=' w-full h-full object-cover hidden lg:block ' class="responsive" src={femini} alt={femini} />

      <div className=' w-full h-full absolute top-0 left-0 flex flex-col justify-center  md:text-6xl lg:text-6xl text-4xl font-semibold font-body text-black p-9 mx-5 mt-[50px]  '>
        <h1 >Easy and faster</h1>

        <h1 >to track your period</h1>

        <div className='font-light my-7 text-lg text-black md:text-xl justify-center flex flex-col lg:justify-end  py-5'>
          <p className='md:max-w-[75%] lg:max-w-[50%] xl:max-w-[40%] '>
            FEMINI is an online health portal in which users can register and can be able to track their menstruation cycles. One can book an appointment with a doctor (i.e., gynecologist).
          </p>
        </div>

          <div className='font-sembold'>
           <Link to="/calendar"> <button className='px-7 py-4 rounded-full text-3xl bg-[#761137] border-[#761137] hover:text-[#761137]'>
              Start Tracking</button> </Link>
          </div>

          
            <div className='w-[50%] font-light my-7 text-lg text-black md:text-xl justify-center  flex-col lg:justify-end'>
                <p className='w-full md:max-w-[75%] lg:max-w-[50%] '>
                    We have many registered doctors available with us. Would you like to get an appointment?
                </p>
                <div className='py-10 font-sembold'>
                    <Link to="/appointment"><button className='px-7 py-4 rounded-full bg-[#761137] border-[#761137] hover:text-[#761137]'>
                        Book Appointment</button></Link>
                </div>
            </div>  
        </div>
      </div>



   )
}

      export default Home;