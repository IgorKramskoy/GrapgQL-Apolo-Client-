import React, {useState} from "react";


const CreateTodo = () => {
   const [text, setText] = useState('')
    const handelText = (e) => {
        if(e.target.value.trim()) {
            setText(e.target.value.trim())
        }
    }

    const addTodo = () => {
       if(text) console.log(text)
    }

    return <div>
        <input type='text' onChange={handelText}/>
        <button onClick={addTodo}>Add</button>
    </div>
}

export default CreateTodo