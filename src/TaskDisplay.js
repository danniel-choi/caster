import React from 'react';

const TaskDisplay = ({tasks, deleteHandler}) => {
    const taskDisplay = tasks.map((task,i) => { 
      return (
        <div key={i}>
          <p>{task.todo}</p>
          <button onClick={() =>deleteHandler(i)}>삭제</button>
        </div>
      )
    })
    return taskDisplay
  }

  export default TaskDisplay