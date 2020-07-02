import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvents, getOpenEvent } from '../../redux/eventsAction'

import s from './EventsContainer.module.css'
import Events from './Events/Events'
import EventItem from './EventItem/EventItem'

class EventsContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getEvents()
    }

    openEvent = (id) => {
        this.props.getOpenEvent(id)
        this.props.openEvent()
    }

    closeEvent = (e) => {
        debugger
        this.props.openEvent()
    }

    render() {
        return (
            this.props.events.length != 0 ?
                <div className={s.container}>
                    {this.props.events.map(item => {
                        return < Events
                            key={item.id}
                            id={item.id}
                            img_preview={item.img_preview}
                            headline={item.headline}
                            date={item.date}
                            description={item.description}
                            openEvent={this.openEvent} />
                    })
                    }
                    {this.props.isOpenEvent ? <EventItem event={this.props.informationEvent} closeEvent={this.closeEvent} /> : null}
                </div>
                : <div>Loading...</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        events: state.events.events,
        isOpenEvent: state.events.isOpenEvent,
        informationEvent: state.events.informationEvent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: () => {
            dispatch(getEvents())
        },
        openEvent: () => {
            dispatch({ type: 'ACTIV_EVENT' })
        },
        getOpenEvent: (id) => {
            dispatch(getOpenEvent(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
