import React from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

import List from '@mui/material/List'


function TodoList() {
    return (
        <List>
            <AddTodo />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </List>
    )
}

export default TodoList