import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_TODO, ALL_TODO} from "../../apollo/todos";


const CreateTodo = () => {
    const [text, setText] = useState('');

   const [addTodo, {  error}] = useMutation(ADD_TODO, {
       // Принудительное получение нового массива тудушек
       // refetchQueries: [
       //     {
       //         query: ALL_TODO
       //     }
       // ],

       //  Обновление кэша
       update(cache, { data: { newTodo } }) {
           const { todos } = cache.readQuery({ query: ALL_TODO });

           cache.writeQuery({
               query: ALL_TODO,
               data: {
                   todos: [newTodo, ...todos]
               }
           })
       }
   });

    const handelText = (e) => {
        if(e.target.value.trim()) {
            setText(e.target.value.trim())
        }
    };

    const createTodo = () => {
       if(text) {
           addTodo({
               variables: {
               title: text,
               completed: false,
               userId: 123,
             },
           });
           setText('');
       }
    };

    if(error) return <h1>Error...</h1>

    return <div>
        <input type='text' onChange={handelText} value={text}/>
        <button onClick={createTodo}>Add</button>
    </div>
}

export default CreateTodo