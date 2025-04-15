import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import MeetingContext from '@/context/MeetingContext'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription,SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner"; 
import { Toaster } from "@/components/ui/sonner"
import { useUser } from '@clerk/clerk-react';

const url = 'https://meetingapp-8283b-default-rtdb.asia-southeast1.firebasedatabase.app/'

function NewMeeting() {
    let {user} = useUser();
    const {setMeetings} = useContext(MeetingContext);
    const [date, setDate] = React.useState();
    const topicInput = useRef(null);
    const linkInput = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");
    
   async function handleSubmit(){
    const meetingTopic = topicInput.current.value;
    const meetingLink = linkInput.current.value;

    if (!meetingTopic || !date || !time || !meetingLink) { 
        toast.error("Please fill in all fields.");
        return;
    }

    const today = new Date();
    today.setHours(0,0,0,0);
    if(date < today){
        return;
    }

    try{
        await axios.post(`${url}/meeting.json`,{
            topic: meetingTopic,
            link: meetingLink,
            date: date,
            time: time,
            createdBy: user.username,
        });
        await fetchData();
            setDate("");
            setTime("");
            topicInput.current.value = "";
            linkInput.current.value = "";
            toast.success(`Meeting "${meetingTopic}" scheduled successfully!`);
            setIsOpen(false);
        }catch (error) {
            console.error("Meeting creation failed:", error);
            toast.error("Failed to create the meeting. Please try again.");
        }         
    }

   async function fetchData(){
        axios.get(`${url}/meeting.json`).then(meeting=>{
            let meetTask =[];
            for(let key in meeting.data){
                let meet = {
                    id:key,
                    ...meeting.data[key]
                }
                if (user && user.username) {
                    if (meet.createdBy === user.username) {
                        meetTask.push(meet);
                    }
                } else {
                meetTask.push(meet);
            }}
            setMeetings(meetTask);
        }) 
        .catch(() => {
            toast.error("Failed to fetch meetings");
          });
    }

    useEffect(()=>{
        fetchData(); 
    }, [])

    return (
    <div>
        
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-[poppins]">New meeting</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Add New Meeting</SheetTitle>
                    <SheetDescription>
                        Create new meeting with your members. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    {/* Topic */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Topic</Label>
                        <Input id="topic" ref={topicInput} placeholder="Meeting Title" className="col-span-3" />
                    </div>
                    {/* Link */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Link</Label>
                        <Input id="link" ref={linkInput} placeholder="Meeting Link" className="col-span-3"/>  
                    </div>
                    {/* Date */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Date</Label>
                        <Popover open={isOpen} onOpenChange={setIsOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                "col-span-3 justify-start text-left font-normal gap-2",
                                !date && "text-muted-foreground")}>
                                    {!date && <CalendarIcon />}
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(selectedDate) => {
                                    setDate(selectedDate);
                                    setIsOpen(false); 
                                    }}
                                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                initialFocus/>
                            </PopoverContent>
                        </Popover>
                    </div>
                    {/* Time */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Time</Label>
                        <Select value={time} onValueChange={setTime} >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select time"/>
                            </SelectTrigger>
                            <SelectContent className="max-h-48 overflow-y-auto">
                                {["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"]
                                .map((time) => (
                                <SelectItem key={time} value={time}>{time}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {/* Button */}
                <SheetFooter>
                    <SheetClose asChild>
                        <Button onClick={handleSubmit} className="hover:bg-indigo-600">Create meeting</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
        <Toaster position="bottom-right" richColors /> 
    </div>
  )
}

export default NewMeeting
