import React from "react";


const Appointment = ({ pending, index, status, role}) => {


    console.log("pending bb ", pending);
    console.log("index bb ", index);
    console.log("status bb ", status);
    console.log("role bb ", role);
    const btnClassName = "px-3 py-1 rounded";
    const _id = ''
    const user = pending.doctor 
    const doctor = pending.doctor
    const date = 'Nov 14, 2022'

    return (
        <div>
            {
                index === 0 &&  <div className="flex items-center justify-between:space-around capitalize text-sm bg-gray-200 py-2 px-2 text-gray-700 font-semibold">
                <p className="block text-center w-full border border-blue-300 px-6">{role}</p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    date
                </p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    status
                </p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    action
                </p>
            </div>
            }
            
           
            
            
        <div
            className={`flex items-center justify-between  py-2 px-2 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
            }`}
        >
            <div className="flex flex-col">
                <span className="capitalize">
                    {role == "doctor" ? user?.username : doctor?.username}
                </span>
                <span className="text-sm text-gray-600">
                    {role == "doctor" ? user?.email : doctor?.email}
                </span>
            </div>

            <div className="p-5 ml-1">
                <span className="text-gray-600">{role == "doctor"? date : ""}</span>
            </div>

            <div className="px-5">
                <span className="text-gray-600">{status}</span>
            </div>

           
            <button className={`${btnClassName} bg-red-400`}>delete</button>
            
        </div>
            </div>

    );
};

export default Appointment;