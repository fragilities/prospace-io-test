import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCompanies } from '../store/actions/CompanyActions';
import Loading from '../components/Loading.jsx';
import CompanyForm from '../components/CompanyForm.jsx';
import OfficeForm from '../components/OfficeForm.jsx';
import CompanyCard from '../components/CompanyCard.jsx';
import axios from 'axios';

export default function Overview(props) {
	const companies = useSelector((state) => state.CompanyReducer.companies);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCompanies = async () => {
			try {
				const { data } = await axios.get(`http://localhost:3000/companies`);

				dispatch(setCompanies(data.companies));
			} catch (error) {
				console.log(error);
			}
		};

		fetchCompanies();
	}, []);

	if (!companies) return <Loading />;

	return (
		<div className="flex flex-col py-4 shadow w-full">
			<div className="flex justify-evenly p-4">
				<CompanyForm />
				<OfficeForm companies={companies} />
			</div>

			<h2 className="text-xl ml-3">Companies</h2>

			<div className="flex justify-evenly flex-wrap px-4">
				{companies && companies.length > 0 ? (
					companies.map((company) => <CompanyCard key={company._id} company={company} />)
				) : (
					<p>No Company</p>
				)}
			</div>
		</div>
	);
}
