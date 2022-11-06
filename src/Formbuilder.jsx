import React, { useState } from "react";
import "./Formbuilder.css";
import FormComponent from "./FormComponent.jsx";
import { useDrop } from "react-dnd";
import InputTextDemo from "./Component/InputTextDemo";
import TextareaDemo from "./Component/TextArea";
import InputNumberDemo from "./Component/Number";
import PasswordDemo from "./Component/Password";
import CheckboxDemo from "./Component/CheckBox";
import { DropdownDemo } from "./Component/DropDown";
import RadioButtonDemo from "./Component/RadioButton";
import ButtonDemo from "./Component/Button";
import ToggleButtonDemo from "./Component/Toggle";
import RatingDemo from "./Component/Rating";
import { FileUploadDemo } from "./Component/FileUpload";
import MentionDemo from "./Component/CommentBox";
import ProgressBarDemo from "./Component/ProgressBar";
import LoadingDemo from "./Component/Loading";
import EmailDemo from "./Component/Email";
import { ConfirmPopupDemo } from "./Component/ConfirmPopup";
import { CalendarDemo } from "./Component/Date";
import TimeDemo from "./Component/Time";
import DateTimeDemo from "./Component/DateTime";
import MobileNumberDemo from "./Component/MobileNumber";
import { PanelDemo } from "./Component/Panel";
import TabViewDemo from "./Component/Tab";
import TableDemo from "./Component/Table";
// import Content from "./Component/Content";

// import components from "./Component/index";
import { Link, useLocation } from "react-router-dom";
import { defaultDef } from "./formDefinition";
import CompConfig from "./Data/CompConfig.json";

import Compconfig from "./Data/CompConfig.json";
import { useEffect } from "react";
import CompEdit from "./CompEdit";
import { DataGrid } from "./Component/DataGrid";
import MyGrid from "./Component/MyGrid";

