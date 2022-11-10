import React from 'react'
import bg from '../../assets/bggg.png'
import period from '../../assets/period.jpg'
 function About() {
 
  return (
    <div className="w-full min-h-screen ">
      <img className=' w-full h-full object-cover hidden lg:block ' class="responsive" src={bg} alt={bg} />
      <div className=' w-full h-half absolute top-0 left-0 flex flex-col justify-center  md:text-6xl lg:text-6xl text-4xl font-semibold font-body text-gray-800 p-9 text-center mt-[160px]  '>
        <h1 >About Us</h1>
        <div className='pl-[200px] font-light my-7 text-lg text-black md:text-xl justify-center  lg:justify-end'>
          <p className='md:max-w-[75%] tracking-wide'>
          “Femini” is a mobile as well as web application that is designed to provide users with a platform to track and edit their menstrual periods, register and log into the system,
           make appointment with doctors(gynecologist) if required. This application is made for female population as tracking of 
           menstrual periods helps in minimizing any health problems that could arise. 
          </p>
        </div>
       
      </div>
      <div className=' w-full h-half absolute top-0 left-0 flex flex-col justify-center  md:text-6xl lg:text-6xl text-4xl font-semibold font-body text-gray-800 p-9 '>
        <div className='grid grid-cols-2 gap-8'>
          <div className='mt-[600px]'>
        <img className=' w-full h-[50%] object-cover hidden lg:block left-0 mt-[550px]' class="responsive" src={period} alt={period} />
        </div>
        <div className='mt-[600px]'>
        <h1 >Our Vision</h1>
        <div className='pl-3 font-light my-7 text-lg text-black md:text-xl justify-center  lg:justify-end'>
          <p className=' tracking-wide'>
          At Femini we understand the importance of tracking menstrual periods. So it is a free application
          that can be accessed by anyone through online medium. If you want to get an appoinment with a gynecologist
          and track your period, a great app can make all the difference.
          </p>
        </div>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default About;