import React, { useState } from 'react';
import Header from './components/Header';
import Icon from './components/Icon';
import './styles/styles.scss'
import Input from './components/Input';
import UserList from './components/UserList';
import UserItem from './components/UserList/UserItem';
import { IUser, users } from './mock/mock';
import Main from './components/Main';

const App = () => {
  const [activeUser, setActiveUser] = useState<IUser | null>(null)

  return (
    <>
      <Header />
      <div className="app container">
          <div className="sidebar">
            <Input />
            <UserList users={users} activeUser={activeUser} setActiveUser={setActiveUser} />
          </div>
          <Main activeUser={activeUser} />
      </div>
    </>
  )
}

export default App