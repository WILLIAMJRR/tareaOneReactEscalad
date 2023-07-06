import { useState } from "react";
import MenuList from "./components/MenuList/MenuList";
import DisplayHardware from "./components/DisplayHardware/DisplayHardware";
import s from "./style.module.css";
import MenuTop from "./components/MenuTop/MenuTop";

//componente statefull(esto porque hay logica previa)
function App() {
	const [currentHardware, setCurrentHardware] = useState([]);


	const onMenuListItemClick = (hardware) => {
	setCurrentHardware((prev) => (prev.includes(hardware) ? prev : [...prev, hardware]));
	};


	return (
		<>
			<MenuTop />
			<div className={s.workspace}>
				<MenuList
					hardware={currentHardware}
					onItemClick={onMenuListItemClick}
				/>

				<DisplayHardware hardware={currentHardware} />
			</div>
		</>
	);
}

export default App;
