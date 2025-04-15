import React, { useEffect } from "react";
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
import { useForm } from "react-hook-form";


const Edit = ({ editingMeeting, setEditingMeeting, handleUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {register, handleSubmit, setValue, reset, watch } = useForm ({
    defaultValues: {
      topic: "",
      link: "",
      date: "",
      time: ""
    }
  });

  useEffect(()=>{
    if(editingMeeting){
      reset({
        topic: editingMeeting.topic || "",
        link: editingMeeting.link || "",
        date: editingMeeting.date || "",
        time: editingMeeting.time || ""
      });
    }
  }, [editingMeeting,reset]);

  const onSubmit = (data) => {
    handleUpdate({ ...editingMeeting, ...data });
    setEditingMeeting(null);
  };

  const selectedDate = watch("date");
  const selectedTime = watch("time");

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
        
        <form onSubmit={handleSubmit(onSubmit)} className="px-4 space-y-4">
        <div className="px-4">
          {/* Topic */}
          <label className="text-sm text-gray-600">Topic</label>
          <Input {...register("topic",{required: true})} className="w-full mb-3 mt-2" />
          {/* Meeting Link */}
          <label className="text-sm text-gray-600">Meeting Link</label>
          <Input {...register("link", {required: true})} className="w-full mb-3 mt-2 " />
          {/* Date */}
          <label className="text-sm text-gray-600">Date</label>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className={cn(
                "justify-start text-left font-normal gap-2 w-full mb-3 mt-2",
                !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {selectedDate ? format(new Date(selectedDate), "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50 overflow-visible" side="bottom" align="start">
              <Calendar
                mode="single"
                selected={selectedDate ? new Date(selectedDate) : undefined}
                onSelect={(selectedDate) => {
                if (selectedDate) {
                  setValue("date", format(selectedDate, "yyyy-MM-dd"));
                  setIsOpen(false); 
                }
               }}
               disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus/>
            </PopoverContent>
          </Popover>
            {/* Time */}
            <label className="text-sm text-gray-600">Time</label>
            <Select value={selectedTime} 
            onValueChange={(value) => setValue("time", value )}>
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
            <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => setEditingMeeting(null)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
      </DialogContent>
    </Dialog>
    
  );
};

export default Edit;
