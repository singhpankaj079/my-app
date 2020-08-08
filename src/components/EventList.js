import React from 'react'
import './EventList.css'


function EventList(props) {
    

    return (
        <div className = "event-list">
            {
            props.eventList.map((event) => {
                return (
                    <div className = "event-item" onClick = {()=> props.openTab(event)}>
                        {event.title}
                    </div>
                )
            })
        }
        </div>
    )
}

export default EventList