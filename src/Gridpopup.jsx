import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import InputTextDemo from "./Component/InputTextDemo";
// import { useHistory, useParams } from "react-router-dom";
import "./Gridpopup.css";

import { useNavigate, useParams } from "react-router-dom";

const Gridpopup = (props) => {
	// const [lable, setLable] = useState("");
	const [editbtnstyle, setEditbtnstyle] = useState({ display: "none" });

	const [data, setData] = useState({
		lable: "",
		colname: "",
		columns: [{ colName: "" }],
	});

	/************************/

	const [inputList, setInputList] = useState([{ colname: "" }]);

	// handle input change
	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...data.columns];
		list[index][name] = value;
		setData({ ...data, columns: list });
		// setData({ ...data, [e.target.name]: e.target.value });
	};

	// handle click event of the Remove button
	const handleRemoveClick = (index) => {
		const list = [...data.columns];
		list.splice(index, 1);
		setData({ ...data, columns: list });
	};

	// handle click event of the Add button
	const handleAddClick = () => {
		// setInputList([...inputList, { colname: "" }]);
		setData({ ...data, columns: [...data.columns, { colName: "" }] });
	};

	/************************ */

	const onValueChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		// setData(e.target.value);
	};

	const handlesubmit = (e) => {
		console.log("I am handlesubmit");
		e.preventDefault();
		props.onSubmit(data);
		// console.log(props);
	};

	return (
		<div className="editbtn">
			{/* modal code  */}

			<button
				type="button"
				class="btn btn-danger ml-2"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Edit
			</button>

			<div className="mymodalcode">
				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-xl">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Text Field Component
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								{/* tab code  */}

								<ul
									class="nav nav-tabs"
									id="myTab"
									role="tablist"
								>
									<li class="nav-item" role="presentation">
										<button
											class="nav-link active"
											id="display-tab"
											data-bs-toggle="tab"
											data-bs-target="#display"
											type="button"
											role="tab"
											aria-controls="display"
											aria-selected="true"
										>
											Display
										</button>
									</li>
								</ul>

								<div class="tab-content" id="myTabContent">
									{/******************** display tab  **********************/}
									<div
										class="tab-pane fade show active"
										id="display"
										role="tabpanel"
										aria-labelledby="display-tab"
									>
										<p>Label</p>
										<input
											type="text"
											className="inpt"
											name="lable"
											onChange={onValueChange}
											value={data.lable}
										/>
										<div className="tooglebtn">
											<p> Add Column Button </p>
											<label class="switch">
												<input type="checkbox" />
												<span class="slider round"></span>
											</label>
										</div>

										<div>
											<div>
												<p style={{ fontSize: "20px" }}>
													{" "}
													column name{" "}
												</p>
											</div>
											<div>
												{/* <input
                                                    type="text"
                                                    // className='inpt'
                                                    name="colname"
                                                    onChange={onValueChange}
                                                    value={data.colname}
                                                />
                                                <button
                                                    style={{
                                                        display: "flex",
                                                        marginLeft: "1rem",
                                                        padding: "0.5rem",
                                                        background: "#198754",
                                                        color: "white"
                                                    }}

                                                >
                                                    Add Column
                                                </button> */}

												{data.columns.length > 1 && (
													<button
														style={{
															background:
																"#198754",
															color: "white",
														}}
														onClick={handleAddClick}
													>
														Add
													</button>
												)}

												{data.columns.map((x, i) => {
													return (
														<div
															className="box"
															key={i}
														>
															<input
																name="colName"
																value={
																	x.colName
																}
																placeholder="Enter column Name"
																// onChange={onValueChange}
																onChange={(e) =>
																	handleInputChange(
																		e,
																		i
																	)
																}
															/>

															<div className="btn-box">
																{inputList.length !==
																	1 && (
																	<button
																		className="mr10"
																		style={{
																			background:
																				"#dc3545",
																			color: "white",
																		}}
																		onClick={() =>
																			handleRemoveClick(
																				i
																			)
																		}
																	>
																		Remove
																	</button>
																)}
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>

								{/* tab code end */}
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-danger"
									data-bs-dismiss="modal"
								>
									Cancel
								</button>
								<button
									type="button"
									class="btn btn-success"
									data-bs-dismiss="modal"
									onClick={handlesubmit}
								>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* modal code end */}
		</div>
	);
};

export default Gridpopup;
