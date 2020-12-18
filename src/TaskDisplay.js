import React from 'react';

const TaskDisplay = ({ tasks, deleteHandler }) => {
    const taskDisplay = tasks.map((task) => { 
      return (
        <div key={task.id} class="box">
          <nav class="level">
            <div class="level-left">
              <p class="title">{task.todo}</p>
            </div>
            <div class="level-right">
              <button class="button is-danger" onClick={() => deleteHandler(task.id)}>삭제</button>
            </div>
          </nav>
        </div>
      )
    })
    return taskDisplay
  }

  export default TaskDisplay