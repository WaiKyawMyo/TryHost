import axios from "axios"
import type { Todo } from "../Types/Todo"

let API_URL =""
if(import.meta.env.VITE_MODE==="development"){
    API_URL = import.meta.env.VITE_LOCAL_API_URL
}
if(import.meta.env.VITE_MODE===""){
    API_URL = import.meta.env.VITE_API_URL
}
console.log("api",API_URL)

export const getTodos = async():Promise<Todo[]>=>{
    const response = await fetch(`${API_URL}/api/todos`)
    const data =await response.json()
    return data.data
}
export const createTods = async(title:string):Promise<Todo>=>{
    const response =await fetch(`${API_URL}/api/create`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({title})
    })
    const data = await response.json()
    return data.data
}
export const deleteNote =async(id:string)=>{
    await fetch(`${API_URL}/api/todo/${id}`,{
        method: "DELETE"
    })
}

export const updateNote = async(id:string,note:string)=>{
    await axios.put(`${API_URL}/api/todo/${id}`,{title:note})

}