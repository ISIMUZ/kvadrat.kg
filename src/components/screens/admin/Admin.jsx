import React, { useState, useEffect } from 'react'

import './Admin.scss'

const Admin = ({ onLogout }) => {
	const [activeSection, setActiveSection] = useState('add')
	const [selectedType, setSelectedType] = useState('')
	const [districts, setDistricts] = useState([])
	const [series, setSeries] = useState([])
	const [commercialTypes, setCommercialTypes] = useState([])
	const [purposes, setPurposes] = useState([])

	useEffect(() => {
		fetch('http://localhost:8081/api/districts')
			.then((response) => response.json())
			.then((data) => setDistricts(data))
			.catch((error) => console.error('Ошибка при загрузке районов:', error))

		fetch('http://localhost:8081/api/series')
			.then((response) => response.json())
			.then((data) => setSeries(data))
			.catch((error) => console.error('Ошибка при загрузке серий:', error))

		fetch('http://localhost:8081/api/commercial-types')
			.then((response) => response.json())
			.then((data) => setCommercialTypes(data))
			.catch((error) =>
				console.error('Ошибка при загрузке типов коммерции:', error)
			)

		fetch('http://localhost:8081/api/purposes')
			.then((response) => response.json())
			.then((data) => setPurposes(data))
			.catch((error) => console.error('Ошибка при загрузке назначений:', error))
	}, [])

	const handleSectionChange = (section) => {
		setActiveSection(section)
		if (section !== 'add') {
			setSelectedType('')
		}
	}

	const handleTypeChange = (event) => {
		setSelectedType(event.target.value)
	}

	const handleFormSubmit = async (e) => {
		e.preventDefault()

		let apiUrl = ''
		switch (selectedType) {
			case 'apartment':
				apiUrl = 'http://localhost:8081/api/apartments'
				break
			case 'house':
				apiUrl = 'http://localhost:8081/api/houses'
				break
			case 'land':
				apiUrl = 'http://localhost:8081/api/lands'
				break
			case 'commercial':
				apiUrl = 'http://localhost:8081/api/commercials'
				break
			default:
				alert('Выберите корректный тип объекта.')
				return
		}

		const formData = new FormData(e.target)
		const payload = Object.fromEntries(formData.entries())

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})

			if (response.ok) {
				alert('Объект успешно добавлен!')
				e.target.reset()
				setSelectedType('')
			} else {
				const errorData = await response.json()
				alert(`Ошибка: ${errorData.message || 'Не удалось добавить объект'}`)
			}
		} catch (error) {
			alert('Ошибка подключения к серверу. Попробуйте позже.')
		}
	}

	const renderFieldsByType = () => {
		switch (selectedType) {
			case 'apartment':
				return (
					<>
						<label>
							Заголовок:
							<input name='title' type='text' placeholder='Введите заголовок' />
						</label>
						<label>
							ID:
							<input name='id' type='text' placeholder='Введите ID' />
						</label>
						<label>
							Серия:
							<select name='series'>
								<option value='' disabled>
									Выберите серию
								</option>
								{series.map((s) => (
									<option key={s.id} value={s.name}>
										{s.name}
									</option>
								))}
							</select>
						</label>
						<label>
							Этаж:
							<input name='floor' type='number' placeholder='Введите этаж' />
						</label>
						<label>
							Этажность:
							<input
								name='totalFloors'
								type='number'
								placeholder='Введите этажность'
							/>
						</label>
						<label>
							Цена:
							<input name='price' type='number' placeholder='Введите цену' />
						</label>
						<label>
							Общая площадь (м²):
							<input
								name='area'
								type='number'
								placeholder='Введите общую площадь'
							/>
						</label>
						<label>
							Кол-во комнат:
							<input
								name='rooms'
								type='number'
								placeholder='Введите количество комнат'
							/>
						</label>
						<label>
							Коммуникации:
							<textarea
								name='communications'
								placeholder='Введите описание коммуникаций'
							/>
						</label>
						<label>
							Район:
							<select name='district'>
								<option value='' disabled>
									Выберите район
								</option>
								{districts.map((d) => (
									<option key={d.id} value={d.name}>
										{d.name}
									</option>
								))}
							</select>
						</label>
						<label>
							Описание:
							<textarea name='description' placeholder='Введите описание' />
						</label>
						<label>
							Загрузить фотографии:
							<input name='images' type='file' multiple accept='image/*' />
						</label>
					</>
				)
			case 'house':
				return (
					<>
						<label>
							Заголовок:
							<input name='title' type='text' placeholder='Введите заголовок' />
						</label>
						<label>
							ID:
							<input name='id' type='text' placeholder='Введите ID объекта' />
						</label>
						<label>
							Общая площадь дома (м²):
							<input
								name='houseArea'
								type='number'
								placeholder='Введите общую площадь дома'
							/>
						</label>
						<label>
							Общая площадь участка (сотки):
							<input
								name='landArea'
								type='number'
								placeholder='Введите площадь участка'
							/>
						</label>
						<label>
							Этаж:
							<input name='floor' type='number' placeholder='Введите этаж' />
						</label>
						<label>
							Этажность:
							<input
								name='totalFloors'
								type='number'
								placeholder='Введите этажность'
							/>
						</label>
						<label>
							Цена:
							<input name='price' type='number' placeholder='Введите цену' />
						</label>
						<label>
							Кол-во комнат:
							<input
								name='rooms'
								type='number'
								placeholder='Введите количество комнат'
							/>
						</label>
						<label>
							Коммуникации:
							<textarea
								name='communications'
								placeholder='Введите описание коммуникаций'
							/>
						</label>
						<label>
							Район:
							<select name='district'>
								<option value='' disabled>
									Выберите район
								</option>
								{districts.map((d) => (
									<option key={d.id} value={d.name}>
										{d.name}
									</option>
								))}
							</select>
						</label>
						<label>
							Описание:
							<textarea name='description' placeholder='Введите описание' />
						</label>
						<label>
							Загрузить фотографии:
							<input name='images' type='file' multiple accept='image/*' />
						</label>
					</>
				)
			case 'land':
				return (
					<>
						<label>
							Назначение:
							<select name='purpose'>
								<option value='' disabled>
									Выберите назначение
								</option>
								{purposes.map((p) => (
									<option key={p.id} value={p.name}>
										{p.name}
									</option>
								))}
							</select>
						</label>
						<label>
							Общая площадь участка (сотки):
							<input
								name='landArea'
								type='number'
								placeholder='Введите площадь участка'
							/>
						</label>
						<label>
							Цена:
							<input name='price' type='number' placeholder='Введите цену' />
						</label>
						<label>
							Район:
							<select name='district'>
								<option value='' disabled>
									Выберите район
								</option>
								{districts.map((d) => (
									<option key={d.id} value={d.name}>
										{d.name}
									</option>
								))}
							</select>
						</label>
						<label>
							Описание:
							<textarea name='description' placeholder='Введите описание' />
						</label>
						<label>
							Загрузить фотографии:
							<input name='images' type='file' multiple accept='image/*' />
						</label>
					</>
				)
			case 'commercial':
				return (
					<>
						<label>
							Тип коммерции:
							<select name='commercialType'>
								<option value='' disabled>
									Выберите тип
								</option>
								{commercialTypes.map((c) => (
									<option key={c.id} value={c.name}>
										{c.name}
									</option>
								))}
							</select>
						</label>
						<label>
							Общая площадь (м²):
							<input
								name='area'
								type='number'
								placeholder='Введите общую площадь'
							/>
						</label>
						<label>
							Цена:
							<input name='price' type='number' placeholder='Введите цену' />
						</label>
						<label>
							Район:
							<select name='district'>
								<option value='' disabled>
									Выберите район
								</option>
								{districts.map((d) => (
									<option key={d.id} value={d.name}>
										{d.name}
									</option>
								))}
							</select>
						</label>
						<label>
							Описание:
							<textarea name='description' placeholder='Введите описание' />
						</label>
						<label>
							Загрузить фотографии:
							<input name='images' type='file' multiple accept='image/*' />
						</label>
					</>
				)
			default:
				return null
		}
	}

	return (
		<div className='admin'>
			<aside className='admin-sidebar'>
				<ul className='admin-sidebar-menu'>
					<li
						className={activeSection === 'add' ? 'active' : ''}
						onClick={() => handleSectionChange('add')}
					>
						Добавить объект
					</li>
					<li
						className={activeSection === 'manage' ? 'active' : ''}
						onClick={() => handleSectionChange('manage')}
					>
						Управление объектами
					</li>
					<li
						className={activeSection === 'settings' ? 'active' : ''}
						onClick={() => handleSectionChange('settings')}
					>
						Настройки
					</li>
				</ul>
				<button className='admin-logout-btn' onClick={onLogout}>
					Выйти
				</button>
			</aside>

			<main className='admin-content'>
				{activeSection === 'add' && (
					<div className='admin-section'>
						<h1>Добавить новый объект</h1>
						<form className='add-object-form' onSubmit={handleFormSubmit}>
							<label>
								Выберите тип объекта:
								<select value={selectedType} onChange={handleTypeChange}>
									<option value='' disabled>
										-- Выберите тип --
									</option>
									<option value='apartment'>Квартира</option>
									<option value='house'>Дом</option>
									<option value='land'>Участок</option>
									<option value='commercial'>Коммерция</option>
								</select>
							</label>
							{selectedType && renderFieldsByType()}
							{selectedType && <button type='submit'>Добавить объект</button>}
						</form>
					</div>
				)}
				{activeSection === 'manage' && <h1>Управление объектами</h1>}
				{activeSection === 'settings' && <h1>Настройки</h1>}
			</main>
		</div>
	)
}

export default Admin
