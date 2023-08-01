import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import InputField from '../components/InputField';
import {USERS} from '../shared/Users'


const groups = ['Group A', "Group B", "Group C", "Group D", "Group E"]

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [selectedGroup, setSetselectedGroup] = useState("")

    const navigate = useNavigate();

    const Register = () => {

        if(name !== "" && email !== "" && password !== "" && confirmPass !== "" && selectedGroup !== "")
        {
            if(password === confirmPass){
                USERS.push(
                    {
                        _id: USERS.length + 1,
                        name: name,
                        email: email,
                        password: password,
                        group: selectedGroup
                    }
                )
                navigate('/signin')
            }
            else{
                alert("Password and confirm Password must be same")
            }
        }
        else{
            alert("Please Fill all the fields")
        }

        
    }

  return (
            <div className='flex flex-col items-center h-full bg-gray-50 md:h-screen sm:h-auto'>
                <div className='flex justify-between md:px-20 px-10 w-full mt-3'>
                    <Link
                        to="/"
                    >
                        <h1 className='text-xl font-bold'>Task Management System</h1>
                    </Link>
                    <div className='flex justify-center items-center gap-3'>
                        <p className='hidden md:flex font-bold text-px opacity-70 text-neutral-600'>Already have an account?</p>    
                        <Link
                            to="/signin"
                            className='text-neutral-600 font-bold text-md hover:text-green-500'
                        >
                            <span>Login</span>
                            
                        </Link>    
                    </div>
                </div>
                <div className='flex flex-col items-center h-full w-full md:pt-12 pt-8'>
                    <div className='px-5 md:px-10 h-auto md:w-4/6 lg:w-2/6 w-5/6 flex flex-col items-center rounded-md gap-4 border-gray-100 border bg-white py-8 shadow-xl'>
                        <div className='w-full'>
                            <h1 className='text-2xl font-bold  mb-3'>Sign up</h1>
                            <hr className='w-full h-px -mt-1 mb-5 border-0 rounded  bg-gray-300'/>
                        </div>
                        <InputField
                            type = {"text"}
                            placeholder = {"Full Name"}
                            value = {name}
                            handle = {setName}
                        />
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
                        <InputField
                            type={'Password'}
                            placeholder = {'Confirm Password'}
                            value = {confirmPass}
                            handle = {setConfirmPass}
                        />

                        <select 
                            id="groups" 
                            className="bg-gray-50 border border-2 border-gray-200 text-gray-900 text-sm rounded-lg  hover:border-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            onChange={(e) => setSetselectedGroup(e.target.value)}
                        >
                            <option>Choose a Group</option>
                            {
                                groups.map((group, index) => {
                                    return(
                                        <option key={index} value={group}>{group}</option>            
                                    )
                                })
                            }
                        </select>

                        <button
                            type='button'
                            className='bg-green-500 text-white px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                            onClick={Register}
                        >
                            Rigister
                        </button>
                    </div>
               </div>
            </div>
  )
}

export default Register