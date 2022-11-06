import React from "react";
import { useDrag } from "react-dnd";
import InputTextDemo from "./Component/InputTextDemo";

function FormComponent({ id, lable, item }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "text",
		// item: item,
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div
			className="leftsidecomp"
			ref={drag}
			style={{ border: isDragging ? "5px solid pink" : "0px" }}
		>
			<p className="form_comp"> {lable} </p>
		</div>
	);
}

export default FormComponent;
