import React from "react";
import DoctorAppointment from "./doctorpov"

const DAppointmentsList = ({ list, role, status }) => {
    return (
        <div className="w-[900px]">
            <h3 className="mb-1 mt-9  text-xl font-semibold text-gray-600">
                {status} Appointments
            </h3>
            {list.map((pending, index) => {
                let id = pending._id;
                return (
                    <DoctorAppointment
                        pending = { pending }
                        index = {index}
                        status = { status }
                        role = {role}
                        id = {id}
                    />
                    
                );
            })}
        </div>
    );
};

export default DAppointmentsList;