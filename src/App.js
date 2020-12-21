import React, {Component} from 'react';
import TaskAdd from './TaskAdd';
import TaskDisplay from './TaskDisplay';
import firebase from "./firebase";
import Login from './Login';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[
      ],
      task:'',
      login:false
    }
    if(firebase.auth.currentUser===null) {
      this.state.login=false;
    }
  }

  componentDidMount(){
    const tasks = [...this.state.tasks]
    const firestore = firebase.firestore;
    firestore.collection('tasks').get()
      .then(docs=>{
        docs.forEach(doc => {
          tasks.push({ todo: doc.data().todo, id: doc.id })
        })
        this.setState({ tasks })
      })
      .catch(e=>console.log(e));
  }
  onClickHandler = (e) => {
    e.preventDefault();
    const firestore = firebase.firestore;
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
    const firestore = firebase.firestore;
    firestore.collection('tasks').doc(id).delete()
      .then(()=>{
        const tasks = this.state.tasks.filter((task) => task.id !== id)
        this.setState({tasks});
      })
    // const tasks = this.state.tasks.filter((task,i)=>i!==idx)
    // this.setState({tasks});
  }
  checkLogin = () => {
    if(firebase.auth.currentUser!=null) {
      this.setState({
        login:true
      })
    }
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
        {this.state.login?
        <div>
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
        :<Login login={this.checkLogin}></Login>
        }
      </div>
    )
  }
}

export default App;
