import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import InputField from '../components/InputField';
import {USERS} from '../shared/Users'


function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const Login = () => {
    console.log(USERS)
    const user = USERS.filter((user) => user.email === email && user.password === password)

    console.log(user)
    if(user.length){
      localStorage.setItem('user', JSON.stringify(user[0]))
      navigate('/')
    }
    else
      setError("Sorry, your password was incorrect. Please double-check your password.")
    
  }

  return (
    <div className='flex flex-col items-center h-full bg-gray-50 md:h-screen sm:h-auto'>
                <div className='flex flex-col items-center h-full w-full md:pt-12 pt-8 mt-20'>
                {error && (
                          <div className="bg-red-100 mb-6 border border-red-400 text-red-700 px-4 py-3 rounded relative md:w-4/6 lg:w-2/6 w-5/6" role="alert">
                          <span className="block ">{error}</span>
                          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" 
                            role="button" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                            onClick={() => {setError('')}}
                            >
                              <title>Close</title>
                              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                          </span>
                        </div>
                  )}
                    <div className='px-5 md:px-10 h-auto md:w-4/6 lg:w-2/6 w-5/6 flex flex-col items-center rounded-md gap-4 border-gray-100 border bg-white py-8 shadow-xl'>
                        <div className='w-full'>
                            <h1 className='text-2xl font-bold  mb-3'>Log in</h1>
                            <hr className='w-full h-px -mt-1 mb-5 border-0 rounded  bg-gray-300'/>
                        </div>
                        <InputField
                            type={'email'}
                            placeholder = {"Email"}
                            value = {email}
                            handle = {setEmail}
                        />
                        <InputField
                            type={'Password'}
                            placeholder = {'Create a password'}
                            value = {password}
                            handle = {setPassword}
                        />


                        <button
                            type='button'
                            className='bg-green-500 text-white mt-6 px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                            onClick={Login}
                        >
                            Log in
                        </button>
                    </div>
                    <div className=' mt-6 flex justify-center items-center border-gray-100 border-2 h-auto md:w-4/6 lg:w-2/6 w-5/6 rounded-md py-5 border-gray-100 border bg-white shadow-xl'>
                        <p className='text-sm font-bold'>Dont have an account? 
                            
                            <Link
                                to="/register"
                                className='text-green-500'
                            >
                                <span> Sign up</span>
                            </Link>
                        </p>
                    </div>
               </div>
            </div>
  )
}

export default Signin