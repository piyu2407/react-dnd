import React, { useState } from 'react';
import { Button } from 'primereact/button';
// import './ButtonDemo.css';

export const ButtonDemo = () => {

    return (
        <div className="button-demo">
            <div className="mycomp">
                <Button label="Submit" aria-label="Submit" />
            </div>
        </div>
    )
}

export default ButtonDemo;