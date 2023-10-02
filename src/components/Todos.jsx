import React, { useEffect } from 'react'
import { useState } from 'react'



export default function Todos() {
    const [todos, setTodos] = useState(() => {
        const localvalue = localStorage.getItem("ITEM");
        if (localvalue == null) return []
        return JSON.parse(localvalue)

    });
    const [input, setinput] = useState('');
    const [text, setText] = useState("")

    useEffect(() => {
        localStorage.setItem("ITEM", JSON.stringify(todos))
    }, [todos])

    const generateId = () =>
        crypto.randomUUID();
    const handleSubmit = () => {
        if (input === "") {
            setText("enter the text")
        } else {
            setText("add note")
            setTodos((todos) =>
                todos.concat({
                    text: input,
                    id: generateId()
                })
            )
            setinput("");
        }
    }
    console.log(todos)
    const removeTodo = (id) =>
        setTodos((todos) => todos.filter((t) => t.id !== id));


    return (
        <div>
            <h1 >{text}</h1>
            <input type="text" name="" id="" value={input} onChange={(e) => setinput(e.target.value)} />

            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {
                    todos.map(({ text, id }) => (
                        <li key={id}>

                            <span>{text}</span>
                            <button type="button" onClick={() => removeTodo(id)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
