import { useState,useEffect } from "react"
import { useDispatch,useSelector, } from "react-redux"
import { addTask } from "../features/taskList/taskSlice"
import {v4} from 'uuid'
import { useNavigate,useParams } from "react-router-dom"


function TaskForm() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const [task,setTask] = useState(
        {
            title:'',
            description:''

        }
    )
    useEffect(() =>{
        
        console.log(params.id)

    if(params.id )
            
        {
            setTask(tasks.find(tasks => task.id === params.id))
        }
        else(console.log('fallo'))
    
},[])

    
    const handleChange = (e) =>{

            setTask({
                ...task,
                [e.target.name] : e.target.value,
                
            })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log(task)
        dispatch(addTask({
            id: v4(),
            ...task,
            
        }))
        navigate('/')
    }

    
    return(
        
        <form onSubmit={handleSubmit}>
        <h1>Task Form</h1>
        <input name="title" type="text" placeholder="title for task" onChange={handleChange} value={tasks.title}></input>
        <textarea name="description" placeholder="task description" onChange={handleChange} value={tasks.description}></textarea>
        <button>save</button>
        </form>
    )
}

export default TaskForm