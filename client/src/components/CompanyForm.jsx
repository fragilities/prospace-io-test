import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCompanies } from '../store/actions/CompanyActions.js';
import FormCaption from '../atoms/FormCaption.jsx';
import FormTextInput from '../atoms/FormTextInput.jsx';
import FormSubmit from '../atoms/FormSubmit.jsx';
import axios from 'axios';

export default function CompanyForm(props) {
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
				phone: form.countryCode + form.phone
			};

			await axios.post('http://localhost:3000/companies', inputs);
			const { data } = await axios.get('http://localhost:3000/companies');

			dispatch(setCompanies(data.companies));
			setForm({});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className="w-1/2 shadow px-3 py-4 mr-3" onSubmit={handleSubmit}>
			<FormCaption caption="Create Company" />
			<FormTextInput inputName="name" value={form.name ? form.name : ''} updateField={updateField} />
			<FormTextInput inputName="address" value={form.address ? form.address : ''} updateField={updateField} />
			<FormTextInput inputName="revenue" value={form.revenue ? form.revenue : ''} updateField={updateField} />
			<div className="ml-3 flex flex-col mb-4">
				<label className="pb-1 font-bold capitalize" htmlFor="phone">
					Phone no
				</label>
				<div className="flex">
					<input
						type="number"
						placeholder="code"
						className="px-1 border border-gray-500 w-1/5 mr-1"
						name="countryCode"
						value={form.countryCode ? form.countryCode : ''}
						onChange={updateField}
						required
					/>
					<input
						type="number"
						placeholder="phone"
						className="px-1 border border-gray-500 w-full"
						id="phone"
						name="phone"
						value={form.phone ? form.phone : ''}
						onChange={updateField}
						required
					/>
				</div>
			</div>
			<FormSubmit handleSubmit={handleSubmit} />
		</form>
	);
}
