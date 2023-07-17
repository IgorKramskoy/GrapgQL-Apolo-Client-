import React from "react";
const TodoList = () => {
    const todoList = [
        {
            text: "hdfj",
            status: true
        },
        {
            text: "dfdhdh",
            status: false
        },
    ];


    return <>
        <ul>
            {
                todoList.length && todoList.map((item) =>
                    <li key={item.text}>
                        <input type='checkbox' checked={item.status}/>
                        {item.text}
                    </li>
                )
            }
        </ul>

    </>
};

export default TodoList;