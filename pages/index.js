import { useState } from "react";

export default function Home() {
  const [todo,setTodo] = useState({title:'',desc:''});

  const onChangeHandler = (e) =>{
    setTodo({...todo,[e.target.name]:e.target.value});
  }

  const addTodo = () => {
    let todos = localStorage.getItem('todos');
    if(todos){
      let todosJSON = JSON.parse(todos);
      if(todosJSON.filter(value => {return value.title == todo.title}).length > 0){
        alert('Todo with that title already exists');
      }
      else{
        todosJSON.push(todo);
        localStorage.setItem('todos',JSON.stringify( todosJSON));
        alert('Todo is added');
        setTodo({title:"",desc:''});
      }

    }
    else{
      localStorage.setItem('todos',JSON.stringify([todo]));
    }
  }


  return (
    <div>
      <h1>Add your Todos Here!</h1>
      <label htmlFor="title">Todo Title</label>
      <input type="text" name="title" value={todo.title} onChange={onChangeHandler}/>
      <br/>
      <br/>
      <label htmlFor="desc">Todo Description</label>
      <input type="text" name="desc" value={todo.desc} onChange={onChangeHandler}/>
      <br/>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
