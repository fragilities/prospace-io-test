import React from 'react';

export default function CardHeader(props) {
	return (
		<div className="flex justify-between pb-1 mb-2 border-b border-gray-500 ml-3">
			<span className="px-1 cursor-pointer" onClick={props.handleOpenCompany}>
				{props.name}
			</span>
			<span className="px-1 cursor-pointer" onClick={props.handleDelete}>
				x
			</span>
		</div>
	);
}
