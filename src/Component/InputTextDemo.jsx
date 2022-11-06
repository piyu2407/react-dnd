import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import Select from 'react-select';
import "./InputText.css";
import CompEdit from '../CompEdit';


import { useLocation } from 'react-router-dom';
import { get } from 'jquery';


import { v4 as uuidv4 } from 'uuid';
import ShowButtonHover from './ShowButtonHover';

// export const InputTextDemo = (onConfigurationchange, lable) => {
export const InputTextDemo = () => {
    const [value1, setValue1] = useState('');
    const [label, setLabel] = useState(undefined);
    const [formvalues, setFormValues] = useState({});
    const [editbtnstyle, setEditbtnstyle] = useState({ display: 'none' });

    const uniqueid = uuidv4();


    const getData = (item) => {
        console.log("item is :", item);
        // setLabel(item);
        setFormValues({ ...item })
    }

    return (
        <div>
            <div className="mycomp"
            // style={{ display: "flex" }}
            >

                <label>{formvalues.lable}</label>
                <p>{formvalues.description}</p>
                {formvalues.prefix ? <span className='prefixstyle'>{formvalues.prefix} </span> : <p>null</p>}
                <InputText
                    id={uniqueid}
                    value={formvalues.placeholder}
                    onChange={(e) => setValue1(e.target.value)}
                    onMouseEnter={e => {
                        setEditbtnstyle({ display: 'block', marginLeft: "2rem" });
                    }}
                    onMouseLeave={e => {
                        setEditbtnstyle({ display: 'block' })
                    }}
                />
                {formvalues.prefix ? <span className='prefixstyle'>{formvalues.suffix} </span> : <p>null</p>}
                <button style={editbtnstyle} className="editbtnstyle">
                    <CompEdit
                        onSubmit={getData}
                    />
                </button>

            </div>
        </div>

    )

}

export default InputTextDemo;






