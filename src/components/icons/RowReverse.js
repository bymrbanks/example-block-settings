import React from "react";
function Row() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="-0.5"
				y="0.5"
				width="5"
				height="7"
				transform="matrix(-1 0 0 1 14 0.500023)"
				stroke="currentColor"
			/>
			<rect
				width="6"
				height="8"
				transform="matrix(-1 0 0 1 7 0.500023)"
				fill="currentColor"
			/>
			<path
				d="M14.25 13H1.75M1.75 13L3.75 15.5M1.75 13L3.75 10.5"
				stroke="currentColor"
				stroke-linecap="round"
			/>
		</svg>
	);
}

export default Row;
