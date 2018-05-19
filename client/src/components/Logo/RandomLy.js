import React from "react";

const randomLy = props => (
	<svg
		style={{ isolation: "isolate" }}
		viewBox="136 197 727.6 603.566"
		{...props}
	>
		<linearGradient
			id="a"
			x1="-.36%"
			y1="98.238%"
			x2="70.268%"
			y2="28.606%"
		>
			<stop offset="1.739%" stopColor="#464646" />
			<stop offset="100%" stopColor="#d1d1d1" />
		</linearGradient>
		<path d="M276 685h543V229H136v572l140-116z" fill="url(#a)" />
		<linearGradient
			id="b"
			x1="21.626%"
			y1="24.356%"
			x2="98.919%"
			y2="96.344%"
		>
			<stop offset="3.043%" stopColor="#464646" />
			<stop offset="100%" />
		</linearGradient>
		<path d="M864 653V197H181v456h543l140 116V653z" fill="url(#b)" />
		<path
			fill="#FFF"
			d="M309.145 305.662h434.648v40.4H309.145zm0 98.91h434.648v40.4H309.145zm0 98.911h434.648v40.4H309.145z"
		/>
	</svg>
);

export default randomLy;
