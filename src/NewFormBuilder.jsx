import React from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import MyGrid from "./Component/MyGrid";
import FormComponent from "./FormComponent";

const ComponentsList = [
	{
		id: 2,
		type: "MyGrid",
		label: "My Grid",
		component: "MyGrid",
		settings: {
			label: "My Grid",
			columns: [{ colName: "" }],
		},
	},
];

// const RenderComponent = (props) => {
// 	const { component } = props;

// 	const MyComponent = component;

// 	return <MyComponent />;
// };

export default function () {
	const [droppedComponents, setDroppedComponents] = useState([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: "text",
		drop: (item) => setDroppedComponents([...droppedComponents, item]),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const setSettings = (index, values) => {
		const tempDroppedComponents = [...droppedComponents];

		tempDroppedComponents[index].settings = values;

		setDroppedComponents(tempDroppedComponents);
	};

	return (
		<div>
			<h2>Drag & Drop Form Builder</h2>

			<div className="container-fluid">
				<div className="row">
					<div className="col-2">
						{ComponentsList.map((comp) => (
							<FormComponent
								form={{}}
								lable={comp.label}
								id={1}
								onChange={() => console.log("onChange")}
								item={comp}
							/>
						))}
					</div>
					<div className="col-10">
						<div className="drapdroparea" ref={drop}>
							{droppedComponents.map((component, index) => {
								const RenderComponent =
									require(`./Component/${component.component}`).default;
								return (
									<RenderComponent
										settings={component.settings}
										updateSettings={(values) =>
											setSettings(index, values)
										}
									/>
								);
							})}
						</div>
						{JSON.stringify(droppedComponents)}
					</div>
				</div>

				<div className="">
					<button>
						<Link
							to="/new-formrender"
							state={{
								formData: droppedComponents,
								test: "test",
							}}
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
		</div>
	);
}
