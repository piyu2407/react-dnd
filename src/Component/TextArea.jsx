import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

export const TextareaDemo = () => {

    const [value1, setValue1] = useState('');


    return (
        <div>
            <div className="mycomp">
                <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} autoResize />
            </div>
        </div>
    )
}

export default TextareaDemo;