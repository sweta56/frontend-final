import React from "react";

import { capitalizeFirstLetter } from "../../lib/strings"

const ErrorMessage = ({ message }) => {
    return (
        <div className="bg-red-300 px-3 py-1">
            <h4 className="text-red-700">{capitalizeFirstLetter(message)}</h4>
        </div>
    );
};

export default ErrorMessage;
