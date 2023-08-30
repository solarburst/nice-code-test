import React, { useState } from 'react';
import Icon from '../../Icon';
import { IUser } from '../../../mock/mock';
import NotesItem from './NotesItem';
import ConsultItem from './ConsultItem';
import VideoItem from './VideoItem';
import EventItem from './EventItem';

interface ITabs {
  activeUser: IUser;
}

const Tabs = ({ activeUser }: ITabs) => {
  const [active, setActive] = useState('');

  const handleOnClick = (e: React.MouseEvent) => {
    const type = e.currentTarget.getAttribute('data-type');
    if (type) setActive(type);
  }

  const renderSwitch = (active: string) => {
    switch (active) {
      case 'notes':
        return 'Новая заметка';
      case 'consult':
        return 'Записать';
      case 'video':
        return 'Рекомендовать';
      case 'events':
        return 'Рекомендовать';
      default:
        return '';
    }
  }

  return (
    <div className="tabs">
      <div className="tabs__actions">
        <ul className="tabs__actions-items">
            <button className={`button button-tabs-action ${active === 'notes' ? 'button-tabs-action--active' : ''}`} data-type="notes" onClick={(e) => handleOnClick(e)}>Заметки</button>
            <span className="tabs__actions-items-separator"></span>
            <button className={`button button-tabs-action ${active === 'consult' ? 'button-tabs-action--active' : ''}`} data-type="consult" onClick={(e) => handleOnClick(e)}>Консультации</button>
            <span className="tabs__actions-items-separator"></span>
            <button className={`button button-tabs-action ${active === 'video' ? 'button-tabs-action--active' : ''}`} data-type="video" onClick={(e) => handleOnClick(e)}>Видео</button>
            <span className="tabs__actions-items-separator"></span>
            <button className={`button button-tabs-action ${active === 'events' ? 'button-tabs-action--active' : ''}`} data-type="events" onClick={(e) => handleOnClick(e)}>Мероприятия</button>
        </ul>
        <button className="button button-tabs">
          {renderSwitch(active)}
          {active ? <Icon name='tab-add' /> : <></>}
        </button>
      </div>
      {activeUser && active === 'notes' ? <div className="tabs__content">
        {activeUser.note.map(elem => <NotesItem note={elem} key={activeUser.note.indexOf(elem)} />)}
      </div> : <></>}
      {activeUser && active === 'consult' ? <div className="tabs__content">
        {activeUser.consult.map(elem => <ConsultItem consult={elem} key={activeUser.consult.indexOf(elem)} />)}
      </div> : <></>}
      {activeUser && active === 'video' ? <div className="tabs__content">
        {activeUser.video.map(elem => <VideoItem video={elem} key={activeUser.video.indexOf(elem)} />)}
      </div> : <></>}
      {activeUser && active === 'events' ? <div className="tabs__content">
        {activeUser.event.map(elem => <EventItem event={elem} key={activeUser.event.indexOf(elem)} />)}
      </div> : <></>}
    </div>
  )
}

export default Tabs;
