import React,{useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import axios from "axios"

export default function EditTodo(props) {
    const history = useHistory() 
    const api = axios.create({
        baseURL:"http://localhost:4000"
    })
    const [updatedData,setUpdatedData] = useState({todo:"",priority:""})
    useEffect(()=>{
        api.get(`/edit/${props.match.params.id}`)
        .then(data=>{
            setUpdatedData(data.data)
        })
    },[])
    function updatedTodoData(e){    
        const name = e.target.name  
        const value = e.target.value
        setUpdatedData({
            ...updatedData,
            [name]:value
        })
    
    }
    async function createTodoRequest(e){
        e.preventDefault()
        await api.post(`/edit/${props.match.params.id}`,{todo:updatedData.todo,priority:updatedData.priority})
         .then(resp=>{
             alert(JSON.stringify(resp.data))
             history.push('/')
         })
         .catch(err=>{
            console.log(err)
         })
    }
    return (
        <div className="container">
            Edit Todo
            <form  onSubmit={(e)=>{createTodoRequest(e)}}>
                <div className="form-group">
                    <label htmlFor="todo">
                        Todo:
                    </label>
                   {/* @ts-ignore */}                        
                    <input type="text" name="todo" id="todo" value={updatedData.todo}  onChange={updatedTodoData} className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="priority">    
                        Priority:
                    </label>
                    {/*@ts-ignore*/}
                    <input type="text" name="priority" id="priority" value={updatedData.priority} onChange={updatedTodoData} className="form-control" required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success sm">Update</button>
                </div>
            </form>
        </div>
    )
}
