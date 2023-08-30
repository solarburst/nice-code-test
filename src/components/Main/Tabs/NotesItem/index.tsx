import React, { useState } from 'react'
import Icon from '../../../Icon';
import { INote } from '../../../../mock/mock';

interface INotesItem {
    note: INote;
}

const NotesItem = ({ note }: INotesItem) => {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive(!active);
  }

  return (
    <div className="note">
        <div className="note__info">
            <p className="note__info-text"><span className="note__info-date">{note.date}</span>&#9;{note.text}</p>
            {note.photo ? <img src={note.photo} alt="Фотография" className="note__info-photo" /> : <></>}
        </div>
        <button className={`button button-panel ${active ? 'button-panel--active' : ''}`} onClick={handleOnClick}>
          <Icon name="dots"  />
          {active ?
            <div className="popup">
              <button className="button button-popup">
                Изменить
              </button>
              <button className="button button-popup">
                Удалить
              </button>
            </div> : <></>
          }
        </button>
    </div>
  )
}

export default NotesItem;
