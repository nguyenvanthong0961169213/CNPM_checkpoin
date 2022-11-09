import React from "react";
import Day from "./Day";
import { Day_2 } from "./Day";

export default function Month({ month }) {

  function getEvent(){
    // Call owr ddaay
    
    var result = [];
    result.map(s => {
      return {
        id: s.id, 
        title: s.name,
        day: s.beginHour,
        // p: s.
      };
    })
    //const storageEvents = localStorage.getItem("savedEvents");
    //const parsedEvents  = storageEvents ? JSON.parse(storageEvents) : [];
    return result;
    //return parsedEvents;
  }
  const events = getEvent();
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} _events={events} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

//
export function Month_2({ month }) {

  function getEvent(){
    // Call owr ddaay
    
    var result = [];
    result.map(s => {
      return {
        id: s.id, 
        title: s.name,
        day: s.beginHour,
        // p: s.
      };
    })
    //const storageEvents = localStorage.getItem("savedEvents");
    //const parsedEvents  = storageEvents ? JSON.parse(storageEvents) : [];
    return result;
    //return parsedEvents;
  }
  const events = getEvent();
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
              <Day_2 day={day} key={idx} rowIdx={i} _events={events} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

