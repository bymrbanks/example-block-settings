import React, { useState, useEffect } from "react";
import RowIcon from "./icons/Row";

const Button = ({ active, children, onClick }) => {
	const buttonStyle = {
		backgroundColor: active ? "black" : "white",
		color: active ? "white" : "black",
		borderColor: active && "black",
	};

	return (
		<button className="select-btn__btn" style={buttonStyle} onClick={onClick}>
			{children}
		</button>
	);
};

const ButtonSelect = ({ label, options, selectedValue: initialValue, onChange }) => {
	const [selectedValue, setSelectedValue] = useState(initialValue);

	useEffect(() => {
		setSelectedValue(initialValue);
	}, [initialValue]);

	const handleClick = (value) => {
		if (selectedValue === value) {
			setSelectedValue(null);
			onChange(null);
		} else {
			setSelectedValue(value);
			onChange(value);
		}
	};

	return (
		<div className="select-btn__ui">
			<div className="select-btn__label">
				{label}: <span>{selectedValue ? selectedValue : "None"}</span>
			</div>
			<div className="select-btn__group">
				{options.map((option, index) => (
					<Button
						key={index}
						active={selectedValue === option.value}
						onClick={() => handleClick(option.value)}
					>
						{option.icon ? <option.icon /> : <RowIcon />}
					</Button>
				))}
			</div>
		</div>
	);
};

export default ButtonSelect;
