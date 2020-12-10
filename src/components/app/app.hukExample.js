//Хуки


import React, {useState, useEffect} from 'react';
import './App.css';
import {updateChar} from '../randomChar'

function App() {
    const [count, setCount] = useState(0)
    const [data, refreshData] = useState([{name: 'Mike', sex: 'male'}]);

    useEffect(() => {
        // console.log(Math.random())
        // console.log(data)
        updateChar();
        let timerId = setInterval(updateChar, 15000);

        return () => {
            clearInterval(timerId);
        }
    });

    return (
        <>
            //<h1>Hello world:)</h1>
            <div>
                <p>Вы кликнули {count} раз</p>
                <button
                    onClick={() => setCount(count + 1)}>Click me</button>
            </div>
            {data.map(item => {
                return (
                    <div>Name: {item.name}, sex: {item.sex}</div>
                );
            })}
            <button
                onClick={() => refreshData(data => ([...data, {name: 'Knopa', sex: 'cat'}]))}>Добавить данные</button>
        </>
    );
}

export default App;















