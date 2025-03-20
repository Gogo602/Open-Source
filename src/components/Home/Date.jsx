import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function Date() {
  const [date, setDate] = React.useState(undefined); // Correct useState

  const handleSelect = (selectedDate) => {
    // Remove type annotation
    console.log("Selected Date:", selectedDate);
    setDate(selectedDate);
  };

  console.log("Date before render:", date);

  return (
    <div>
      <Calendar
        mode='single'
        selected={date}
        onSelect={handleSelect}
        className='rounded-md border'
      />
    </div>
  );
}
