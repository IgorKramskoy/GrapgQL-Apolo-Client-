import React from "react";
import {useQuery} from "@apollo/client";
import {ALL_TODO} from "../../apollo/todos";
const TodoList = () => {
    const {data, error, loading} = useQuery(ALL_TODO)

    if (error) return <h1>Error...</h1>
    if (loading) return <h1>Lading...</h1>

    return <>
        <ul>
            {
                data.allTodos.length && data.allTodos.map((item) =>
                    <li key={item.id}>
                        <input type='checkbox' checked={item.completed}/>
                        {item.title}
                    </li>
                )
            }
        </ul>

    </>
};

export default TodoList;