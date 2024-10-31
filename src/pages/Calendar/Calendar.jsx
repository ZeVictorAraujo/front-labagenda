import React from "react";
import SideBar from '../../components/SideBar/SideBar'
import Calendar from "../../components/FullCalendar/FullCalendar";

export default function FullCalendar() {
  return(
    <div className="flex h-screen">
      <SideBar />
      <div className="ml-20 flex-1 overflow-auto">
        <Calendar />
      </div>
    </div>
  )
}
