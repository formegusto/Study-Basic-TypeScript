import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { addTodo, removeTodo, toggleTodo } from '../modules/todos/';

export default function useTodos() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const onAdd = useCallback((text: string) => {
        dispatch(addTodo(text));
    }, [dispatch]);

    const onToggle = useCallback((id: number) => {
        dispatch(toggleTodo(id));
    }, [dispatch]);

    const onRemove = useCallback((id: number) => {
        dispatch(removeTodo(id));
    }, [dispatch])

    return {
        todos,
        onAdd,
        onToggle,
        onRemove,
    };
}