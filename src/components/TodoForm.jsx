import React, { useState,useEffect } from 'react'
import TodoItems from './TodoItems'
import { db } from '../fireBaseConfig';
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

const TodoForm = () => {

    const todoCollectionRef = collection(db, "todos");
    const [input, setInput] = useState('')
    const [todo, setTodo] = useState([])
    const [editId, setEditId] = useState(null)

    useEffect(() => {
  const unsubscribe = onSnapshot(todoCollectionRef, (snapshot) => {
    setTodo(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  });

  return () => unsubscribe(); // cleanup on unmount
}, []);

    const addTodos = async () => {
  if (input.trim() === '') return;
  try {
    if (editId) {
      const todoDoc = doc(db, 'todos', editId);
      await updateDoc(todoDoc, { text: input });
      setEditId(null);
    } else {
      await addDoc(todoCollectionRef, { text: input });
    }
    setInput('');
  } catch (error) {
    console.error("Error saving todo:",error);
  }
};

    const deleteTodos = async (id) => {
        try {
            await deleteDoc(doc(db, "todos", id));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    const editTodo = (id) => {
  const item = todo.find((t) => t.id === id);
  if (item) {
    setInput(item.text);
    setEditId(id);
  }
};

    return (
        <>
            <div className="todo-form-container">
                <div className="todo-form-sub">
                    <h1>To Do List</h1>
                    <input type="text" placeholder='Enter Your Task' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={addTodos}>
                        {editId != null ? 'Update Task' : 'Add Task'}
                    </button>
                </div>
            </div>

            <div className="show-todo">
                <TodoItems todo={todo} deleteTodos={deleteTodos} editTodo={editTodo} />
            </div>
        </>

    )
}

export default TodoForm