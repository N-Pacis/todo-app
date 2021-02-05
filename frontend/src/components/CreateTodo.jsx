import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const api = axios.create({
    baseURL:`http://localhost:4000`
})
export default function CreateTodo() {
    const history = useHistory();
    const[requestData,setRequestData] = useState({todo:"",priority:""})
    const handleChange = (e)=>{
        const name= e.target.name;
        const value = e.target.value
        setRequestData({
            ...requestData,
            [name]:value
        })
    }
    async function createTodoRequest(e){
        e.preventDefault()
        await api.post('/create',requestData)
          .then(resp=>{
              alert(JSON.stringify(resp.data))
              history.push('/')
          })
          .catch(ex=>{
              alert(ex.message)
          })
    }
    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create Todo</h3>
            </div>
            <form method="post" onSubmit={(e)=>createTodoRequest(e)}>
                <div className="form-group">
                    <label htmlFor="todo">
                        Todo:
                    </label>
                    <input type="text" name="todo" id="todo" value={requestData.todo} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="priority">
                        Priority:
                    </label>
                    <input type="text" name="priority" id="priority" value={requestData.priority} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Create Todo</button>
                </div>
            </form>
        </div>
    )
}
