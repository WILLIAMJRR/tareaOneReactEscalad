import PropTypes from "prop-types";
import s from "./style.module.css";

const DisplayHardware = (props) => {
	return (
		<div className={s.container}>
			<h3>Display hardware</h3>
			{props.hardware ? (
				<div>
					<div>
						<p className={s.text_center}>Hardware selected</p>
					</div>
					<ul>
						{props.hardware.map((hardware) => (
							<li className={s.text_center} key={hardware}>{hardware}</li>
						))}
					</ul>
				</div>
			) : (
				<h3>No hardware selected</h3>
			)}
		</div>
	);
};

export default DisplayHardware;
DisplayHardware.propTypes = {
hardware: PropTypes.arrayOf(PropTypes.string),
};
