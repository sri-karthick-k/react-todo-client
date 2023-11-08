import React, { Fragment , useState, useEffect} from "react";

import EditTodo from "./EditTodo";
const ListTodo = () => {

    const [todos, setTodos] = useState([])

    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:4000/todos")
            const jsonData = await response.json()

            setTodos(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    }
    
    const deleteTodo = async(id) =>{
        
        try {
            await fetch(`http://localhost:4000/todo/${id}`, {
                method:"DELETE"
            })
        } catch (err) {
            console.error(err.message);
        }
        setTodos(todos.filter(todo=> todo.id !== id))
    }

    useEffect(() => {
      getTodos();
    }, [])

  return (
    <Fragment>
      <h1>List TODOS</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            </tr> */}
          
          {todos.map(todo=>(
            <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.descript}</td>
            <td><EditTodo todo={todo}/></td>
            <td>
                <button 
                className="btn btn-danger"
                // here im passing parameter while calling the function so use arrow func to avoid automatic callling of the function
                onClick={()=>deleteTodo(todo.id)}
                >Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
