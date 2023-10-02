import React, { useRef } from 'react'


export default function Refuse() {
    const inputElement = useRef(null);

    const focusInput = () => {
        console.log(inputElement.current)
        // inputElement.current.focus();
        inputElement.current.style.color = "blue";
    }
    return (
        <>
            <div>useRef</div>
            <h1 ref={inputElement}>hello</h1>
            <input type="text" />
            <button onClick={() => focusInput()} type="button">Button</button>
        </>
    )
}
