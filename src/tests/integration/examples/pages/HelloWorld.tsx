import React, { useState } from 'react';
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
const HelloWorld = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const toggle = () => value === 'hello' && setVisible(prev => !prev)
    const onChange = (e:any) => setValue(e.target.value)
    return (
        <div>
            <input onChange={onChange} id="search" type={'text'}/>
            <button onClick={toggle} id="toggle">Hello world</button>
            {visible && <h1 id="hello">Hello world</h1>}
        </div>
    );
};

export default HelloWorld;