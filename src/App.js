import React, {Component} from 'react';
import TaskAdd from './TaskAdd';
import TaskDisplay from './TaskDisplay';

class App extends Component {
  state = {
    tasks:[
      {todo: "할 일 1"},
      {todo: "할 일 2"},
      {todo: "할 일 3"},
      {todo: "할 일 4"},
    ],
    task:''
  }
  onClickHandler = (e) => {
    e.preventDefault();
    const task = { todo: this.state.task };
    const tasks = [...this.state.tasks, task]
    this.setState({
      tasks,
      task: ''
    })
  }
  onChangeHandler = (e) => {
    this.setState({
      task:e.target.value
    })
  }
  deleteHandler = (idx) => {
    const tasks = this.state.tasks.filter((task,i)=>i!==idx)
    this.setState({tasks});
  }
  render() {
    const taskDisplay = this.state.tasks.map((task,i)=>{
      return (
        <div key={i}>
          <p>{task.todo}</p>
          <button onClick={()=>this.deleteHandler(i)}>삭제</button>
        </div>
      )
    })
    console.log(taskDisplay);
    return (
      <div className="container">
        <TaskAdd
          value={this.state.task}
          changeHandler={this.onChangeHandler}
          clickHandler={this.onClickHandler}
        />
        <TaskDisplay
        tasks={this.state.tasks}
        deleteHandler={this.deleteHandler}
        />
      </div>
    )
  }
}

export default App;
