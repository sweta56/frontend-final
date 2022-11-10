import React, { useState } from 'react'
import { BrowserRouter} from 'react-router-dom';
import { useJwt } from "react-jwt";
import axios from 'axios';
import ErrorMessage from "../components/Reuseable/ErrorMessage"


const Reset = ({ history, match }) => {
  const [values, setValues] = useState({
    password: '',
    repassword: '',
    token : '',
    type: '',
    error: '',
    message: '',
    buttonText: 'Reset'
  })

  const jwt = useJwt();

  const {
    email,
    password,
    repassword,
    buttonText,
    message,
    token,
    type,
    error
  } = values

  const onChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  BrowserRouter(() => {
        let token = match.params.token;
        const {name} = jwt.decode(token);
        if(token) {
          setValues({...values,name,token})
        }
  },[])

  const onSubmit = e => {
    if (password !== repassword) {
      e.preventDefault()
      setValues({
        ...values,
        message: 'Password not matching!',
        error: true,
        type: 'danger'
      })
    } else {
      e.preventDefault()
      setValues({ ...values, buttonText: 'Requesting...' })
      axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_API}/reset-password`,
        data: {newPassword: repassword, resetPasswordlink : token }
      })
        .then(response => {
          setValues({
            ...values,
            buttonText: 'Reset',
            error: true,
            message: response.data.message,
            type: 'primary'
          }) 
          setTimeout(() => {
            history.push('/login');
          },3000)
        })
        .catch(error => {
          console.log(error.response.data.error);
          setValues({
            ...values,
            buttonText: 'Reset',
            error: true,
            message: error.response.data.error,
            type: 'danger'
          })
        })
    }
  }

  const PasswordReset = () => {
    return (
        
        <div className=" bg-pink-100 "  >
            <h2 className='p-5 text-center'>
              Reset your password.Dont share this link.
            </h2>
        <div className='min-h-screen flex flex-col mt-[75px]'>
          <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
            <h1 className=' font-bold px-9 text-center text-2xl'>RESET PASSWORD</h1>
                <form onSubmit={onSubmit}>
                    <div className=" flex justify-center form-group  p-4">
                    <input
                        type='password'
                        onChange={onChange('password')}
                        className='form-control'
                        placeholder='Enter password'
                        required='required'
                    />
                    </div>
                    <div className=" flex justify-center form-group p-3 ">
                    
                    <input
                        type='password'
                        onChange={onChange('repassword')}
                        value={email}
                        className='form-control'
                        placeholder='Re-enter password'
                        required='required'
                    />
                    </div>
                    <div className=" flex justify-center form-group  p-1 mt-1 mb-2">
                    <button type='submit' className="group relative w-[200px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">
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
 
      <div >
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-sm-12'>
            
            {error ? <ErrorMessage message={message} type={type} /> : null}
            {PasswordReset()}
          </div>
        </div>
      </div>
  )
}

export default Reset;