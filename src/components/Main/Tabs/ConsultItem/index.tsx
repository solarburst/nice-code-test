import React from 'react'
import { Consult, IConsult } from '../../../../mock/mock';
import Icon from '../../../Icon';

interface IConsultItem {
    consult: IConsult;
}

const ConsultItem = ({ consult }: IConsultItem) => {
  return (
    <div className="consult">
        {consult.type === Consult.ONLINE ? <Icon name='online' /> : <Icon name='offline' />}
        <div className="consult__info">
            <p className="consult__info-name">{consult.name}</p>
            <p className="consult__info-date">{consult.date}
                {consult.confirmed ? <></> : <span className="consult__info-confirm">Не подтверждена</span>}
            </p>
        </div>
    </div>
  )
}

export default ConsultItem;
