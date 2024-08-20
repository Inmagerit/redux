import { useSelector } from "react-redux"
import { deleteTask } from "../features/taskList/taskSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

function TaskList() {

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.task)
    const handleDelete = (id) =>{
        console.log(id)
        dispatch(deleteTask(id))
    }
    return(
        <div>
        <header>
        <h1>Tasks in List:{tasks.length}</h1>
        <Link to={'/create-task'}>create task</Link>
        </header>
        {tasks.map(task => (
            <div key={task.id}>
            <h1>{task.title}</h1><br/>
            <p>{task.description}</p><br/>
            <button onClick={() => handleDelete(task.id)}>delete</button>
            <Link to={`/edit-task/ + ${task.id}`}>Edit task</Link>
            </div>
        ))}
        </div>
    )
}

export default TaskList