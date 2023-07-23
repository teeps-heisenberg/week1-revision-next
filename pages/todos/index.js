import Link from 'next/link';
import React,{useState,useEffect} from 'react'

const ViewTodos = () => {
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        let todos = localStorage.getItem('todos');
        let todosJSON = JSON.parse(todos);
        setTodos(todosJSON);
    },[])

    const deleteHandler = (title) =>{
        let newTodos = todos.filter((todo) => {
            return todo.title != title;
        });
        localStorage.setItem('todos',JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    return (
    <div>
        <h1>View Todos</h1>
        {todos.length === 0 && (<p>Your Todos will show up here.</p>)}
        {todos.map((item,index) => {
            return(
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link href={`/edittodo/${item.title.toLowerCase()}`}>
                        <button>Edit Todo</button>
                    </Link>
                    <button onClick={() => deleteHandler(item.title)}>Delete Todo</button>
                    <hr/>
                </div>
            );
        })}
    </div>
  )
}

export default ViewTodos