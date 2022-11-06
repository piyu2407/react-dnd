import React from "react";
import { useLocation } from "react-router-dom";

export default function ({ children }) {
	console.log("Child", children)
	const location = useLocation();

	console.log("location state is : ", location.state);
	console.log("formdata is  : ", location.state.formData);

	return (
		<div>
			<h1>{location.state.formData[0].component}</h1>
			<div>{location.state.formData[0].type}</div>

		</div>
	)
}


