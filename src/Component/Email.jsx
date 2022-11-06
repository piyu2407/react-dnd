
import React from 'react';
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';


export const EmailDemo = () => {

    return (
        <div className='mycomp'>
            <div className="formgroup-inline">
                <label htmlFor="email" className="p-sr-only">email</label>
                <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
                <Message severity="error" />
            </div>
        </div>
    )
}
export default EmailDemo;