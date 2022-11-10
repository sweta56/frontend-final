import React from "react";

const InputGroup = ({ placeholder, value, type = "text", onChange }) => {
    return (
        <div className="flex justify-center">
            <input
                type={type}
                className="m-2  appearance-none rounded-none relative block w-[350px] px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default InputGroup;