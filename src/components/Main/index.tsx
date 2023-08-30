import React from 'react'
import { IUser } from '../../mock/mock';
import Panel from './Panel';
import Tabs from './Tabs';

interface IMain {
    activeUser: IUser | null;
}

const Main = ({ activeUser }: IMain) => {
  return (
    <>
        {activeUser ? 
            <div className="main">
                <Panel activeUser={activeUser} />
                <Tabs activeUser={activeUser} />
            </div> :
            <></>
        }
    </>
  )
}

export default Main;
