import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";

import { fetcher } from "../../../lib/http";
import AppointmentsList from "./appointments-list"

const Appointments = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [appointments,setAppointments] = useState([]);
    const [pendings,setPendings] = useState([]);
    const [accepted,setAccepted] = useState([]);
    const [rejected,setRejected] = useState([]);

    async function userData(){
            const request = await fetcher("appointments/", "GET",token)
            console.log("yo appointments in total",request);

            request.appointments.pending.filter ( data => console.log("id check ", data.patient._id))
            const resPendings= request.appointments.pending.filter(data=> data.patient._id == "6368b7683fa7e70ce0f036bd")
            console.log("user res pending ",resPendings)

            const resAccepted= request.appointments.accepted.filter((data)=>data.patient._id == "6368b7683fa7e70ce0f036bd")
            const resRejected= request.appointments.rejected.filter((data)=>data.patient._id == "6368b7683fa7e70ce0f036bd")
            setPendings(resPendings);
            setAccepted(resAccepted);
            setRejected(resRejected);


    // console.log("appointments",request);
    // console.log("pendings",pendings);
    // console.log("accepted",accepted);
    // console.log("rejected",rejected);
    }

    useEffect(()=>{
        userData();
    },[]);

    useEffect(()=> {
        if (!localStorage.getItem('token')){
          navigate('/login')
        }
      },[])
    return (
        <div className="ml-[200px]">
            <h2 className="text-xl">Hello,user</h2>
            <h5>Here are your appointments:</h5>

            <div className="mt-5">
                <AppointmentsList
                    list={pendings}
                    status="Pending"
                    role="doctor"
                />
            </div>

            <div className="mt-5">
                <AppointmentsList
                    list={accepted}
                    status="Approved"
                    role="doctor"
                />
            </div>

            <div className="mt-5">
                <AppointmentsList
                    list={rejected}
                    status="Rejected"
                    role="doctor"
                />
            </div>
        </div>
    );
};

export default Appointments;