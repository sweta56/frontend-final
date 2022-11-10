import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import ErrorMessage from "../components/Reuseable/ErrorMessage"
import { fetcher} from '../lib/http';


const Forgot = ({history}) => {
    const [values, setValues] = useState({
        email: "",
        buttonText:'Reset'
    })

    const navigate = useNavigate();
    const {email,message,buttonText,type,error} = values;


    const onChange = name => event =>{
        setValues({...values,[name]:event.target.value});
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        setValues({...values,buttonText:'Requesting...'})
        try{
            const data = await fetcher("auth/forgot-password", "POST", null, { email:values.email })
           
          
            window.alert(data.message)
        }catch(error){
                console.log(error)
                window.alert(error)
        }
        finally{
            setValues({...values,buttonText:'Request'})
        }
        
    }

    const PasswordForgotform = () => {
        return (
            <div className=" bg-pink-100 "  >
            <div className='min-h-screen flex flex-col justify-center'>
              <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
                <h1 className=' font-bold px-9 text-center'>FORGOT PASSWORD?</h1>
            <form onSubmit={onSubmit}>
                <div className=" flex justify-center form-group p-8">
                    <label forhtml="exampleInputEmail1">Email address:</label>
                    <input type="email" onChange={onChange('email')} value={email} className="form-control" placeholder="Enter email" required="required"/>
                </div>
                <div className="flex justify-center">
              <button 
                type="submit" 
                className="group relative w-[200px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              >
               {buttonText} 
              </button>
            </div>
            
            </form>
            </div>
            </div>
            </div>
        )
    }

    return (
            <div>
                {error ? <ErrorMessage message = {message}  type={type}/> : null }
                  {PasswordForgotform()}
            </div>
    )
}

export default Forgot;