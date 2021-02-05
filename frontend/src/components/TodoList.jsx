import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios";

export default function TodoList(props) {
    const api = axios.create({
        baseURL:`http://localhost:4000`
    })
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        async function loadTodos(){
            await api.get('/')
            .then(data=>{
                setTodos(data.data)
            })
        }   
        loadTodos();
    })

    function deleteTodo(id){
        api.delete(`/delete/${id}`)
        .then(()=>{
            setTodos(todos.filter((todo)=>{return todo._id === id}))
        })
    }
    return (
        <div className="container">
            <div className="mt-3 text-center">
                <h3>Todo List</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Todo</th>
                        <th scope="col">Priority</th>
                        <th scope="col" colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo=>{
                       return <tr key={todo._id}>
                            <td>{todo._id}</td>
                            <td>{todo.todo}</td>
                            <td>{todo.priority}</td>
                            <td><Link className="btn btn-secondary sm" to={`/edit/${todo._id}`}>Edit</Link></td>
                            <td><button className="btn btn-danger sm" onClick={()=>{
                                deleteTodo(todo._id)}}>Delete</button></td>
                        </tr>
                    })}                               
                </tbody>
            </table>
        </div>
    )
}
