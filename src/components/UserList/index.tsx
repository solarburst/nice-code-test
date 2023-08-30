import React, { useState } from 'react';
import { IUser } from '../../mock/mock';
import UserItem from './UserItem';

interface IUserList {
    users: IUser[];
    activeUser: IUser | null;
    setActiveUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserList = ({ users, activeUser, setActiveUser }: IUserList) => {
  const [toggle, setToggle] = useState(false);
  const [listUsers, setListUsers] = useState(users);
  const [checkedUsers, setCheckedUsers] =  useState<IUser[]>([])

  const handleOnChangeCheck = () => {
    checkedUsers?.length === listUsers?.length ? setCheckedUsers([]) : setCheckedUsers(listUsers);
  }

  const handleOnChangeCheckItem = (user: IUser) => {
    const foundedUser = checkedUsers?.find(elem => elem.id === user.id);
    
    if (foundedUser) {
        const index = checkedUsers?.indexOf(foundedUser);
        const usersToSet = checkedUsers.filter(elem => elem.id !== user.id);
        
        setCheckedUsers(usersToSet);
    } else {
        setCheckedUsers([...checkedUsers, user]);
    }

  };

  const handleOnSelectorClick = () => {
    setToggle(!toggle);
    setCheckedUsers([]);
  };

  const handleOnItemClick = (user: IUser) => {
    setActiveUser(user);
  };

  return (
    <>
        <div className="list__selector">
        {toggle ?
            <>
                <div className="list__selector__actions--toggled">
                    <input type="checkbox" checked={listUsers.length === checkedUsers.length} onChange={handleOnChangeCheck} />
                    <p>Все</p>
                    <div className="list__selector__count">{checkedUsers.length}</div>
                </div>
                <div className="list__selector__actions">
                    <button className="button button-selector">
                        Действия
                    </button>
                    <button className="button button-selector" onClick={handleOnSelectorClick}>
                        Отменить
                    </button>
                </div>
            </> :
            <>
                <div className="list__selector__count">{listUsers.length}</div>
                <button className="button button-selector" onClick={handleOnSelectorClick}>
                    Выбрать
                </button>
            </>
        }
        </div>
        <div className="list__users">
            {listUsers.map(user => <UserItem user={user} checkedUsers={checkedUsers} toggle={toggle} handleOnChange={handleOnChangeCheckItem} handleOnClick={handleOnItemClick} active={user.id === activeUser?.id} key={user.id} />)}
        </div>
    </>
  )
}

export default UserList;
