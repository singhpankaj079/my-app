import React from 'react'
import './EventBody.css'


function EventBody(props) {
	if (props.activeTab) {
	return (
		<div className = "event-body">
		
				
				
				{
					props.body.map((item) => {
					return (
						<div className = "log-item">
							{ item }
						</div>
						)
				})
			}
		</div>

		)
	} else {
		return (<div className = "event-body"></div>)
	}
}

export default EventBody