import React from 'react';
import { Eclipse } from 'react-loading-io';

export default function Loading(props) {
    return (
        <div className="flex justify-center items-center">
            <Eclipse size={200} speed="1.618" color="#4ca7fd" />
        </div>
    );
}
