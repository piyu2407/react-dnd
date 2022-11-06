import React, { useState } from 'react';
import { ToggleButton } from 'primereact/togglebutton';

export const ToggleButtonDemo = () => {
    const [checked1, setChecked1] = useState(false);

    return (
        <div>
            <div className="mycomp">
                <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '10em' }} aria-label="Confirmation" />
            </div>
        </div>
    );
}
export default ToggleButtonDemo;