import React, {Component} from 'react';
import TaskAdd from './TaskAdd';
import TaskDisplay from './TaskDisplay';
import { firestore } from "./firebase";
class App extends Component {
  state = {
    tasks:[
    ],
    task:''
  }
  componentDidMount(){
    const tasks = [...this.state.tasks]
    firestore.collection('tasks').get()
      .then(docs=>{
        docs.forEach(doc => {
          tasks.push({ todo: doc.data().todo, id: doc.id })
        })
        this.setState({tasks})
      })
  }
  onClickHandler = (e) => {
    e.preventDefault();
    firestore.collection('tasks').add({todo:this.state.task})
      .then(r=>{
        const tasks = [...this.state.tasks, {todo:this.state.task, id:r.id}];
        this.setState({
          tasks,
          task:''
        })
      })
  }
  onChangeHandler = (e) => {
    this.setState({
      task:e.target.value
    })
  }
  deleteHandler = (id) => {
    firestore.collection('tasks').doc(id).delete()
      .then(()=>{
        const tasks = this.state.tasks.filter((task) => task.id !== id)
        this.setState({tasks});
      })
    // const tasks = this.state.tasks.filter((task,i)=>i!==idx)
    // this.setState({tasks});
  }
  render() {
    const taskDisplay = this.state.tasks.map((task)=>{
      return (
        <div key={task.id}>
          <p>{task.todo}</p>
          <button onClick={()=>this.deleteHandler(task.id)}>삭제</button>
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
