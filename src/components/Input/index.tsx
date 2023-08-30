import Icon from '../Icon';
import React, { useState } from 'react';

const Input = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="input">
      {toggle ?
      <>
        <input className="input__search" type="text" />
        <Icon name='search' className='input__icon' />
        <button className="button button-input" onClick={handleOnClick}>
          <Icon name='cancel' />
        </button>
      </> :
      <>
        <button className="button button-input" onClick={handleOnClick}>
          <Icon name='search' />
        </button>
        <div className="input__actions">
          <button className="button button-input">
            <Icon name='filter' />
          </button>
          <button className="button button-input">
            <Icon name='add' />
          </button>
        </div>
      </>}
    </div>
  )
}

export default Input;
