import React from "react";

function ColumnReverse() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width="6"
				height="8"
				transform="matrix(0 1 1 0 0.5 1.00002)"
				fill="currentColor"
			/>
			<rect
				x="0.5"
				y="0.5"
				width="5"
				height="7"
				transform="matrix(0 1 1 0 0.5 9.00002)"
				stroke="currentColor"
			/>
			<path
				d="M13 14.25V1.75002M13 1.75002L10.5 3.75002M13 1.75002L15.5 3.75002"
				stroke="currentColor"
				stroke-linecap="round"
			/>
		</svg>
	);
}

export default ColumnReverse;
