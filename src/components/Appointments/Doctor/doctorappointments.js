import React, { useEffect, useState} from "react";
import {fetcher} from '../../../lib/http';

import DAppointmentsList from "./doctorapplist"


const DoctorAppointments = () => {
    const token = localStorage.getItem('token');

    const [appointments,setAppointments] = useState([]);
    const [approve,setApproved]=useState([]);
    const [pendings,setPendings] = useState([]);
    const [accepted,setAccepted] = useState([]);
    const [rejected,setRejected] = useState([]);


    async function userData(){

    const request = await fetcher("appointments/", "GET",token)
    console.log(request.appointments.rejected);

    const resPendings= request.appointments.pending.filter((data)=>data.doctor._id==="636746664b966f0c28656b02")
    //console.log("resPendings",resPendings)

    const resAccepted= request.appointments.accepted.filter((data)=>data.doctor._id==="636746664b966f0c28656b02")
    const resRejected= request.appointments.rejected.filter((data)=>data.doctor._id==="636746664b966f0c28656b02")

    setPendings(resPendings);
    setAccepted(resAccepted);
    setRejected(resRejected);
   // console.log("pending",pending)
    // console.log("appointments",request);
    // console.log("pendings",pendings);
    // console.log("accepted",accepted);
    // console.log("rejected",rejected);
//   const filterdata = Array.from(request).filter((user)=>user.role=="doctor")
//   setUsers(filterdata);
}

useEffect(()=>{
    userData();
},[]);

    return (
        <div className="ml-[200px]">
            <h2 className="text-xl">Hello, Doctor</h2>
            <h5>Here are your appointments:</h5>

            <div className="mt-5">
                <DAppointmentsList
                    list={pendings}
                    status="Pending"
                    role="user"
                />
            </div>

            <div className="mt-5">
                <DAppointmentsList
                    list={accepted}
                    status="Approved"
                    role="user"
                />
            </div>

            <div className="mt-5">
                <DAppointmentsList
                    list={rejected}
                    status="Rejected"
                    role="user"
                />
            </div>
        </div>
    );
};

export default DoctorAppointments;