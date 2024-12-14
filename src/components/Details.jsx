import React, { useContext } from 'react'
import MeetingContext from '@/context/MeetingContext';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from 'axios';
const options = {
  weekday: 'long',
  day: 'numeric',
};

let url = 'https://meeting-6584e-default-rtdb.asia-southeast1.firebasedatabase.app/'

function Details() {
   let {meetings, setMeetings} = useContext(MeetingContext);
   if(!meetings) return <h1>No Meetings</h1> 

   function handleDelete(id){
    axios.delete(`${url}meeting/${id}.json`)
    const updateMeeting = meetings.filter(meeting => meeting.id !== id) // filter
    setMeetings(updateMeeting);
   }
   
  return (
    <div>
      <div className="mt-12">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-72 text-xl text-black">Topic</TableHead>
              <TableHead className="w-44 text-xl text-black">Date</TableHead>
              <TableHead className="w-64 text-xl text-black">Link</TableHead>
              <TableHead className="w-40 text-xl text-black">Select</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {
            meetings.map(meeting => (
              <TableRow key={meeting.id} id={meeting.id}>
                <TableCell className="font-medium w-72">{meeting.topic}</TableCell>
                <TableCell className="w-44">{new Date(meeting.date).toLocaleDateString('en',options)}</TableCell>
                <TableCell className="w-72">Meeting Link</TableCell>
                <TableCell className="w-40">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        <HiOutlineDotsHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <span>New Meeting</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Copy Invitation</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>handleDelete(meeting.id)}>
                          <span className="text-red-700">Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Details


