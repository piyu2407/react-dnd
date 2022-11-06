import "./App.css";
import Formbuilder from "./Formbuilder";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import InputTextDemo from "./Component/InputTextDemo";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormRender from "./FormRender";
import Admin from "./Admin";
import NewFormBuilder from "./NewFormBuilder";
import NewFormRender from "./NewFormRender";

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className="App">
				{/* <Formbuilder /> */}

				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Formbuilder />} />
						<Route path="/formbuilder" element={<Formbuilder />} />
						<Route
							path="/new-formbuilder"
							element={<NewFormBuilder />}
						/>
						<Route path="/Admin" element={<Admin />} />
						<Route
							path="/InputTextDemo"
							element={<InputTextDemo />}
						/>
						<Route path="/formrender" element={<FormRender />} />
						<Route
							path="/new-formrender"
							element={<NewFormRender />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</DndProvider>
	);
}

export default App;
