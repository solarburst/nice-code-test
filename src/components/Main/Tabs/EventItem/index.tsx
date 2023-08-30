import React from 'react'
import { IEvent } from '../../../../mock/mock'
import Icon from '../../../Icon';

interface IEventItem {
    event: IEvent;
}

const EventItem = ({ event }: IEventItem) => {
  return (
    <div className="event">
        <img src={event.photo} alt="Фотография" />
        <div className="event__info">
            <p className="event__info-name">{event.name}</p>
            <div className="event__info-other">
                <p className="event__info-item">
                    <Icon name='webinar' />
                    {event.type}
                </p>
                <p className="event__info-item">
                    <Icon name='date' />
                    {event.date}
                </p>
                <p className="event__info-item">
                    <Icon name='time' />
                    {event.time}
                </p>
            </div>
        </div>
    </div>
  )
}

export default EventItem