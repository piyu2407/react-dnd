import React, { useState, useEffect, useRef } from "react";
import "./MyGrid.css";
import Gridpopup from "../Gridpopup";

const MyGrid = ({ settings, updateSettings }) => {
	const [gridvalues, setGridValues] = useState({ ...settings });

	const getgridData = (item) => {
		console.log("item is :", item);
		// setLabel(item);
		setGridValues({ ...item });
		updateSettings({ ...item });
	};

	return (
		<div>
			<p>{gridvalues.lable}</p>
			<table style={{ width: "80%", margin: "auto", marginTop: "2rem" }}>
				<tr>
					{gridvalues.columns &&
						gridvalues.columns.map((col) => <th>{col.colName}</th>)}
				</tr>
				<tr>
					{gridvalues.columns &&
						gridvalues.columns.map((col) => (
							<td>Alfreds Futterkiste</td>
						))}
				</tr>
			</table>
			<Gridpopup onSubmit={getgridData} />
		</div>
	);
};

export default MyGrid;
