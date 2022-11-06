
import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

export const CheckboxDemo = () => {

    const [checked, setChecked] = useState(false);

    return (
        <div>
            <div className="mycomp">
                <div className="field-checkbox">
                    <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                    <label htmlFor="binary">Remember Me</label>
                </div>
            </div>
        </div>
    )
}
export default CheckboxDemo;




