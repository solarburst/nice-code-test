import React, { useState } from 'react';
import { IUser, Notification } from '../../../mock/mock';
import Icon from '../../Icon';

interface IUserItem {
    user: IUser,
    checkedUsers: IUser[],
    toggle: boolean,
    handleOnChange: (user: IUser) => void,
    handleOnClick: (user: IUser) => void,
    active: boolean,
}

const UserItem = ({ user, toggle, checkedUsers, handleOnChange, handleOnClick, active }: IUserItem) => {
  return (
    <div className={`user ${user.primary ? 'user--primary' : ''} ${active ? 'user--active' : ''}`} onClick={() => {toggle ? null : handleOnClick(user)}}>
        <div className="user__info">
            {toggle ? <input type="checkbox" checked={checkedUsers.find(elem => elem.id === user.id) ? true : false} onChange={() => handleOnChange(user)} /> : null}
            <img src={user.photo} alt="Фотография" className='user__info-photo' />
            <p className='user__info-name'>{user.name}</p>
        </div>
        {user.notification ?
            <Icon name={user.notification} />  :
            <></>  
        }
    </div>
  )
}

export default UserItem;
