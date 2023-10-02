import React, { useEffect } from 'react'
import { useState } from 'react'

function Todobody() {
    const [todos, settodos] = useState(() => {
        const localvalue = localStorage.getItem("TODOSS");
        if (localvalue == null) return []
        return JSON.parse(localvalue)
    });

    const generateId = () =>
        crypto.randomUUID();

    const [input, setinput] = useState("");
    const [text, settext] = useState("")
    useEffect(() => {
        localStorage.setItem("TODOSS", JSON.stringify(todos))
    }, [todos])

    const handleSubmit = () => {
        if (input === "") {
            settext("Enter the text");
            setTimeout(() => {

                settext("");
            }, 2000);


        } else {
            settodos((todos) => todos.concat({
                text: input,
                id: generateId()
            })
            )
            settext("");
        }
        setinput("")
    }

    const deleteTodos = (id) => {
        settodos((todos) => todos.filter((t) => t.id != id));
    }



    return (
        <>
            <h5 className='text-center pt-4' style={{ height: "50px", color: "white" }}>{text}</h5 >
            <div className=' bg-Secondary pt-5 pb-5 d-flex justify-content-center'>
                <div className="card w-50 text-center  ">
                    <div className="card-body">
                        <div className="hstack gap-3">
                            <input className="form-control me-auto" value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder="Add your item here..." aria-label="Add your item here..." />
                            <button type="button" className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
                            <div className="vr"></div>

                        </div>
                    </div>
                </div>
            </div>


            {

                todos.map(({ text, id }) => (
                    <div className=' bg-Secondary pt-1 pb-1 d-flex justify-content-center' key={id}>
                        <div className="card w-50 text-center  ">
                            <div className="card-body p-2 bg-white">
                                <div className="d-flex p-0 m-0" >
                                    <div className=" flex-grow-1">{text}</div>
                                    <div className="vr "></div>
                                    <div className="px-3"> <button onClick={() => deleteTodos(id)} type="button" className="btn btn-outline-danger">Delete</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default Todobody