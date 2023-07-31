import React from "react";

function Column() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.5"
				y="15"
				width="6"
				height="8"
				transform="rotate(-90 0.5 15)"
				fill="currentColor"
			/>
			<rect
				x="1"
				y="6.50002"
				width="5"
				height="7"
				transform="rotate(-90 1 6.50002)"
				stroke="currentColor"
			/>
			<path
				d="M13 1.75002V14.25M13 14.25L10.5 12.25M13 14.25L15.5 12.25"
				stroke="currentColor"
				stroke-linecap="round"
			/>
		</svg>
	);
}

export default Column;
