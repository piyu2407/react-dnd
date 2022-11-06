
import React, { useState } from 'react'
import "./FormRender.css";
import { Outlet, Link, useLocation } from "react-router-dom";
import $ from 'jquery';
import { defaultDef } from "./formDefinition";
import CompConfig from "./Data/CompConfig.json";
import Formbuilder from './Formbuilder';
// import components from "./Custom";



const FormRender = ({ state }) => {
    console.log("state", state)



    const location = useLocation();
    console.log("test", location)

    const { formData } = location.state || {};
    console.log("formData", formData);
    const { formRenderContent } = location.state || {};

    const [rendercontent, setRendercontent] = useState(formRenderContent);


    const [builder, setBuilder] = useState(formData);
    // const [definition, setDefinition] = useState(defaultDef);
    const [definition, setDefinition] = useState(CompConfig);
    const [submission, setSubmission] = useState({});
    const [formValues, setFormValues] = useState({});
    const [FormList, setFormList] = useState([formData]);
    const [formDataComp, setFormDataComp] = useState(formData?.components || []);





    const handle = () => {
        let nextValue = "";
        console.log("formValues", formValues)
        console.log("formData", formData)


        var newformdata = formDataComp;
        if (formValues.data) {

            for (const property in formValues.data) {
                if (property != "submit") {
                    newformdata = newformdata.map((item) => {
                        if (item.key === property) {
                            return {
                                ...item, defaultValue: formValues.data[property]
                            }
                        }
                        return item
                    })
                    // formValues.data[property]
                    console.log(formValues.data[property]);
                }

            }
            console.log(newformdata);
            formData.components = newformdata;
            localStorage.setItem(`FormList${formData.timestamp}`, JSON.stringify([formData]));
            // setFormDataComp(newformdata);
        }

    };





    // var FormList = [formData];
    var retrievedFormList = localStorage.getItem('FormList');

    const formdatalist = (retrievedFormList ? [...retrievedFormList, { formData }] : [formData])

    var localStorage_length = localStorage.length;





    function setLocalStorageItem() {
        // localStorage.setItem(`FormList${localStorage_length + 1}`, JSON.stringify(FormList));
        var FormListData = FormList[0];
        FormListData = { ...FormListData }
        console.log("FormListData", FormListData);
        // setFormList([FormListData]);
        localStorage.setItem(`FormList${FormListData.timestamp}`, JSON.stringify(FormList));
    }



    function setLocalStorageViewItem() {

        console.log('formRenderContent is : ', rendercontent);
        var keys = Object.keys(formRenderContent);
        var currentkey = keys[0];
        console.log(formRenderContent[currentkey]);
        var parsedata = JSON.parse(formRenderContent[currentkey]);
        console.log(parsedata);
        return (
            parsedata
        )
    }




    return (
        <div>
            <div className="mainContainer"
                onLoad={() => {
                    var parseddata = setLocalStorageViewItem();
                    setDefinition(parseddata[0]);
                    console.log("rendercontent is ", rendercontent);
                }} >

                <nav className="navbar">
                    <img src="./NividousLogo.jpg" alt="" height="50" width="150" />
                </nav>

                <div className="subcontainer">

                    <div className="two">
                        <div className='rendercontainer'>

                            <h2> Rendered Form </h2>


                            <button onClick={() => {
                                setDefinition(builder);
                                setLocalStorageItem();
                                console.log(builder);
                            }}
                                style={{
                                    padding: "0.5rem 2rem 0.5rem 2rem",
                                    fontSize: "20px",
                                    backgroundColor: "#313a46",
                                    color: "white",
                                    textAlign: "center",
                                }}> Reload
                            </button>





                            <div className='btnss3' style={{ display: "flex" }}>


                                <button className='button-86' style={{ marginTop: "37rem", backgroundColor: "#313a46", }}>
                                    <Link
                                        to="/formbuilder"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                            backgroundColor: "#313a46",
                                            fontSize: "20px",
                                        }}>  Previous
                                    </Link>
                                </button>


                                {/* store data in localStorage */}
                                <button className='button-86'
                                    onClick={handle}
                                    style={{
                                        fontSize: "20px",
                                        color: "white",
                                        backgroundColor: "#313a46",
                                        marginTop: "37rem ",
                                        marginLeft: "2rem",
                                    }}> save Info
                                </button>


                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FormRender



