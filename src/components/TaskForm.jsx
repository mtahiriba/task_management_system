import React, { useState } from 'react';
import InputField from '../components/InputField';
import {USERS} from '../shared/Users'


const TaskForm = ({ addTask, user }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedMember, setSetselectedMember] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return;
    }
    addTask({ title, description, selectedMember });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='flex justify-center text-xl font-bold mb-6'>Assign Task</label>

      <select 
        id="AssignTo" 
        className="bg-gray-50 border border-2 border-gray-200 text-gray-900 text-sm rounded-lg  hover:border-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        onChange={(e) => setSetselectedMember(e.target.value)}
      >
          <option>{`Choose a Member from ${user.group}`}</option>
          {
              USERS.map((member, index) => {
                if(member.group === user.group){
                  return(
                    <option key={index} value={member.name}>{member.name}</option>            
                  )
                }
                return null;
              })
          }
      </select>

      <InputField
        type={"text"}
        placeholder={"Task Title"}
        value={title}
        handle={setTitle}
      />

      <textarea
        type="text"
        className='flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400 mt-4'
        placeholder="Task Description"
        value={description}
        rows={6}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type='submit'
        className='bg-green-500 text-white mt-6 px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