const Formbuilder = () => {
	/************************************************************** */

	const location = useLocation();
	const { formEditContent } = location.state || {};

	const [editcontent, setEditcontent] = useState(formEditContent);

	// const navigate = useNavigate();
	const [builder, setBuilder] = useState();
	// const [definition, setDefinition] = useState();
	const [definition, setDefinition] = useState(CompConfig);
	const [submission, setSubmission] = useState({});
	const [formValues, setFormValues] = useState({});

	const [compstate, setCompstate] = useState(null);

	useEffect(() => {
		setCompstate(Compconfig);
	}, []);

	/************************************************************** */

	const ComponentList = [
		{
			id: 26,
			lable: "myGrid",
		},
		{
			id: 1,
			lable: "TextField",
		},
		{
			id: 2,
			lable: "TextArea",
		},
		{
			id: 3,
			lable: "Number",
		},
		{
			id: 4,
			lable: "Password",
		},
		{
			id: 5,
			lable: "Checkbox",
		},
		{
			id: 6,
			lable: "DropDown",
		},
		{
			id: 7,
			lable: "RadioButton",
		},
		{
			id: 8,
			lable: "Button",
		},
		{
			id: 9,
			lable: "ToggleButton",
		},
		{
			id: 10,
			lable: "Rating",
		},
		{
			id: 11,
			lable: "File-Upload",
		},
		{
			id: 12,
			lable: "CommentBox",
		},
		{
			id: 13,
			lable: "ProgressBar",
		},
		{
			id: 14,
			lable: "Loading",
		},
		{
			id: 15,
			lable: "Email",
		},
		{
			id: 16,
			lable: "Loading",
		},
		{
			id: 17,
			lable: "ConfirmPopup",
		},
		{
			id: 18,
			lable: "Calendar",
		},
		{
			id: 19,
			lable: "Time",
		},
		{
			id: 20,
			lable: "DateTime",
		},
		{
			id: 21,
			lable: "MobileNumber",
		},
		{
			id: 22,
			lable: "Panel",
		},
		// {
		//     id: 23,
		//     lable: "Editor"
		// },
		{
			id: 23,
			lable: "Tabs",
		},
		{
			id: 24,
			lable: "Table",
		},
		{
			id: 25,
			lable: "DataGrid",
		},
	];

	const ActualComponent = [
		{
			id: 26,
			comp: <MyGrid />,
		},
		{
			id: 1,
			comp: <InputTextDemo />,
		},
		{
			id: 2,
			comp: <TextareaDemo />,
		},
		{
			id: 3,
			comp: <InputNumberDemo />,
		},
		{
			id: 4,
			comp: <PasswordDemo />,
		},
		{
			id: 5,
			comp: <CheckboxDemo />,
		},
		{
			id: 6,
			comp: <DropdownDemo />,
		},
		{
			id: 7,
			comp: <RadioButtonDemo />,
		},
		{
			id: 8,
			comp: <ButtonDemo />,
		},
		{
			id: 9,
			comp: <ToggleButtonDemo />,
		},
		{
			id: 10,
			comp: <RatingDemo />,
		},
		{
			id: 11,
			comp: <FileUploadDemo />,
		},

		{
			id: 12,
			comp: <MentionDemo />,
		},
		{
			id: 13,
			comp: <ProgressBarDemo />,
		},
		{
			id: 14,
			comp: <LoadingDemo />,
		},
		{
			id: 15,
			comp: <EmailDemo />,
		},
		{
			id: 16,
			comp: <LoadingDemo />,
		},
		{
			id: 17,
			comp: <ConfirmPopupDemo />,
		},
		{
			id: 18,
			comp: <CalendarDemo />,
		},
		{
			id: 19,
			comp: <TimeDemo />,
		},
		{
			id: 20,
			comp: <DateTimeDemo />,
		},
		{
			id: 21,
			comp: <MobileNumberDemo />,
		},
		{
			id: 22,
			comp: <PanelDemo />,
		},
		// {
		//     id: 23,
		//     comp: <Content />
		// },
		{
			id: 23,
			comp: <TabViewDemo />,
		},
		{
			id: 24,
			comp: <TableDemo />,
		},
		{
			id: 25,
			comp: <DataGrid />,
		},
	];

	const [dragdroparea, Setdragdroparea] = useState([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: "text",
		drop: (item) => addcomp(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addcomp = (id) => {
		const actualComponent = ActualComponent.filter(
			(component) => id === component.id
		);

		Setdragdroparea((dragdroparea) => [
			...dragdroparea,
			actualComponent[0],
		]);
	};

	function setLocalStorageEditItem() {
		var keyss = Object.keys(formEditContent);
		var currentkey = keyss[0];

		var parseeditdata = JSON.parse(formEditContent[currentkey]);

		return parseeditdata;
	}

	return (
		<div
			className="main"
			onLoad={() => {
				var parsedEditeddata = setLocalStorageEditItem();
				setDefinition(parsedEditeddata[0]);
			}}
		>
			<h3> Drag Drop Form builder Application </h3>
			<div className="container-fluid">
				<div className="myrow">
					<div class="row">
						<div class="col-2">
							<div>
								<h5>Form Components</h5>
								<input
									type="text"
									placeholder="search here...."
								/>

								<div className="formcomponents">
									{ComponentList.map((component) => {
										return (
											<FormComponent
												form={definition}
												lable={component.lable}
												id={component.id}
												onChange={setFormValues}
											/>
										);
									})}
								</div>

								{/* <p className='fieldcategory'>Basic</p>
                                <p className='field'>Text Field</p>
                                <p className='field'>Text Field</p>
                                <p className='fieldcategory'>Advanced</p>
                                <p className='field'>Text Field</p>
                                <p className='field'>Text Field</p> */}
							</div>
						</div>

						<div class="col-10">
							<div className="drapdroparea" ref={drop}>
								{dragdroparea.map((components) => {
									console.log(components.comp);

									return (
										<div>
											{components.comp}
											{/* <component key={key} /> */}
										</div>
									);
									// <FormComponent lable={component.lable} id={component.id} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="btnss2">
				<button>
					<Link
						to="/FormRender"
						state={{ formData: formValues }}
						test="Hello World"
						style={{
							textDecoration: "none",
							fontSize: "20px",
						}}
					>
						{" "}
						Next
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Formbuilder;
