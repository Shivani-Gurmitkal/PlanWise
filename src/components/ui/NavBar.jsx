import React, { useContext, useEffect, useRef, useState } from 'react'
import MeetingContext from '@/context/MeetingContext'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import axios from 'axios'

function NavBar() {
    const {addMeeting} = useContext(MeetingContext);
    let url = 'https://meeting-6584e-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const [date, setDate] = React.useState();
    const [meetingData, setMeetingData] = useState([]);
    const topicInput = useRef(null);

    function handleSubmit(){
        let newMeeting = topicInput.current.value;
        axios.post(`${url}meet.json`,{
            topic: newMeeting,
            date: date,
        }).then(()=>{
            console.log("data saved")
            addMeeting(newMeeting);
            fetchData();
        }).catch((error)=>{
          console.log("Error saving meeting:", error);
        })
    }

    function fetchData(){
        axios.get(`${url}meet.json`).then(meetingData=>{
            let meets = [];
            for(let key in meetingData.data){
                let meet ={
                    id: key,
                    ...meetingData.data[key]
                }
                meetDatas.push(meet);
            }
            setMeetingData(meets);
            addMeeting(meets);
        })  
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <div>

      <div className="border-b py-3 border-neutral-500">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link>Meeting App</Link>
            <div className="flex gap-4 items-center">
                <Link to="/previous">Previous meetings</Link>
                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="outline">Schedule</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Add New Meeting</SheetTitle>
                                <SheetDescription>
                                    Create new meeting with your members. Click save when you're done.
                                </SheetDescription>
                        </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            Topic
                            </Label>
                        <Input id="name" ref={topicInput} placeholder="Meeting Title" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                            Date
                            </Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                        "col-span-3 justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button onClick={handleSubmit}>Create meeting</Button>
                        </SheetClose>
                    </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar
