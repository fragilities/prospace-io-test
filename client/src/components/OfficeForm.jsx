import React, { useState } from 'react';
import FormCaption from '../atoms/FormCaption.jsx';
import FormTextInput from '../atoms/FormTextInput.jsx';
import FormSubmit from '../atoms/FormSubmit.jsx';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function OfficeForm(props) {
	const dispatch = useDispatch();
	const [ form, setForm ] = useState({});

	const updateField = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const inputs = {
				...form,
				company: form.company ? form.company : props.companies[0]._id
			};

			await axios.post('http://localhost:3000/offices', inputs);
			setForm({});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className="w-1/2 shadow px-3 py-4" onSubmit={handleSubmit}>
			<FormCaption caption="Create Office" />
			<FormTextInput inputName="name" value={form.name ? form.name : ''} updateField={updateField} />
			<div className="ml-3 flex flex-col mb-4">
				<label className="pb-1 font-bold capitalize" htmlFor="location">
					Location
				</label>
				<div className="flex justify-evenly">
					<input
						type="text"
						name="latitude"
						placeholder="latitude"
						className="px-1 w-1/2 mr-1 border border-gray-500"
						onChange={updateField}
						required
					/>
					<input
						type="text"
						name="longitude"
						placeholder="longitude"
						className="px-1 w-1/2 ml-1 border border-gray-500"
						onChange={updateField}
						required
					/>
				</div>
			</div>
			<div className="ml-3 flex flex-col mb-4">
				<label className="pb-1 font-bold capitalize" htmlFor="startDate">
					office start date
				</label>
				<input
					type="date"
					onChange={updateField}
					className="bg-gray-100 border border-gray-500 px-1 rounded"
					required
				/>
			</div>

			<div className="ml-3 flex flex-col mb-4">
				<label className="pb-1 font-bold capitalize" htmlFor="company">
					company
				</label>
				<select id="company" name="company" onChange={updateField}>
					{props.companies && props.companies.length > 0 ? (
						props.companies.map((company) => (
							<option key={company._id} value={company._id}>
								{company.name}
							</option>
						))
					) : (
						<option value={undefined}>--</option>
					)}
				</select>
			</div>

			<FormSubmit />
		</form>
	);
}
