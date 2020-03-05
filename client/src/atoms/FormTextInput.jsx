import React from 'react';

export default function FormTextInput(props) {
	return (
		<div className="ml-3 flex flex-col mb-4">
			<label className="pb-1 font-bold capitalize" htmlFor={props.inputName}>
				{props.inputName}
			</label>
			<input
				type="text"
				placeholder={props.inputName}
				className="px-1 border border-gray-500"
				id={props.inputName}
				name={props.inputName}
				onChange={(e) => props.updateField(e)}
				required
			/>
		</div>
	);
}
