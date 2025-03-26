import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";


const Edit = ({ editingMeeting, setEditingMeeting, handleUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!editingMeeting) return null; 

  return (
    <Dialog open={!!editingMeeting} onOpenChange={() => setEditingMeeting(null)}>
      <DialogContent className="overflow-visible">
        <DialogHeader>
          <DialogTitle>Edit Meeting</DialogTitle>
          <DialogDescription>
            Edit your meeting details here. Remember to click “Save” when you are finished.
          </DialogDescription>
        </DialogHeader>
        
        <div className="px-4">
          {/* Topic */}
          <label className="text-sm text-gray-600">Topic</label>
          <Input
            value={editingMeeting.topic}
            onChange={(e) => setEditingMeeting({ ...editingMeeting, topic: e.target.value })}
            className="w-full mb-3 mt-2  focus:outline-non"
          />

          {/* Meeting Link */}
          <label className="text-sm text-gray-600">Meeting Link</label>
          <Input
            value={editingMeeting.link}
            onChange={(e) => setEditingMeeting({ ...editingMeeting, link: e.target.value })}
            className="w-full mb-3 mt-2 "
          />

          {/* Date */}
          <label htmlFor="username" className="text-sm text-gray-600">Date</label>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                "justify-start text-left font-normal gap-2 w-full mb-3 mt-2",
                !editingMeeting.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {editingMeeting.date
                ? format(new Date(editingMeeting.date), "PPP")
                : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50 overflow-visible" side="bottom" align="start">
              <Calendar
                mode="single"
                selected={editingMeeting.date ? new Date(editingMeeting.date) : undefined}
                onSelect={(selectedDate) => {
                if (selectedDate) {
                  setEditingMeeting({ ...editingMeeting, date: format(selectedDate, "yyyy-MM-dd") }); // ✅ Fixes timezone issue
                  setIsOpen(false); // ✅ Close popover after selecting date
                }
               }}
                initialFocus/>
            </PopoverContent>
          </Popover>

            {/* Time */}
            <label className="text-sm text-gray-600">Time</label>
            <Select value={editingMeeting.time} onValueChange={(value) => setEditingMeeting({ ...editingMeeting, time: value })}>
              <SelectTrigger className="col-span-3 w-full mb-4 mt-2">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent className="max-h-48 overflow-y-auto">
                {["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"]
                .map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setEditingMeeting(null)}>Cancel</Button>
              <Button onClick={() => handleUpdate(editingMeeting)}>Save</Button>
            </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default Edit;
