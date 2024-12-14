import React, { useState } from "react";
import MeetingContext from "./MeetingContext";

const MeetingContextProvider = ({children})=>{
    let [meetings, setMeetings] = useState(null);

    return (
        <MeetingContext.Provider value={{ meetings, setMeetings }}>
            {children}
        </MeetingContext.Provider>
    )
}

export default MeetingContextProvider;