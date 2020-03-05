import React from 'react';
import FormCaption from '../atoms/FormCaption.jsx';
import FormTextInput from '../atoms/FormTextInput.jsx';

export default function OfficeForm(props) {
    return (
        <form className="w-1/2 shadow px-3 py-4 mr-3">
            <FormCaption caption="Create Office" />
            <FormTextInput inputName="name" />
        </form>
    );
}
