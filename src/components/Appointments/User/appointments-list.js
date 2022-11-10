import React from "react";
import Appointment from "./appointment"

const AppointmentsList = ({ list, role, status }) => {
    console.log("pending  Testaa  ", list)
    return (
        <div className="w-[900px]">
            <h3 className="mb-1 mt-9  text-xl font-semibold text-gray-600">
                {status} Appointments
            </h3>

            {list.map((pending, index) => {
                console.log("pending aa ",pending)
                return (
                    <Appointment
                    pending = { pending }
                    index = {index}
                    status = { status }
                    role = {role}
                    />
                );
            })}
        </div>
    );
};

export default AppointmentsList;