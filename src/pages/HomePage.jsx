import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList'
import { TASKS } from '../shared/Tasks'

function HomePage() {
    
    const [tasks, setTasks] = useState(TASKS)
    const user = JSON.parse(localStorage.getItem('user'))

    const addTask = (task) => {

      const obj = {
        _id: TASKS.length + 1,
        assignTo: task.selectedMember,
        title: task.title,
        description: task.description,
        group: user.group,
        completed: false
      }

      setTasks([...tasks, obj])
      TASKS.push(obj)
      
    };


    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
    
    return (
      <div className='md:h-screen'>
        <div className='bg-gray-800 flex justify-between md:h-[10%] px-5 md:px-12'>
            <h1 className='py-5 text-white text-md md:text-xl font-bold'>Task Management System</h1>
            <h1 className='py-5 text-white text-md md:text-xl font-bold hidden md:block'>{user.group}</h1>
            <Link to="/signin">
              <h1 className='py-5 text-white text-md md:text-xl font-bold'>Logout</h1>
            </Link>

        </div>
        <div className='w-full h-[90%] flex flex-col lg:flex-row'>
          <div className='bg-gray-200 md:h-full w-full lg:w-2/6 px-12 flex items-center justify-center py-16'>
            <TaskForm addTask={addTask} user={user}/>
          </div>
          <div className='bg-white md:h-full w-full lg:w-4/6 p-4'>
              <TaskList tasks={tasks} user={user} deleteTask={deleteTask}/>
          </div>
        </div>
      </div>
    );
}

export default HomePage