import React, { useEffect, useState } from 'react'
import { createTods, deleteNote, getTodos, updateNote } from '../Services/Todo'
import type { Todo } from '../Types/Todo'

function Notelist() {
    const [todos,settodos]=useState<Todo[]>([])
    const [msg,setmsg]= useState<string>('')
    const [update,setupdate]=useState<boolean>(false)
    const [todoid,setTodoid]= useState<string>('')
    useEffect(()=>{
        const fetchNode = async()=>{
            try {
              const data= await getTodos()
              settodos(data)
            } catch {
              throw new Error("Fetch is error or something")
            }
        }
        fetchNode()
    },[todos])
    const Updatebtn= (id:string,title:string)=>{
      setupdate(true)
      setTodoid(id)
      setmsg(title)
      console.log(id,title)
    }
    const hangleSub =async(e:React.FormEvent)=>{
      e.preventDefault()
      if(msg.trim()=="")return
      try {
        if(update){
          await updateNote(todoid,msg)
          console.log(todoid,msg)
          setmsg("")
          setupdate(false)
        }else{
          await createTods(msg)
           setmsg("")
        }
        
      } catch {
        throw new Error("Create note is error")
      }
    }
    const handleDelete=async(id:string)=>{
      try{
        await deleteNote(id)
      }catch{
        throw new Error("Delete fail")
      }
    }
  return (
    <div> <h1>Notelist</h1>
      <ul>
        {todos.length ? todos.map((todo)=><li key={todo._id}>{todo.title}
          <button type='button' onClick={()=>handleDelete(todo._id)}>Delet</button>
          <button type='button' onClick={()=>Updatebtn(todo._id,todo.title)}>Update</button>
        </li>) : <span>There is no note</span>}
      </ul>
      <form onSubmit={hangleSub} action="">
         <input type="text" value={msg} onChange={(e)=>setmsg(e.target.value)} />
         <button>{update? "Edit": "Create"}</button>
      </form>
    </div>
  )
}

export default Notelist