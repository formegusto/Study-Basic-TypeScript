import React from 'react';
import './TodoItem.css';
import useTodos from '../hooks/useTodos';
import { Todo } from '../modules/todos/';

type TodoItemProps = {
    todo: Todo;
};

function TodoItem({todo} : TodoItemProps) {
    const { onToggle, onRemove } = useTodos();
    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={() => onToggle(todo.id)}>{todo.text}</span>
            <span className="remove" onClick={() => onRemove(todo.id)}>(X)</span>
        </li>
    )
}

export default TodoItem;