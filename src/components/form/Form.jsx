import React, { useState } from 'react'

import { createTrelloCard } from '@utils/trelloService';
import Modal from './../ui/modal/Modal'
import Btn from './../ui/btn/Btn'

import './Form.scss'

const Form = () => {
	const [userApplication, setUserApplication] = useState({
		name: '',
		phoneNumber: '',
	})

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [errors, setErrors] = useState({ name: '', phoneNumber: '' })

	const validateFields = () => {
		const newErrors = {
			name: userApplication.name.trim() ? '' : 'Введите ваше имя',
			phoneNumber: userApplication.phoneNumber.trim()
				? ''
				: 'Введите номер телефона',
		}
		setErrors(newErrors)
		return !newErrors.name && !newErrors.phoneNumber
	}

	const handleCreateCard = async () => {
		if (!validateFields()) {
			return
		}

		try {
			await createTrelloCard(userApplication.name, userApplication.phoneNumber)
			console.log('Заявка успешно отправлена.')
		} catch (error) {
			console.error('Ошибка при создании карточки:', error)
		} finally {
			setUserApplication({ name: '', phoneNumber: '' })
			setIsModalOpen(true)
		}
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
	return (
		<div className='modal'>
			<div className='modal-text'>
				<h4 className='modal-text__suptitle'>Обратный звонок</h4>
				<h4 className='modal-text__desc'>
					Оставьте заявку и мы перезвоним вам!
				</h4>
			</div>
			<form className='modal-form' onSubmit={handleSubmit}>
				<input
					type='text'
					className={`modal-form__inp ${errors.name ? 'error' : ''}`}
					placeholder='Ваше имя'
					value={userApplication.name}
					onChange={(e) => {
						setUserApplication({
							...userApplication,
							name: e.target.value,
						})
						if (errors.name) {
							setErrors({ ...errors, name: '' })
						}
					}}
				/>
				{errors.name && (
					<span
						style={{ top: '155px' }}
						className='error-message'
					>
						{errors.name}
					</span>
				)}
				<input
					className={`modal-form__inp ${errors.phoneNumber ? 'error' : ''}`}
					placeholder='Ваш номер телефона'
					value={userApplication.phoneNumber}
					onChange={(e) => {
						setUserApplication({
							...userApplication,
							phoneNumber: e.target.value.replace(/[^0-9]/g, ''),
						})
						if (errors.phoneNumber) {
							setErrors({ ...errors, phoneNumber: '' })
						}
					}}
				/>
				{errors.phoneNumber && (
					<span
						style={{ top: '215px' }}
						className='error-message'
					>
						{errors.phoneNumber}
					</span>
				)}
				<Btn
					style={{ marginTop: '15px' }}
					type='submit'
					onClick={handleCreateCard}
				/>
			</form>
			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
}

export default Form
