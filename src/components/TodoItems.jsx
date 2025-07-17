import React from 'react'
import TodoList from './TodoList'

const TodoItems = ({todo, deleteTodos, editTodo }) => {
  return (
    <div className="todo-items-container">
        {
            todo.map((todo) => 
                (
                    <TodoList todo={todo} key={todo.id} deleteTodos={deleteTodos} editTodo={editTodo}  />
                )
            )


        }
    </div>
  )
}

export default TodoItems