import React from 'react';

export default function CardField(props) {
	return (
		<div className="ml-3 mb-2">
			<h3 className="capitalize font-semibold text-lg">{props.name}</h3>
			<p>{props.value}</p>
		</div>
	);
}
