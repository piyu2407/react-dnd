
import React, { useState } from 'react';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import './Password.css';


export const PasswordDemo = () => {

    const [value1, setValue1] = useState('');


    return (
        <div>
            <div className="mycomp">
                <Password value={value1} onChange={(e) => setValue1(e.target.value)} toggleMask />
            </div>
        </div>
    );
}
export default PasswordDemo;