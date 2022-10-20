import {configureStore, combineReducers} from "@reduxjs/toolkit"
import todoSlice from "./todoSlice"
import todoReducer from "./todoSlice"

const reducer = combineReducers({
    todos: todoSlice
})

const store = configureStore({
    reducer
})


export default store

// export default configureStore({
//     todos:  todoReducer
// })