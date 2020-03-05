import React from 'react';
import CardHeader from '../atoms/CardHeader.jsx';
import CardField from '../atoms/CardField.jsx';

export default function OfficeCard(props) {
	return (
		<div className="flex flex-col p-4 w-2/5 mb-4 mx-2 rounded shadow">
			<CardHeader name={props.office.name} />
			<div className="ml-3 mb-2">
				<h3 className="capitalize font-semibold text-lg">{props.office.location}</h3>
				<p>latitude - {props.office.latitude}</p>
				<p>longitude - {props.office.longitude}</p>
			</div>
			<CardField name="startDate" value={props.office.startDate} />
		</div>
	);
}
