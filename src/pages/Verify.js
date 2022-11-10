import React, { useState } from "react";
import { useSelector } from "react-redux";
import { fetcher} from '../lib/http';
import { useNavigate } from "react-router-dom";

import ErrorMessage from "../components/Reuseable/ErrorMessage";

 const Verify=()=>{

    const [verificationCode,setVerificationCode] = useState({
        verification : ''
    });

    const navigate = useNavigate()

    const { authUser } = useSelector(state => state.auth)
    console.log(authUser)

    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(verificationCode);


        if(!authUser){
          navigate('/login');
          return;
        }
        try{

          setErrorMessage("")

          console.log(authUser.token)
            const data = await fetcher("auth/verify", "POST", authUser.token,{verificationCode})
            
            if(data.user.verified){
              navigate("/home");
            }else{
                navigate("/login");
            }
            console.log(data);
            
        }catch(error){
          setErrorMessage(error.message)
        }
        
    }

        return(
            <div className=""  >
            <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
              <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
                <h1 className=' font-bold px-9'>VERIFY YOUR ACCOUNT</h1>
            <form onSubmit={onSubmit}>
                <div className=" flex justify-center form-group p-8">
                    <label forhtml="example">Verification Code:</label>
                    <input type="number"  value={verificationCode.verification} onChange={(event)=>setVerificationCode({verification: event.target.value})} className="form-control" placeholder="Enter verification code" required="required"/>
                </div>

                { errorMessage && <div className = "mt-3">
                  <ErrorMessage message = { errorMessage } />
                  </div> }

                <div className="flex justify-center">
              <button
                type="submit"
                className="group relative w-[200px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              >
               Verify 
              </button>
            </div>
            
            </form>
            </div>
            </div>
            </div>
        )
 }
  
 export default Verify;