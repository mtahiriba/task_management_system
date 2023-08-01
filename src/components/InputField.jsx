import React from 'react'

function InputField({placeholder, value, handle, type}) {
  return (
    <input
        className='flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400'
        type={type}
        placeholder= {placeholder}
        value={value}
        onChange={(e) => handle(e.target.value)}
    />
  )
}

export default InputField