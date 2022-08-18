import React,{useState} from 'react'
import { useDispatch,useSelector} from 'react-redux';
import Singletodo from './SingleTodo.jsx';
import { createTodo } from './slices/todoSlice';
export default function TodoRedux() {
  const todos = useSelector(state=>state.todo.todo)
    const[input,setInput]=useState("")
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Redux</h1>
      <form>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
      <button type="button" onClick={()=>dispatch(createTodo(input))}>Submit</button>
      </form>
      {todos.map(todo=><Singletodo name={todo.todoText} complete={todo.complete}  key={todo.id}/>)}
    </div>
   
  )
}
