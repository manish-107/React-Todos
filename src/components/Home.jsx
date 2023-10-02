import React from 'react'
import { useState, useEffect } from 'react'

function Home() {
    // const [count, setCount] = useState(0);
    // const addOne = () => {
    //     setCount(count + 1)
    // }
    // const subOne = () => {
    //     setCount(count - 1)
    // }

    const [data1, setData] = useState([]);
    useEffect(() => {
        // document.title = `count is ${count}`
        // async function getData() {
        //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        //     const data = await response.json();
        //     if (data && data.length) setData(data);
        //     console.log(data);

        // }
        // getData();
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data)
            });
    }, []);
    return (
        <>
            {/* <h1>{count}</h1>
            <button type="button" onClick={addOne}>Add</button>
            <button type="button" onClick={subOne}>Substract</button> */}
            <ul>
                {/* {console.log(data1)} */}
                {data1.map((item) => (
                    <li key={item.id}>
                        <h3 >{item.title}</h3>
                    </li>
                    // < li key={item.id} > hhh :{item.title}</li>
                ))}
            </ul >

            {/* <ul>
                {data1.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                    </li>
                ))}
            </ul> */}


        </>
    )
}

export default Home