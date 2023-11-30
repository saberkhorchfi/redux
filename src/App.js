import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Addtask from './Addtask';
import { addTask } from './taskSlice';
import { useRef } from 'react';

function App() {
  const dispatch=useDispatch()
  const {tasks}=useSelector(state=>state.taskReducer)
  const Addtask=()=>{
    dispatch(addTask({id:"4",description:p.current.value,isDone:"true"}))
  }
  const p=useRef()
  return (
    <div className="App">
      <input ref={p} placeholder='enter task'></input>
      <button  onClick={Addtask}>add task</button>
      {tasks.map(e=><h1>{e.description} <input type='checkbox'></input></h1>)}

    </div>
  );
}

export default App;