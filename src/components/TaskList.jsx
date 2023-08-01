import React from 'react'
import RenderTask from './RenderTask'

function TaskList({tasks, user, deleteTask}) {

  return (
    <table className=" table-auto w-full">
        <tbody>
          <tr className=" text-left bg-gray-200 h-16  text-gray-500 text-sm">
            <th className="w-10 md:w-20">
            </th>
            <th>Assign To</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          {tasks?.map((task, index) => {
            if(task.group === user.group){
                return(
                  <RenderTask task={task} deleteTask={deleteTask} index={index}/> 
                )
            }
            return null
          })}
        </tbody>
      </table>
  )
}

export default TaskList