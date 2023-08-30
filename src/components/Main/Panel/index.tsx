import React, { useState } from 'react'
import { IUser } from '../../../mock/mock';
import Icon from '../../Icon';

interface IPanel {
    activeUser: IUser | null;
}

const Panel = ({ activeUser }: IPanel) => {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive(!active);
  }

  return (
    <div className="panel">
      <img src={activeUser?.photo} alt="Фотография" className="panel__photo" />
      <div className="panel__info">
        <div className="panel__info-name">
          <p className="panel__info-name-title">{activeUser?.name}</p>
          <p className="panel__info-name-gender">30 лет, муж</p>
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
    </div>
  )
}

export default Panel;
