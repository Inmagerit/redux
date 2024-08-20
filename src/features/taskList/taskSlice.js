import { createSlice } from "@reduxjs/toolkit";
import {v4} from 'uuid';

const initialState = [
    {
        id:v4(),
        title:'Task One',
        description:'Task One description',
        completed: false
    },
    {
        id:v4(),
        title:'Task Two',
        description:'Task Two description',
        completed: false}
]
export const taskSlice = createSlice({

    name:'task',
    initialState:initialState,
    reducers:{
        addTask: (state,action) =>{
            state.push(action.payload)
        },
        deleteTask: (state,action) =>{
           const taskFound = state.find(task => task.id === action.payload)
          // console.log(taskFound)
           if(taskFound){
            state.splice(state.indexOf(taskFound),1)
           }
        }
    }

})

export const {addTask,deleteTask} = taskSlice.actions