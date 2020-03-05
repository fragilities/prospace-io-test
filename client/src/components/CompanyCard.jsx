import React from 'react';
import CardHeader from '../atoms/CardHeader.jsx';
import CardField from '../atoms/CardField.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCompanies } from '../store/actions/CompanyActions';
import { Redirect, useHistory } from 'react-router-dom';

export default function CompanyCard(props) {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleDelete = async () => {
		try {
			console.log('deleting');
			await axios.delete(`http://localhost:3000/companies/${props.company._id}`);
			const { data } = await axios.get('http://localhost:3000/companies');
			dispatch(setCompanies(data.companies));
		} catch (error) {
			console.log(error);
		}
	};

	const handleOpenCompany = () => {
		history.push(`/company/${props.company._id}`);
	};

	return (
		<div className="flex flex-col p-4 w-2/5 mb-4 mx-2 rounded shadow">
			<CardHeader name={props.company.name} handleOpenCompany={handleOpenCompany} handleDelete={handleDelete} />
			<CardField name="address" value={props.company.address} />
			<CardField name="revenue" value={props.company.revenue} />
			<CardField name="phone" value={props.company.phone} />
		</div>
	);
}
