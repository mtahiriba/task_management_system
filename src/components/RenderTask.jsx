import React from 'react'


const RenderTask = ({task, deleteTask, index}) => {
  return (
    <tr className="h-16 text-xs md:text-md" key={task._id}>
        <td>
          <div className="w-full flex justify-center items-center">
            <input className="w-3 h-3 md:w-4 md:h-4" type="checkbox" checked={task.completed}/>
          </div>
        </td>
        <td>
          <div className="flex items-center space-x-7">
            <div className='font-bold'>
              {task.assignTo}
            </div>
          </div>
        </td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>
          <div className="w-full justify-center flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6 cursor-pointer hover:text-red-500" onClick={() => deleteTask(index)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>

          </div>
        </td>
      </tr>
  )
}

export default RenderTask