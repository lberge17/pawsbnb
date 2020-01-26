import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default class Calendar extends React.Component {

    handleDateClick = (arg) => {
        console.log(arg.dateStr)
    }

    handleEventDrop = (info) => {
        console.log(info.event.start)
        let start = toString(info.event.start).split(' ').slice(1,4)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const ind = months.findIndex(month => month === start[0])
        // start[0] = ind + 1
        console.log(info.event.start.toISOString())
    }

    handleEventClick= ({event}) => {
        console.log(event)
    }

    render() {
      return (
        <FullCalendar 
            defaultView="dayGridMonth" 
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={this.handleDateClick}
            editable={true}
            eventDrop={this.handleEventDrop}
            eventClick={this.handleEventClick}
            events={[{title: "Event", start: '2020-01-26', end: '2020-01-28'}, {title: 'event 2', start: '2020-01-15T24:00:00.000Z', id: "1", extendedProps: {details: "boarding", pet: "Millie"}}]}
        />
      )
    }
  
}