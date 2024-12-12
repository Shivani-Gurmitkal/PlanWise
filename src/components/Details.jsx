import React, { useContext } from 'react'
import MeetingContext from '@/context/MeetingContext';

function Details() {
   let {meetings} = useContext(MeetingContext);

  return (
    <div>
      <div className="">
        <h1>{meetings.topic}</h1>
        <p>{meetings.date}</p>
      </div>

    {/* {console.log(meetings)} */}
    </div>
  )
}

export default Details
