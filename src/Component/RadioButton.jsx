
import React, { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';

export const RadioButtonDemo = () => {

    const [value, setValue] = useState(null);


    return (
        <div>
            <div className="mycomp">
                <h5>Basic</h5>
                <div className="field-radiobutton">
                    <RadioButton inputId="value1" name="value" value="Chicago" onChange={(e) => setValue(e.value)} checked={value === 'Chicago'} />
                    <label htmlFor="value1">Chicago</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="value2" name="value" value="Los Angeles" onChange={(e) => setValue(e.value)} checked={value === 'Los Angeles'} />
                    <label htmlFor="value2">Los Angeles</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="value3" name="value" value="New York" onChange={(e) => setValue(e.value)} checked={value === 'New York'} />
                    <label htmlFor="value3">New York</label>
                </div>

            </div>
        </div>
    )
}
export default RadioButtonDemo;