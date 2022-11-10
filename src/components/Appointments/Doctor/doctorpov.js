import React from "react";

import { fetcher } from "../../../lib/http";
const DoctorAppointment = ({ pending, index, status, role, id}) => {
    const btnClassName = "px-3 py-1 rounded";
    const user = pending.patient
    const doctor = ''
    const phone = pending.patientPhone
    const date = 'Nov 14, 2022'

    const approveAppointment=async(id)=>{
        const token = localStorage.getItem('token');
        const appointmentId = id;
        fetcher(`appointments/${appointmentId}`,"PATCH",token,{accept:"acc"}).then((res) => {
              window.location.reload();
        }).catch((e) => console.log(e));
    }
    const rejectAppointment=async(id)=>{
        const token = localStorage.getItem('token');
        const appointmentId = id;
        fetcher(`appointments/${appointmentId}`,"PATCH",token,{accept:"rej"}).then((res) => {
              window.location.reload();
        }).catch((e) => console.log(e));
    }

    const onDelete = (id) => {
        const token = localStorage.getItem('token');
        const appointmentId = id;
        fetcher(`appointments/${appointmentId}`,"DELETE",token,{appointmentId:id}).then((res) => {
              window.location.reload();
        }).catch((e) => console.log(e));
    }

    return (
        <div>
            {
                index === 0 &&  <div className="flex items-center justify-between capitalize text-sm w-full bg-gray-200 py-2 px-2 text-gray-700 font-semibold">
                <p className="block text-center w-full border border-blue-300 px-6">{role}</p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    date
                </p>
                <p className="block text-center w-full  border border-blue-300 px-6">
                    phone
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
                    {role === "user" ? user?.username : doctor?.username}
                </span>
                <span className="text-sm text-gray-600">
                    {role === "user" ? user?.email : doctor?.email}
                </span>
            </div>

            <div className="p-5 ml-1">
                <span className="text-gray-600">{date}</span>
            </div>

            <div className="text-sm text-gray-600">
                <span>{phone}</span>
            </div>

           

            <div className="px-5">
                <span className="text-gray-600">{status}</span>
            </div>

            {status === "Pending" && role === "user" ? (
                <div className="flex flex-col space-y-2 ml-7">
                    <button className={`${btnClassName} bg-blue-400` } onClick={() => approveAppointment(id)}>
                        Approve
                    </button>
                    <button className={`${btnClassName} bg-red-400` } onClick={() => rejectAppointment(id)}>
                        Reject
                    </button>
                </div>
            ) : (
                <button className={`${btnClassName} bg-red-400`} onClick={() => onDelete(id)} >
                    delete</button>
            )}
        </div>
     </div>

    );
};

export default DoctorAppointment;