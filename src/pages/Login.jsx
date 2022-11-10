import React, { useState, useContext } from 'react'
import logo from '../assets/logo.jpg'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { LockClosedIcon } from '@heroicons/react/solid'
import { fetcher } from '../lib/http';

import { AuthContext } from '../components/Reuseable/auth';
import InputGroup from "../components/Reuseable/InputGroup";
import ErrorMessage from "../components/Reuseable/ErrorMessage";
import { setAuthUser } from '../redux/slices/auth-slice';


const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [signingIn, setSigningIn] = useState(false)
	const [errorMessage, setErrorMessage] = useState("");
  const auth = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

	const navigate = useNavigate()
  const dispatch = useDispatch()

  const { authUser } = useSelector(state => state.auth)

  console.log(authUser)

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		if (signingIn) {
			return;
		}

		try {
			setErrorMessage("")
			setSigningIn(true)

			const data = await fetcher("auth/signin", "POST", null, { email, password })
      console.log(data);
      const role = data.user.role
      dispatch(setAuthUser(
        {...data.user, token: data.token}

      ))
      console.log(data)
      auth.login();
      if(data.user.verified && isLoggedIn && role ==="patient"){
        auth.login();
        localStorage.setItem('token', data.token);
        
        navigate("/home")

      }else if (data.user.verified && isLoggedIn && role === "doctor"){

        auth.login();
        localStorage.setItem('token', data.token);
			  navigate("/doctor-home")
      }else{
        navigate("/signup")
      }
		} catch (error) {
			setErrorMessage(error.message)
		} finally {
			setSigningIn(false)
		}
	}

  return (
    <div className="relative"  >
      <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
          <form action="" className="space-y-6" onSubmit = { handleFormSubmit }>
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={logo}
                alt={logo}
              />
              <h2 className="mt-6 text-center text-3xl font-bold text-black">Sign in to your account</h2>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md ">
            <InputGroup placeholder = "Email" value = { email } type="email" onChange = { (event) => setEmail(event.target.value) }/>

            <InputGroup placeholder = "Password" value = { password } type="password" onChange = { (event) => setPassword(event.target.value) }/>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex ">
            

                <div className="text-sm">
                  <a href="/forgot-password" className="font-medium pl-7 text-pink-400 hover:text-pink-400">
                    Forgot your password?
                  </a>
                </div>
              </div>




            </div>

			{ errorMessage && <div className = "mt-3">
				<ErrorMessage message = { errorMessage } />
				</div> }

            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative w-[200px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-pink-400 group-hover:text-pink-400" aria-hidden="true" />
                </span>
                { signingIn ? "Signing" : "Sign" } In
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>








  )


}

export default Login;