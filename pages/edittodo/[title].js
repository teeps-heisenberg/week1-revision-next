import React, { useState } from 'react'
import { useRouter } from 'next/router'

const TodoEdit = () => {
    const [todo, setTodo] = useState({ title: '', desc: '' });
    const router = useRouter();
    const title = router.query.title;
    const onChangeHandler = (e) =>{
        setTodo({...todo,[e.target.name]:e.target.value});
      }

    const editHandler = () => {
        let todos = localStorage.getItem('todos');
        let todosJSON = JSON.parse(todos);
        if(todosJSON.filter(item=>{return item.title.toLowerCase() == title}).length > 0){
            let index = todosJSON.findIndex(item => {return item.title.toLowerCase() == title});
            todosJSON[index].title = todo.title;
            todosJSON[index].desc = todo.desc;
            localStorage.setItem('todos',JSON.stringify(todosJSON));
            alert('Todo Edited Successfully')
            router.push('/todos');
        }
        else{
            alert('Todo Does Not Exist');
        }
    }
    return (
        <div>
            <h1>Edit your Todo Here!</h1>
            <label htmlFor="title">Todo Title</label>
            <input type="text" name="title" value={todo.title} onChange={onChangeHandler} />
            <br />
            <br />
            <label htmlFor="desc">Todo Description</label>
            <input type="text" name="desc" value={todo.desc} onChange={onChangeHandler} />
            <br />
            <button onClick={editHandler}>Edit Todo</button>
        </div>
    )
}

export default TodoEdit