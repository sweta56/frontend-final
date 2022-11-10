import React, { useEffect, useState} from "react";
import {fetcher} from '../../../lib/http';
import authSlice from "../../../redux/slices/auth-slice";

import DAppointmentsList from "./doctorapplist"
import jwtDecode from "jwt-decode";


const DoctorAppointments = () => {
    const token = localStorage.getItem('token');

    const [appointments,setAppointments] = useState([]);
    const [approve,setApproved]=useState([]);
    const [pendings,setPendings] = useState([]);
    const [accepted,setAccepted] = useState([]);
    const [rejected,setRejected] = useState([]);

    const [Flag,SetFlag] = useState(false);


    async function userData(){

    const request = await fetcher("appointments/", "GET",token)
    const {_id} = jwtDecode(localStorage.getItem('token'));
    

    const resPendings= request.appointments.pending.filter((data)=>data.doctor._id===_id)
    const resAccepted= request.appointments.accepted.filter((data)=>data.doctor._id===_id)
    const resRejected= request.appointments.rejected.filter((data)=>data.doctor._id===_id)

    setPendings(resPendings);
    setAccepted(resAccepted);
    setRejected(resRejected);
 
}

useEffect(()=>{
    userData();
},[Flag]);

    return (
        <div className="ml-[200px]">
            <h2 className="text-xl">Hello, Doctor</h2>
            <h5>Here are your appointments:</h5>

            <div className="mt-5">
                <DAppointmentsList
                    list={pendings}
                    status="Pending"
                    role="user"
                    Flag = {Flag}
                    SetFlag = {SetFlag}
                />
            </div>

            <div className="mt-5">
                <DAppointmentsList
                    list={accepted}
                    status="Approved"
                    role="user"
                    Flag = {Flag}
                    SetFlag = {SetFlag}
                />
            </div>

            <div className="mt-5">
                <DAppointmentsList
                    list={rejected}
                    status="Rejected"
                    role="user"
                    Flag = {Flag}
                    SetFlag = {SetFlag}
                />
            </div>
        </div>
    );
};

export default DoctorAppointments;