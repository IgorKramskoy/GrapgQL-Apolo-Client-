import React from "react";
import {useMutation, useQuery} from "@apollo/client";
import {ALL_TODO, DELETE_TODO, UPDATE_TODO} from "../../apollo/todos";
const TodoList = () => {
    const {data, error, loading} = useQuery(ALL_TODO);
    const [toggleTodo, {error: updateError }] = useMutation(UPDATE_TODO);
    const [removeTodo, {error: removeError}] = useMutation(DELETE_TODO, {
        // Альтернативное обновление Кэша
        update(cache, { data: { removeTodo } }) {
            cache.modify({
                fields: {
                    allTodos(currentTodos = []) {
                        return currentTodos.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`)
                    }
                }
            })
        }
    });

    if (error) return <h2>Error...</h2>
    if (updateError) return <h2>Error Update...</h2>
    if (removeError) return <h2>Error Delete...</h2>
    if (loading) return <h2>Lading...</h2>
    if(!data.todos.length) return <h2>No have todos...</h2>

    return <>
        <ul>
            {
                data.todos.length && data.todos.map((item) =>
                    <li key={item.id}>
                        <input
                            type='checkbox'
                            defaultChecked={item.completed}
                            onChange={() => toggleTodo({
                                variables: {
                                    id: item.id,
                                    completed: !item.completed,
                                }
                            })}
                        />
                        {item.title}
                        <button
                            type='button'
                            onClick={() => removeTodo({
                                variables: { id: item.id }
                            })}
                        >
                            X
                        </button>
                    </li>
                )
            }
        </ul>

    </>
};

export default TodoList;