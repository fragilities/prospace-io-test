import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCompanies } from '../store/actions/CompanyActions';
import Loading from '../components/Loading.jsx';
import CompanyForm from '../components/CompanyForm.jsx';
import OfficeForm from '../components/OfficeForm.jsx';
import axios from 'axios';

export default function Overview(props) {
    const companies = useSelector(state => state.CompanyReducer.companies);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:3000/companies`
                );

                dispatch(setCompanies(data.companies));
            } catch (error) {
                console.log(error);
            }
        };

        fetchCompanies();
    }, []);

    if (!companies) return <Loading />;

    return (
        <div className="flex flex-col">
            <div className="flex justify-evenly p-4">
                <CompanyForm />
                <OfficeForm />
            </div>
            <pre>{JSON.stringify(companies, null, 4)}</pre>
        </div>
    );
    // return <pre>{JSON.stringify(companies, null, 4)}</pre>;
}
