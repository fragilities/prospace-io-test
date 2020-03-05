import React, { useState } from 'react';
import FormCaption from '../atoms/FormCaption.jsx';
import FormTextInput from '../atoms/FormTextInput.jsx';

export default function CompanyForm(props) {
    const [form, setForm] = useState({});
    console.log(form);
    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <form className="w-1/2 shadow px-3 py-4 mr-3">
            <FormCaption caption="Create Company" />
            <FormTextInput inputName="name" updateField={updateField} />
            <FormTextInput inputName="address" updateField={updateField} />
            <FormTextInput inputName="revenue" updateField={updateField} />
            <div className="ml-3 flex flex-col">
                <label className="pb-1 font-bold capitalize" htmlFor="phone">
                    Phone no
                </label>
                <div className="flex">
                    <input
                        type="number"
                        placeholder="code"
                        className="px-1 border border-gray-500 w-1/5 mr-1"
                        name="countryCode"
                        onChange={updateField}
                        required
                    />
                    <input
                        type="number"
                        placeholder="phone"
                        className="px-1 border border-gray-500 w-full"
                        id="phone"
                        name="phone"
                        onChange={updateField}
                        required
                    />
                </div>
            </div>
            <input type="submit" value="Create" onClick={handleSubmit} />
        </form>
    );
}
