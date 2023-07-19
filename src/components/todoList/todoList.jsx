import React from "react";
import {useMutation, useQuery} from "@apollo/client";
import {ALL_TODO, DELETE_TODO, UPDATE_TODO} from "../../apollo/todos";
const TodoList = () => {
    const {data, error, loading} = useQuery(ALL_TODO);
    const [toggleTodo, {error: updateError }] = useMutation(UPDATE_TODO);
    const [removeTodo, {error: removeError}] = useMutation(DELETE_TODO);

    if (error) return <h1>Error...</h1>
    if (updateError) return <h1>Error Update...</h1>
    if (removeError) return <h1>Error Delete...</h1>
    if (loading) return <h1>Lading...</h1>

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