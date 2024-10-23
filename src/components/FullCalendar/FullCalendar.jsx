import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import brLocale from '@fullcalendar/core/locales/pt-br'

export default function Calendar() {

    const handleDateClick = (arg) => {
        alert(arg.dateStr)
      }

  return (
    <FullCalendar
      plugins={[ dayGridPlugin,  interactionPlugin ]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      height={850}
      locale={brLocale}

    />
  )
}