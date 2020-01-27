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

    formatEvents = () => {
        
        return this.props.appointments.map(appointment => {
            const {title, end, start} = appointment

            let startTime = new Date(start)
            let endTime = new Date(end)
            
            return {title, start: startTime, end: endTime, extendedProps: {...appointment}}
        })
    }

    render() {
        console.log(this.formatEvents())
      return (
        <FullCalendar 
            defaultView="dayGridMonth" 
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={this.handleDateClick}
            editable={true}
            eventDrop={this.handleEventDrop}
            eventClick={this.handleEventClick}
            events={this.formatEvents()}
        />
      )
    }
  
}