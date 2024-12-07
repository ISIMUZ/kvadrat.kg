import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { createTrelloCard } from '@utils/trelloService';
import Modal from '@components/ui/modal/Modal';

import './Counseling.scss';

const Counseling = () => {
  const { t } = useTranslation();
  const [userApplication, setUserApplication] = useState({
    name: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateFields = () => {
    const newErrors = {};

    if (!userApplication.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    const phoneRegex = /^\d{10,}$/;
    if (!userApplication.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Введите номер телефона';
    } else if (!phoneRegex.test(userApplication.phoneNumber)) {
      newErrors.phoneNumber = 'Номер телефона должен содержать минимум 10 цифр';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateCard = async (event) => {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    try {
      await createTrelloCard(userApplication.name, userApplication.phoneNumber);
      console.log('Заявка успешно отправлена.');
      setUserApplication({ name: '', phoneNumber: '' });
      setIsModalOpen(true);
    } catch (error) {
      console.error('Ошибка при создании карточки:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (userApplication.name || userApplication.phoneNumber) {
      setErrors({ name: '', phoneNumber: '' });
    }
  }, [userApplication]);

  return (
    <section className='counseling'>
      <div className='counseling-content'>
        <h2 className='counseling-content__title'>{t('counseling')}</h2>
        <form className='counseling-content-form' onSubmit={handleCreateCard}>
          <div className='counseling-content-form-group'>
            <input
              id='name'
              type='text'
              className={`counseling-content-form-group__inp ${errors.name ? 'error' : ''}`}
              placeholder='Имя'
              value={userApplication.name}
              onChange={(e) =>
                setUserApplication({
                  ...userApplication,
                  name: e.target.value,
                })
              }
            />
            {errors.name && <span className='error-tooltip'>{errors.name}</span>}
          </div>

          <div className='counseling-content-form-group'>
            <input
              id='phoneNumber'
              type='text'
              className={`counseling-content-form-group__inp ${errors.phoneNumber ? 'error' : ''}`}
              placeholder='Номер телефона'
              value={userApplication.phoneNumber}
              onChange={(e) =>
                setUserApplication({
                  ...userApplication,
                  phoneNumber: e.target.value.replace(/[^0-9]/g, ''), // Убираем все нецифровые символы
                })
              }
            />
            {errors.phoneNumber && <span className='error-tooltip'>{errors.phoneNumber}</span>}
          </div>

          <button className='counseling-content-form-group__btn'>
            <span>{t('send')}</span>
          </button>
        </form>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default Counseling;
