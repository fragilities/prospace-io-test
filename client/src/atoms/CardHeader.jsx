import React from 'react';

export default function CardHeader(props) {
	return (
		<div className="flex justify-center">
			<div className="flex justify-between pb-1 mb-2 border-b border-gray-500 w-11/12">
				<span
					className="px-1 cursor-pointer"
					onClick={props.handleOpenCompany ? props.handleOpenCompany : null}
				>
					{props.name}
				</span>
				<span className="px-1 cursor-pointer" onClick={props.handleDelete ? props.handleDelete : null}>
					x
				</span>
			</div>
		</div>
	);
}
