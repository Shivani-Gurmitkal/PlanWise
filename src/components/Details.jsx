import React, { useContext, useState } from 'react'
import MeetingContext from '@/context/MeetingContext';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import axios from 'axios';
import { toast } from "sonner";
import Edit from "./Edit";
const options = { weekday: 'long', day: 'numeric'};

const url = 'https://meetingapp-8283b-default-rtdb.asia-southeast1.firebasedatabase.app/'

function Details() {
  let { meetings = [], setMeetings } = useContext(MeetingContext);
  const [editingMeeting, setEditingMeeting] = useState(null);
 
  if (!meetings || meetings.length === 0) {
    return (
      <div className="text-center mt-32">
        <h1 className="text-2xl font-semibold text-gray-700">No Meetings Scheduled</h1>
        <p className="text-gray-500 mt-2">Create a new meeting to get started.</p>
      </div>
    );
  } 

  const handleUpdate = async (updatedMeeting) => {
    try {
      await axios.put(`${url}/meeting/${updatedMeeting.id}.json`, updatedMeeting);
      setMeetings(meetings.map((meeting) =>
        meeting.id === updatedMeeting.id ? updatedMeeting : meeting));
      toast.success("Meeting updated successfully!");
      setEditingMeeting(null);
    } catch (error) {
      toast.error("Failed to update meeting");
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${url}/meeting/${id}.json`);
      const updatedMeeting = meetings.filter(meeting => meeting.id !== id);
      setMeetings(updatedMeeting);
      toast.success("Meeting deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete meeting");
    }
  }

  return (

    <div className="py-16 px-4  overflow-x-auto w-full">
    <Table className="border border-gray-300 rounded-lg w-full min-w-[700px]">
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="w-[200px] text-lg font-semibold text-gray-800 text-center">Topic</TableHead>
          <TableHead className="w-[300px] text-lg font-semibold text-gray-800 text-center">Link</TableHead>
          <TableHead className="w-[150px] text-lg font-semibold text-gray-800 text-center whitespace-nowrap">Date</TableHead>
          <TableHead className="w-[100px] text-lg font-semibold text-gray-800 text-center whitespace-nowrap">Time</TableHead>
          <TableHead className="w-[150px] text-lg font-semibold text-gray-800 text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {meetings.sort((a, b) => new Date(a.date) - new Date(b.date)).map((meeting) => (
          <TableRow key={meeting.id} className="hover:bg-gray-50 transition">
            
            {/* Topic */}
            <TableCell className="w-[200px] text-center font-medium text-gray-700 ">{meeting.topic}</TableCell>
            
            {/* Meeting Link */}
            <TableCell className="text-center w-[300px]">
              <a href={meeting.link} title={meeting.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate block max-w-[280px]">
                {meeting.link} </a>
            </TableCell>

            {/* Date */}
            <TableCell className="text-center w-[150px] text-gray-700 whitespace-nowrap">
              {new Date(meeting.date).toLocaleDateString("en", options)}
            </TableCell>

            {/* Time */}
            <TableCell className="text-center w-[100px] text-gray-700 whitespace-nowrap">{meeting.time}</TableCell>

            {/* Action Options */}
            <TableCell className="text-center w-[150px]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <HiOutlineDotsHorizontal className="text-gray-600 hover:text-gray-900" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={()=>{
                      navigator.clipboard.writeText(`Join: ${meeting.topic} - ${meeting.link}`);
                      toast.success("Invitation copied!");}}>
                      <span>📋 Copy Invitation</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setEditingMeeting(meeting)}>
                      <span>✏️ Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDelete(meeting.id)}>
                      <span className="text-red-700">🗑️ Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    <Edit
        editingMeeting={editingMeeting}
        setEditingMeeting={setEditingMeeting}
        handleUpdate={handleUpdate}
        />
  </div>
  
  )
}

export default Details
