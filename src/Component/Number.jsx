import React, { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';

export const InputNumberDemo = () => {

    const [value2, setValue2] = useState();

    return (
        <div>
            <div className="mycomp">
                <InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" />
            </div>
        </div>
    );
}
export default InputNumberDemo;
