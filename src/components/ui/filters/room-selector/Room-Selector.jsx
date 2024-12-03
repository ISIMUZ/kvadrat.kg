import React from 'react';
import { useTranslation } from 'react-i18next';

import './Room-Selector.scss';

const RoomSelector = ({ rooms, setRooms }) => {
  const { t } = useTranslation()

  const toggleRoom = (count) => {
    if (Array.isArray(rooms) && rooms.includes(count)) {
      setRooms(rooms.filter((room) => room !== count));
    } else {
      setRooms([...(rooms || []), count]);
    }
  };

  return (
    <div className='filter-room'>
      <label className='filter-room__title'>{t('count')}</label>
      <div className='filter-room__btn'>
        {[1, 2, 3, 4, 5].map((count) => (
          <button
            key={count}
            onClick={() => toggleRoom(count)}
            className={Array.isArray(rooms) && rooms.includes(count) ? 'active' : ''}
          >
            {count === 5 ? '5+' : count}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomSelector;
