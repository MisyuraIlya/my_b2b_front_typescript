/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/key-spacing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react';

const MyTest = () => {
    const [data, setData] = useState('')
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    const onClick = () => setToggle(prev => !prev);

    useEffect(() => {
        setTimeout(() => {
            return setData('ad');
        }, 100)
    }, [])
    return (
        <div>
            <h1 data-testid="value-elem">{value}</h1>
            {toggle && <div data-testid="toggle-elem">toggle</div>}
            {data && <div style={{color: 'red'}}>data</div>}
            <h1>Hello world</h1>
            <button data-testid="toggle-btn" onClick={onClick}>click me</button>
            <input onChange={e => setValue(e.target.value)} type="text" placeholder="input value....."/>
        </div>
    );
};

export default MyTest;