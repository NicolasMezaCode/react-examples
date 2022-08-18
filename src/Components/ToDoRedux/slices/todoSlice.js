import { createSlice } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
    
    name:'todo',
    initialState:{
        todo:[]},
    reducers:{
        createTodo:(state,action)=>{
                state.todo.push({id:state.todo.length+1,todoText:action.payload,complete:false})
        },
        toggleTodo:(state,action)=>{
            return state.todo.map(todo=>{
                if(todo){}
            })
        }
    }
})

export const { createTodo } = todoSlice.actions;

export default todoSlice.reducer;