import React from 'react';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import InputTextDemo from './Component/InputTextDemo';
// import { useHistory, useParams } from "react-router-dom";
import "./CompEdit.css";

import { useNavigate, useParams } from 'react-router-dom';


const CompEdit = (props) => {


    // const [lable, setLable] = useState("");
    const [editbtnstyle, setEditbtnstyle] = useState({ display: 'none' });


    const [data, setData] = useState({
        lable: "",
        alighment: "",
        placeholder: "",
        description: "",
        tooltip: "",
        prefix: "",
        suffix: "",
        autocomplete: '',
        hidden: false,
        hidelabel: false,
        showWordcount: false,
        Showcharcount: false,
        hideinput: false,
        intialfocus: false,
        allowspellcheck: false,
        disabled: false,
        tableview: false,
        modaledit: false,


        multiplevalues: false,
        defaultvalue: "",
        persistent: "",
        inputformat: "",
        protected: false,
        Databaseindex: false,
        textcase: "",
        truncatemulspace: "",
        encrypted: "",
        redrawon: "",

        validateon: "",
        required: false,
        unique: false,
        minlength: "",
        maxlength: "",
        minwordlength: "",
        maxwordlength: "",
        regularexpptrn: "",
        errorlabel: "",


        propertyname: "",


    });



    const options = [
        { value: 'left', label: 'Left' },
        { value: 'right', label: 'Right' },
        { value: 'center', label: 'Center' }
    ]

    const inputformat = [
        { value: 'plain', label: 'Plain' },
        { value: 'html', label: 'Html' },
        { value: 'raw', label: 'Raw' }
    ]


    const redrawon = [
        { value: 'anychange', label: 'Anychange' },
        { value: 'submit', label: 'Submit' },
    ]

    const validateon = [
        { value: 'change', label: 'Change' },
        { value: 'blur', label: 'Blur' },
    ]





    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        // setData(e.target.value);
    };



    const handlesubmit = (e) => {
        console.log("I am handlesubmit");
        e.preventDefault();
        props.onSubmit(data);
        // console.log(props);
    }



    return (
        <div className='editbtn'>

            {/* modal code  */}


            <button
                type="button"
                class="btn btn-danger ml-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"

            >
                Edit
            </button>




            <div className='mymodalcode'>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Text Field Component</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                {/* tab code  */}

                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="display-tab" data-bs-toggle="tab" data-bs-target="#display" type="button" role="tab" aria-controls="display" aria-selected="true">Display</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="data-tab" data-bs-toggle="tab" data-bs-target="#data" type="button" role="tab" aria-controls="data" aria-selected="false">Data</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="validation-tab" data-bs-toggle="tab" data-bs-target="#validation" type="button" role="tab" aria-controls="validation" aria-selected="false">Validation</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="api-tab" data-bs-toggle="tab" data-bs-target="#api" type="button" role="tab" aria-controls="api" aria-selected="false">Api</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="conditional-tab" data-bs-toggle="tab" data-bs-target="#conditional" type="button" role="tab" aria-controls="conditional" aria-selected="false">Conditional</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="logic-tab" data-bs-toggle="tab" data-bs-target="#logic" type="button" role="tab" aria-controls="logic" aria-selected="false">Logic</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="layout-tab" data-bs-toggle="tab" data-bs-target="#layout" type="button" role="tab" aria-controls="layout" aria-selected="false">Layout</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">


                                    {/******************** display tab  **********************/}
                                    <div class="tab-pane fade show active" id="display" role="tabpanel" aria-labelledby="display-tab">
                                        <p>Label</p>
                                        <input
                                            type="text"
                                            className='inpt'
                                            name="lable"
                                            onChange={onValueChange}
                                            value={data.lable}
                                        />
                                        <p>Label position</p>
                                        <Select options={options} />
                                        <p>Placeholder</p>
                                        <input
                                            type="text"
                                            className='inpt'
                                            name="placeholder"
                                            onChange={onValueChange}
                                            value={data.placeholder}
                                        />
                                        <p>Description</p>
                                        <input
                                            type="text"
                                            className='inpt'
                                            name="description"
                                            onChange={onValueChange}
                                            value={data.description}
                                        />
                                        <p>Tooltip</p>
                                        <input
                                            type="text"
                                            className='inpt'
                                            name="tooltip"
                                            onChange={onValueChange}
                                            value={data.tooltip}
                                        />
                                        <p>Prefix</p>
                                        <input
                                            type="text"
                                            className='inpt'
                                            name="prefix"
                                            onChange={onValueChange}
                                            value={data.prefix}
                                        />
                                        <p>Suffix</p>
                                        <input
                                            type="text"
                                            className='inpt'
                                            name="suffix"
                                            onChange={onValueChange}
                                            value={data.suffix}
                                        />
                                        <p>Autocomplete</p>
                                        <input
                                            type="text"
                                            className='inpt'
                                            name="autocomplete"
                                            onChange={onValueChange}
                                            value={data.autocomplete}
                                        />
                                        <div className='chekboxgrp'>
                                            <input
                                                type="checkbox"
                                                onChange={onValueChange}
                                                name="hidden"
                                                checked={data.hidden}
                                                value={data.hidden}
                                            />
                                            <label> Hidden </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Hide Label </label>
                                        </div>

                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label>  Show word counter </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Show Character counter </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Hide Input </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Intial Focus </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Allow Spellcheck </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Disabled </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Table View </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Modal Edit </label>
                                        </div>
                                    </div>


                                    {/******************** Data tab  **********************/}
                                    <div class="tab-pane fade" id="data" role="tabpanel" aria-labelledby="data-tab">
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Multiple Values </label>
                                        </div>
                                        <p> Default Value</p>
                                        <input type="text" placeholder='   Default value' className='inpt' />
                                        <p> Persistent </p>
                                        <div className='radiobtngrp'>
                                            <div className='radiobtn'>
                                                <input type="radio" name='persistentvalue' />
                                                <label>None</label>
                                            </div>
                                            <div className='radiobtn'>
                                                <input type="radio" name='persistentvalue' />
                                                <label>Server</label>
                                            </div>
                                            <div className='radiobtn'>
                                                <input type="radio" name='persistentvalue' />
                                                <label>Client</label>
                                            </div>
                                        </div>
                                        <p> Input Format </p>
                                        <Select options={inputformat} />
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Protected </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Database Index </label>
                                        </div>
                                        <p>Text Case</p>
                                        <div className='radiobtngrp'>
                                            <div className='radiobtn'>
                                                <input type="radio" name='textcase' />
                                                <label>Uppercase</label>
                                            </div>
                                            <div className='radiobtn'>
                                                <input type="radio" name='textcase' />
                                                <label>Lowercase</label>
                                            </div>
                                            <div className='radiobtn'>
                                                <input type="radio" name='textcase' />
                                                <label>Sentencecase</label>
                                            </div>
                                        </div>


                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Truncate Multiple Spaces </label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label> Encrypted </label>
                                        </div>
                                        <p> Redraw on</p>
                                        <Select options={redrawon} />
                                    </div>



                                    {/******************** Validation tab  **********************/}
                                    <div class="tab-pane fade" id="validation" role="tabpanel" aria-labelledby="validation-tab">
                                        <p> Validate on </p>
                                        <Select options={validateon} />
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label>Required</label>
                                        </div>
                                        <div className='chekboxgrp'>
                                            <input type="checkbox" />
                                            <label>Unique</label>
                                        </div>

                                        <p>Minimum Length</p>
                                        <input type="text" className='inpt' placeholder='Minimum Length' />
                                        <p>Maximum Length</p>
                                        <input type="text" className='inpt' placeholder='Maximum Length' />
                                        <p>Minimum Word Length</p>
                                        <input type="text" className='inpt' placeholder='Minimum Word Length' />
                                        <p>Maximum Word Length</p>
                                        <input type="text" className='inpt' placeholder='Maximum Word Length' />
                                        <p> Regular Expression Pattern</p>
                                        <input type="text" className='inpt' placeholder='Regular Expression Pattern' />
                                        <p> Error Label </p>
                                        <input type="text" className='inpt' placeholder='  Error Label' />

                                    </div>


                                    {/******************** Api tab  **********************/}
                                    <div class="tab-pane fade" id="api" role="tabpanel" aria-labelledby="api-tab">
                                        <p>Property Name</p>
                                        <input type="text" className='inpt' />
                                    </div>


                                    {/******************** Conditional tab  **********************/}
                                    <div class="tab-pane fade" id="conditional" role="tabpanel" aria-labelledby="conditional-tab">
                                        ...
                                    </div>

                                    {/******************** Logic tab  **********************/}
                                    <div class="tab-pane fade" id="logic" role="tabpanel" aria-labelledby="logic-tab">
                                        ...
                                    </div>


                                    {/******************** Layout tab  **********************/}
                                    <div class="tab-pane fade" id="layout" role="tabpanel" aria-labelledby="layout-tab">...</div>
                                </div>

                                {/* tab code end */}


                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button
                                    type="button" class="btn btn-success"
                                    data-bs-dismiss="modal"
                                    onClick={handlesubmit}
                                // onSubmit={handlesubmit}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal code end */}

            {/* <InputTextDemo onConfigurationchange={onValueChange} lable={data.lable}></InputTextDemo> */}
        </div>
    )
}

export default CompEdit