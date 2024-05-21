import React from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'


function TodoList() {
    return (
        <div>
            <AddTodo />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList