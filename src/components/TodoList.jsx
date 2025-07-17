import React from 'react'

const TodoList = ({todo, deleteTodos, editTodo }) => {
  return (
    <div className="todo-list-container">
        <h1>{todo.text.toUpperCase()}</h1>
        <button onClick={() => editTodo(todo.id)} className='btn edit-btn '>Edit</button>
        <button onClick={() => deleteTodos(todo.id)} className='btn delete-btn '>Delete</button>
    </div>
  )
}

export default TodoList