
import React, { useState } from 'react';
import { InputMask } from 'primereact/inputmask';

export const MobileNumberDemo = () => {
    const [val1, setVal1] = useState();


    return (
        <div className='mycomp'>
            <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-4">
                    <InputMask id="basic" mask="+99-9999999999" value={val1} placeholder="+99-9999999999" onChange={(e) => setVal1(e.value)}></InputMask>
                </div>
            </div>
        </div>

    );
}
export default MobileNumberDemo;