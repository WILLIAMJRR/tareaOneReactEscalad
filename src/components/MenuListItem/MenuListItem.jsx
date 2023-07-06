import { useState } from "react";
import PropTypes from "prop-types";
import s from "./style.module.css";

//componente del tipo statefull
const MenuListItem = (props) => {
	const [isHovered, setIsHover] = useState(false);

	const activate = () => {
		setIsHover(true);
	};

	const deactivate = () => {
		setIsHover(false);
	};

	const getBackgroundColor = () => {
		if (isHovered) {
			return "#a5e9ff";
		} else {
			if (props.isSelected) {
				return "#26baea";
			} else {
				return "#eff0ef";
			}
		}
	};

	const onItemClick = () => {
		props.onClick(props.hardware);
	};
	return (
		<div
			className={s.container}
			onClick={onItemClick}
			onMouseEnter={activate}
			onMouseLeave={deactivate}
			style={{ backgroundColor: getBackgroundColor() }}
		>
			Set to: {props.hardware}
		</div>
	);
};

export default MenuListItem;

MenuListItem.propTypes = {
	onClick: PropTypes.func,
	hardware: PropTypes.string,
	isSelected: PropTypes.bool,
};
