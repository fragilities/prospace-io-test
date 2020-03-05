import React, { useEffect } from 'react';
import Loading from '../components/Loading.jsx';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCompany } from '../store/actions/CompanyActions';
import CardHeader from '../atoms/CardHeader.jsx';
import CardField from '../atoms/CardField.jsx';
import OfficeCard from '../components/OfficeCard.jsx'
import axios from 'axios';

export default function Company(props) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const company = useSelector((state) => state.CompanyReducer.company);

	useEffect(() => {
		const fetchCompanyDetail = async () => {
			const { data } = await axios.get(`http://localhost:3000/companies/${id}`);
			dispatch(setCompany(data.company));
		};

		fetchCompanyDetail();
	}, []);

	if (!company) return <Loading />;

	return (
        <>
            <div className="flex flex-col py-4 shadow mb-4">
                <CardHeader name={company.name} />
                <div className="ml-4">
                    <CardField name="address" value={company.address} />
                    <CardField name="revenue" value={company.revenue} />
                    <CardField name="phone" value={company.phone} />
                </div>
                <div className="flex justify-end">
                    <span
                        className="mr-10 px-4 py-2 rounded cursor-pointer bg-gray-300"
                        onClick={() => history.push('/overview')}
                    >
                        Back
                    </span>
                </div>
            </div>
            
            <h2 className="text-xl ml-3">Companies</h2>

            <div className="flex justify-evenly flex-wrap px-4">
                {
                    company.offices && company.offices.length > 0
                        ? company.offices.map(office => <OfficeCard key={office._id} office={office} />)
                        : <p>No office</p>
                }
            </div>
        </>
	);
}
