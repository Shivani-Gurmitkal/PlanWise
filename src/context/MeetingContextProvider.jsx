import React, { useState } from "react";
import MeetingContext from "./MeetingContext";

const MeetingContextProvider = ({children})=>{
    let [meetings, setMeetings] = useState([]);

    const addMeeting = (newMeeting)=>{
        setMeetings((prev)=>[...prev,newMeeting]);
    }

    return (
        <MeetingContext.Provider value={{ meetings, addMeeting }}>
            {children}
        </MeetingContext.Provider>
    )
}

export default MeetingContextProvider;