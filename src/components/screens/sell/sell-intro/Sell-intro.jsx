import React, { useState } from 'react'

import { createTrelloCard } from '@utils/trelloService';
import Modal from '@components/ui/modal/Modal'
import Btn from '@components/ui/btn/Btn'

import './Sell-Intro.scss'

const SellIntro = ({title, suptitle, reasons1, reasons2, reasons3, reasons4}) => {
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

	return (
		<section className='sell-intro'>
			<div className='sell-intro-content-text'>
				<h2 className='sell-intro-content-text__title'>
					{title}
				</h2>
				<h2 className='sell-intro-content-text__suptitle'>
					{suptitle}
				</h2>
				<ul>
					<li className='sell-intro-content-text__reasons'>
						1. {reasons1}
					</li>
					<li className='sell-intro-content-text__reasons'>
						2. {reasons2}
					</li>
					<li className='sell-intro-content-text__reasons'>
						3. {reasons3}
					</li>
					<li className='sell-intro-content-text__reasons'>
						4. {reasons4}
					</li>
				</ul>
			</div>
			<div className='sell-intro-content-modal'>
				<div className='sell-intro-content-modal-text'>
					<h4 className='sell-intro-content-modal-text__suptitle'>
						Обратный звонок
					</h4>
					<h4 className='sell-intro-content-modal-text__desc'>
						Оставьте заявку и мы перезвоним вам!
					</h4>
				</div>
				<div className='sell-intro-content-modal-form'>
					<input
						type='text'
						className={`sell-intro-content-modal-form__inp ${
							errors.name ? 'error' : ''
						}`}
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
							style={{ position: 'absolute', top: '150px' }}
							className='error-message'
						>
							{errors.name}
						</span>
					)}
					<input
						className={`sell-intro-content-modal-form__inp ${
							errors.phoneNumber ? 'error' : ''
						}`}
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
							style={{ position: 'absolute', top: '210px' }}
							className='error-message'
						>
							{errors.phoneNumber}
						</span>
					)}
					<Btn
						style={{ marginTop: '15px' }}
						type='submit'
						
					/>
				</div>
				<Modal isOpen={isModalOpen} onClose={closeModal} />
			</div>
		</section>
	)
}

export default SellIntro
