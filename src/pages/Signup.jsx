import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import avatar from '../assets/avatar.jpg'
import { fetcher } from "../lib/http"

import ErrorMessage from "../components/Reuseable/ErrorMessage"
import InputGroup from "../components/Reuseable/InputGroup"
import { setAuthUser } from "../redux/slices/auth-slice";

const Signup = () => {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
  const [NMCC, setNMCC] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [signingUp, setSigningUp] = useState(false)

	const navigate = useNavigate()
  const dispatch = useDispatch()
  const { role } = useParams()

	const handleFormSubmit = async (event) => {
		event.preventDefault();

    if (role !== "patient" && role !== "doctor") {
      return setErrorMessage("the provided role is invalid")
    }

		if (signingUp) {
			return;
		}

		try {
			setErrorMessage("")
			setSigningUp(true)

			const data = await fetcher("auth/signup", "POST", null, { username, email, password, role, nmcc: NMCC })
      console.log(data)

      dispatch(setAuthUser(data.user))
      navigate("/login")
			
		} catch (error) {
      setErrorMessage(error.message)
		} finally {
			setSigningUp(false)
		}
	}

  return (
    <div className="relative">
      <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
        <h1 className='text-4xl md:text-4xl lg:text-6xl font-bold mb-4 text-center'>Sign Up</h1>
          <h2 className='mb-3 text-gray-500 text-sm md:text-lg lg:text-lg pl-[50px]'>Already have an account? <a className='text-pink-400' href='/login'>LogIn</a></h2>

          <form action="" className="space-y-6" onSubmit = { handleFormSubmit }>
            <div>
            <div className='flex justify-center'>
              <img className='w-md h-[125px] mb-5 rounded-full' src={avatar}
                alt={avatar} />
            </div>

            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="rounded-md ">
				<InputGroup placeholder = "Username" value = { username } onChange = { (event) => setUsername(event.target.value) } />

        <InputGroup placeholder = "Email" value = { email } type="email" onChange = { (event) => setEmail(event.target.value) }/>

        { role === "doctor" && <InputGroup placeholder = "NMCC" value = { NMCC } onChange = { (event) => setNMCC(event.target.value) } /> }

          <InputGroup placeholder = "Password" value = { password } type="password" onChange = { (event) => setPassword(event.target.value) }/>

			  { errorMessage && <div className = "mt-3">
				<ErrorMessage message = { errorMessage } />
				</div> }
   
              <div class=" items-center justify-between relative flex flex-col pt-5">
              <button class="bg-pink-400 hover:bg-pink-300 hover:text-pink-400 text-white font-bold w-half  py-2 mr-5 mb-4 rounded-full focus:outline-none focus:shadow-outline border-pink-400 text-xl lg:px-20" type="submit" onClick = { handleFormSubmit }
			  >
                { signingUp ? "Signing" : "Sign" } Up
                </button>
                </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default Signup;